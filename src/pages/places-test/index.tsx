import React, { useState } from "react";

const locationWords = [
  { thai: "สนามบิน", eng: "Airport", roman: "Sa naam bin" },
  { thai: "พิพิธภัณฑ์", eng: "Museum", roman: "Pi pit tha pan" },
  { thai: "ธนาคาร", eng: "Bank", roman: "Tha naa kaan" },
  { thai: "ปั๊มน้ำมัน", eng: "Gas station", roman: "Pam naam man" },
  { thai: "ร้านหนังสือ", eng: "Bookstore", roman: "Raan nung sue" },
  { thai: "สถานีตำรวจ", eng: "Police station", roman: "Sa thaa nee tam ruad" },
  { thai: "ร้านเสื้อผ้า", eng: "Clothing store", roman: "Raan suea pa" },
  { thai: "สถานีรถไฟ", eng: "Railway station", roman: "Sa thaa nee rod fai" },
  { thai: "ร้านอาหาร", eng: "Restaurant", roman: "Raan aa haan" },
  { thai: "โรงหนัง", eng: "Cinema", roman: "Rong nung" },
  { thai: "วัด", eng: "Temple", roman: "Wad" },
  { thai: "โรงพยาบาล", eng: "Hospital", roman: "Rong pa ya baan" },
  { thai: "บ้าน", eng: "House / home", roman: "Baan" },
  { thai: "โรงเรียน", eng: "School", roman: "Rong rian" },
  { thai: "ทะเล", eng: "Beach", roman: "Tha le" },
  { thai: "โรงแรม", eng: "Hotel", roman: "Rong ram" },
  { thai: "ตลาดใน", eng: "Market", roman: "Ta laad nai" },
  { thai: "ห้องสมุด", eng: "Library", roman: "Hong sa mood" },
];

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

const shuffleArray = (arr: unknown[]) =>
  [...arr].sort(() => Math.random() - 0.5);

const PlacesTest: React.FC = () => {
  const [current, setCurrent] = useState(
    () => locationWords[Math.floor(Math.random() * locationWords.length)]
  );
  const [choices, setChoices] = useState(() =>
    shuffleArray([
      current,
      ...shuffleArray(locationWords.filter((w) => w !== current)).slice(0, 3),
    ])
  );
  const [feedback, setFeedback] = useState("");

  const handleChoice = (word: string) => {
    if (word === current.eng) {
      setFeedback("✅ Correct!");
      setTimeout(() => nextQuestion(), 1000);
    } else {
      setFeedback("❌ Try again");
    }
  };

  const nextQuestion = () => {
    const next =
      locationWords[Math.floor(Math.random() * locationWords.length)];
    setCurrent(next);
    setChoices(
      shuffleArray([
        next,
        ...shuffleArray(locationWords.filter((w) => w !== next)).slice(0, 3),
      ])
    );
    setFeedback("");
  };

  return (
    <div className="p-4 my-6 max-w-xl mx-auto bg-white rounded shadow-md text-center">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">
        Location Word Quiz
      </h2>

      <button
        onClick={() => playAudio(current.thai)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ▶️ Listen
      </button>
      <div className="mt-2 text-lg text-gray-800">{current.thai}</div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {choices.map((choice) => (
          <button
            key={choice.eng}
            onClick={() => handleChoice(choice.eng)}
            className="bg-gray-100 border border-gray-300 px-3 py-2 rounded hover:bg-gray-200"
          >
            {choice.eng}
          </button>
        ))}
      </div>

      {feedback && <div className="mt-4 text-lg font-medium">{feedback}</div>}
    </div>
  );
};

export default PlacesTest;
