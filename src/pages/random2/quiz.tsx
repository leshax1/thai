import React from "react";
import { random2 } from "../../shared/data/data";
import WordsQuiz from "../../shared/words-quiz/words-quiz";
import WordsQuizReverse from "../../shared/words-quiz-reverse/words-quiz-reverse";

const Random2Quiz: React.FC = () => {
  return (
    <div className="mx-4">
      <WordsQuiz data={random2} />
      <WordsQuizReverse data={random2} />
    </div>
  );
};

export default Random2Quiz;
