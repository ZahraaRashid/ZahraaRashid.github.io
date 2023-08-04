import React from "react";
import "./App.css";

const ORIGINAL_TEXT =
  "Motivation is the powerful driving force that propels individuals towards their goals and aspirations, enabling them to overcome obstacles and persevere through challenges. It serves as the internal engine that ignites passion, determination, and focus, fueling a person's desire to achieve success and personal fulfillment. Motivation can stem from various sources, such as intrinsic factors like personal values, passions, and a sense of purpose, or extrinsic factors like rewards, recognition, and external encouragement. Whether pursuing academic excellence, professional growth, or personal development, motivation plays a pivotal role in channeling one's energy and efforts towards a meaningful and fulfilling life journey. It empowers individuals to remain resilient in the face of setbacks, embrace continuous improvement, and ultimately realize their full potential. By harnessing the power of motivation, people can embark on transformative journeys that lead to not only individual success but also positive contributions to the world around them.";

const splitText = (text, from, to) => [
  text.slice(0, from),
  text.slice(from, to),
  text.slice(to)
];

const HighlightedText = ({ text, from, to }) => {
  const [start, highlight, finish] = splitText(text, from, to);
  return (
    <p>
      {start}
      <span style={{ backgroundColor: "yellow" }}>{highlight}</span>
      {finish}
    </p>
  );
};

export default function App() {
  const [highlightSection, setHighlightSection] = React.useState({
    from: 0,
    to: 0
  });
  const [utterance, setUtterance] = React.useState(null); // State to hold the utterance

  const handleClick = () => {
    const synth = window.speechSynthesis;
    if (!synth) {
      console.error("no tts");
      return;
    }

    // Check if an utterance is already playing, if so, stop it.
    if (utterance && synth.speaking) {
      synth.cancel();
      setUtterance(null); // Reset the utterance state
      return;
    }

    const newUtterance = new SpeechSynthesisUtterance(ORIGINAL_TEXT);
    newUtterance.addEventListener("boundary", (event) => {
      const { charIndex, charLength } = event;
      setHighlightSection({ from: charIndex, to: charIndex + charLength });
    });

    // Set the new utterance as a state variable
    setUtterance(newUtterance);
    synth.speak(newUtterance);
  };

  return (
    <div className="App">
      <HighlightedText text={ORIGINAL_TEXT} {...highlightSection} />
      <button onClick={handleClick}>
        {utterance && window.speechSynthesis.speaking ? "Stop" : "Read Aloud"}
      </button>
    </div>
  );
}