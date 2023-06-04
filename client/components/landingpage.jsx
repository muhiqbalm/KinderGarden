import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";

export default function Landingpage() {
  return (
    <>
      <div className="z-10 h-full md:h-[100vh] bg-[#EDEDED] px-[50px] py-[50px] md:px-[100px] xl:px-[200px] xl:pb-[100px] flex flex-col-reverse md:grid md:grid-cols-2 md:gap-[100px] lg:gap-[200px] items-center">
        <div className=" text-black  justify-center">
          <p className="text-3xl leading-normal font-bold lg:text-4xl lg:leading-normal">
            Deteksi Penyakit Tanaman Tomat Anda dengan KinderGarden!
          </p>

          <p className="my-5 lg:leading-normal md:text-justify">
            KinderGarden membantu Anda mendeteksi penyakit pada tanaman tomat
            melalui gambar daun tomat yang Anda unggah dan diproses menggunakan
            image recognition dengan bantuan artificial intelligence
          </p>

          <button className="py-3 mt-3 px-[50px] lg:px-[75px] bg-[#588534] border-black text-white rounded-xl transform transition duration-300 scale-100 hover:scale-110">
            Get Started
          </button>
        </div>
        <Image
          className="z-8 p-5 pt-0 md:p-0 xl:pt-30 xl:pb-0 xl:pr-0"
          src="/tomat.png"
          alt=""
          width={50}
          height={50}
        />
      </div>
    </>
  );
}
