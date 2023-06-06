import Navbar from "../components/navbar.js";
import React from "react";
import RiwayatTable from "../components/RiwayatTable.js";

export default function riwayat() {
  return (
    <>
      <Navbar menu={"history"} />
      <div className="px-40 ">
        <h1 className="text-2xl py-8 flex flex-col h-full font-bold mb-4">
          Riwayat Dari Hasil Pencarian Anda
        </h1>
        <RiwayatTable />
      </div>
    </>
  );
}
