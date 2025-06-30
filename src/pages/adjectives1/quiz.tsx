import React from "react";
import { adjectives1 } from "../../shared/data/data";
import WordsQuiz from "../../shared/words-quiz/words-quiz";
import WordsQuizReverse from "../../shared/words-quiz-reverse/words-quiz-reverse";

const Adjectives1Quiz: React.FC = () => {
  return (
    <div className="mx-4">
      <WordsQuiz data={adjectives1} />
      <WordsQuizReverse data={adjectives1} />
    </div>
  );
};

export default Adjectives1Quiz;
