import Navbar from "./components/navbar";
import CardProject from "./components/cardProject";

export default function App() {
  return (
    <>
      <div className="absolute flex flex-col justify-center items-center w-full p-9 font-inter">
        <Navbar />
        <CardProject />
      </div>
      <div className="bg-gradient-to-b from-[#B8E2FF] to-[#F9D6FF] h-screen p-10"></div>
      <div className="bg-gradient-to-b from-[#F9D6FF] to-[#B8E2FF] h-screen p-10"></div>
      <div className="bg-gradient-to-b from-[#B8E2FF] to-[#F9D6FF] h-screen p-10"></div>
    </>
  );
}
