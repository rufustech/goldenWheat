import Link from "next/link";

export default function Logo() {
  return (
    <Link className="flex items-center p-2 cursor-pointer my-8" href={"/"}>
      <img
        src="./logo.png"
        alt="logo for The Golden Wheat. It is a pink background with a yellow wheat in the center. Click on here to navigate Home."
        className="w-12 md:w-24 lg:w-28 ml-4 my-4"
      ></img>
      <h2
        className={`text-yellow-400 text-[10px] md:text-xl  md:justify-between lg:text-2xl pl-2`}
      >
        THE GOLDEN <br></br> WHEAT FACTORY
      </h2>
    </Link>
  );
}
