import "./App.css";
import MainVideoArea from "./components/MainVideoArea/MainVideoArea.jsx";
import HeaderBar from "./HeaderBar";
import RealTimeClock from "./RealTimeClock";

function App() {
    return (
        <>
            <HeaderBar />
            <MainVideoArea />
            {/* <EmojiBar />
            <ControlBar /> */}
            <RealTimeClock />
        </>
    );
}

export default App;
