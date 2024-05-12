/* Performance Considerations for Context Providers approach */

/*
 * [Memory Usage]: useSelectiveContext might be more memory-efficient in scenarios where the context
 * holds large amounts of data not pertinent to all observing components. By fetching and
 * subscribing only to necessary parts, it avoids unnecessary memory usage for unused data.
 */

/* [CPU Usage]: The computation to extract parts of the context in useSelectiveContext is minimal
 * but non-zero. In applications where context values change extremely frequently but subscribers
 * only care about a small part of the changes, this could still be more efficient than re-rendering with full context data.
 */

/* [Best Use Case]: useSelectiveContext is ideally used in large-scale applications where:
 * - Contexts are large or complex.
 * - Different parts of the application care about different slices of the context data.
 * - Efficiency and performance are critical, and minimizing re-renders can lead to noticeable improvements in responsiveness and performance.
 */

/* [Final Thoughts]:
 * The choice between useAppContext and useSelectiveContext depends heavily on the specific
 * requirements and scale of your application. For small to medium-sized apps,
 * the simplicity of useAppContext might outweigh the benefits provided by useSelectiveContext.
 * However, for larger applications or those with highly dynamic context objects where only
 * certain parts of the context are relevant to many components, useSelectiveContext offers a
 * performance optimization by reducing unnecessary re-renders.
 */

import React from "react";
import { Register } from "./Register";

/*
 * This hook will handle subscribing to the context and ensure that the component
 * only re-renders when the specified parts of the context change.
 */
export function useSelectiveContext<T, K extends keyof T>(
    contextName: string,
    selectors: K[]
): Pick<T, K> {
    const Context = Register.Context.getContext<React.Context<T>>(contextName);
    const fullContext = React.useContext(Context) as T;

    if (!fullContext) {
        throw new Error(`useSelectiveContext must be used within a ${contextName}Provider`);
    }

    const selectedContext = React.useMemo(() => {
        const selected: Partial<T> = {};
        selectors.forEach((key) => {
            selected[key] = fullContext[key];
        });
        return selected as Pick<T, K>;
    }, [fullContext, selectors]);

    return selectedContext;
}

/*
 * This hook will handle getting the full context object.
 */
export function useAppContext<T>(contextName: string): T {
    const Context = Register.Context.getContext<T>(contextName);
    const context = React.useContext(Context);
    if (!context) throw new Error(`use${contextName} must be used within a ${contextName}Provider`);
    return context;
}
