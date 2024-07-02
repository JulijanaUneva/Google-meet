import { useState } from "react";
import "./App.css";
import HeaderBar from "./HeaderBar";
import RealTimeClock from "./RealTimeClock";

function App() {
    return (
        <>
            <HeaderBar />
            {/* <MainVideoArea />
            <EmojiBar />
            <ControlBar /> */}
            <RealTimeClock />
        </>
    );
}

export default App;
