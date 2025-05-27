import React from "react";
import { verbs1 } from "../../shared/data/data";
import WordsQuiz from "../../shared/words-quiz/words-quiz";
import WordsQuizReverse from "../../shared/words-quiz-reverse/words-quiz-reverse";

const Verbs1Quiz: React.FC = () => {
  return (
    <div className="mx-4">
      <WordsQuiz data={verbs1} />
      <WordsQuizReverse data={verbs1} />
    </div>
  );
};

export default Verbs1Quiz;
