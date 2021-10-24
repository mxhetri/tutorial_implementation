import {createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {bookingTicket} from "./railway_booking/RailWayActions";

const store = createStore(rootReducer, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
