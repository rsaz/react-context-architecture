import { TextContextType } from "../../context/text.context";
import { useAppContext } from "../../contextManager/hooks";

export default function Input() {
    const { color } = useAppContext<TextContextType>("TextContext");
    return <input type="text" style={{ background: color }} />;
}
