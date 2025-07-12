import bannerOne from '../assets/Image/banner-1.jpg'
import bannerTwo from '../assets/Image/banner-2.jpg'

const Navber = () => {
    return (
        <div className="carousel w-full">
            {/* Slide 1 */}
            <div id="slide1" className="carousel-item relative w-full bg-gradient-to-r from-gray-200 to-white">
                <img
                    src={bannerOne}
                    className="w-full h-[450px] object-cover mix-blend-multiply"
                    alt="Slide 1"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            {/* Slide 2 */}
            <div id="slide2" className="carousel-item relative w-full md:h-[450px]  bg-gradient-to-r from-gray-200 to-white">
                <img
                    src={bannerTwo}
                    className="w-full h-[450px] object-cover mix-blend-multiply"
                    alt="Slide 2"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>


    );
};

export default Navber;