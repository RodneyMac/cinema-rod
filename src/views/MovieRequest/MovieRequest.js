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

const MovieRequest = () => {
  const [selected, setSelected] = useState(seatsList);

  const handleSelectSeat = () => {
    setSelected(!selected);
    // console.log("ID:", e.target.id);
  };

  return (
    <div className="w-90 h-auto bg-white rounded relative z-0 top-20 sticky">
      <h2 className="text-slate-800">Movie Request</h2>
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
              <button key={item.id} id={item.id}
                className={item.status ? "bg-slate-200 cursor-pointer rounded focus:bg-green-500 focus:text-white" : "bg-red-500 text-white cursor-pointer rounded"}
                onClick={handleSelectSeat}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieRequest;
