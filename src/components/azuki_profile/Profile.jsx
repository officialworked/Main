import React from "react";
import "./Profile.css";
import image1 from "../Assets/1.png";
import { FaXTwitter } from "react-icons/fa6";
import { BsDiscord } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

const Section = () => {
  return (
    <>
      <div className="main_container">
        <img className="cont" src={image1} alt="image" />
        <div className="cont1">
          <div className="name">
            <div className="left">
              <h1>Azuki</h1>
            </div>
            <div className="btn">
              <button>No Rug</button>
              <button>Airdrop</button>
              <button className="mark">Verified</button>
            </div>
            <div className="icon">
              <button>
                <TbWorldWww className="twitter-icon" />
              </button>
              <button>
                <BsDiscord className="twitter-icon" />
              </button>
              <button>
                <FaXTwitter className="twitter-icon" />
              </button>
            </div>
          </div>

          <div className="para">
            <p>
              Azuki has also been used as medicine since ancient times. On the
              other hand, the red color of Azuki was believed to symbolize
              “life,” such as the sun, fire, and blood
            </p>
          </div>
          <div className="vote">
            <div className="column1">
              <div className="first">Floor Price</div>
              <div className="row">4.45 ETH</div>
            </div>
            <div className="column2">
              <div className="first">Supply</div>
              <div className="row">44444</div>
            </div>
            <div className="column3">
              <div className="first">Blockchain</div>
              <div className="row">Ethereium</div>
            </div>
            <div className="column4">
              <div className="first">Mint Date</div>
              <div className="row1">3 Mar 2024</div>
            </div>
            <div className="column5">
              <div className="first">Mint Time</div>
              <div className="row2">1 : 00 om UTC</div>
            </div>
            <div className="column6">
              <div className="first">Vote</div>
              <div className="row">200000</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
