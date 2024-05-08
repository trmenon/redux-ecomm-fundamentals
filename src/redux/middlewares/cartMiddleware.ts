import { Middleware } from 'redux';
import { RootState} from "../store";
import { decrementItemByNumber, incrementItemByNumber } from "../slices/list-slice";

const cartMiddleware: Middleware<{}, RootState> = store => next=> (action: any) => {
    if(action.type === "cart/construct") {
        store.dispatch(decrementItemByNumber({count: 1, itemId: action.payload}));
    }
    if(action.type === "cart/destruct") {
        store.dispatch(incrementItemByNumber({count: 1, itemId: action.payload}));
    }
    if(action.type === "cart/increment") {
        store.dispatch(decrementItemByNumber({count: 1, itemId: action.payload}));
    }
    if(action.type === "cart/decrement") {
        store.dispatch(incrementItemByNumber({count: 1, itemId: action.payload}));
    }
    return next(action);
}

export default cartMiddleware;