import React, {useState} from "react";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";



const HeaderOptions = () => {
    const[selected, setSelected] = useState("/search");


  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className="flex space-x-6">
        <HeaderOption
          Icon={SearchIcon}
          title="All"
          selected={selected === "/search"}
          link="/search"
          onClick={() => setSelected("/search")}
        />
        <HeaderOption
          Icon={PhotographIcon}
          title="Images"
          selected={selected === "/image"}
          link="/image"
          onClick={() => setSelected("/image")}
        />
        <HeaderOption
          Icon={PlayIcon}
          title="Videos"
          selected={selected === "/videos"}
          link="/videos"
          onClick={() => setSelected("/videos")}
        />
        <HeaderOption
          Icon={NewspaperIcon}
          title="News"
          selected={selected === "/news"}
          link="/news"
          onClick={() => setSelected("/news")}
        />
        <HeaderOption
          Icon={MapIcon}
          title="Maps"
          selected={selected === "/maps"}
          link="/search"
          onClick={() => setSelected("/maps")}
        />
        <HeaderOption
          Icon={DotsVerticalIcon}
          title="More"
          selected={selected === "/more"}
          link="/search"
          // onClick={() => setSelected("/more")}
        />
      </div>

      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;