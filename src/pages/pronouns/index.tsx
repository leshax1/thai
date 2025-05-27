import React from "react";
import WordsTable from "../../shared/words-table/words-table";
import { pronouns } from "../../shared/data/data";

const Places: React.FC = () => {
  return (
    <div className="mx-4">
      <WordsTable data={pronouns}></WordsTable>
    </div>
  );
};

export default Places;
