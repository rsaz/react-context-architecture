import React from "react";
import { ChildrenNode } from "../utils/const.global";

export interface TextContextType {
    color: string;
    setColor: (color: string) => void;
}

export const TextContext = React.createContext<TextContextType | undefined>(undefined);

export function TextProvider({ children }: ChildrenNode) {
    const [color, setColor] = React.useState("");
    return <TextContext.Provider value={{ color, setColor }}>{children}</TextContext.Provider>;
}
