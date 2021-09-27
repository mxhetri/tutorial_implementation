import {combineReducers} from "redux";
import {accounting, cancellationHistory, reservationHistory} from "./railway_booking/RailWayReducer";
import {productReducer} from "./fakeShop/FakeShopReducers";

export  const rootReducer = combineReducers({
    reservationHistory: reservationHistory,
    cancellationHistory: cancellationHistory,
    accounting: accounting,
    allProducts: productReducer
})