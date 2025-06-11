import {changeNotification} from "@/store/client-session-calculations-slice";
import {AppDispatch} from "@/store/store-persist";
export const showNotification = (dispatch:AppDispatch) => {
    dispatch(changeNotification(true))
}
