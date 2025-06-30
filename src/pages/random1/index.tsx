import React from "react";
import WordsTable from "../../shared/words-table/words-table";
import { random1 } from "../../shared/data/data";

const Random1: React.FC = () => {
  return (
    <div className="mx-4">
      <WordsTable data={random1}></WordsTable>
    </div>
  );
};

export default Random1;
