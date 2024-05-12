import React from "react";
import { ChildrenNode } from "../utils/const.global";

export interface ButtonContextType {
    text: string;
    setText: (text: string) => void;
}

export const ButtonContext = React.createContext<ButtonContextType | undefined>(undefined);

export function ButtonProvider({ children }: ChildrenNode) {
    const [text, setText] = React.useState("");

    return <ButtonContext.Provider value={{ text, setText }}>{children}</ButtonContext.Provider>;
}
