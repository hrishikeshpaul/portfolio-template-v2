import { Button, Heading, Text } from "@chakra-ui/react";
import { Config } from "utils/ContentRegistry";

import "./App.scss";

function App() {
    return (
        <div className="App">
            <Button>{Config.name}</Button>
            <Text>{Config.name}</Text>
        </div>
    );
}

export default App;
