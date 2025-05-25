// App.tsx
import React, { useState } from "react";
import ThaiNumbers from "./pages/numbers-test";
import ThaiNumbers20 from "./pages/numbers-20";
import ThaiNumbers20to100 from "./pages/numbers-100";
import Places from "./pages/places";
import PlacesTest from "./pages/places-test";
import Pronouns from "./pages/pronouns";

type Screen =
  | "thaiNumbers20"
  | "thaiNumbersTest"
  | "thaiNumbers100"
  | "places"
  | "places-test"
  | "pronouns"; // extend with more screens as needed

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>("thaiNumbers20");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-100 p-4 shadow-md">
        <h2 className="text-lg font-bold text-blue-700 mb-3">Menu</h2>
        <ul className="space-y-1">
          {" "}
          {/* less vertical spacing */}
          <li>
            <button
              className={`cursor-pointer w-full text-left px-2 py-1 rounded text-sm ${
                screen === "thaiNumbers20"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-200"
              }`}
              onClick={() => setScreen("thaiNumbers20")}
            >
              Numbers 0 - 20
            </button>
          </li>
          <li>
            <button
              className={`cursor-pointer w-full text-left px-2 py-1 rounded text-sm ${
                screen === "thaiNumbers100"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-200"
              }`}
              onClick={() => setScreen("thaiNumbers100")}
            >
              Numbers 20 - 100
            </button>
          </li>
          <li>
            <button
              className={`cursor-pointer w-full text-left px-2 py-1 rounded text-sm ${
                screen === "thaiNumbersTest"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-200"
              }`}
              onClick={() => setScreen("thaiNumbersTest")}
            >
              Numbers (Test)
            </button>
          </li>
          <li>
            <button
              className={`cursor-pointer w-full text-left px-2 py-1 rounded text-sm ${
                screen === "places"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-200"
              }`}
              onClick={() => setScreen("places")}
            >
              Places
            </button>
          </li>
          <li>
            <button
              className={`cursor-pointer w-full text-left px-2 py-1 rounded text-sm ${
                screen === "places-test"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-200"
              }`}
              onClick={() => setScreen("places-test")}
            >
              Places (test)
            </button>
          </li>
          <li>
            <button
              className={`cursor-pointer w-full text-left px-2 py-1 rounded text-sm ${
                screen === "pronouns"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-200"
              }`}
              onClick={() => setScreen("pronouns")}
            >
              Pronouns
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-blue-50">
        {screen === "thaiNumbersTest" && <ThaiNumbers />}
        {screen === "thaiNumbers20" && <ThaiNumbers20 />}
        {screen === "thaiNumbers100" && <ThaiNumbers20to100 />}
        {screen === "places" && <Places />}
        {screen === "places-test" && <PlacesTest />}
        {screen === "pronouns" && <Pronouns />}
      </div>
    </div>
  );
};

export default App;
