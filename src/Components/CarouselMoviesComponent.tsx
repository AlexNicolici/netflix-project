import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import MovieCard from "./MovieCard";

function CarouselMoviesComponent({
  title,
  moviesList,
}: {
  title?: string;
  moviesList: {
    name: string;
    description: string;
    image_url: string;
    category: {
      id: number;
      label: string;
    };
    actors: {
      id: number;
      label: string;
    }[];
  }[];
}) {
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

  return (
    <div className="mb-5">
      <h1 className="text-white text-2xl font-semibold mb-2">{title}</h1>
      <Swiper
        className="product-images-slider text-white"
        modules={[Pagination, EffectFade, Navigation]}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          enabled: false,
          clickable: true,
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2.2,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3.2,
            spaceBetween: 5,
            slidesPerGroup: 3,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4.2,
            spaceBetween: 5,
            slidesPerGroup: 4,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
          // when window width is >= 1100px
          1100: {
            slidesPerView: 5.2,
            spaceBetween: 8,
            slidesPerGroup: 5,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
          // when window width is >= 1400px
          1400: {
            slidesPerView: 6.2,
            spaceBetween: 8,
            slidesPerGroup: 6,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          },
        }}
        onSlideChange={() => console.log("slide change")}
      >
        {moviesList.map((movie) => {
          const movieActors = getActorsNames(movie.actors);

          return (
            <SwiperSlide key={movie.name}>
              <MovieCard
                movieActors={movieActors}
                movieImage={movie.image_url}
                movieGenre={movie.category.label}
                movieTtitle={movie.name}
                movieDescription={movie.description}
              />
            </SwiperSlide>
          );
        })}

        <div className="swiper-pagination " />

        <div className="swiper-button-next " />
        <div className="swiper-button-prev " />
      </Swiper>
    </div>
  );
}

export default CarouselMoviesComponent;
