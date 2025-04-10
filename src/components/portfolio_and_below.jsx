// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Portfolio_card } from "./portfolio_card.jsx";
import mac from "../assets/Portfolio_1.png";
import mob from "../assets/Portfolio_2.png";
// testimonials
import client from "../assets/client_image.png";
import client_logo from "../assets/client_logo.png";
import checked_square from "../assets/checked_square.png";
import "https://kit.fontawesome.com/34b5d4d2a7.js";
export function Portfolio_and_below() {
  return (
    <>
      {/* portfolio swiper */}
      <div className="container-fluid">
        <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={2}
          pagination={true}
          modules={[Pagination]}
          id="port_swiper_container"
          className="mySwiper"
        >
          <SwiperSlide id="port_swiper_slide">
            <Portfolio_card
              image={mac}
              card_title={"Foodhub Landing Page"}
              card_subtitle_1={"UX/UI"}
              card_subtitle_2={"Website"}
              card_subtitle_3={"E-commerce"}
            />
          </SwiperSlide>
          <SwiperSlide id="port_swiper_slide">
            {" "}
            <Portfolio_card
              image={mob}
              card_title={"Foodhub Landing Page"}
              card_subtitle_1={"UX/UI"}
              card_subtitle_2={"Website"}
              card_subtitle_3={"E-commerce"}
            />
          </SwiperSlide>
          <SwiperSlide id="port_swiper_slide">
            <Portfolio_card
              image={mac}
              card_title={"Foodhub Landing Page"}
              card_subtitle_1={"UX/UI"}
              card_subtitle_2={"Website"}
              card_subtitle_3={"E-commerce"}
            />
          </SwiperSlide>
          <SwiperSlide id="port_swiper_slide">
            {" "}
            <Portfolio_card
              image={mob}
              card_title={"Foodhub Landing Page"}
              card_subtitle_1={"UX/UI"}
              card_subtitle_2={"Website"}
              card_subtitle_3={"E-commerce"}
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
      {/* testimonials */}
      <div className="container testimonial py-5">
        <div className="row justify-content-between">
          <div className="col-xxl-12">
            <p className="font_size_50 font_weight_600">
              Hear What Our <br /> Customers Are Saying!
            </p>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xxl-5">
            <div className="col-xxl-12">
              <p className="fotn_size_20 font_weight_400">
                "Working with Codeship Pvt Ltd to design and develop our
                eCommerce website has been an absolute game-changer for our
                business. The team was professional, responsive, and truly
                understood our vision. The website they delivered is not only
                visually stunning but also fast, secure, and easy to navigate.
                Sales have significantly increased thanks to the seamless user
                experience and mobile optimization. We couldn't be happier with
                the results, and we highly recommend Codeship for anyone looking
                for a high-quality, custom-built eCommerce solution."
              </p>
            </div>
            <div className="col-xxl-12">
              <div className="client_swiper d-flex justify-content-between">
                <div className="client d-flex align-items-center">
                  <img src={client} alt="" />
                  <p className="ps-5">
                    Suyash Sharma <br />
                    Founder, Factory Made
                  </p>
                </div>
                <div className="customer_logo">
                  <img src={client_logo} alt="" />
                </div>
              </div>
              <button className="border-0 gradient_background px-4 py-3 rounded-circle mt-4">
                <i className="fa-solid fa-chevron-left text-white"></i>
              </button>
              <button className="border-0 gradient_background px-4 py-3 rounded-circle ms-5">
                <i className="fa-solid fa-chevron-right text-white"></i>
              </button>
            </div>
          </div>
          <div className="col-xxl-5 pt-3">
            <img className="img-fluid" src={checked_square} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
