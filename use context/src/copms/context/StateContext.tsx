import { createContext } from "react";

type typeState = {
    state: string,
    setState: (value: string) => void; 
}

export const ChangeState = createContext<typeState | null>(null);
