export default function Navbar() {
  return (
    <>
      <div className="rounded-tl-[9px] rounded-tr-[9px] rounded-bl-[9px] rounded-br-[9px] bg-gradient-to-r from-[#e2c2fc] to-[#abf8fc] pr-[1.5px] pl-[1.5px] pt-[1.5px] pb-[1.5px] flex justify-center items-center font-inter font-bold text-[#141414]">
        <div className="rounded-lg bg-[#BBDFFE] py-3 px-9 flex justify-center items-center gap-6">
          <a href="#" className="text-sm">
            Inicio
          </a>
          <a href="#" className="text-sm">
            Proyectos
          </a>
          <a href="#" className="text-sm">
            Experiencia
          </a>
          <a href="#" className="text-sm">
            Contacto
          </a>
        </div>
      </div>
    </>
  );
}
