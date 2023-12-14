import React, {useRef} from "react";
import Card from "./card";

function Forground() {
    const ref = useRef(null)
  const Data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus eveniet et neque illo vitae in facilis.",
      fileSize: "0.9mb",
      close: false,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus eveniet et neque illo vitae in facilis.",
      fileSize: "4.5mb",
      close: false,
      tag: { isopen: false, tagTitle: "Completed!", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus eveniet et neque illo vitae in facilis.",
      fileSize: "9mb",
      close: true,
      tag: { isopen: true, tagTitle: "Completed!", tagColor: "green" },
    },
  ];
  return ( 
      <div ref={ref} className="fixed flex flex-wrap gap-10 p-5 z-[3] left-0 top-0 h-full w-full ">
        {Data.map((items, index) => (
          <Card Data={items} reference={ref} />
        ))}
      </div>
  );
}

export default Forground;
