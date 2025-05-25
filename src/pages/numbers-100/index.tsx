import React from "react";

const thaiNumbers20to100Data = [
  { num: 20, thaiNum: "๒๐", thaiText: "ยี่สิบ", eng: "yîi sìp" },
  { num: 21, thaiNum: "๒๑", thaiText: "ยี่สิบเอ็ด", eng: "yîi sìp èt" },
  { num: 22, thaiNum: "๒๒", thaiText: "ยี่สิบสอง", eng: "yîi sìp sǒng" },
  { num: 23, thaiNum: "๒๓", thaiText: "ยี่สิบสาม", eng: "yîi sìp sǎam" },
  { num: 24, thaiNum: "๒๔", thaiText: "ยี่สิบสี่", eng: "yîi sìp sìi" },
  { num: 25, thaiNum: "๒๕", thaiText: "ยี่สิบห้า", eng: "yîi sìp hâa" },
  { num: 26, thaiNum: "๒๖", thaiText: "ยี่สิบหก", eng: "yîi sìp hòk" },
  { num: 27, thaiNum: "๒๗", thaiText: "ยี่สิบเจ็ด", eng: "yîi sìp jèt" },
  { num: 28, thaiNum: "๒๘", thaiText: "ยี่สิบแปด", eng: "yîi sìp bpàet" },
  { num: 29, thaiNum: "๒๙", thaiText: "ยี่สิบเก้า", eng: "yîi sìp gâo" },
  { num: 30, thaiNum: "๓๐", thaiText: "สามสิบ", eng: "sǎam sìp" },
  { num: 31, thaiNum: "๓๑", thaiText: "สามสิบเอ็ด", eng: "sǎam sìp èt" },
  { num: 32, thaiNum: "๓๒", thaiText: "สามสิบสอง", eng: "sǎam sìp sǒng" },
  { num: 33, thaiNum: "๓๓", thaiText: "สามสิบสาม", eng: "sǎam sìp sǎam" },
  { num: 34, thaiNum: "๓๔", thaiText: "สามสิบสี่", eng: "sǎam sìp sìi" },
  { num: 35, thaiNum: "๓๕", thaiText: "สามสิบห้า", eng: "sǎam sìp hâa" },
  { num: 36, thaiNum: "๓๖", thaiText: "สามสิบหก", eng: "sǎam sìp hòk" },
  { num: 37, thaiNum: "๓๗", thaiText: "สามสิบเจ็ด", eng: "sǎam sìp jèt" },
  { num: 38, thaiNum: "๓๘", thaiText: "สามสิบแปด", eng: "sǎam sìp bpàet" },
  { num: 39, thaiNum: "๓๙", thaiText: "สามสิบเก้า", eng: "sǎam sìp gâo" },
  { num: 40, thaiNum: "๔๐", thaiText: "สี่สิบ", eng: "sìi sìp" },
  { num: 41, thaiNum: "๔๑", thaiText: "สี่สิบเอ็ด", eng: "sìi sìp èt" },
  { num: 42, thaiNum: "๔๒", thaiText: "สี่สิบสอง", eng: "sìi sìp sǒng" },
  { num: 43, thaiNum: "๔๓", thaiText: "สี่สิบสาม", eng: "sìi sìp sǎam" },
  { num: 44, thaiNum: "๔๔", thaiText: "สี่สิบสี่", eng: "sìi sìp sìi" },
  { num: 45, thaiNum: "๔๕", thaiText: "สี่สิบห้า", eng: "sìi sìp hâa" },
  { num: 46, thaiNum: "๔๖", thaiText: "สี่สิบหก", eng: "sìi sìp hòk" },
  { num: 47, thaiNum: "๔๗", thaiText: "สี่สิบเจ็ด", eng: "sìi sìp jèt" },
  { num: 48, thaiNum: "๔๘", thaiText: "สี่สิบแปด", eng: "sìi sìp bpàet" },
  { num: 49, thaiNum: "๔๙", thaiText: "สี่สิบเก้า", eng: "sìi sìp gâo" },
  { num: 50, thaiNum: "๕๐", thaiText: "ห้าสิบ", eng: "hâa sìp" },
  { num: 51, thaiNum: "๕๑", thaiText: "ห้าสิบเอ็ด", eng: "hâa sìp èt" },
  { num: 52, thaiNum: "๕๒", thaiText: "ห้าสิบสอง", eng: "hâa sìp sǒng" },
  { num: 53, thaiNum: "๕๓", thaiText: "ห้าสิบสาม", eng: "hâa sìp sǎam" },
  { num: 54, thaiNum: "๕๔", thaiText: "ห้าสิบสี่", eng: "hâa sìp sìi" },
  { num: 55, thaiNum: "๕๕", thaiText: "ห้าสิบห้า", eng: "hâa sìp hâa" },
  { num: 56, thaiNum: "๕๖", thaiText: "ห้าสิบหก", eng: "hâa sìp hòk" },
  { num: 57, thaiNum: "๕๗", thaiText: "ห้าสิบเจ็ด", eng: "hâa sìp jèt" },
  { num: 58, thaiNum: "๕๘", thaiText: "ห้าสิบแปด", eng: "hâa sìp bpàet" },
  { num: 59, thaiNum: "๕๙", thaiText: "ห้าสิบเก้า", eng: "hâa sìp gâo" },
  { num: 60, thaiNum: "๖๐", thaiText: "หกสิบ", eng: "hòk sìp" },
  { num: 61, thaiNum: "๖๑", thaiText: "หกสิบเอ็ด", eng: "hòk sìp èt" },
  { num: 62, thaiNum: "๖๒", thaiText: "หกสิบสอง", eng: "hòk sìp sǒng" },
  { num: 63, thaiNum: "๖๓", thaiText: "หกสิบสาม", eng: "hòk sìp sǎam" },
  { num: 64, thaiNum: "๖๔", thaiText: "หกสิบสี่", eng: "hòk sìp sìi" },
  { num: 65, thaiNum: "๖๕", thaiText: "หกสิบห้า", eng: "hòk sìp hâa" },
  { num: 66, thaiNum: "๖๖", thaiText: "หกสิบหก", eng: "hòk sìp hòk" },
  { num: 67, thaiNum: "๖๗", thaiText: "หกสิบเจ็ด", eng: "hòk sìp jèt" },
  { num: 68, thaiNum: "๖๘", thaiText: "หกสิบแปด", eng: "hòk sìp bpàet" },
  { num: 69, thaiNum: "๖๙", thaiText: "หกสิบเก้า", eng: "hòk sìp gâo" },
  { num: 70, thaiNum: "๗๐", thaiText: "เจ็ดสิบ", eng: "jèt sìp" },
  { num: 71, thaiNum: "๗๑", thaiText: "เจ็ดสิบเอ็ด", eng: "jèt sìp èt" },
  { num: 72, thaiNum: "๗๒", thaiText: "เจ็ดสิบสอง", eng: "jèt sìp sǒng" },
  { num: 73, thaiNum: "๗๓", thaiText: "เจ็ดสิบสาม", eng: "jèt sìp sǎam" },
  { num: 74, thaiNum: "๗๔", thaiText: "เจ็ดสิบสี่", eng: "jèt sìp sìi" },
  { num: 75, thaiNum: "๗๕", thaiText: "เจ็ดสิบห้า", eng: "jèt sìp hâa" },
  { num: 76, thaiNum: "๗๖", thaiText: "เจ็ดสิบหก", eng: "jèt sìp hòk" },
  { num: 77, thaiNum: "๗๗", thaiText: "เจ็ดสิบเจ็ด", eng: "jèt sìp jèt" },
  { num: 78, thaiNum: "๗๘", thaiText: "เจ็ดสิบแปด", eng: "jèt sìp bpàet" },
  { num: 79, thaiNum: "๗๙", thaiText: "เจ็ดสิบเก้า", eng: "jèt sìp gâo" },
  { num: 80, thaiNum: "๘๐", thaiText: "แปดสิบ", eng: "bpàet sìp" },
  { num: 81, thaiNum: "๘๑", thaiText: "แปดสิบเอ็ด", eng: "bpàet sìp èt" },
  { num: 82, thaiNum: "๘๒", thaiText: "แปดสิบสอง", eng: "bpàet sìp sǒng" },
  { num: 83, thaiNum: "๘๓", thaiText: "แปดสิบสาม", eng: "bpàet sìp sǎam" },
  { num: 84, thaiNum: "๘๔", thaiText: "แปดสิบสี่", eng: "bpàet sìp sìi" },
  { num: 85, thaiNum: "๘๕", thaiText: "แปดสิบห้า", eng: "bpàet sìp hâa" },
  { num: 86, thaiNum: "๘๖", thaiText: "แปดสิบหก", eng: "bpàet sìp hòk" },
  { num: 87, thaiNum: "๘๗", thaiText: "แปดสิบเจ็ด", eng: "bpàet sìp jèt" },
  { num: 88, thaiNum: "๘๘", thaiText: "แปดสิบแปด", eng: "bpàet sìp bpàet" },
  { num: 89, thaiNum: "๘๙", thaiText: "แปดสิบเก้า", eng: "bpàet sìp gâo" },
  { num: 90, thaiNum: "๙๐", thaiText: "เก้าสิบ", eng: "gâo sìp" },
  { num: 91, thaiNum: "๙๑", thaiText: "เก้าสิบเอ็ด", eng: "gâo sìp èt" },
  { num: 92, thaiNum: "๙๒", thaiText: "เก้าสิบสอง", eng: "gâo sìp sǒng" },
  { num: 93, thaiNum: "๙๓", thaiText: "เก้าสิบสาม", eng: "gâo sìp sǎam" },
  { num: 94, thaiNum: "๙๔", thaiText: "เก้าสิบสี่", eng: "gâo sìp sìi" },
  { num: 95, thaiNum: "๙๕", thaiText: "เก้าสิบห้า", eng: "gâo sìp hâa" },
  { num: 96, thaiNum: "๙๖", thaiText: "เก้าสิบหก", eng: "gâo sìp hòk" },
  { num: 97, thaiNum: "๙๗", thaiText: "เก้าสิบเจ็ด", eng: "gâo sìp jèt" },
  { num: 98, thaiNum: "๙๘", thaiText: "เก้าสิบแปด", eng: "gâo sìp bpàet" },
  { num: 99, thaiNum: "๙๙", thaiText: "เก้าสิบเก้า", eng: "gâo sìp gâo" },
  { num: 100, thaiNum: "๑๐๐", thaiText: "หนึ่งร้อย", eng: "nùeng rói" },
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

const ThaiNumbers20to100: React.FC = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-3 text-blue-700">
        Numbers 20 - 100
      </h2>
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
          {thaiNumbers20to100Data.map(({ num, thaiNum, thaiText, eng }) => (
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
  );
};

export default ThaiNumbers20to100;
