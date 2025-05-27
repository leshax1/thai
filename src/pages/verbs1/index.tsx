import React from "react";
import WordsTable from "../../shared/words-table/words-table";
import { verbs1 } from "../../shared/data/data";

const Verbs1: React.FC = () => {
  return (
    <div className="mx-4">
      <WordsTable data={verbs1}></WordsTable>
    </div>
  );
};

export default Verbs1;
