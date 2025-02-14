// T-shaped venue design
export default function TShapedVenue() {
  return (
    <div className="_TShaped_venue mt-10 bg-black/50 h-[60vh] w-[10vw] after:absolute after:mt-[20vh] after:left-[10vw] after:bg-black/50 after:w-[60vw] after:h-[20vh]">
      {/* Seats would go here */}
      <p className="absolute mt-[27vh] ml-[3vw] font-serif italic text-2xl ">
        Scene
      </p>
    </div>
  );
}
