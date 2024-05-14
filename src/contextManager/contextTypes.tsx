import React from "react";

/*
 * This interface defines the shape of the context values object.
 */
export interface ContextValues {
    [key: string]: {
        text?: string;
        setText?: React.Dispatch<React.SetStateAction<string>>;
        color?: string;
        setColor?: React.Dispatch<React.SetStateAction<string>>;
    };
}

/*
 * This interface defines the shape of the provider props.
 */
export interface ProviderProps {
    children: React.ReactNode;
}

// Helper function to create providers for each context
export const createProvider = <T,>(Context: React.Context<T>, value: T, contextName: string) => {
    const ProviderComponent: React.FC<ProviderProps> = React.memo(({ children }: ProviderProps) => (
        <Context.Provider value={value}>{children}</Context.Provider>
    ));

    ProviderComponent.displayName = `${contextName}Provider`;
    return ProviderComponent;
};
