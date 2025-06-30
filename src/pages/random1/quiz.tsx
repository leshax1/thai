import React from "react";
import { random1 } from "../../shared/data/data";
import WordsQuiz from "../../shared/words-quiz/words-quiz";
import WordsQuizReverse from "../../shared/words-quiz-reverse/words-quiz-reverse";

const Random1Quiz: React.FC = () => {
  return (
    <div className="mx-4">
      <WordsQuiz data={random1} />
      <WordsQuizReverse data={random1} />
    </div>
  );
};

export default Random1Quiz;
