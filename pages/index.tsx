import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div
      className={
        "relative p-4 flex justify-center items-center h-screen bg-slate-200"
      }
    >
      <div className="relative  flex items-center justify-center w-[500px] h-[500px] rounded-[3.5rem] bg-gradient-to-r from-blue-400 to-purple-400">
        <span className=" font-extrabold z-20 text-[12rem] bg-clip-text text-transparent bg-gradient-to-bl from-yellow-400 to-amber-50">
          R
        </span>
        <span className="absolute pl-1 pb-1  font-extrabold text-[12rem] bg-clip-text text-transparent bg-gradient-to-t from-yellow-100 to-amber-100">
          R
        </span>
        <div
          className="absolute   w-[450px] h-[450px] bg-gradient-to-tr from-yellow-300 to-slate-200"
          style={{
            WebkitMask: "url(frame.svg)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "50% 50%",
            // WebkitMaskSize: "cover",
            // maskSize: "cover",
            // WebkitMask: "url(frame.svg)",
          }}
        ></div>
        <div className="absolute w-40  h-1 top-[1.55rem] left-16  flex items-center justify-center">
          <Glow />
        </div>
        <div className="absolute w-40  h-1 bottom-[1.55rem] right-16  flex items-center justify-center">
          <Glow />
        </div>
      </div>
    </div>
  );
};

export default Home;

const Glow = () => {
  return (
    <>
      <div
        className={"w-full h-full rounded-full"}
        style={{
          background:
            "linear-gradient(90deg, #fefce800 0%, #fefce8ff 50%, #fefce800 100%)",
        }}
      />
      <div
        className={"absolute w-full blur-[4px] h-2 rounded-full "}
        style={{
          background:
            "linear-gradient(90deg, #fff39c00 0%, #fff39cff 50%, #fff39c00 100%)",
        }}
      />
    </>
  );
};
