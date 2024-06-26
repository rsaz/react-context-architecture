import React from "react";
import { ButtonContextType } from "../../context/button.context";
import { TextContextType } from "../../context/text.context";
import { useSelectiveContext } from "../../contextManager/hooks";
import { Type } from "./button.constant";
import "./button.style.scss";

interface ButtonStyle {
    id?: string;
    name: string;
    type: Type;
    color?: string;
    event?: () => void;
}

export default function Button({ id, name, type, event, color = "#39ff14" }: ButtonStyle) {
    const { setText } = useSelectiveContext<ButtonContextType, "setText" | "text">(
        "ButtonContext",
        ["setText", "text"]
    );
    const { setColor } = useSelectiveContext<TextContextType, "setColor">("TextContext", [
        "setColor",
    ]);

    const handleClick = () => {
        setColor("red");
        setText("Twitch is the best!");
    };

    return (
        <button
            id={id}
            type={type}
            style={{ "--clr": color, "--text-color": color } as React.CSSProperties}
            onClick={event ? () => event() : () => handleClick()}
        >
            <span>{name}</span>
            <i></i>
        </button>
    );
}
