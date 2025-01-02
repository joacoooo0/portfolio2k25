import banner from "../assets/banner.jpg";
import perfil from "../assets/perfil.jpg";
//icons-social-media
import instagram from "../assets/social-media/instagram.svg";
import twitter from "../assets/social-media/twitter.svg";
import github from "../assets/social-media/github.svg";
import email from "../assets/social-media/email.svg";
import peru from "../assets/social-media/peru.svg";

export default function cardUser() {
  return (
    <>
      <div className="relative w-96 ">
        <img
          className="w-96 h-28 object-cover rounded-t-xl"
          src={banner}
          alt="banner-perfil"
        />
        <div className="bg-[#141215] font-bold w-96 p-5 flex flex-col items-center relative rounded-b-xl">
          <img
            className="rounded-full w-24 h-24 absolute -top-12 left-5 object-cover"
            src={perfil}
            alt="perfil"
          />
          <h1 className="text-3xl mt-10 w-full">Joaquin</h1>
          <span className="flex items-center w-full justify-start mt-2">
            <h1 className="text-sm mr-3">FRONTEND DEVELOPER</h1>
            <span className="h-4 w-0.5 rounded bg-white/10"></span>
            <img src={peru} alt="peru" className="ml-3 mr-1 w-auto h-5" />
            <h1>Perú</h1>
          </span>
          <p className="text-sm mt-2">
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested.
          </p>
          <div className="flex justify-start w-full mt-4 space-x-5 ">
            <a className="text-xl hover:text-white" href="">
              <img src={instagram} alt="" />
            </a>
            <a className="text-xl hover:text-white" href="">
              <img src={twitter} alt="" />
            </a>
            <a className="text-xl hover:text-white" href="">
              <img src={github} alt="" />
            </a>
            <a className="text-xl hover:text-white" href="">
              <img src={email} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
