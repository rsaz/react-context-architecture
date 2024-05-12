import React from "react";
import { useAppContext } from "../../providers/app.provider";
import { TextContextType } from "../../context/text.context";

export default function Input() {
    const { color } = useAppContext<TextContextType>("textContext");
    return <input type="text" style={{ background: color }} />;
}
