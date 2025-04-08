import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "./root.css";
import HeadingLogo from "../assets/svg/HeadingLogo.svg";
import Music from "../assets/svg/Music.svg";
import Menu from "../components/Menu";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <header className="flex justify-between items-center px-[200px] py-7">
        <img
          src={HeadingLogo}
          alt="Dexinerd"
          className="w-[246.71px] h-[21px]"
        />
        <div className="flex items-center gap-5">
          <img src={Music} alt="Music" className="w-[45px] h-[45px]" />
          <button className="w-[149px] h-[45px] bg-[#121212] py-2.5 px-5 text-white font-normal font-open-sans rounded-4xl">
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
