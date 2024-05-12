/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { contextRegistry } from "../utils/context-registry";
import { ChildrenNode } from "../utils/const.global";
import { ButtonContext } from "../context/button.context";
import { TextContext } from "../context/text.context";

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext<T>(contextName: string): T {
    const Context = contextRegistry.getContext<T>(contextName);
    const context = React.useContext(Context);
    if (!context) throw new Error(`use${contextName} must be used within a ${contextName}Provider`);
    return context;
}

export const AppProvider = ({ children }: ChildrenNode) => {
    const [text, setText] = React.useState("");
    const [color, setColor] = React.useState("");

    /* Register all contexts here */
    contextRegistry.register("buttonContext", ButtonContext);
    contextRegistry.register("textContext", TextContext);

    const contextValues: Record<string, any> = {
        buttonContext: {
            text,
            setText,
        },
        textContext: {
            color,
            setColor,
        },
    };

    return Object.keys(contextRegistry.Contexts).reduce((provider, contextName) => {
        const Context = contextRegistry.getContext(contextName);
        const value = contextValues[contextName];
        return <Context.Provider value={value}>{provider}</Context.Provider>;
    }, children);
};
