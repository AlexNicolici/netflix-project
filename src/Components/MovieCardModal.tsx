import { IoMdClose } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { Box, Modal } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  addMovieToMyList,
  removeMovieFromMyList,
} from "../redux/reducer/movie.reducer";
import { MyMoviesListInterface } from "../redux/interfaces/movie.interface";

import Button from "./Button";

function MovieCardModal({
  movie,
  openModal,
  setOpenModal,
}: {
  movie: MyMoviesListInterface;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();

  const { actors, description, image_url, name } = movie;

  const {
    movie: { myMoviesList },
  } = useAppSelector((state) => ({
    movie: state.movie,
  }));

  const handleCloseModal = (event: any) => {
    event.stopPropagation();
    setOpenModal(false);
  };

  const getActorsNames = (
    actors: {
      id: number;
      label: string;
    }[]
  ) => {
    const newActorsList = actors.map((actor, idx: number) => {
      if (actors.length - 1 !== idx) {
        return actor.label + ",";
      }
      return actor.label;
    });
    return newActorsList.join(" ");
  };

  const movieActorsToString = getActorsNames(actors);

  const isAddedToMyList = myMoviesList.data.some((myMovie) => {
    return myMovie.name === movie.name;
  });

  return (
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
            backgroundImage: `${image_url ? `url(${image_url})` : ""}`,
          }}
        >
          <IoMdClose
            onClick={() => setOpenModal(false)}
            className="absolute top-2 right-2 text-[30px] text-white  bg-netflix-black active:bg-gray-500 transition ease-out duration-100 rounded-full cursor-pointer "
          />
          <div className="absolute top-[65%] text-white">
            <h3 className="font-bold text-3xl mb-5">{name}</h3>
            <div className="flex flex-row items-center">
              <Button>Redare</Button>
              {isAddedToMyList ? (
                <AiOutlineClose
                  onClick={() => {
                    dispatch(removeMovieFromMyList(movie));
                    setOpenModal(false);
                  }}
                  className="text-[45px] p-1 border-2 border-gray-400 hover:border-white bg-black  hover:bg-gray-300 hover:bg-opacity-10 bg-opacity-30 transition rounded-full mx-2 cursor-pointer"
                />
              ) : (
                <AiOutlinePlus
                  onClick={() => dispatch(addMovieToMyList(movie))}
                  className="text-[45px] p-1 border-2 border-gray-400 hover:border-white bg-black  hover:bg-gray-300 hover:bg-opacity-10 bg-opacity-30 transition rounded-full mx-2 cursor-pointer"
                />
              )}

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
            <p className="font-light text-base ">{description}</p>
          </div>
          <div className="w-1/4 text-sm">
            <h5 className="text-gray-500">
              Actori: <span className="text-white">{movieActorsToString}</span>
            </h5>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

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

export default MovieCardModal;
