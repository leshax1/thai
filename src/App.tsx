import React, { useState } from "react";
import ThaiNumbers from "./pages/numbers-test";
import ThaiNumbers20 from "./pages/numbers-20";
import ThaiNumbers20to100 from "./pages/numbers-100";
import Places from "./pages/places";
import Pronouns from "./pages/pronouns";
import Verbs1 from "./pages/verbs1";
import PlacesQuiz from "./pages/places/quiz";
import Verbs1Quiz from "./pages/verbs1/quiz";
import SidebarMenu from "./shared/sidebar-menu";
import { menuItems } from "./shared/data/data";

type Screen =
  | "thaiNumbers20"
  | "thaiNumbersTest"
  | "thaiNumbers100"
  | "places"
  | "places-test"
  | "pronouns"
  | "verbs1"
  | "verbs1-quiz";

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>("thaiNumbers20");

  return (
    <div className="flex min-h-screen">
      <SidebarMenu
        items={menuItems}
        activeItem={screen}
        onChange={(e) => setScreen(e as Screen)}
      />

      <div className="flex-1 bg-blue-50">
        {screen === "thaiNumbersTest" && <ThaiNumbers />}
        {screen === "thaiNumbers20" && <ThaiNumbers20 />}
        {screen === "thaiNumbers100" && <ThaiNumbers20to100 />}
        {screen === "places" && <Places />}
        {screen === "places-test" && <PlacesQuiz />}
        {screen === "pronouns" && <Pronouns />}
        {screen === "verbs1" && <Verbs1 />}
        {screen === "verbs1-quiz" && <Verbs1Quiz />}
      </div>
    </div>
  );
};

export default App;
