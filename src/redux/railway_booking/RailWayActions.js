import {BOOKING_TICKET, CANCEL_TICKET} from "./RailWayTypes";

export const bookingTicket = (name, amount) => {
    return({
        type: BOOKING_TICKET,
        payload: {
            name: name,
            amount: amount
        }
    });
}

export const cancelTicket = (name, refundAmount) => {
    return({
        type: CANCEL_TICKET,
        payload: {
            name: name,
            refundAmount: refundAmount
        }
    })
}