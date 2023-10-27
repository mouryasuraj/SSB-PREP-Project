import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function StartTest() {
  const { id } = useParams();
  const remove0 = id.charAt(0) === "0" ? `${id.charAt(id.length - 1)}` : id;


  const word = useSelector((state) => state.word);
  const sets = word[remove0 - 1].set;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState(sets[currentIndex]);

  // UseEffect To Show words every 15seconds
  useEffect(() => {
    if (currentIndex <= sets.length) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => prev + 1);
        setText(sets[currentIndex]);
      }, 15000);
      return () => clearInterval(interval);
    } else {
      setText("Test Finished");
    }
  }, [currentIndex, sets]);

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className="font-bold text-sky-900  text-6xl">{text}</div>

    </div>
  );
}

export default StartTest;
