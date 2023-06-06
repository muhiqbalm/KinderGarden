import React from "react";

const RiwayatTable = () => {
  const data = [
    {
      no: 1,
      tanggal: "john",
      namafile: "test",
      hasil: "daun",
    },
    {
      no: 2,
      tanggal: "budi",
    },
  ];
  return (
    <table className="min-w-full divide-y divide-green-400">
      <thead>
        <tr>
          <th className="px-6 py-3 border-2 border-black bg-[#588534]  text-left text-2xl font-medium text-white tracking-wider">
            No
          </th>
          <th className="px-6 py-3 border-2 border-black bg-[#588534] text-left text-2xl font-medium text-white tracking-wider">
            Tanggal
          </th>
          <th className="px-6 py-3 border-2 border-black bg-[#588534] text-left text-2xl font-medium text-white tracking-wider">
            Nama File
          </th>
          <th className="px-6 py-3 border-2 border-black bg-[#588534] text-left text-2xl font-medium text-white tracking-wider">
            Hasil
          </th>
          <th className="px-6 py-3 border-2 border-black bg-[#588534] text-left text-2xl font-medium text-white tracking-wider">
            Aksi
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr className="bg-white">
              <td className="px-6 py-4 border-2 border-[#588534] whitespace-nowrap text-sm font-medium text-gray-900">
                {item.no}
              </td>
              <td className="px-6 py-4 border-2 border-[#588534] whitespace-nowrap text-sm text-gray-500 ">
                {item.tanggal}
              </td>
              <td className="px-6 py-4 border-2 border-[#588534] whitespace-nowrap text-sm text-gray-500">
                {item.namafile}
              </td>
              <td className="px-6 py-4 border-2 border-[#588534] whitespace-nowrap text-sm text-gray-500">
                {item.hasil}
              </td>
              <td className="px-6 py-4 border-2 border-[#588534]  whitespace-nowrap text-sm text-gray-500">
                <button class="bg-[#B14646] hover:bg-[#588534] text-white font-bold py-2 px-4 rounded-full ">
                  Detail
                </button>
              </td>
            </tr>
          );
        })}
        {/* <tr className="bg-white">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            John Doe
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            2023-06-01
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Transaksi sukses
          </td>
        </tr> */}
        {/* <tr className="bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            Jane Smith
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            2023-06-02
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            Transaksi gagal
          </td>
        </tr> */}
        {/* Tambahkan baris data lainnya di sini */}
      </tbody>
    </table>
  );
};

export default RiwayatTable;
