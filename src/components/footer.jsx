import facebook from "../assets/facebook.png";
import logo from "../assets/logo_2.png";
import insta from "../assets/insta.png";
import linkeden from "../assets/linkeden.png";
import twitter from "../assets/X.png";
const Footer = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container pt-4 default_padding">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-12 ">
              <div className="">
                <img src={logo} alt="" />
                <p className="font_size_28 font-weight-500">www.codeship.in</p>
                <div className="d-flex gap-3 pb-4">
                  <img src={facebook} alt="" />
                  <img src={insta} alt="" />
                  <img src={linkeden} alt="" />
                  <img src={twitter} alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-12  ">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                  <p className="font_color_blue font_size_24 font-weight-600">
                    {" "}
                    Stay in Touch
                  </p>
                  <p className="font_size_20 font-weight-400">Instagram</p>
                  <p className="font_size_20 font-weight-400"> Facebook</p>
                  <p className="font_size_20 font-weight-400">Linked In</p>
                  <p className="font_size_20 font-weight-400"> Twitter</p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                  <p className="font_color_blue font_size_24 font-weight-600">
                    {" "}
                    Policy
                  </p>
                  <p className="font_size_20 font-weight-400">
                    {" "}
                    Terms & Conditions
                  </p>
                  <p className="font_size_20 font-weight-400">
                    {" "}
                    Privacy Policy
                  </p>
                  <p className="font_size_20 font-weight-400"> Refund Policy</p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                  <p className="font_color_blue font_size_24 font-weight-600">
                    Know More
                  </p>
                  <p className="font_size_20 font-weight-400">Help & contact</p>
                  <p className="font_size_20 font-weight-400">About us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p className="text-center font_size_11 pt-2">
          © Copyright 2021 - 2024 Codeship pvt Ltd. All Rights Reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;

