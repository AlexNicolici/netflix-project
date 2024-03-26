import React from "react";
import MovieCard from "../../Components/MovieCard";
import { useAppSelector } from "../../redux/store";

function MyList() {
  const {
    movie: { myMoviesList },
  } = useAppSelector((state) => ({
    movie: state.movie,
  }));

  return (
    <div className="px-[52px] flex flex-row">
      {myMoviesList.data.map((myMovie) => {
        return (
          <MovieCard
            key={myMovie.name}
            className="mx-2"
            width={300}
            movie={myMovie}
          />
        );
      })}
    </div>
  );
}

export default MyList;
