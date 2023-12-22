import "./trackrecord.scss";
import Eye from "../../assets/Eye.svg";
import Glass from "../../assets/Glass.svg";
import Pointer from "../../assets/Pointer.svg";
import LayoutContent from "../../assets/LayoutContent.svg";
import { Element } from "react-scroll";
import { useEffect, useState } from "react";
import axios from "axios";
const TrackRecord = () => {
  const [dataPost, setDataPost] = useState<any>();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://strapi-be-hg6l.onrender.com/api/posts-alldays?filters[isTop][$eq]=true&populate=*"
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData()
      .then((result) => {
        setDataPost(result.data);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);
  return (
    <Element name="element3">
      <div className="track-section">
        <div className="container">
          <div className="content">
            <div className="content-track">
              <div className="title">
                <p className="text-50" style={{ marginBottom: "15px" }}>
                  Our Track Record
                </p>
                <p className="text-26" style={{ marginTop: "15px" }}>
                  Maximize the visibility of our esteemed clients and partners
                  with millions of views and impressions.
                </p>
              </div>
              <div className="group-content">
                <div className="card-track">
                  <div className="image-track">
                    <img src={Eye} />
                  </div>
                  <p className="text-40-600" style={{ color: "#F6CC70" }}>
                    150+
                  </p>
                  <p className="text-20-400">Projects Partnered</p>
                </div>
                <div className="card-track">
                  <div className="image-track">
                    <img src={Glass} />
                  </div>
                  <p className="text-40-600" style={{ color: "#F6CC70" }}>
                    450,000+
                  </p>
                  <p className="text-20-400">Community Members</p>
                </div>
                <div className="card-track">
                  <div className="image-track">
                    <img src={Pointer} />
                  </div>
                  <p className="text-40-600" style={{ color: "#F6CC70" }}>
                    40+
                  </p>
                  <p className="text-20-400">Monthly Impressions</p>
                </div>
              </div>
            </div>
            <div className="content-monetization">
              <p className="text-60" style={{ color: "#F6CC70" }}>
                MONETIZATION
              </p>
              <div className="group-content">
                {/* <div
                  className="card-monetization"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.location.href = "http://google.com.vn/";
                  }}
                >
                  <div className="image-monetization">
                    <img src={LayoutContent} />
                    <p className="text-16-800">
                      Giveaway
                      <span className="text-14-400">
                        Educate the Chain Station community on Web3 Platform
                      </span>
                    </p>
                  </div>
                </div> */}
                {dataPost?.length &&
                  dataPost?.map((val: any) => {
                    return (
                      <div
                        className="card-monetization"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          window.location.href = "http://google.com.vn/";
                        }}
                      >
                        <div className="image-monetization">
                          <div className="img">
                            <img
                              src={
                                val?.attributes?.thumbnail?.data?.attributes
                                  ?.url
                                  ? `https://strapi-be-hg6l.onrender.com${val?.attributes?.thumbnail?.data?.attributes?.url}`
                                  : LayoutContent
                              }
                            />
                          </div>
                          <p className="text-16-800">
                            {val?.attributes?.title}
                            <span className="text-14-400">
                              {val?.attributes?.content}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default TrackRecord;
