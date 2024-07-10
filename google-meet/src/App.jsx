import "./App.css";

import MainVideoArea from "./components/MainVideoArea/MainVideoArea.jsx";
import HeaderBar from "./HeaderBar";
import RealTimeClock from "./RealTimeClock";
import Emojis from "./Emojis/Emojis";

function App() {
    return (
        <>
            <HeaderBar />
            <MainVideoArea />
            <Emojis />
            {/* <ControlBar /> */}
            <RealTimeClock />
        </>
    );

}

export default App;
