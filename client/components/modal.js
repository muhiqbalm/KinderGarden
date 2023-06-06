import React from "react";
import Image from "next/image";

const Modal = ({ isOpen, prediction, confidence, url, setIsOpen }) => {
  if (isOpen == false) return null;

  var data = {
    Bukan_Daun:
      "Hasil prediksi anda menunjukkan bahwa gambar yang anda upload bukanlah daun. Coba upload gambar yang lebih sesuai",
    Tomato___Bacterial_spot:
      "Tomato Bacterial Spot (bintik bakteri pada tomat) adalah sebuah penyakit yang menyerang tanaman tomat. Penyakit ini disebabkan oleh bakteri yang dikenal dengan nama Xanthomonas campestris pv. vesicatoria. Bakteri ini dapat menginfeksi tanaman tomat dan menyebabkan gejala berupa bintik-bintik berwarna coklat atau hitam pada daun, batang, dan buah tomat.",
    Tomato___Early_blight:
      "Tomato Early Blight (bintik awal pada tomat) adalah penyakit yang umum terjadi pada tanaman tomat. Penyakit ini disebabkan oleh jamur yang disebut Alternaria solani. Infeksi jamur ini dapat menyebabkan kerusakan pada daun, batang, dan buah tomat.",
    Tomato___Late_blight:
      "Tomato Late Blight (bintik akhir pada tomat) adalah penyakit yang parah dan merusak yang menyerang tanaman tomat. Penyakit ini disebabkan oleh jamur yang dikenal sebagai Phytophthora infestans. Late Blight merupakan penyakit yang terkenal karena peran pentingnya dalam sejarah pertanian, terutama dalam kasus kelaparan di Irlandia pada abad ke-19.",
    Tomato___Leaf_Mold:
      "Tomato Leaf Mold (jamur pada daun tomat) adalah penyakit yang disebabkan oleh jamur Cladosporium fulvum. Penyakit ini umum terjadi pada tanaman tomat, terutama di daerah dengan kelembaban tinggi dan suhu yang sejuk. Tomato Leaf Mold dapat menyebabkan kerusakan pada daun tomat dan mempengaruhi pertumbuhan dan produksi tanaman.",
    Tomato___Septoria_leaf_spot:
      "Tomato Septoria Leaf Spot (bintik daun Septoria pada tomat) adalah penyakit yang umum terjadi pada tanaman tomat. Penyakit ini disebabkan oleh jamur Septoria lycopersici. Septoria Leaf Spot dapat menyebabkan kerusakan pada daun tomat dan mempengaruhi kesehatan dan produksi tanaman.",
    "Tomato___Spider_mites Two-spotted_spider_mite":
      "Two-spotted spider mite (Tetranychus urticae), juga dikenal sebagai tomato spider mite, adalah serangga kecil yang termasuk dalam keluarga Tetranychidae. Mereka adalah hama yang umum pada tanaman tomat dan dapat menyebabkan kerusakan serius pada tanaman jika tidak dikendalikan.",
    Tomato___Target_Spot:
      "Tomato Target Spot (bintik target pada tomat) adalah penyakit yang disebabkan oleh jamur Corynespora cassiicola. Penyakit ini umum terjadi pada tanaman tomat dan dapat menyebabkan kerusakan pada daun, batang, dan buah.",
    Tomato___Tomato_Yellow_Leaf_Curl_Virus:
      "Tomato Yellow Leaf Curl Virus (TYLCV) adalah penyakit viral yang menyerang tanaman tomat. Virus ini termasuk dalam keluarga Geminiviridae dan umumnya ditularkan oleh serangga vektor seperti whitefly (Bemisia tabaci). TYLCV dapat menyebabkan kerusakan yang signifikan pada tanaman tomat dan mengurangi produksi buah.",
    Tomato___Tomato_mosaic_virus:
      "Tomato Mosaic Virus (TMV) adalah penyakit viral yang umum terjadi pada tanaman tomat. Virus ini termasuk dalam keluarga Tobamovirus dan dapat menyebabkan kerusakan serius pada tanaman tomat dan tanaman solanaceous lainnya seperti paprika, terong, dan kentang.",
    Tomato___healthy:
      "Gambar daun yang anda upload menunjukkan bahwa daun tersebut sehat dan tidak memiliki penyakit",
  };

  var deskripsi = data[prediction];

  return (
    <div className="absolute inset-0 flex justify-center items-center z-50">
      <div className="fixed bg-black/50 backdrop-blur-sm">
        <button className="w-screen h-screen"></button>
      </div>
      <div className="w-[75vw] h-max bg-white rounded-2xl p-9 absolute top-16 shadow-lg flex flex-col items-center justify-center space-y-8">
        <h2 className="font-bold text-2xl mb-2 text-hitam">Hasil Prediksi</h2>
        <div className="flex flex-col items-center lg:flex-row-reverse">
          <img src={url} alt="Uploaded" className="w-[300px] my-2 lg:ml-10" />
          <div className="flex flex-col items-center">
            <p className="text-[#588534] font-bold text-2xl text-center">
              {prediction}
            </p>
            <p className="text-slate-500 text-center mb-2">
              Confidence: {confidence}%
            </p>
            <p className="text-slate-500 text-center mb-6">{deskripsi}</p>
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <button className="bg-slate-400 py-1 px-8 text-white font-bold text-lg rounded-full hover:bg-slate-500">
                RIWAYAT
              </button>
              <button
                className="bg-white border border-slate-400 py-1 px-8 text-slate-400 font-bold text-lg rounded-full hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                TUTUP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
