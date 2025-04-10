import logo from "../assets/logo 1.png";
import dot from "../assets/dot.png";
import { Button } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-12">
            <div className="d-flex justify-content-between py-4">
              <div>
                <img src={logo} alt="" className="img-fluid" />
              </div>
              <div>
                <Button
                  href="#"
                  className=" background-color_btn_2  rounded-pill border-0 font_size_15"
                >
                  <img src={dot} alt="" className="pe-1" /> Let’s Talk!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
