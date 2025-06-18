import axios from "axios";

const baseUrl = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_API_KEY_BOT}/`;

export const sendMessage = async (
    line1: string,
    line2: string,
    line3: string,
    line4: string,
    line5: string,
    line6: string,
    line7: string,
    line8: string
): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHANEL_CALL_BACK_ID}&text=%0A${line1}%0A${line2}%0A${line3}%0A${line4}%0A${line5}%0A${line6}%0A${line7}%0A${line8}`;
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();

        await Promise.reject(error.description || "Что-то пошло не так ...");
    }
};

export const sendMessageMeasurer = async (
    line1: string,
    line2: string,
    line3: string,
    line4: string,
    line5: string,
    line6: string,
    line7: string,
    line8: string
): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHANEL_ZAMER_ID}&text=%0A${line1}%0A${line2}%0A${line3}%0A${line4}%0A${line5}%0A${line6}%0A${line7}%0A${line8}`;
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();

        await Promise.reject(error.description || "Что-то пошло не так ...");
    }
};

export const sendMessagePismo = async (
    line1: string,
    line2: string,
    line3: string,
    line4: string,
    line5: string,
    line6: string,
    line7: string,
    line8: string
): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHANEL_PISMO}&text=%0A${line1}%0A${line2}%0A${line3}%0A${line4}%0A${line5}%0A${line6}%0A${line7}%0A${line8}`;
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();

        await Promise.reject(error.description || "Что-то пошло не так ...");
    }
};

export const sendMessageCalculations = async (
    line1: string,
    line2: string,
    line3: string,
    line4: string,
    line5: string,
    line6: string,
    line7: string,
    line8: string,
    // line7: React.JSX.Element
    line9: File | string
): Promise<void> => {
    console.log("typeof line7: ", typeof line7);
    const url1 = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHANEL_CALCULATIONS}&text=%0A${line1}%0A${line2}%0A${line3}%0A${line4}%0A${line5}%0A${line6}%0A${line7}%0A${line8}`;
    const url2 = `${baseUrl}sendDocument`;

    const formData = new FormData();
    // @ts-expect-error - this is work
    formData.append("chat_id", process.env.NEXT_PUBLIC_CHANEL_CALCULATIONS); // Replace with your chat ID
    formData.append("document", line9);

    axios
        .post(url1)
        .then(function (response) {
            console.log("Response good:", response.data);
        })
        .catch(function (error) {
            if (error.response) {
                console.log("response Error: ", error);
            } else if (error.request) {
                console.log("request Error: ", error.request);
            } else {
                console.log("Error in setting up the request:", error.message);
            }
            console.log(error.config);
        });

    axios
        .post(url2, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            console.log("Response good:", response.data);
        })
        .catch(function (error) {
            if (error.response) {
                console.log("response Error: ", error);
            } else if (error.request) {
                console.log("request Error: ", error.request);
            } else {
                console.log("Error in setting up the request:", error.message);
            }
            console.log(error.config);
        });

    // if (!response1.ok) {
    //     const error = await response1.json();
    //     await Promise.reject(error.description || "Что-то пошло не так ...");
    // }

    // if (!response2.ok) {
    //     const error = await response2.json();
    //     await Promise.reject(error.description || "Что-то пошло не так ...");
    // }
};

export const sendMessageOffer = async (
    line1: string,
    line2: string,
    line3: string,
    line4: string,
    line5: string,
    line6: string,
    line7: string,
    line8: string,
    line9: string,
    line10: string | number,
    line11: string | number,
    line12: string,
    line13: string
): Promise<void> => {
   const url = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHANEL_CALCULATIONS}&text=%0A${line1}%0A${line2}%0A${line3}%0A${line4}%0A${line5}%0A${line6}%0A${line7}%0A${line8}%0A${line9}%0A${line10}%0A${line11}%0A${line12}%0A${line13}`;
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();

        await Promise.reject(error.description || "Что-то пошло не так ...");
    }
};

export const sendMessageWant = async (
    line1: string,
    line2: string,
    line3: string,
    line4: string,
    line5: string,
    line6: string,
    line7: string,
    line8: string
): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=${process.env.NEXT_PUBLIC_CHANEL_CALL_BACK_ID}&text=%0A${line1}%0A${line2}%0A${line3}%0A${line4}%0A${line5}%0A${line6}%0A${line7}%0A${line8}`;
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();

        await Promise.reject(error.description || "Что-то пошло не так ...");
    }
};
