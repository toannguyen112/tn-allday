import "./wedo.scss";
import Frame1 from "../../assets/Frame1.png";
import Frame2 from "../../assets/Frame2.png";
import Frame3 from "../../assets/Frame3.png";
import Frame4 from "../../assets/Frame4.png";
import { Element } from "react-scroll";

const Wedo = () => {
  return (
    <Element name="element4">
      <div className="section wedo-section">
        <div className="container">
          <div className="wedo-title">What We Do</div>
          <div className="top-wedo-content">
            <div className="right">
              <div className="card-wedo">
                <img src={Frame1} />
                <div className="title-card">
                  <p className="text-30" style={{ marginBottom: "10px" }}>
                    Social Media Awareness
                  </p>
                  <p className="text-16 para">
                    The Allday Foundation ecosystem is impressively
                    comprehensive. The AllDay brand actively contributes to and
                    BUIDLs connections on all major L0, L1, L2, and upcoming L3
                    blockchains. We are proud of our highly engaged crypto
                    communities and partners in the APAC region and the Web3
                    space.{" "}
                  </p>
                </div>
              </div>
              <div className="card-wedo">
                <img src={Frame2} />
                <div className="title-card">
                  <p className="text-30" style={{ marginBottom: "10px" }}>
                    Influencer Outreach
                  </p>
                  <p className="text-16 para">
                    Using influencers is the most efficient technique to
                    increase brand and product awareness for a project. Allday
                    Foundation excels in this area, having collaborated with
                    many different influencers and multi-platform Key Opinion
                    Leaders (KOLs), ranging from global to alpha to degen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-wedo-content">
            <div className="left">
              <div className="card-wedo">
                <img src={Frame3} />
                <div className="title-card">
                  <p className="text-30" style={{ marginBottom: "10px" }}>
                    Advisor Relationship
                  </p>
                  <p className="text-16 para">
                    The Allday Foundation takes great pride in its extensive
                    network of acquaintances and valued partners. Through our
                    efforts, we have successfully facilitated numerous
                    fundraising deals by connecting projects, builders and
                    investment funds.
                  </p>
                </div>
              </div>
              <div className="card-wedo">
                <img src={Frame4} />
                <div className="title-card">
                  <p className="text-30" style={{ marginBottom: "10px" }}>
                    Investing Like A Pro
                  </p>
                  <p className="text-16 para">
                    We goes beyond being just an investor.We provide
                    comprehensive support to our portfolio organizations,
                    prioritizing key areas to increase value and establish a
                    climate that allows our founders to focus on growth. As a
                    true partner, we are totally committed to our founders'
                    success and the expansion of the blockchain ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Wedo;
