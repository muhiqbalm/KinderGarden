import Navbar from "../components/navbar.js";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { FaEye, FaWindowClose } from "react-icons/fa";

export default function Riwayat() {
  const [cookies, setCookie] = useCookies(["history"]);
  const [data, setData] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    setData(cookies["history"]);
  }, [cookies]);

  return (
    <>
      {image && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center backdrop-blur-md justify-center z-50 bg-black bg-opacity-50">
          <img src={image} alt={"uploaded"} style={{ width: "600px" }} />
          <button
            className="absolute top-10 right-10 text-white px-2 py-1 hover:text-blue-400 transform transition duration-300"
            onClick={() => setImage(null)}
          >
            <FaWindowClose className="scale-150" />
          </button>
        </div>
      )}
      <Navbar menu={"history"} />
      <div className="px-40 pb-20">
        <h1 className="text-2xl py-8 flex flex-col h-full font-bold mb-4">
          Riwayat Dari Hasil Pencarian Anda
        </h1>
        {/* <RiwayatTable /> */}
        <table className="min-w-full divide-y divide-green-400">
          <thead>
            <tr>
              <th className="px-6 py-3 border-2 border-black bg-[#588534]  text-left text-2xl font-medium text-white tracking-wider">
                No
              </th>
              <th className="px-6 py-3 border-2 border-black bg-[#588534] text-center text-2xl font-medium text-white tracking-wider">
                Hasil Prediksi
              </th>
              <th className="px-6 py-3 border-2 border-black bg-[#588534] text-center text-2xl font-medium text-white tracking-wider">
                Confidence
              </th>
              <th className="px-6 py-3 border-2 border-black bg-[#588534] text-center text-2xl font-medium text-white tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr className="bg-white">
                  <td className="px-6 py-4 border-2 border-[#588534] whitespace-nowrap text-sm font-medium text-gray-900">
                    {index}
                  </td>
                  <td className="px-6 py-4 border-2 border-[#588534] whitespace-nowrap text-sm text-gray-500 ">
                    {item.prediction}
                  </td>
                  <td className="px-6 py-4 border-2  border-[#588534] whitespace-nowrap text-sm text-gray-500">
                    {item.confidence}%
                  </td>
                  <td className="px-6 py-4 border-2 flex justify-center border-[#588534]  whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => setImage(item.imageURL)}
                      class="bg-[#B14646] flex items-center hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full "
                    >
                      <FaEye className="mr-3" />
                      Lihat Gambar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
