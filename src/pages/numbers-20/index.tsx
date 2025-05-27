import React from "react";
import { numbers0to20, numbers20to100 } from "../../shared/data/data";

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

const ThaiNumbers20to100: React.FC = () => {
  return (
    <div className="mx-4">
      <div className="p-4 my-6 max-w-3xl mx-auto bg-white rounded shadow-md">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 px-3 py-1.5 text-sm">
                Number
              </th>
              <th className="border border-gray-300 px-3 py-1.5 text-sm">
                Thai Number
              </th>
              <th className="border border-gray-300 px-3 py-1.5 text-sm">
                Thai Text
              </th>
              <th className="border border-gray-300 px-3 py-1.5 text-sm">
                English Transcription
              </th>
              <th className="border border-gray-300 px-3 py-1.5 text-sm">
                Listen
              </th>
            </tr>
          </thead>
          <tbody>
            {numbers0to20.map(({ num, thaiNum, thaiText, eng }) => (
              <tr key={num} className="text-center hover:bg-blue-50">
                <td className="border border-gray-300 px-3 py-1 text-sm">
                  {num}
                </td>
                <td className="border border-gray-300 px-3 py-1 text-2xl font-bold">
                  {thaiNum}
                </td>
                <td className="border border-gray-300 px-3 py-1 text-sm">
                  {thaiText}
                </td>
                <td className="border border-gray-300 px-3 py-1 text-sm">
                  {eng}
                </td>
                <td className="border border-gray-300 px-3 py-1 text-sm">
                  <button
                    className="btext-white px-2 py-0.5 rounded cursor-pointer text-sm"
                    onClick={() => playThaiAudio(thaiText)}
                    aria-label={`Play pronunciation for ${thaiText}`}
                  >
                    ▶️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ThaiNumbers20to100;
