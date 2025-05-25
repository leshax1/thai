import React from "react";

const array = [
  { thai: "ฉัน", eng: "I / me (female speaker)", roman: "chǎn" },
  { thai: "ผม", eng: "I / me (male speaker)", roman: "phǒm" },
  { thai: "คุณ", eng: "You", roman: "khun" },
  { thai: "เขา", eng: "He / she / they", roman: "kháo" },
  { thai: "มัน", eng: "It (animal/object)", roman: "man" },
  { thai: "พวกเขา", eng: "They / them", roman: "phûak-kháo" },
  { thai: "พวกเรา", eng: "We (inclusive)", roman: "phûak-rao" },
  { thai: "เธอ", eng: "She (casual)", roman: "thoe" },
  { thai: "เขาเอง", eng: "Himself / herself", roman: "kháo-eng" },
  { thai: "ตัวเอง", eng: "Oneself", roman: "tua-eng" },
];

const playThaiAudio = (thaiText: string) => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(thaiText);
    const voices = window.speechSynthesis.getVoices();
    const thaiVoice = voices.find((v) => v.lang.startsWith("th"));
    if (thaiVoice) {
      utterance.voice = thaiVoice;
    }
    utterance.lang = "th-TH";
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Sorry, your browser does not support speech synthesis.");
  }
};

const Pronouns: React.FC = () => {
  return (
    <div className="p-4 my-6 max-w-4xl mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-3 text-purple-700">
        Pronounces
      </h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-purple-100">
            <th className="border border-gray-300 px-3 py-1.5">English</th>
            <th className="border border-gray-300 px-3 py-1.5">Thai</th>
            <th className="border border-gray-300 px-3 py-1.5">
              Pronunciation
            </th>
            <th className="border border-gray-300 px-3 py-1.5">Listen</th>
          </tr>
        </thead>
        <tbody>
          {array.map(({ eng, thai, roman }) => (
            <tr key={eng} className="text-center hover:bg-purple-50">
              <td className="border border-gray-300 px-3 py-1">{eng}</td>
              <td className="border border-gray-300 px-3 py-1 text-lg font-bold">
                {thai}
              </td>
              <td className="border border-gray-300 px-3 py-1">{roman}</td>
              <td className="border border-gray-300 px-3 py-1">
                <button
                  className="text-white px-2 py-0.5 rounded cursor-pointer"
                  onClick={() => playThaiAudio(thai)}
                  aria-label={`Play pronunciation for ${thai}`}
                >
                  ▶️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pronouns;
