import Button from "./components/button/button.component";
import { Type as TypeButton } from "./components/button/button.constant";
import Card from "./components/card/card.component";
import Input from "./components/input/input.component";
import Text from "./components/text/text.component";
import { Type as TypeText } from "./components/text/text.constant";
import { AppProvider } from "./contextManager/AppProvider";
import { Register } from "./contextManager/register";

Register.init();

function App() {
    return (
        <>
            <AppProvider>
                <Button type={TypeButton.Button} name="Send Email" />
                <Text textHtmlTag={TypeText.H1} fontSize="100px" color="white">
                    ""
                </Text>
                <Input />
                <Card />
            </AppProvider>
        </>
    );
}

export default App;
