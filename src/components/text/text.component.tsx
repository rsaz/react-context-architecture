import React from "react";
import { Type } from "./text.constant";
import { ButtonContextType } from "../../context/button.context";
import { useAppContext } from "../../contextManager/hooks";

interface TextStyle {
    textHtmlTag: Type;
    fontSize?: string;
    color?: string;
    fontFamily?: string;
    children: React.ReactNode;
}

export default function Text(textStyle: TextStyle) {
    const htagOrSize = textStyle.textHtmlTag;
    const { text } = useAppContext<ButtonContextType>("ButtonContext");

    return React.createElement(htagOrSize, {
        style: {
            fontSize: textStyle.fontSize,
            color: textStyle.color,
            fontFamily: textStyle.fontFamily,
        },
        children: text,
        className: "textCSSProperties",
    });
}
