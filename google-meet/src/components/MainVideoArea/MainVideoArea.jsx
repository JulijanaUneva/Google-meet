import ParticipantSquare from "./ParticipantSquare";
import participants from "../../participants.js";
import "./MainVideoArea.css";

const MainVideoArea = () => {
  return (
    <div className="main-video-area">
      {participants.map((participant, index) => (
        <ParticipantSquare
          key={index}
          name={participant.name}
          photo={participant.photo}
        />
      ))}
    </div>
  );
};

export default MainVideoArea;
