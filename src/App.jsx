import { useState } from "react";
import { Keypad } from "./Keypad";
import "./App.css";

export const App = () => {
  const audioClips = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];
  const [volume, setVolume] = useState(1);
  const [recording, setRecording] = useState("");
  const [speed, setspeed] = useState(0.5);
  const playRecording = () => {
    let index = 0;
    let recordArray = recording.split(" ");
    const interval = setInterval(() => {
      const audioTag = document.getElementById(recordArray[index]);
      audioTag.volume = volume;
      audioTag.currentTime = 0;
      audioTag.play();
      index++;
    }, speed * 600);
    setTimeout(
      () => clearInterval(interval),
      600 * speed * recordArray.length - 1
    );
  };
  return (
    <div id="body">
      <div id="outer-container" className="container text-center">
        <div id="inner-container" className="container w-50">
          <h2 id="title">Drum Machine</h2>
          {audioClips.map((clip) => (
            <Keypad
              key={clip.id}
              clip={clip}
              volume={volume}
              setRecording={setRecording}
            />
          ))}
          <br />
          <h4>Volume</h4>
          <input
            type="range"
            step="0.01"
            onChange={(e) => setVolume(e.target.value)}
            value={volume}
            max="1"
            min="0"
            className="w-50 "
          />

          <div className=" ">
            <h3 id="recording-display">{recording}</h3>
          </div>
          <br />
          <div>
            <button onClick={playRecording} className="btn btn-success">
              play
            </button>
            <button onClick={() => setRecording("")} className="btn btn-danger">
              clear
            </button>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};
