import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
const ref =useRef(null);


  const data = [
    {
      desc: "this is the dynamic value",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download now", tagcolor: "blue",},
    },
    {
      desc: "this is the dynamic value",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download now", tagcolor: "green",},
    },
    {
      desc: "this is the dynamic value",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload", tagcolor: "green",},
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
     {data.map((item, index)=>(
      <Card data={item} reference = {ref}/>
     ))}
    </div>
  );
}

export default Foreground;
