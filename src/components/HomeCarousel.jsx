import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../assets/bape1.jpg";
import banner2 from "../assets/MenitrasPalmares.jpg";

const banners = [banner1, banner2];

export default function HomeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {banners.map((img, i) => (
          <div key={i} className="w-full">
            <img
              src={img}
              className="w-full h-[500px] md:h-[900px] object-cover"
              alt={`banner-${i + 1}`}
              draggable={false}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
