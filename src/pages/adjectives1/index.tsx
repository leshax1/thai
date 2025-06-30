import React from "react";
import WordsTable from "../../shared/words-table/words-table";
import { adjectives1 } from "../../shared/data/data";

const Adjectives1: React.FC = () => {
  return (
    <div className="mx-4">
      <WordsTable data={adjectives1}></WordsTable>
    </div>
  );
};

export default Adjectives1;
