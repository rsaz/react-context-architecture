/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

class ContextRegistry {
    private contexts: Record<string, React.Context<any>>;

    constructor() {
        this.contexts = {};
    }

    register<T>(name: string, context: React.Context<T>) {
        this.contexts[name] = context;
    }

    unregister(name: string) {
        delete this.contexts[name];
    }

    getContext<T>(name: string): React.Context<T> {
        if (!this.contexts[name]) throw new Error(`Context ${name} not found`);
        return this.contexts[name];
    }

    get Contexts(): Record<string, React.Context<any>> {
        return this.contexts;
    }
}

export const contextRegistry = new ContextRegistry();
