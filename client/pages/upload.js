import React, { useState, useRef, useEffect } from "react";
import Landingpage from "../components/landingpage.js";
import Navbar from "../components/navbar.js";

export default function upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showedImage, setShowedImage] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setShowedImage(URL.createObjectURL(file));
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (selectedImage) {
      const formData = new FormData();
      formData.append("file", selectedImage);

      const response = await fetch("http://127.0.0.1:5000/data", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setPrediction(data.predict);
      setConfidence(data.confidence);
    }
  };

  // cek apakah selectedImage masuk
  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);

  useEffect(() => {
    let stream = null;

    const enableCamera = async () => {
      try {
        if (isCameraActive) {
          stream = await navigator.mediaDevices.getUserMedia({
            video: isCameraActive,
          });

          // Use the stream to set the video source
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } else {
          // Turn off camera
          if (videoRef.current) {
            videoRef.current.srcObject = null;
          }
        }
      } catch (error) {
        // Handle error
        console.log(error);
      }
    };

    enableCamera();

    return () => {
      if (stream && stream.getTracks) {
        stream.getTracks().forEach((track) => {
          track.stop(); // Stop all tracks of the stream
        });
      }
    };
  }, [isCameraActive]);

  const handleTakeImageClick = async () => {
    setIsDeleted(false);
    try {
      if (isCameraActive) {
        // Stop the camera stream
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());

        setIsCameraActive(false);
      } else {
        // Start the camera stream
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        // Update the video source and play it
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        setIsCameraActive(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const handleStopCamera = () => {
    setSelectedImage(null);
    setShowedImage(null);
    setIsCameraActive(false);
  };

  const handleCaptureImageClick = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Set the canvas size to match the video frame
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    // Draw the video frame on the canvas
    context.drawImage(
      videoRef.current,
      0,
      0,
      videoRef.current.videoWidth,
      videoRef.current.videoHeight
    );

    // Convert the canvas image to a data URL
    const dataUrl = canvas.toDataURL("image/png");

    // Set the captured image as the selected image
    // setSelectedImage(dataUrl);
    setShowedImage(dataUrl);
    setIsCameraActive(false);
  };

  const handleRemoveImageClick = () => {
    setSelectedImage(null);
    setShowedImage(null);
    setIsDeleted(true);
  };

  return (
    <>
      <Navbar menu={"upload"} />
      <div className="container px-4 md:px-10 lg:px-40 py-8 flex flex-col h-full justify-center">
        <p className="text-2xl font-bold mb-4 text-black text-center">
          Image Upload
        </p>
        <div className="mb-4">
          {showedImage ? (
            <div className="relative">
              <img
                src={showedImage}
                alt="Selected"
                className="w-full max-w-md mx-auto"
              />
              <button
                onClick={handleRemoveImageClick}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-800 transform transition duration-300"
              >
                Remove
              </button>
            </div>
          ) : (
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
              ></video>
            </div>
          )}
        </div>
        <div className="">
          <label htmlFor="fileInput" className="block mb-2">
            Upload Image:
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileInputChange}
            className="border border-slate-200 shadow-md p-3"
          />
        </div>
        <div className="mb-4 h-full">
          {isCameraActive && isDeleted !== true && (
            <div className="relative h-full">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{
                  position: "absolute",
                  top: 0,
                  height: "100%",
                }}
              ></canvas>
            </div>
          )}
        </div>
        <div className="flex">
          {isCameraActive && isDeleted !== true && (
            <button
              onClick={handleCaptureImageClick}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-800 transform transition duration-300"
            >
              Capture
            </button>
          )}

          {isCameraActive ? (
            <button
              onClick={handleStopCamera}
              className={`bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-800 transform transition duration-300`}
            >
              Stop Camera
            </button>
          ) : (
            <button
              disabled={selectedImage === null ? false : true}
              onClick={handleTakeImageClick}
              className={`bg-cyan-600 text-white px-4 py-2 rounded mr-2 hover:bg-cyan-800 transform transition duration-300`}
            >
              Start Camera
            </button>
          )}
          {selectedImage !== null ? (
            <button
              onClick={handleFormSubmit}
              className={`bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-800 transform transition duration-300`}
            >
              Predict
            </button>
          ) : (
            <></>
          )}
          {prediction !== null ? (
            <div className="flex flex-col">
              <h2>Prediction: {prediction}</h2>
              <h2>Confidence: {confidence}%</h2>
            </div>
          ) : (
            <p>prediksi belum dilakukan</p>
          )}
        </div>
      </div>
    </>
  );
}
