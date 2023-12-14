import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion"


function card({ Data, reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileHover={{ scale: 0.9 }} whileDrag={{ scale: 1.5 }} className="relative w-60 h-72 bg-zinc-900/90 rounded-[20px] px-8 py-10 text-white overflow-hidden">
        <FaRegFileAlt />
        <p className="mt-5 leading-tight text-sm font-medium">
          {Data.desc}
        </p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between mb-2 py-3 px-8">
            <h5>{Data.fileSize}</h5>
            <span className="h-7 w-7 bg-zinc-400 flex items-center justify-center rounded-full">
              {Data.close ? <RxCross1 size="1em" color="#fff" /> : <LuDownload size="1em" color="#fff" />}
            </span>
          </div>
          {(Data.tag.isopen && <div className={`tag flex items-center justify-center w-full py-4 ${Data.tag.tagColor === 'blue' ? 'bg-blue-400' : 'bg-green-400'}`}>
            <h3 className="text-md font-semibold">{Data.tag.tagTitle}</h3>
          </div>)}
        </div>
      </motion.div>
    </>
  );
}

export default card;
