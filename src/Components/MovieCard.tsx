import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";

import { MyMoviesListInterface } from "../interfaces/movie.interface";
import MovieCardModal from "./MovieCardModal";

function MovieCard({
  movie,
  width,
  className,
}: {
  className?: string;
  width?: number;
  movie: MyMoviesListInterface;
}) {
  const { category, description, image_url, name } = movie;

  const [activeScale, setActiveScale] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <MovieCardModal
        movie={movie}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <div
        onMouseEnter={() => setActiveScale(true)}
        onMouseLeave={() => setActiveScale(false)}
        className={`${className} rounded-md  bg-center bg-cover h-[155px] cursor-pointer`}
        style={{
          width,
          backgroundImage: `${image_url ? `url(${image_url})` : ""}`,
        }}
      >
        {activeScale && (
          <div className="bg-netflix-black text-white bg-opacity-80 rounded-md flex flex-col justify-between h-full py-1.5 px-2 ">
            <div className="w-full">
              <h3 className="font-semibold">{name} </h3>
              <p className="font-light text-xs line-clamp-3 py-0.5">
                {description}
              </p>
            </div>

            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center ">
                <IoIosPlay className="border-transparent  bg-white hover:bg-gray-200 transition rounded-full text-black text-[30px] text-center p-1" />

                <MdKeyboardArrowDown
                  onClick={() => setOpenModal(true)}
                  className="border-2 border-gray-400 hover:border-white transition rounded-full text-white text-[30px] ml-2"
                />
              </div>

              <p className="text-slate-200 text-base  font-light ml-3">
                •{category.label}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MovieCard;
