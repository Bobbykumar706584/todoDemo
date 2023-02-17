import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface DailogInterface {
  open: boolean;
  close: () => void;
}
const DailogBox = ({ open, close }: DailogInterface) => {
  return (
    <>
      <div className={`${open}:'hidden':'block'`}>hello world</div>
    </>
  );
};

export default DailogBox;
