import { selectionProps } from "../../../types/types";

const Selection = ({ onchange, options }: selectionProps) => {
  return (
    <>
      <select
        className="p-2 rounded-md bg-yellow-300 focus:outline-none text-black"
        onChange={onchange}
      >
        <option value="any">Any</option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Selection;
