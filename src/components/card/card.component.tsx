import { TextContextType } from "../../context/text.context";
import { useAppContext } from "../../contextManager/ContextManager";
import Button from "../button/button.component";
import { Type } from "../button/button.constant";

export default function Card() {
    const { setColor } = useAppContext<TextContextType>("TextContext");

    const handleClick = () => {
        console.log("Card Clicked");
        setColor("yellow");
    };
    // how to reuse the button component with different context
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <Button event={() => handleClick()} name="Press Card" type={Type.Button} color="red" />
            <div style={{ width: "100px", height: "100px", background: "red" }}></div>;
        </>
    );
}
