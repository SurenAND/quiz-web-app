import Quiz from "../../assets/images/quiz.svg";

function Main() {
  return (
    <div className="md:w-[45%] w-4/5 h-4/5 bg-violet-500 rounded-2xl m-auto p-10 flex flex-col items-center gap-20">
      {/* quiz img */}
      <img src={Quiz} alt="quiz" className="w-44" />
      <div className="bg-white p-3 rounded-xl w-5/6 h-1/4 shadow-2xl font-semibold">
        <p>
          1 - hich of these is NOT a playable character in &quot;Left 4
          Dead&quot;?
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 w-full">
        <button
          className="w-3/4 flex gap-2 bg-teal-300 p-2 rounded-md mx-auto focus:bg-teal-200
         shadow-2xl font-semibold"
        >
          1. Nick
        </button>
        <button
          className="w-3/4 flex gap-2 bg-teal-300 p-2 rounded-md mx-auto focus:bg-teal-200
         shadow-2xl font-semibold"
        >
          2. Louis
        </button>
        <button
          className="w-3/4 flex gap-2 bg-teal-300 p-2 rounded-md mx-auto focus:bg-teal-200
         shadow-2xl font-semibold"
        >
          3. Zoey
        </button>
        <button
          className="w-3/4 flex gap-2 bg-teal-300 p-2 rounded-md mx-auto focus:bg-teal-200
         shadow-2xl font-semibold"
        >
          4. Bill
        </button>
      </div>
    </div>
  );
}

export default Main;
