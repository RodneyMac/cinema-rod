import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

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
    status: false,
  },
  {
    id: 4,
    title: "4",
    status: true,
  },
  {
    id: 5,
    title: "5",
    status: false,
  },
  {
    id: 6,
    title: "6",
    status: true,
  },
  {
    id: 7,
    title: "7",
    status: false,
  },
  {
    id: 8,
    title: "8",
    status: true,
  },
  {
    id: 9,
    title: "9",
    status: true,
  },
  {
    id: 10,
    title: "10",
    status: false,
  },
  {
    id: 11,
    title: "11",
    status: true,
  },
  {
    id: 12,
    title: "12",
    status: false,
  },
];

const MovieRequest = ({ showModal, setShowModal, select, description }) => {
  const [selected, setSelected] = useState(seatsList);
  const [count, setCount] = useState(0);
  const [hour, setHour] = useState("");
  const [listId, setListId] = useState();
  const [detail, setDetail] = useState("");

  const handleSelectSeat = (e) => {
    setSelected(!selected);
    setCount({
      ...count,
      [e.target.name]: e.target.value,
    });

    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      setCount(count + 1);
      setListId({
        ...listId,
        [e.target.id]: e.target.title,
      });
      setHour(e.target.value);
      if (e.target.value === "false") {
        e.target.classList.add("no-active");
      }
    } else {
      e.target.classList.remove("active");
      setCount(count - 1);
      setListId({ ...(listId.length - 1) });
      setHour(e.target.value);
    }
    // console.log("ID:", e.target.id);
  };

  const handleSend = (e) => {
    e.preventDefault();
    console.log("Movie:", select);
    console.log("Ticket/s:", count);
    console.log("Seat/s number:", listId);
    console.log("Hour:", hour);
    console.log("Request number:", showModal);
  };

  return (
    <div className="w-auto h-auto mt-20 mb-20 flex flex-col justify-center bg-white rounded inset-0 fixed mx-4">
      <button
        className="flex hover:text-red-700 w-8 h-8 absolute right-0 top-0 bottom-0"
        onClick={() => setShowModal(!showModal)}
      >
        <IoClose className="w-8 h-8" />
      </button>
      <h2 className="text-slate-800 font-bold">Movie Request</h2>
      <div className="text-blue-700 flex flex-col m-auto self-center items-center my-2 w-11/12 mx-4 border rounded border-gray-200">
        <div className="font-bold">Movie:</div>
        <h4 className="text-gray-800 font-bold">{select}</h4>
        <div className="p-4">
          <div className="font-bold">Overview:</div>
          <textarea className="text-gray-800 p-2 text-center border rounded" value={description} onChange={setDetail}>{detail}</textarea>
        </div>
      </div>
      <div className="grid grid-cols-2 self-center w-11/12 border rounded">
        <div className="self-center">
          <select
            name="hour"
            className="w-20 cursor-pointer border"
            onChange={(e) => setHour(e.target.value)}
          >
            <option>Hour</option>
            <option value="13:00 hs">13:00 hs</option>
            <option value="15:00 hs">15:00 hs</option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4>Seats</h4>
          <div className="grid grid-cols-4 grid-rows-4 gap-2 items-center">
            {seatsList.map((item) => (
              <div className="" key={item.id}>
                <button
                  id={item.id}
                  value={item.status}
                  title={item.title}
                  className={
                    item.status
                      ? "bg-slate-200 cursor-pointer rounded"
                      : "no-active rounded focus:invalid"
                  }
                  onClick={item.status ? handleSelectSeat : null}
                >
                  {item.title}
                </button>
              </div>
            ))}
            <div className="flex text-blue-800">
              Quantity:<h4 className="mx-2 text-green-600">{count}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <button
          className="flex m-auto my-2 justify-center border w-16 bg-blue-600 text-white rounded p-1 hover:bg-blue-700"
          onClick={handleSend}
        >
          Send
        </button>
        <button
          className="flex m-auto my-2 justify-center border w-16 bg-blue-600 text-white rounded p-1 hover:bg-blue-700"
          onClick={() => setShowModal(!showModal)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieRequest;
