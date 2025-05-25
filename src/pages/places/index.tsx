import React from "react";

const thaiPlacesData = [
  { eng: "Airport", thai: "สนามบิน", pron: "sà naam bin" },
  { eng: "Museum", thai: "พิพิธภัณฑ์", pron: "pí pít thá pan" },
  { eng: "Bank", thai: "ธนาคาร", pron: "thá naa kaan" },
  { eng: "Gas station", thai: "ปั๊มน้ำมัน", pron: "pàm náam man" },
  { eng: "Bookstore", thai: "ร้านหนังสือ", pron: "ráan nǎng sʉ̌ʉ" },
  { eng: "Police station", thai: "สถานีตำรวจ", pron: "sà thǎa nii tam rùat" },
  { eng: "Clothing store", thai: "ร้านเสื้อผ้า", pron: "ráan sʉ̂a phâa" },
  { eng: "Railway station", thai: "สถานีรถไฟ", pron: "sà thǎa nii rót fai" },
  { eng: "Restaurant", thai: "ร้านอาหาร", pron: "ráan aa hǎan" },
  { eng: "Cinema", thai: "โรงหนัง", pron: "roong nǎng" },
  { eng: "Temple", thai: "วัด", pron: "wát" },
  { eng: "Hospital", thai: "โรงพยาบาล", pron: "roong phá yaa baan" },
  { eng: "House / Home", thai: "บ้าน", pron: "bâan" },
  { eng: "School", thai: "โรงเรียน", pron: "roong riian" },
  { eng: "Beach", thai: "ทะเล", pron: "thá le" },
  { eng: "Hotel", thai: "โรงแรม", pron: "roong rɛɛm" },
  { eng: "Market", thai: "ตลาดใน", pron: "tà làat nai" },
  { eng: "Library", thai: "ห้องสมุด", pron: "hông sà mùt" },
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

const Places: React.FC = () => {
  return (
    <div className="p-4 my-6 max-w-4xl mx-auto bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-3 text-purple-700">Places</h2>
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
          {thaiPlacesData.map(({ eng, thai, pron }) => (
            <tr key={eng} className="text-center hover:bg-purple-50">
              <td className="border border-gray-300 px-3 py-1">{eng}</td>
              <td className="border border-gray-300 px-3 py-1 text-lg font-bold">
                {thai}
              </td>
              <td className="border border-gray-300 px-3 py-1">{pron}</td>
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

export default Places;
