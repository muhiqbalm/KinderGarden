import React from "react";
import Link from "next/link";
import Image from "next/image";
import Tomat from "../public/assets/tomat.svg";

export default function Landingpage() {
  return (
    <>
      <div className="z-10 h-full md:h-[100vh] bg-[#EDEDED] px-[50px] py-[50px] lg:px-40 md:px-10 xl:pb-[100px] flex flex-col-reverse md:grid md:grid-cols-2 md:gap-[100px] lg:gap-[200px] items-center ">
        <div className=" flex flex-col text-black  justify-center lg:pr-10">
          <p className="text-3xl leading-normal font-bold lg:text-4xl lg:leading-normal">
            Deteksi Penyakit
          </p>
          <p className="text-3xl text-[#B14646] leading-normal font-bold lg:text-4xl lg:leading-normal">
            Tanaman Tomat Anda
          </p>
          <p className="text-3xl text-[#588534] leading-normal font-bold lg:text-4xl lg:leading-normal">
            dengan KinderGarden!
          </p>

          <p className="my-5 lg:leading-normal text-justify">
            KinderGarden membantu Anda mendeteksi penyakit pada tanaman tomat
            melalui gambar daun tomat yang Anda unggah dan diproses menggunakan
            image recognition dengan bantuan artificial intelligence
          </p>

          <Link
            href="/upload"
            className="py-3 w-full text-center md:w-max px-[50px] lg:px-[75px] bg-[#588534] border-black text-white rounded-xl transform transition duration-300 scale-100 hover:scale-105 hover:bg-[#2d4f11]"
          >
            Get Started
          </Link>
        </div>
        <Image
          className="z-8 p-5 pt-0 w-[50vw] md:w-max md:p-0 xl:pt-30 xl:pb-0 xl:pr-0"
          src={Tomat}
          alt=""
          width={1000}
          height={1000}
        />
      </div>
    </>
  );
}
