export {};
declare global {
    interface Window {
        ym: (
            counterId: string | number,
            event: string,
            ...args: unknown[]
        ) => void;
    }
}