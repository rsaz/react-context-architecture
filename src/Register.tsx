import { ButtonContext } from "./context/button.context";
import { TextContext } from "./context/text.context";
import { ContextRegistry } from "./utils/context-registry";

export class Register {
    private static context: ContextRegistry;
    static init() {
        this.context = new ContextRegistry();
        this.registerContexts();
    }

    private static registerContexts() {
        /* Register all contexts here */
        this.context.register("buttonContext", ButtonContext);
        this.context.register("textContext", TextContext);
    }

    static get Context() {
        return this.context;
    }
}
