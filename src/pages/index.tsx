import React, { useState } from "react";
import DailogBox from "./DailogBox";

const Home = () => {
  let [open, setOpen] = useState(false);

  const handleClick = (): void => {
    setOpen(open);
  };
  const handleClose = (): void => {
    setOpen(false);
  };
  return (
    <>
      <div className="flex items-center justify-between bg-blue-900">
        <div
          className="font-serif p-2 font-semibold text-white hover:text-black
        "
        >
          Todo List
        </div>
        <button
          type="button"
          onClick={handleClick}
          className="m-2 p-2 rounded font-serif font-semibold text-white bg-blue-500 hover:bg-blue-400 hover:text-black shadow-gray-700 focus-visible:outline focus-visible:outline-2"
        >
          Add Todo
        </button>
      </div>
      <DailogBox open={open} close={handleClose} />
    </>
  );
};

export default Home;
