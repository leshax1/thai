import React from "react";
import WordsTable from "../../shared/words-table/words-table";
import { random2 } from "../../shared/data/data";

const Random2: React.FC = () => {
  return (
    <div className="mx-4">
      <WordsTable data={random2}></WordsTable>
    </div>
  );
};

export default Random2;
