import React from "react";
import "./button.style.scss";
import { Type } from "./button.constant";
import { useAppContext } from "../../providers/app.provider";
import { ButtonContextType } from "../../context/button.context";
import { TextContextType } from "../../context/text.context";

interface ButtonStyle {
    id?: string;
    name: string;
    type: Type;
    color?: string;
    event?: () => void;
}

export default function Button({ id, name, type, event, color = "#39ff14" }: ButtonStyle) {
    const { setText } = useAppContext<ButtonContextType>("buttonContext");
    const { setColor } = useAppContext<TextContextType>("textContext");

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
