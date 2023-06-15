
function SquarColor({ color, theam }) {
  return (
    <div style={{ "backgroundColor": color, "color": theam }} className="font-bold text-xl w-[min(33vw,60vh)] aspect-square bg-white border-4 border-black rounded-xl grid place-items-center">
      {color ? color : "empty valye"}
    </div>
  )
}

export default SquarColor