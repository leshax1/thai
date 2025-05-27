import React from "react";

type TableData = {
  english: string;
  native: string;
  pronunciation: string;
};

interface WordsTableProps {
  data: TableData[];
}

const playAudio = (text: string, language: string) => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const selectedVoice = voices.find((v) =>
      v.lang.startsWith(language.split("-")[0])
    );
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    utterance.lang = language;
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Sorry, your browser does not support speech synthesis.");
  }
};

const WordsTable: React.FC<WordsTableProps> = ({ data }) => {
  return (
    <div className="p-4 my-6 max-w-4xl mx-auto bg-white rounded shadow-md">
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-purple-100">
            <th className="border border-gray-300 px-3 py-1.5">English</th>
            <th className="border border-gray-300 px-3 py-1.5">Native</th>
            <th className="border border-gray-300 px-3 py-1.5">
              Pronunciation
            </th>
            <th className="border border-gray-300 px-3 py-1.5">Listen</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ english, native, pronunciation }) => (
            <tr key={english} className="text-center hover:bg-purple-50">
              <td className="border border-gray-300 px-3 py-1">{english}</td>
              <td className="border border-gray-300 px-3 py-1 text-lg font-bold">
                {native}
              </td>
              <td className="border border-gray-300 px-3 py-1">
                {pronunciation}
              </td>
              <td className="border border-gray-300 px-3 py-1">
                <button
                  className="text-white px-2 py-0.5 rounded"
                  onClick={() => playAudio(native, "th-TH")}
                  aria-label={`Play pronunciation for ${native}`}
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

export default WordsTable;
