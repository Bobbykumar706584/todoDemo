import { useState } from "react";
export default function Home() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  console.log(text);
  return (
    <>
      <div className="flex items-center p-4 justify-between bg-slate-300">
        <h1 className="text-2xl font-bold h-12 text-blue-500 place-self-end">
          To Do List
        </h1>

        <button
          type="button"
          onClick={handleClickOpen}
          className="font-bold mr-2 rounded bg-blue-500 font-serif border hover:text-black focus:outline border-1 hover:bg-blue-400 p-2 text-lg border-black place-"
        >
          Create
        </button>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } border border-black rounded h-44 m-2 w-4/12 bg-gray-50 relative left-1/3`}
        onClick={handleClickClose}
      >
        <div className="border-b-1 text-lg font-serif border-black bg-slate-400 p-2">
          Add Tasks
        </div>
        <div className="border-b-2 pb-2 mt-2">
          <div className="">
            <label className="mx-2 " htmlFor="content">
              Enter Task
            </label>
            <input
              onChange={handleChange}
              type="text"
              value={text}
              placeholder="Your task..."
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 mx-4">
          <button
            onClick={handleClickClose}
            className="border rounded p-2 border-black bg-red-600 hover:bg-red-500 text-white hover:text-black hover:border hover:border-black"
          >
            Cancel
          </button>
          <button className="bg-green-400 rounded p-2 hover:bg-green-300 border-2 border-black">
            Create
          </button>
        </div>
      </div>
    </>
  );
}
