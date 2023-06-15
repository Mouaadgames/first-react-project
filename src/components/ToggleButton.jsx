
function ToggleButton({ toggle }) {
  return (
    <button onClick={toggle} className="border-2 border-blue-950  text-white bg-gray-600 rounded-lg w-[min(33vw,60vh)] aspect-[20/3]) py-2 mt-4">
      toggle
    </button>
  )
}

export default ToggleButton