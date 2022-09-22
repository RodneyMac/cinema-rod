import React, { useState } from "react";

const seatsList = [
  {
    id: 1,
    title: "1",
    status: true,
  },
  {
    id: 2,
    title: "2",
    status: false,
  },
  {
    id: 3,
    title: "3",
    status: true,
  },
  {
    id: 4,
    title: "4",
    status: true,
  },
];

const MovieRequest = ({showModal}) => {
  const [selected, setSelected] = useState(seatsList);
  const [count, setCount] = useState(0);

  const handleSelectSeat = (e) => {
    setSelected(!selected);

    // console.log(e.target.value);

    setCount({
      ...count,
      [e.target.name]: e.target.value,
    });

    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      setCount(count + 1);
      if (e.target.value === "false") {
        e.target.classList.add("no-active");
      }
    } else {
      e.target.classList.remove("active");
      setCount(count - 1);
    }

    // console.log("ID:", e.target.id);
  };

  return (
    <div className="w-90 h-auto bg-white rounded relative z-0 top-20 sticky flex flex-col">
      <h2 className="text-slate-800 font-bold my-2">Movie Request</h2>
      <div className="text-blue-700 flex m-auto items-center p-4 my-2 w-96 border rounded border-gray-200">
        <div className="font-bold">Movie:</div><h4 className="text-gray-800">{showModal}</h4>
      </div>
      <div className="grid grid-cols-2">
        <div className="">
          <select name="Hour" className="w-40">
            <option value="Hour">Hour</option>
            <option value="13:00 hs">13:00 hs</option>
            <option value="13:00 hs">15:00 hs</option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4>Seats</h4>
          <div className="w-40 h-40 grid grid-cols-4 grid-rows-4 gap-2">
            {seatsList.map((item) => (
              <button
                key={item.id}
                id={item.id}
                value={item.status}
                className={
                  item.status
                    ? "bg-slate-200 cursor-pointer rounded"
                    : "no-active rounded focus:invalid"
                }
                onClick={item.status ? handleSelectSeat : null}
              >
                {item.title}
              </button>
            ))}
            <div className="flex text-blue-800">
              Quantity:<h4 className="mx-2 text-green-600">{count}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRequest;
