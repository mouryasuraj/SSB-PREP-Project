import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function StartTest() {
  const { id } = useParams();

  const remove0 = id.charAt(0) === "0" ? `${id.charAt(id.length - 1)}` : id;

  const word = useSelector((state) => state.word);
  const sets = word[remove0 - 1].set;
  let currentIndex = 1;
  const [words, setWords] = useState(sets[0]);

  // Logic to show different word from
  // useEffect(() => {
  //   setInterval(() => {
  //     setWords(sets[currentIndex]);
  //     currentIndex = ++currentIndex % sets.length
  //   }, 1000);
  // }, []);

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className="word text-green-500 text-5xl">{words}</div>
    </div>
  );
}

export default StartTest;
