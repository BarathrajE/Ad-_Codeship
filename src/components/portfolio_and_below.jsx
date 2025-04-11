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
import Accordion from "react-bootstrap/Accordion";
export function Portfolio_and_below() {
  return (
    <>
      {/* portfolio swiper */}
      <div className="container-fluid py-5">
        <Swiper
          loop={true}
          spaceBetween={2}
          pagination={true}
          modules={[Pagination]}
          id="port_swiper_container"
          className="mySwiper"
          breakpoints={{
          755: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
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
          <div className="col-lg-6 col-12">
            <div className="col-xxl-12">
            <p className="font_size_28 font_weight_600 line_height_28">
              Hear What Our <br /> Customers Are Saying!
            </p>
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
            <div className="col-xxl-12 pb-5">
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
          <div className="col-lg-6 col-12 d-flex justify-content-xl-end justify-content-center">
            <img className="img-fluid" src={checked_square} alt="" />
          </div>
        </div>
      </div>
      {/* Faq */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-5">
            <p className="font_size_16 font-weight-600 font_color_blue" >Q & A'S</p>
            <p className="font_size_24 font-weight-600" >Frequently asked questions!</p>
          </div>
          <div className="col-12 col-md-7">
            <div>
              <Accordion defaultActiveKey="0" className="border-0 border-top border-bottom">
                <Accordion.Item eventKey="0" className="bg-transparent border-0 border-bottom">
                  <Accordion.Header className="bg-transparent border-0">
                    <p className="font_size_20 font-weight-600 m-0" >01 &nbsp; &nbsp; &nbsp;  Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                     </Accordion.Header>
                  <Accordion.Body className="font_size_14 font-weight-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="bg-transparent border-0 border-bottom">
                  <Accordion.Header className="bg-transparent border-0">
                    <p className="font_size_20 font-weight-600 m-0" >02 &nbsp; &nbsp; &nbsp;  Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                     </Accordion.Header>
                  <Accordion.Body className="font_size_14 font-weight-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="bg-transparent border-0 border-bottom">
                  <Accordion.Header className="bg-transparent border-0">
                    <p className="font_size_20 font-weight-600 m-0" >03 &nbsp; &nbsp; &nbsp;  Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                     </Accordion.Header>
                  <Accordion.Body className="font_size_14 font-weight-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="bg-transparent border-0 border-bottom">
                  <Accordion.Header className="bg-transparent border-0">
                    <p className="font_size_20 font-weight-600 m-0" >04 &nbsp; &nbsp; &nbsp;  Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                     </Accordion.Header>
                  <Accordion.Body className="font_size_14 font-weight-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="bg-transparent border-0 border-bottom">
                  <Accordion.Header className="bg-transparent border-0">
                    <p className="font_size_20 font-weight-600 m-0" >05 &nbsp; &nbsp; &nbsp;  Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                     </Accordion.Header>
                  <Accordion.Body className="font_size_14 font-weight-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className="bg-transparent border-0 border-bottom">
                  <Accordion.Header className="bg-transparent border-0">
                    <p className="font_size_20 font-weight-600 m-0" >06 &nbsp; &nbsp; &nbsp;  Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                     </Accordion.Header>
                  <Accordion.Body className="font_size_14 font-weight-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                 </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
