import { useState, useEffect } from "react";
import "./App.css";

export const Keypad = ({ clip, volume, setRecording }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playSound();
    }
  };

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 200);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
    setRecording((prev) => prev + clip.keyTrigger + " ");
  };

  return (
    <div
      id="main-btns"
      onClick={playSound}
      className={`btn btn-secondary p-4 m-3  ${active && "btn-warning"}`}
    >
      <audio className="clip" id={clip.keyTrigger} src={clip.url} />
      {clip.keyTrigger}
    </div>
  );
};
