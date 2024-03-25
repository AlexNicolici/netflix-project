import React, { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import { Box, Modal } from "@mui/material";
import Button from "./Button";

const style = {
  position: "absolute" as "absolute",
  top: "30.5%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "47%",
  height: 500,
  bgcolor: "#141414",
  border: 0,
  p: 0,
  outline: 0,
};

function MovieCard({
  movieTtitle,
  movieDescription,
  movieGenre,
  movieImage,
  movieActors,
}: {
  movieGenre: string;
  movieImage: string;
  movieTtitle: string;
  movieDescription: string;
  movieActors: string;
}) {
  const [activeScale, setActiveScale] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = (event: any, reason: string) => {
    event.stopPropagation();
    setOpenModal(false);
  };

  return (
    <>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <div
            className="h-full  rounded-t-md  bg-center bg-cover bg-no-repeat
            bg-gradient-to-t from-netflix-black to-transparent w-full m-auto
            flex  px-[48px] py-5
            z-10 relative
            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-t
            before:from-netflix-black
            before:to-transparent
            before:opacity-100
            before:z-[-5]
            "
            style={{
              backgroundImage: `${movieImage ? `url(${movieImage})` : ""}`,
            }}
          >
            <IoMdClose
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-2 text-[30px] text-white  bg-netflix-black active:bg-gray-500 transition ease-out duration-100 rounded-full cursor-pointer "
            />
            <div className="absolute top-[65%] w-2/5 text-white">
              <h3 className="font-bold text-3xl mb-5">{movieTtitle}</h3>
              <div className="flex flex-row items-center">
                <Button>Redare</Button>
                <AiOutlinePlus className="text-[45px] p-1 border-2 border-gray-400 hover:border-white bg-black  hover:bg-gray-300 hover:bg-opacity-10 bg-opacity-30 transition rounded-full mx-2 cursor-pointer" />

                <div>
                  <span className="group relative">
                    <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                      <div className="flex flex-row justify-between bottom-full right-0 rounded-full bg-netflix-black p-3 text-xs text-white whitespace-nowrap">
                        <AiOutlineDislike className="text-[45px] p-1 mx-1 hover:bg-gray-300 hover:bg-opacity-30 hover:border-white transition rounded-full cursor-pointer" />
                        <AiOutlineLike className="text-[45px] p-1 mx-1 hover:bg-gray-300 hover:bg-opacity-30 hover:border-white transition rounded-full cursor-pointer" />
                        <AiOutlineHeart className="text-[45px] p-1 mx-1 hover:bg-gray-300 hover:bg-opacity-30 hover:border-white transition rounded-full cursor-pointer" />
                        <svg
                          className=" absolute left-0 top-full h-2 w-full text-black"
                          x="0px"
                          y="0px"
                          viewBox="0 0 255 255"
                          xmlSpace="preserve"
                        >
                          <polygon
                            className="fill-current"
                            points="0,0 127.5,127.5 255,0"
                          />
                        </svg>
                      </div>
                    </div>
                    <span>
                      <AiOutlineLike className="text-[45px] p-1 border-2 border-gray-400 hover:border-white bg-black  hover:bg-gray-300 hover:bg-opacity-10 bg-opacity-30 transition rounded-full  cursor-pointer" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between bg-netflix-black text-white px-[48px] py-5">
            <div className="w-2/3">
              <p className="font-light text-base">{movieDescription}</p>
            </div>
            <div className="w-1/4 text-sm">
              <h5 className="text-gray-500">
                Actori: <span className="text-white">{movieActors}</span>
              </h5>
            </div>
          </div>
        </Box>
      </Modal>
      <div
        onMouseEnter={() => setActiveScale(true)}
        onMouseLeave={() => setActiveScale(false)}
        className="rounded-md  bg-center bg-cover h-[155px] cursor-pointer"
        style={{
          backgroundImage: `${movieImage ? `url(${movieImage})` : ""}`,
        }}
      >
        {activeScale && (
          <div className="bg-netflix-black bg-opacity-80 rounded-md flex flex-col justify-between h-full py-1.5 px-2 ">
            <div className="w-full">
              <h3 className="font-semibold">{movieTtitle} </h3>
              <p className="font-light text-xs">{movieDescription}</p>
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center ">
                <IoIosPlay className="border-transparent  bg-white hover:bg-gray-200 transition rounded-full text-black text-[30px] text-center p-1" />

                <MdKeyboardArrowDown
                  onClick={handleOpenModal}
                  className="border-2 border-gray-400 hover:border-white transition rounded-full text-white text-[30px] ml-2"
                />
              </div>

              <p className="text-slate-200 text-base  font-light ml-3">
                •{movieGenre}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MovieCard;
