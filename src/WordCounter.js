import React, { useState } from "react";

function WordCounter() {
  const [paragraph, setParagraph] = useState("");
  const noofwords = () => {
    const words = paragraph.trim().split(/\s+/);
    return words.length;
  };

  return (
    <center>
      <div>
        <h1>Word Count</h1>
        <textarea
          rows="20"
          cols="60"
          placeholder="Input paragraph..."
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />
        <p>Word Count in the input paragraph: {noofwords()}</p>
      </div>
    </center>
  );
}

export default WordCounter;
