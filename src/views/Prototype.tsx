import { Link, Outlet } from "react-router-dom"

const Prototype = () => {
    return (
        <div className="flex flex-col-reverse w-full ">
            <div className="w-full pt-12 h-fit">
                <Link to={'/'}>
                    <button className="px-8 pt-2">
                        <img className="rotate-180" src="/chevron-up.svg" alt="back-button" />
                    </button>
                </Link>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default Prototype