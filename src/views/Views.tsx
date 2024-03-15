import { Link, Outlet } from "react-router-dom"

const Views = () => {

    return (
        <div className="w-full">
            <div className="w-full h-fit">
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

export default Views