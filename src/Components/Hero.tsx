import React, { useEffect, useState } from "react";
import Button from "./Button";
import ReactPlayer from "react-player";
import useRoutesHelper from "../hooks/useRoutesHelper";
import ButtonDropdown from "./ButtonDropdown";

interface HeroInterface {
  backgroundImage?: string;
  pageName?: string;
  movieGenre?: string;
  movieTitle?: string;
  movieDescription?: string;
  height?: number;
  pageType?: string;
}

function Hero({
  backgroundImage,
  movieTitle,
  movieDescription,
  height,
  pageType,
}: HeroInterface) {
  const { currentUrl } = useRoutesHelper();

  const [activeUrl, setActiveUrl] = useState<string>("/");

  useEffect(() => {
    const paramsStartingIndex = currentUrl.indexOf("?");

    const getSlicedString = () => {
      if (paramsStartingIndex > 0) {
        return currentUrl.substring(0, paramsStartingIndex);
      }
      return currentUrl;
    };
    setActiveUrl(`/${getSlicedString()}`);
  }, [currentUrl]);

  const getPageName = () => {
    if (activeUrl === "/movies") {
      return "Filme";
    }
    if (activeUrl === "/serials") {
      return "Seriale";
    }
    if (activeUrl === "/my-list") {
      return "Lista mea";
    }
    if (activeUrl === "/") {
      return "";
    }
  };

  const getBackgroundColor = () => {
    if (backgroundImage) {
      return `bg-[url('')]`;
    }
    return "bg-gradient-to-r from-cyan-500 to-blue-500";
  };
  return (
    <div
      className={`${getBackgroundColor()} cursor-default bg-center bg-cover bg-no-repeat duration-500
    bg-gradient-to-tr from-gray-600 to-gray-600 w-full m-auto
    flex 
    z-10 relative
    before:content-['']
    before:absolute
    before:inset-0
    before:block
    before:bg-gradient-to-tr
    before:from-gray-500
    before:to-gray-600
    before:opacity-40
    before:z-[-5]   `}
      style={{
        backgroundImage: `${backgroundImage ? `url(${backgroundImage})` : ""}`,
        height: height,
      }}
    >
      <ReactPlayer
        width="100%"
        height="830px"
        playing={true}
        duration={40}
        controls={false}
        muted
        url="https://www.dailymotion.com/video/x857fzj"
      />

      <div className="pl-[60px] flex flex-col justify-between h-[88%] absolute w-2/5  ">
        <div className="flex flex-row items-center py-3">
          <div className="text-white text-4xl font-semibold  pr-10">
            {getPageName()}
          </div>

          {activeUrl !== "/" && (
            <ButtonDropdown
              dropdownText="Genuri"
              pageType={pageType}
            ></ButtonDropdown>
          )}
        </div>

        <div>
          <div>
            <h1 className="text-white text-6xl font-bold mb-10 ">
              {movieTitle}
            </h1>
            <p className="text-white  text-lg mb-10">{movieDescription}</p>
          </div>

          <div className="flex flex-row ">
            <Button>Redare</Button>
            <Button type="info" buttonClassName="ml-3">
              Mai multe informatii
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
