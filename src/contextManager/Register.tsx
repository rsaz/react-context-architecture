import { ButtonContext } from "../context/button.context";
import { TextContext } from "../context/text.context";
import { ContextRegistry } from "./ContextRegistry";

/*
 * Register all contexts here
 * @class Register
 * @method init - Initialize the context registry
 * @method registerContexts - Register all contexts
 */
export class Register {
    private static context: ContextRegistry;
    static init() {
        this.context = new ContextRegistry();
        this.registerContexts();
    }

    private static registerContexts() {
        /* Register all contexts here */
        this.context.register("ButtonContext", ButtonContext);
        this.context.register("TextContext", TextContext);
    }

    static get Context() {
        return this.context;
    }
}
