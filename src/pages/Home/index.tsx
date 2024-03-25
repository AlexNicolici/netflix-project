import CarouselMoviesComponent from "../../Components/CarouselMoviesComponent";
import Hero from "../../Components/Hero";

import movies from "../../db/movies.json";

function Home() {
  return (
    <div>
      <Hero
        movieTitle="Cenusareasa"
        movieDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        height={830}
      />
      <div className="pl-[60px] bg-netflix-black py-[50px]  w-full">
        <CarouselMoviesComponent
          title="Recomandate"
          moviesList={movies.recommended}
        />
        <CarouselMoviesComponent
          title="Cele mai vizionate"
          moviesList={movies.mostWatched}
        />
        <CarouselMoviesComponent
          title="Animate"
          moviesList={movies.animations}
        />
        <CarouselMoviesComponent title="Actiune" moviesList={movies.action} />
        <CarouselMoviesComponent title="Comedie" moviesList={movies.comedy} />
        <CarouselMoviesComponent title="Drama" moviesList={movies.drama} />
        <CarouselMoviesComponent
          title="Fantastic"
          moviesList={movies.fantasy}
        />
      </div>
    </div>
  );
}

export default Home;
