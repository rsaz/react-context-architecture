/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ChildrenNode } from "../utils/const.global";
import { Register } from "./register";
import { ContextValues, createProvider } from "./contextTypes";

export const AppProvider = ({ children }: ChildrenNode) => {
    const [text, setText] = React.useState("");
    const [color, setColor] = React.useState("");

    // Memoize the context values to avoid re-rendering
    const contextValues: ContextValues = React.useMemo(
        () => ({
            ButtonContext: {
                text,
                setText,
            },
            TextContext: {
                color,
                setColor,
            },
        }),
        [text, color]
    );

    const providerHierarchy = React.useMemo(() => {
        return Object.keys(Register.Context.Contexts).reduce<React.ReactNode>(
            (providers, contextName) => {
                const Context = Register.Context.getContext(contextName);
                const value = contextValues[contextName];
                const Provider = createProvider(Context, value, contextName);
                return <Provider>{providers}</Provider>;
            },
            children
        );
    }, [contextValues, children]);

    return <>{providerHierarchy}</>;
};
