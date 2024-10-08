function Slider() {
    return (
        <div className="w-[95%] h-[100%]">
            <div className="carousel w-[100%] h-[100%] border-2">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-square bg-[#e0e0e0] rounded-none border-none text-[#a5a5a5] text-lg">❮</a>
                        <a href="#slide2" className="btn btn-square bg-[#e0e0e0] rounded-none border-none text-[#a5a5a5] text-lg">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-square bg-[#e0e0e0] rounded-none border-none text-[#a5a5a5] text-lg">❮</a>
                        <a href="#slide3" className="btn btn-square bg-[#e0e0e0] rounded-none border-none text-[#a5a5a5] text-lg">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-square bg-[#e0e0e0] rounded-none border-none text-[#a5a5a5] text-lg">❮</a>
                        <a href="#slide1" className="btn btn-square bg-[#e0e0e0] rounded-none border-none text-[#a5a5a5] text-lg">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider