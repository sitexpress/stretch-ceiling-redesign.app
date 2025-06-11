import {ChangeEvent,KeyboardEvent} from "react";
export const blockInvalidInputChar = (e:KeyboardEvent<HTMLInputElement>) => [
    'e', 'E', '+', '-', '.', ','
].includes(e.key) && e.preventDefault();
