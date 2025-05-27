import React from "react";
import { places } from "../../shared/data/data";
import WordsQuiz from "../../shared/words-quiz/words-quiz";
import WordsQuizReverse from "../../shared/words-quiz-reverse/words-quiz-reverse";

const PlacesQuiz: React.FC = () => {
  return (
    <div className="mx-4">
      <WordsQuiz data={places} />
      <WordsQuizReverse data={places} />
    </div>
  );
};

export default PlacesQuiz;
