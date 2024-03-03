const NotchHeader = () => {
    return (
        <div className="flex flex-row justify-center w-full h-12 pt-6">
            <div className="flex flex-row w-[45%] h-12 bg-black rounded-xl px-2 justify-between items-center">
                <div className="flex flex-row items-center">
                    <img width={30} height={30} src="/notch-header/logo.svg" alt="logo" />
                    <p className="inline-block pl-1 text-lg font-semibold text-white">Notch</p>
                </div>
                <div className="flex flex-row justify-center gap-5 text-white">
                    <div className="flex flex-row gap-1">
                        <p>Product</p>
                        <img width={15} height={15} src="/notch-header/dropdown.svg" alt="dropdown menu" />
                    </div>
                    <p>Blog</p>
                    <p>Docs</p>
                    <p>Pricing</p>
                </div>

                <div className="flex flex-row items-center gap-2 text-white">
                    <p>LogIn</p>
                    <div className="px-3 py-1 text-black bg-white rounded-lg">Sign up free </div>
                </div>
            </div>
        </div>
    )
}

export default NotchHeader