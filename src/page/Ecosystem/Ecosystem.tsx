import "./ecosystem.scss";
import {
  PolygonIcon,
  Twitter,
  TwitterEffect,
  Telegram,
  TelegramEffect,
  Discord,
  DiscordEffect,
  Starknet,
  Base,
  LayerZero,
  Linea,
  Optimism,
  Shardeum,
  Scroll,
  Oridinal,
  Solana,
  Arbitrum,
  Cosmos,
  CosmosR,
  BSC,
  Zksync,
  Ethereum,
  Aptops,
  Sui,
  BRC,
  Mantle,
  Gamefi,
  Metaverse,
  Dao,
  Web3,
  Layer2,
  NFT,
  Shape,
} from "../../assets/img";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll";
import Tilt from "react-parallax-tilt";
const Card: Array<{
  textClass: string;
  des: string;
  title: string;
  img: string;
}> = [
  {
    title: "POLYGON",
    des: "allday",
    textClass: "text-20 purple",
    img: PolygonIcon,
  },
  {
    title: "STARKNET",
    des: "allday",
    textClass: "text-20 starknet",
    img: Starknet,
  },
  {
    title: "BASE",
    des: "allday",
    textClass: "text-20 base",
    img: Base,
  },
  {
    title: "LAYER ZERO",
    des: "allday",
    textClass: "text-20",
    img: LayerZero,
  },
  {
    title: "LINEA",
    des: "allday",
    textClass: "text-20 ",
    img: Linea,
  },
  {
    title: "SHARDEUM",
    des: "allday",
    textClass: "text-20 ",
    img: Shardeum,
  },
  {
    title: "SCROLL",
    des: "allday",
    textClass: "text-20 scroll",
    img: Scroll,
  },
  {
    title: "ORDINAL",
    des: "allday",
    textClass: "text-20 ",
    img: Oridinal,
  },
  {
    title: "SOLANA",
    des: "allday",
    textClass: "text-20 solana",
    img: Solana,
  },
  {
    title: "OPTIMISM",
    des: "allday",
    textClass: "text-20 optimism",
    img: Optimism,
  },
  {
    title: "COSMOS",
    des: "allday",
    textClass: "text-20 cosmos",
    img: Cosmos,
  },
  {
    title: "ETHEREUM",
    des: "allday",
    textClass: "text-20 ethereum",
    img: Ethereum,
  },
  {
    title: "BSC",
    des: "allday",
    textClass: "text-20 bsc",
    img: BSC,
  },
  {
    title: "ZKSYNC",
    des: "allday",
    textClass: "text-20 zksync",
    img: Zksync,
  },
  {
    title: "ARBITRUM",
    des: "allday",
    textClass: "text-20 arbitrum",
    img: Arbitrum,
  },
  {
    title: "APTOS",
    des: "allday",
    textClass: "text-20",
    img: Aptops,
  },
  {
    title: "SUI",
    des: "allday",
    textClass: "text-20 sui",
    img: Sui,
  },
  {
    title: "BRC-20",
    des: "allday",
    textClass: "text-20 brc",
    img: BRC,
  },
  {
    title: "MANTLE",
    des: "allday",
    textClass: "text-20 mantle",
    img: Mantle,
  },
  {
    title: "GAMEFI",
    des: "allday",
    textClass: "text-20 gamefi",
    img: Gamefi,
  },
  {
    title: "METAVERSE",
    des: "melody",
    textClass: "text-20 metaverse",
    img: Metaverse,
  },
  {
    title: "DAO",
    des: "allday",
    textClass: "text-20 dao",
    img: Dao,
  },
  {
    title: "WEB-3",
    des: "allday",
    textClass: "text-20 web",
    img: Web3,
  },
  {
    title: "LAYER 2",
    des: "allday",
    textClass: "text-20 layer",
    img: Layer2,
  },
  {
    title: "NFT",
    des: "allday",
    textClass: "text-20 nft",
    img: NFT,
  },
];
const Ecosystem = () => {
  const [isMouseOver, setIsMouseOver] = useState<number>();
  const [isMouseTeleOver, setIsMouseTeleOver] = useState<number>();
  const [isMouseDiscordOver, setIsMouseDiscordOver] = useState<number>();

  const handleMouseEnter = (index: number) => {
    setIsMouseOver(index);
  };

  const handleMouseLeave = (index: number) => {
    setIsMouseOver(-1);
  };
  const handleMouseTeleEnter = (index: number) => {
    setIsMouseTeleOver(index);
  };

  const handleMouseTeleLeave = (index: number) => {
    setIsMouseTeleOver(-1);
  };
  const handleMouseDiscordEnter = (index: number) => {
    setIsMouseDiscordOver(index);
  };

  const handleMouseDiscordLeave = (index: number) => {
    setIsMouseDiscordOver(-1);
  };
  useEffect(() => {
    AOS.init();
  });
  return (
    <Element name="element2">
      <div className="ecosystem-section">
        <div className="container">
          <div className="title-ecosystem">
            <p
              className="text-60"
              style={{ color: "#F2BE64", marginBottom: "20px" }}
            >
              [ Our Media Ecosystem ]
            </p>
            <p className="text-26">
              The Allday Foundation passionately emphasizes culture, community,
              and <br />
              decentralization. We are here for that very reason!
            </p>
          </div>
          <div className="group-content">
            {Card?.map((val: any, index: any) => {
              return (
                <Tilt>
                  <div
                    key={index}
                    className="card-ecosystem"
                    data-aos="flip-down"
                    style={{ width: "100%" }}
                  >
                    <img src={Shape} />
                    <div className="content-card">
                      <div className="content">
                        <p className="text-28">{val?.title}</p>
                        <p className={val?.textClass}>{val?.des}</p>
                      </div>
                      <div className="banner-icon">
                        <img src={val?.img} />
                      </div>
                      <div className="dotted-line"></div>
                      <div className="group-button">
                        <div className="icon">
                          <img
                            className={
                              index === isMouseOver ? "fade-in" : "fade-out"
                            }
                            src={
                              index === isMouseOver ? TwitterEffect : Twitter
                            }
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                          />
                        </div>
                        <div className="icon">
                          <img
                            className={
                              index === isMouseTeleOver ? "fade-in" : "fade-out"
                            }
                            src={
                              index === isMouseTeleOver
                                ? TelegramEffect
                                : Telegram
                            }
                            onMouseEnter={() => handleMouseTeleEnter(index)}
                            onMouseLeave={() => handleMouseTeleLeave(index)}
                          />
                        </div>
                        <div className="icon">
                          <img
                            className={
                              index === isMouseDiscordOver
                                ? "fade-in"
                                : "fade-out"
                            }
                            src={
                              index === isMouseDiscordOver
                                ? DiscordEffect
                                : Discord
                            }
                            onMouseEnter={() => handleMouseDiscordEnter(index)}
                            onMouseLeave={() => handleMouseDiscordLeave(index)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              );
            })}
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Ecosystem;
