import { TextContextType } from "../../context/text.context";
import { useAppContext } from "../../contextManager/ContextManager";

export default function Input() {
    const { color } = useAppContext<TextContextType>("TextContext");
    return <input type="text" style={{ background: color }} />;
}
