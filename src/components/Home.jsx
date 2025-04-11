import { Button } from "react-bootstrap";
import header_image from "../assets/header_image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Service_data from "./Services_data";
import Abouts_data from "./About_data";
import background_image from "../assets/background_image.png";
import "swiper/css";
const Home = () => {
  return (
    // -------------------------------Start----------------------------//
    <>
      <section className="background-color_header d-flex justify-content-center">
        <div className="containers py-5 px-4  ">
          <div className="row ">
            <div className="col-md-7 col-xl-7 col-xxl-8 col-lg-7 ">
              <h1 className="font_size_42 font-weight-600 ">
                Bring Your Business Online
              </h1>
              <img src={header_image} alt="" className="img-fluid pt-3" />
            </div>
            <div className="col-md-5 col-xl-4 col-xxl-4 col-lg-5  bg-white p-0 br_15 ">
              <div className="py-4 px-3">
                <h2 className="text-center font_size_24 font-weight-700">
                  Let's Connect
                </h2>
                <p className="text-center font_size_12 text-body-tertiary ">
                  We develop unique creations
                </p>
                <form className="">
                  <div className="mb-3 ">
                    <input
                      type="text"
                      className="form-control shadow-none py-3  px-4 br_15 "
                      placeholder="Name *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control shadow-none py-3  px-4 br_15  "
                      placeholder="Mobile Number *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control shadow-none py-3  px-4 br_15"
                      placeholder="Email ID *"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control shadow-none pb-5 px-4 br_15 "
                      placeholder="Message"
                      rows="3"
                    ></input>
                  </div>

                  <div className="d-flex justify-content-center ">
                    <Button
                      type="submit"
                      className="btn  w-75 text-center border-0 br_10  background-color_btn_2"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="background_color">
        <section className="default_padding_top px-4 ">
          <div className="container background-color_sec_2 br_30 p-4">
            <div className="row pt-4">
              <div className="col-xl-4">
                <p className="font_size_28 font-weight-700">
                  Over 5000+ Clients <br /> around the world
                </p>
              </div>
              <div className="col-xl-8">
                <p className="font_size_16 font-weight-400">
                  Lorem ipsum dolor sit amet consectetur. Sed eget ullamcorper
                  turpis et. Pretium ipsum praesent id proin egestas nisl auctor
                  sit euismod. Sed amet vestibulum nibh nullam vestibulum ac
                  lacus. Hendrerit tristique duis suspendisse scelerisque
                  blandit. sit euismod.Hendrerit tristique duis suspendisse
                  scelerisque blandit.
                </p>
              </div>
            </div>

            <Swiper
              className="mySwiper pt-5 "
              id="swiper_1"
              slidesPerView={5}
              loop={true}
              modules={[Autoplay]}
              speed={11000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                650: { slidesPerView: 2 },
                983: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
                1629: { slidesPerView: 5 },
              }}
            >
              <SwiperSlide id="swiper-slide_1">TOYOTA</SwiperSlide>
              <SwiperSlide id="swiper-slide_1">Ubar</SwiperSlide>
              <SwiperSlide id="swiper-slide_1">Amazon</SwiperSlide>
              <SwiperSlide id="swiper-slide_1">Coinbase</SwiperSlide>
              <SwiperSlide id="swiper-slide_1">Credit karma</SwiperSlide>
              <SwiperSlide id="swiper-slide_1">TOYOTA</SwiperSlide>
              <SwiperSlide id="swiper-slide_1">Ubar</SwiperSlide>
              <SwiperSlide id="swiper-slide_1">Amazon</SwiperSlide>
              <SwiperSlide id="swiper-slide_1">Coinbase</SwiperSlide>
              <SwiperSlide id="swiper-slide_1">Credit karma</SwiperSlide>
            </Swiper>
          </div>
        </section>
        <div>
          <div className="text-center py-5 ">
            <h1 className="font_color_blue  font_size_18 font-weight-600">
              Our Services
            </h1>
            <p className="font_size_26 font-weight-600 m-0 p-0">
              We Develop & Create Digital
            </p>
            <p className="font_size_28 font-weight-600 m-0">Future</p>
          </div>
          <section>
            <div className="container pb-5">
              <div className="row justify-content-center ">
                {Service_data.map((service, index) => (
                  <div
                    className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 pt-5 position-relative default_padding"
                    key={index}
                  >
                    <div className="text-center bg-white  pt-5 pb-2  br_15 ">
                      <p className="font_size_28 font-weight-700">
                        {service.title}
                      </p>
                      <p className="font_size_14 font-weight-400 ">
                        {service.description}
                      </p>
                      <p className="font_color_blue pt-4">
                        Read More <i class="fa-solid fa-chevron-right"></i>
                      </p>
                    </div>
                    <div className="position-absolute position_size">
                      <img src={service.icon} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <section>
          <div className="container py-5 ">
            <h1 className="font_color_blue font_size_16 font-weight-600">
              About us
            </h1>
            <div className="row ">
              <div className="col-xl-6 col-lg-6  col-md-6">
                <p className="font_size_26 font-weight-600">
                  Powering Secure & <br /> Scalable Development <br /> for the
                  Future
                </p>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <p className="font_size_16 font-weight-500">
                  Lorem ipsum dolor sit amet consectetur. Sed eget ullamcorper
                  turpis et. Pretium ipsum praesent id proin egestas nisl auctor
                  sit euismod. Sed amet vestibulum nibh nullam vestibulum ac
                  lacus. Hendrerit tristique duis suspendisse scelerisque
                  blandit.
                </p>
                <p className="font_size_16 font-weight-500">
                  Lorem ipsum dolor sit amet consectetur. Sed eget ullamcorper
                  turpis et. Pretium ipsum praesent id proin egestas nisl auctor
                  sit euismod.
                </p>
              </div>
            </div>
            <div className="row pt-5">
              {Abouts_data.map((about, index) => (
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-6 pb-4"
                  key={index}
                >
                  <div className="d-flex justify-content-between bg-white p-3  br_20">
                    <div>
                      <img src={about.icon} alt="" />
                    </div>
                    <div>
                      <p className="font_size_39 font-weight-600 font_color_blue p-0 m-0 text-end">
                        {about.count}
                      </p>
                      <p className="font_size-17 font-weight-600 p-0 m-0 ">
                        {" "}
                        {about.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="container pb-5">
          <img src={background_image} alt="" className="img-fluid w-100" />
        </div>
        <section>
          <div className="container">
            <h1 className="font_color_blue font_size_16 font-weight-600">
              Our Portfolio
            </h1>
            <div className="row">
              <div className="col-xxl-8 col-xl-7 col-lg-5 col-md-4 col-sm-4">
                <p className="font_size_24 font-weight-600">
        
                  Some of our unique <br /> creations
                </p>
              </div>
              <div className="col-xxl-4 col-xl-5  col-lg-7 col-md-8 col-sm-8">
                <div className="row">
                  <div className="col-xl-3 col-6  pb-3">
                    <div>
                      <Button className="btn bg-white w-100 br_1 font_color_blue br_15 font_size_12 font-weight-500 hover">
                        All
                      </Button>
                    </div>
                  </div>
                  <div className="col-xl-3  col-6">
                    <div>
                      <Button className="btn bg-white  w-100 br_1 font_color_blue font_size_12  br_15  font-weight-500 hover">
                        Websites
                      </Button>
                    </div>
                  </div>
                  <div className="col-xl-3 col-6">
                    <div>
                      <Button className="bbtn bg-white  w-100 br_1 font_color_blue font_size_12 text-nowrap  br_15  font-weight-500 hover">
                        Mobile Apps
                      </Button>
                    </div>
                  </div>
                  <div className="col-xl-3  col-6">
                    <div>
                      <Button className="btn bg-white  w-100 br_1 font_color_blue font_size_12  br_15  font-weight-500 hover" >
                        UI UX
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
    // -------------------------end------------------------------------//
  );
};
export default Home;
