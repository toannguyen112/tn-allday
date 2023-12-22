import "./footer.scss";
import Twitter from "../../assets/Twitter.png";
import Telegram from "../../assets/Telegram.svg";
import Discord from "../../assets/Discord.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="group-content">
          <div className="contact">
            <p className="text-24">Follow us</p>
            <div className="group-icon">
              <div className="icon">
                <a href="https://twitter.com/">
                  <img src={Twitter} />
                </a>
              </div>
              <div className="icon">
                <a href="https://web.telegram.org/">
                  <img src={Telegram} />
                </a>
              </div>
              <div className="icon">
                <a href="https://discord.com/">
                  <img src={Discord} />
                </a>
              </div>
            </div>
          </div>
          <span className="text-20 text">Copyright © 2023 Allday Network</span>
          <div className="group-email">
            <span className="text-16 text">SUBSCRIBE TO ABOUT US</span>
            <div className="group-input" style={{ cursor: "pointer" }}>
              <input placeholder="Your Email" style={{ cursor: "pointer" }} />
              <div className="rectangle">
                <span className="text-16">SUBCRISE</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-180">allday foundation</p>
      </div>
    </footer>
  );
};
export default Footer;
