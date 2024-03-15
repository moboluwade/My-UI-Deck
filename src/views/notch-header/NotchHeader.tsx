import { useState } from "react"

const NotchHeader = () => {
    const [hovered, setHovered] = useState(false)
    const [clicked, setClicked] = useState(false)


    return (
        <div className="flex flex-col items-center w-full gap-2 pt-6 h-fit">
            <div className={`flex flex-row w-[45%] h-12 bg-black rounded-xl px-2 justify-between items-center ${clicked ? `rounded-br-none` : (hovered && `rounded-br-none`)}`}>
                <div className="flex flex-row items-center">
                    <img width={30} height={30} src="/notch-header/logo.svg" alt="logo" />
                    <p className="inline-block pl-1 text-lg font-semibold text-white">Notch</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-5 text-white">
                    <button
                        className="flex flex-row items-center gap-1">
                        <label htmlFor="dropdown"><p>Product</p></label>
                        <img
                            id="dropdown"
                            onMouseOver={() => setHovered(!hovered)}
                            onMouseLeave={() => setHovered(!hovered)}
                            onClick={() => setClicked(!clicked)}
                            width={15} height={15} src="/notch-header/dropdown.svg" alt="dropdown menu" />
                    </button>
                    <button><p>Blog</p></button>
                    <button><p>Docs</p></button>
                    <button><p>Pricing</p></button>
                </div>

                <div className="flex flex-row items-center gap-2 text-white">
                    <button><p>LogIn</p></button>
                    <button className="px-3 py-1 text-black duration-150 bg-white rounded-lg hover:-translate-y-[0.15rem]">Sign up free </button>
                </div>
            </div>
            <div className={`text-white bg-black w-[80%] h-32 rounded-xl duration-75 ${clicked ? `inline-block` : (hovered ? `inline-block` : `hidden`)} `}>

            </div>
        </div>
    )
}

export default NotchHeader