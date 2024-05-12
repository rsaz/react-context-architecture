/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ChildrenNode } from "../utils/const.global";
import { Register } from "./Register";

interface ContextValues {
    [key: string]: {
        text?: string;
        setText?: React.Dispatch<React.SetStateAction<string>>;
        color?: string;
        setColor?: React.Dispatch<React.SetStateAction<string>>;
    };
}

// Helper function to create providers for each context
const createProvider = (Context: React.Context<any>, value: any, contextName: string) => {
    const ProviderComponent = ({ children }: ChildrenNode) => (
        <Context.Provider value={value}>{children}</Context.Provider>
    );

    ProviderComponent.displayName = `${contextName}Provider`;
    return ProviderComponent;
};

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

    // Dynamically wrap children with context providers
    const providerHierarchy = Object.keys(Register.Context.Contexts).reduce(
        (providers, contextName) => {
            const Context = Register.Context.getContext(contextName);
            const value = contextValues[contextName];
            const Provider = createProvider(Context, value, contextName); // Fix: Pass contextName instead of contextValues[contextName]
            return <Provider>{providers}</Provider>;
        },
        children
    );

    return providerHierarchy;
};
