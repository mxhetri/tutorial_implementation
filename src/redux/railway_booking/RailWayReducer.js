import {BOOKING_TICKET, CANCEL_TICKET} from "./RailWayTypes";


const oldReservationList = [
    {
        id: 1,
        name: 'delux',
        price: 20
    }
]
export const reservationHistory = (state=oldReservationList, action ) =>{
    switch (action.type){
        case BOOKING_TICKET: return(
            [...state, action.payload]
        )
        case CANCEL_TICKET: return (
            state.filter(record => {
                return  record !== action.payload.name;
            })
        )
        default: return state
    }
}

export const cancellationHistory = (state=oldReservationList, action) => {
    switch (action.type){
        case CANCEL_TICKET: return (
            [...state, action.payload]
        )
        default: return state;
    }
}


export const accounting = (totalMoney=100, action) => {
    switch (action.type){
        case CANCEL_TICKET: return(
            totalMoney = totalMoney - action.payload.refundAmount
        )

        case BOOKING_TICKET: return (
            totalMoney = totalMoney + action.payload.amount
        )

        default: return totalMoney;
    }

}