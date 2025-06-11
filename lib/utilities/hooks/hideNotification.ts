import { changeNotification } from "@/store/client-session-calculations-slice";
import { AppDispatch } from "@/store/store-persist";

export const hideNotification = (dispatch: AppDispatch) => {
    setTimeout(() => {
        dispatch(changeNotification(false));
    }, 5000);
};
