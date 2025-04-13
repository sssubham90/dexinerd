import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "./root.css";
import { Helmet } from "react-helmet";
import Hero from "../assets/webp/Hero.webp";
import HeadingLogo from "../assets/svg/HeadingLogo.svg";
import Music from "../assets/svg/Music.svg";
import Menu from "../components/Menu";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href={Hero} />
      </Helmet>
      <header className="flex justify-between items-center px-[200px] [@media(max-width:1520px)]:px-4 [@media(max-width:1520px)]:w-full py-7">
        <img
          src={HeadingLogo}
          alt="Dexinerd"
          className="w-[246.71px] [@media(max-width:600px)]:w-[55vw]"
        />
        <div className="flex items-center gap-5 [@media(max-width:600px)]:gap-[2vw]">
          <img
            src={Music}
            alt="Music"
            className="w-[45px] h-[45px] [@media(max-width:600px)]:w-[10vw] cursor-pointer"
          />
          <button className="w-[149px] h-[45px]  cursor-pointer [@media(max-width:600px)]:hidden bg-[#121212] py-2.5 px-5 text-white font-normal font-open-sans rounded-4xl">
            Let's connect
          </button>
          <Menu />
        </div>
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
