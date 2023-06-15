
function ColorInputField({ color, setColor }) {
    return (
        <form className="">
            <input
                className="pl-2 border-4 rounded-lg mt-3 w-[min(33vw,60vh)] aspect-[20/3]"
                type="text" placeholder="Enter a color"
                value={color}
                onChange={(e) => { setColor(e.target.value) }} />
        </form>
    )
}

export default ColorInputField