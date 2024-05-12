/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ChildrenNode } from "../utils/const.global";
import { Register } from "../Register";

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext<T>(contextName: string): T {
    const Context = Register.Context.getContext<T>(contextName);
    const context = React.useContext(Context);
    if (!context) throw new Error(`use${contextName} must be used within a ${contextName}Provider`);
    return context;
}

export const AppProvider = ({ children }: ChildrenNode) => {
    const [text, setText] = React.useState("");
    const [color, setColor] = React.useState("");

    // Memoize the context values to avoid re-rendering
    const contextValues = React.useMemo(
        () => ({
            buttonContext: {
                text,
                setText,
            },
            textContext: {
                color,
                setColor,
            },
        }),
        [text, color]
    );

    return Object.keys(Register.Context.Contexts).reduce((provider, contextName) => {
        const Context = Register.Context.getContext(contextName);
        const value = contextValues[contextName as keyof typeof contextValues]; // Add index signature
        return <Context.Provider value={value}>{provider}</Context.Provider>;
    }, children);
};
