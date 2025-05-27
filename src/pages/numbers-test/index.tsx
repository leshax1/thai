import React, { useState, useEffect } from "react";

const thaiNumbers: Record<number, [string, string]> = {
  0: ["๐", "soon"],
  1: ["๑", "nùeng"],
  2: ["๒", "sǒng"],
  3: ["๓", "sǎam"],
  4: ["๔", "sìi"],
  5: ["๕", "hâa"],
  6: ["๖", "hòk"],
  7: ["๗", "jèt"],
  8: ["๘", "bpàet"],
  9: ["๙", "gâo"],
  10: ["๑๐", "sìp"],
};

const thaiTextWords: Record<number, string> = {
  0: "ศูนย์",
  1: "หนึ่ง",
  2: "สอง",
  3: "สาม",
  4: "สี่",
  5: "ห้า",
  6: "หก",
  7: "เจ็ด",
  8: "แปด",
  9: "เก้า",
  10: "สิบ",
};

const ThaiNumbers: React.FC = () => {
  const [range, setRange] = useState("1-10");
  const [number, setNumber] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const getRange = () => {
    const [min, max] = range.split("-").map(Number);
    return [min, max];
  };

  const generateNumber = () => {
    const [min, max] = getRange();
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    setNumber(rand);
    setRevealed(false);
  };

  // Generate a number on initial component mount or whenever range changes
  useEffect(() => {
    generateNumber();
  }, [range]);

  const toThaiNumerals = (n: number) => {
    return String(n)
      .split("")
      .map((d) => thaiNumbers[+d]?.[0] || "")
      .join("");
  };

  const getPronunciation = (n: number): string => {
    if (n <= 10) return thaiNumbers[n][1];

    const digits = [
      "",
      "nùeng",
      "sǒng",
      "sǎam",
      "sìi",
      "hâa",
      "hòk",
      "jèt",
      "bpàet",
      "gâo",
    ];
    const units = ["", "sìp", "rói", "pân", "mùn"];
    const str = n.toString().padStart(4, "0");
    const parts: string[] = [];

    for (let i = 0; i < 4; i++) {
      const digit = +str[i];
      if (digit === 0) continue;
      if (i === 2 && digit === 2) {
        parts.push("yîi sìp");
      } else if (i === 2 && digit === 1) {
        parts.push("sìp");
      } else if (i === 3 && digit === 1 && n >= 20) {
        parts.push("èt");
      } else {
        parts.push(digits[digit] + (units[3 - i] ? " " + units[3 - i] : ""));
      }
    }

    return parts.join(" ").replace(/\s+/g, " ").trim();
  };

  const getThaiText = (n: number): string => {
    if (n <= 10) return thaiTextWords[n];

    const digits = [
      "",
      "หนึ่ง",
      "สอง",
      "สาม",
      "สี่",
      "ห้า",
      "หก",
      "เจ็ด",
      "แปด",
      "เก้า",
    ];
    const units = ["", "สิบ", "ร้อย", "พัน"];
    const str = n.toString().padStart(4, "0");
    const parts: string[] = [];

    for (let i = 0; i < 4; i++) {
      const digit = +str[i];
      if (digit === 0) continue;
      if (i === 2 && digit === 2) {
        parts.push("ยี่สิบ");
      } else if (i === 2 && digit === 1) {
        parts.push("สิบ");
      } else if (i === 3 && digit === 1 && n >= 20) {
        parts.push("เอ็ด");
      } else {
        parts.push(digits[digit] + (units[3 - i] ?? ""));
      }
    }

    return parts.join(" ");
  };

  const speakThai = (n: number) => {
    if (number === null) return;
    const text = getThaiText(n);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "th-TH";
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center p-10 mx-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Thai Numbers Test
      </h1>

      <label className="mb-2 text-blue-800 font-semibold">
        Choose a number range:
      </label>
      <select
        className="p-2 rounded border border-blue-300 mb-4"
        value={range}
        onChange={(e) => setRange(e.target.value)}
      >
        <option value="1-10">1 - 10</option>
        <option value="10-20">10 - 20</option>
        <option value="20-100">20 - 100</option>
        <option value="100-1000">100 - 1000</option>
        <option value="1-9999">1 - 9999</option>
      </select>

      <button
        onClick={generateNumber}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate Number
      </button>

      {number !== null && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow text-center w-80">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">{number}</h2>
          <p className={`mb-2 ${revealed ? "" : "blur-sm"}`}>
            Thai Numerals: {toThaiNumerals(number)}
          </p>
          <p className={`mb-2 ${revealed ? "" : "blur-sm"}`}>
            Pronunciation: {getPronunciation(number)}
          </p>

          {!revealed && (
            <button
              onClick={() => setRevealed(true)}
              className="bg-blue-200 hover:bg-blue-300 text-blue-800 px-3 py-1 rounded mt-2"
            >
              Reveal
            </button>
          )}

          {revealed && (
            <button
              onClick={() => speakThai(number)}
              className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mt-2"
            >
              🔊 Hear Thai
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ThaiNumbers;
