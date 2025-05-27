import React, { useState, useEffect } from "react";

type Word = {
  english: string;
  native: string;
  pronunciation: string;
};

type WordQuizProps = {
  data: Word[];
};

const playAudio = (text: string) => {
  if ("speechSynthesis" in window) {
    const utter = new SpeechSynthesisUtterance(text);
    const voice = window.speechSynthesis
      .getVoices()
      .find((v) => v.lang.startsWith("th"));
    if (voice) utter.voice = voice;
    utter.lang = "th-TH";
    window.speechSynthesis.speak(utter);
  } else {
    alert("Speech synthesis not supported");
  }
};

const shuffleArray = <T,>(arr: T[]): T[] =>
  [...arr].sort(() => Math.random() - 0.5);

const WordsQuizReverse: React.FC<WordQuizProps> = ({ data }) => {
  const [current, setCurrent] = useState<Word>(
    () => data[Math.floor(Math.random() * data.length)]
  );
  const [choices, setChoices] = useState<Word[]>([]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    generateChoices(current);
  }, []);

  const generateChoices = (word: Word) => {
    const options = shuffleArray([
      word,
      ...shuffleArray(data.filter((w) => w !== word)).slice(0, 3),
    ]);
    setChoices(options);
  };

  const handleChoice = (selected: string) => {
    if (selected === current.native) {
      setFeedback("✅ Correct!");
      setTimeout(() => nextQuestion(), 1000);
    } else {
      setFeedback("❌ Try again");
    }
  };

  const nextQuestion = () => {
    if (data.length <= 1) {
      console.warn("Not enough words in the data array to avoid repetition.");
      return;
    }

    let next;
    do {
      next = data[Math.floor(Math.random() * data.length)];
    } while (next === current); // Ensure the next word is not the same as the current one

    setCurrent(next);
    generateChoices(next);
    setFeedback("");
  };

  return (
    <div className="p-4 sm:p-6 my-6 max-w-xl mx-auto bg-white rounded shadow-md text-center">
      <div className="text-lg sm:text-xl font-semibold text-gray-800">
        What is the Thai word for:
      </div>
      <div className="mt-2 text-xl sm:text-2xl text-blue-700 font-medium">
        {current.english}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {choices.map((choice) => (
          <button
            key={choice.native}
            onClick={() => handleChoice(choice.native)}
            className="bg-gray-100 border border-gray-300 px-3 py-2 rounded hover:bg-gray-200 text-base sm:text-lg"
          >
            {choice.native}
          </button>
        ))}
      </div>

      <div className="mt-3">
        <button
          onClick={() => playAudio(current.native)}
          className="text-xs sm:text-sm text-blue-600 hover:underline cursor-pointer"
          aria-label="Hear Thai pronunciation"
        >
          🔊 Hear Thai pronunciation
        </button>
      </div>

      {feedback && (
        <div className="mt-4 text-lg sm:text-xl font-medium">{feedback}</div>
      )}
    </div>
  );
};

export default WordsQuizReverse;
