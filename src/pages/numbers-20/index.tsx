import React from "react";

const thaiNumbersData = [
  { num: 0, thaiNum: "๐", thaiText: "ศูนย์", eng: "soon" },
  { num: 1, thaiNum: "๑", thaiText: "หนึ่ง", eng: "nùeng" },
  { num: 2, thaiNum: "๒", thaiText: "สอง", eng: "sǒng" },
  { num: 3, thaiNum: "๓", thaiText: "สาม", eng: "sǎam" },
  { num: 4, thaiNum: "๔", thaiText: "สี่", eng: "sìi" },
  { num: 5, thaiNum: "๕", thaiText: "ห้า", eng: "hâa" },
  { num: 6, thaiNum: "๖", thaiText: "หก", eng: "hòk" },
  { num: 7, thaiNum: "๗", thaiText: "เจ็ด", eng: "jèt" },
  { num: 8, thaiNum: "๘", thaiText: "แปด", eng: "bpàet" },
  { num: 9, thaiNum: "๙", thaiText: "เก้า", eng: "gâo" },
  { num: 10, thaiNum: "๑๐", thaiText: "สิบ", eng: "sìp" },
  { num: 11, thaiNum: "๑๑", thaiText: "สิบเอ็ด", eng: "sìp èt" },
  { num: 12, thaiNum: "๑๒", thaiText: "สิบสอง", eng: "sìp sǒng" },
  { num: 13, thaiNum: "๑๓", thaiText: "สิบสาม", eng: "sìp sǎam" },
  { num: 14, thaiNum: "๑๔", thaiText: "สิบสี่", eng: "sìp sìi" },
  { num: 15, thaiNum: "๑๕", thaiText: "สิบห้า", eng: "sìp hâa" },
  { num: 16, thaiNum: "๑๖", thaiText: "สิบหก", eng: "sìp hòk" },
  { num: 17, thaiNum: "๑๗", thaiText: "สิบเจ็ด", eng: "sìp jèt" },
  { num: 18, thaiNum: "๑๘", thaiText: "สิบแปด", eng: "sìp bpàet" },
  { num: 19, thaiNum: "๑๙", thaiText: "สิบเก้า", eng: "sìp gâo" },
  { num: 20, thaiNum: "๒๐", thaiText: "ยี่สิบ", eng: "yîi sìp" },
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

const ThaiNumbersTable: React.FC = () => {
  return (
    <div className="p-4 my-6 max-w-3xl mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-3 text-blue-700">
        Numbers 0 - 20
      </h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-100">
            <th className="border border-gray-300 px-3 py-1.5">Number</th>
            <th className="border border-gray-300 px-3 py-1.5">Thai Number</th>
            <th className="border border-gray-300 px-3 py-1.5">Thai Text</th>
            <th className="border border-gray-300 px-3 py-1.5">
              English Transcription
            </th>
            <th className="border border-gray-300 px-3 py-1.5">Listen</th>
          </tr>
        </thead>
        <tbody>
          {thaiNumbersData.map(({ num, thaiNum, thaiText, eng }) => (
            <tr key={num} className="text-center hover:bg-blue-50">
              <td className="border border-gray-300 px-3 py-1">{num}</td>
              <td className="border border-gray-300 px-3 py-1 text-2xl font-bold">
                {thaiNum}
              </td>
              <td className="border border-gray-300 px-3 py-1">{thaiText}</td>
              <td className="border border-gray-300 px-3 py-1">{eng}</td>
              <td className="border border-gray-300 px-3 py-1">
                <button
                  className="text-white px-2 py-0.5 rounded cursor-pointer"
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
  );
};

export default ThaiNumbersTable;
