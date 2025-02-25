export default function capsula(props) {
  return (
    <>
      <div className="rounded-full bg-gradient-to-l from-[#2B393C] to-[#171B1D] py-1 px-4 flex justify-center items-center gap-6 w-24">
        <div
          href="#"
          className="text-white text-[10px] flex items-center justify-center gap-2"
        >
          <img src={props.imagen} alt="" className="w-[10px]" />
          {props.texto}
        </div>
      </div>
    </>
  );
}
