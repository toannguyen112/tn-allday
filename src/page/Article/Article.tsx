import "./article.scss";
import Submitt from "../../assets/Submitt.svg";
import ArrowDown from "../../assets/ArrowDown.svg";
import LayoutContent from "../../assets/LayoutContent.svg";
import Left from "../../assets/Left.svg";
import Right from "../../assets/Right.svg";
import LeftEffect from "../../assets/LeftEffect.svg";
import RightEffect from "../../assets/RightEffect.svg";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper";
import axios from "axios";
const Article = () => {
  const [isHoverLeft, setIsHoverLeft] = useState<boolean>(false);
  const [isHoverRight, setIsHoverRight] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const [category, setCategory] = useState<any>();
  const [dataFilter, setDataFilter] = useState<any>();
  const [titleFilter, setTitleFilter] = useState<any>();
  const swiperRef = useRef<any>(null);
  const handleNext = () => {
    swiperRef.current
      ? swiperRef?.current?.Swiper?.slideNext()
      : console.log("error");
  };
  const handlePrev = () => {
    swiperRef.current
      ? swiperRef?.current?.Swiper?.slidePrev()
      : console.log("error");
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://strapi-be-hg6l.onrender.com/api/categories?populate=*"
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
        const data: any = result.data;
        setCategory(data);
        setTitleFilter(data[0].attributes.title);
        getListCard(data);
      })
      .catch((error) => {
        // Handle error
      });
  }, []);

  const getListCard = (data: any) => {
    const chunkedPosts = [];
    for (
      let i = 0;
      i < data[0]?.attributes?.posts_alldays?.data?.length;
      i += 3
    ) {
      chunkedPosts.push(
        data[0]?.attributes?.posts_alldays?.data?.slice(i, i + 3)
      );
    }
    setDataFilter(chunkedPosts);
  };

  const getDataFilter = (title: any) => {
    setTitleFilter(title);
    const data = category?.filter((val: any) => {
      return val?.attributes?.title === title;
    });
    getListCard(data);
  };
  return (
    <div className="article-section">
      <div className="container">
        <div className="article-content">
          <div className="group-content">
            <p className="text-50" style={{ textAlign: "left" }}>
              Articles
            </p>
            <div
              className="group-dropdown"
              onClick={() => setIsHidden(!isHidden)}
            >
              <img src={Submitt} />
              <p className="text-16-600">{titleFilter}</p>
              {/* <input className="input-article" defaultValue="Polygon Allday" /> */}
              <img
                src={ArrowDown}
                className="arrow-icon"
                onClick={() => setIsHidden(!isHidden)}
              />
            </div>
            <div className="drop">
              <div className={isHidden ? "hidden" : "drop-down"}>
                <div className="dropdown-content">
                  {category?.length &&
                    category?.map((val: any) => {
                      return (
                        <div
                          className="group"
                          onClick={() => getDataFilter(val?.attributes?.title)}
                        >
                          <img
                            src={
                              val?.attributes?.icon
                                ? val?.attributes?.icon
                                : Submitt
                            }
                          />
                          {/* <div dangerouslySetInnerHTML={{ __html: svgContent }} /> */}
                          <p
                            className="text-14-400"
                            onClick={() => setIsHidden(true)}
                          >
                            {val?.attributes?.title}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="article-swiper">
            <div className="arrow">
              <img
                src={isHoverLeft ? LeftEffect : Left}
                className={`left ${isHoverLeft ? "fade-in" : "fade-out"}`}
                onMouseEnter={() => setIsHoverLeft(true)}
                onMouseLeave={() => setIsHoverLeft(false)}
                onClick={handlePrev}
              />
              <img
                src={isHoverRight ? RightEffect : Right}
                className={`right ${isHoverRight ? "fade-in" : "fade-out"}`}
                onMouseEnter={() => setIsHoverRight(true)}
                onMouseLeave={() => setIsHoverRight(false)}
                onClick={handleNext}
              />
            </div>
            <Swiper
              className=""
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={false}
              ref={swiperRef}
              loop={true}
              loopedSlides={3}
              slidesPerGroup={3}
              slidesPerView={"auto"}
              navigation={{
                nextEl: ".right",
                prevEl: ".left",
                // clickable: true,
              }}
              modules={[Navigation]}
            >
              {dataFilter?.map((card: any, index: any) => {
                return (
                  <SwiperSlide>
                    <div className="group-article">
                      <div className="group-card">
                        {card?.map((v: any) => {
                          return (
                            <div
                              className="card-monetization"
                              // style={{ width: "100%" }}
                            >
                              <div className="image-monetization">
                                <div className="img">
                                  <img
                                    src={
                                      v?.attributes?.thumbnail?.data?.attributes
                                        ?.url
                                        ? `https://strapi-be-hg6l.onrender.com${v?.attributes?.thumbnail?.data?.attributes?.url}`
                                        : LayoutContent
                                    }
                                  />
                                </div>
                              </div>
                              <p
                                className="text-16-600"
                                style={{ color: "#D4A555" }}
                              >
                                {v?.attributes?.title}
                              </p>
                              <span className="text-14-400">
                                {v?.attributes?.content}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Article;
