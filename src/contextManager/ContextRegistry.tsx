/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export class ContextRegistry {
    private contexts: Record<string, React.Context<any>> = {};

    register<T>(name: string, context: React.Context<T>) {
        this.contexts[name] = context;
    }

    unregister(name: string) {
        if (!this.contexts[name]) throw new Error(`Context ${name} not found`);
        delete this.contexts[name];
    }

    getContext<T>(name: string): React.Context<T> {
        const context = this.contexts[name];
        if (!context) throw new Error(`Context ${name} not found`);
        return context;
    }

    get Contexts(): Record<string, React.Context<any>> {
        return this.contexts;
    }
}
