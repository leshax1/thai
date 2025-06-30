import { useEffect, useState } from "react";
import { comparisons_examples } from "../../shared/data/data";

const playThaiAudio = (thaiText: any, voices: any) => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(thaiText);
    const thaiVoice = voices.find((v: any) => v.lang.startsWith("th"));
    if (thaiVoice) {
      utterance.voice = thaiVoice;
    }
    utterance.lang = "th-TH";
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Sorry, your browser does not support speech synthesis.");
  }
};

export default function Comparison() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    // Load voices
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Thai Grammar: Comparison Using{" "}
          <span className="text-blue-600">กว่า</span>
        </h1>
        <p className="text-gray-700 mb-6">
          Use <strong className="text-blue-600">กว่า (gwaa)</strong> to compare
          two things. It means <em>"more than"</em> or <em>"-er than"</em>.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-blue-900 font-medium">Structure:</p>
          <p className="text-blue-800">
            Subject + adjective + กว่า + comparison target
          </p>
        </div>
        <div className="space-y-4">
          {comparisons_examples.map(({ text, translation }, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-4 rounded-xl border flex items-center justify-between"
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">{text}</p>
                <p className="text-sm text-gray-600">{translation}</p>
              </div>
              <button
                className="ml-4 px-3 py-1 text-white rounded"
                aria-label={`Play audio for ${text}`}
                onClick={() => playThaiAudio(text, voices)}
              >
                🔊
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
