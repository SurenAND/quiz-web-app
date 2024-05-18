import Quiz from "../../assets/images/quiz.svg";
import Start from "../../assets/images/start.svg";

const SetupPage = () => {
  return (
    <div className="md:w-[45%] w-4/5 h-4/5 bg-violet-500 rounded-2xl m-auto p-10 flex flex-col items-center gap-20">
      {/* quiz img */}
      <img src={Quiz} alt="quiz" className="w-44" />
      {/* title */}
      <h3 className="text-white text-xl font-bold">Setup Quiz</h3>
      {/* form */}
      <div className="w-3/4 flex flex-col gap-1">
        {/* number input */}
        <label className="pl-1 text-white text-sm font-semibold">
          Number Of Question
        </label>
        <input
          type="number"
          placeholder="Enter Number"
          className="p-2 rounded-md bg-yellow-300 focus:outline-none text-black"
        />
        <p className="text-red-300 text-sm">
          Please enter a number between 5 and 50
        </p>

        {/* category selection */}
        <label className="pl-1 text-white text-sm font-semibold">
          Category
        </label>
        <select className="p-2 rounded-md bg-yellow-300 focus:outline-none text-black">
          <option value="any">Any</option>
          <option value="9">General Knowledge</option>
          <option value="11">Film</option>
          <option value="15">Video Game</option>
        </select>

        {/* category selection */}
        <label className="pl-1 text-white text-sm font-semibold">
          Difficulty
        </label>
        <select className="p-2 rounded-md bg-yellow-300 focus:outline-none text-black">
          <option value="any">Any</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      {/* start btn */}
      <div className="flex flex-col items-center gap-1">
        <h4 className="text-white text-xs font-bold">START</h4>
        <div className="w-8 bg-white rounded-full p-0.5 cursor-pointer">
          <img src={Start} alt="space ship" />
        </div>
      </div>
    </div>
  );
};

export default SetupPage;
