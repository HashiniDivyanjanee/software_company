import React from "react";
import "./about.css";
import About_img from '../../image/about (1).jpg'

const about = () => {
  return (
    <>
      <section className="about">
        <div className="content">
          <h2 className="main-title">ABOUT US</h2>
          <div className="story-box">
            <p className="sub-title">Est-2022</p>
            <h3 className="sub-title2">Our Story</h3>
            <p className="description">
              Inventore aliquam beatae at et id alias. Ipsa dolores amet
              consequuntur minima quia maxime autem. Quidem id sed ratione.
              Tenetur provident autem in reiciendis rerum at dolor. Aliquam
              consectetur laudantium temporibus dicta minus dolor.
            </p>
            <ul className="list">
            <li className="list-item">✅ Ullamco laboris nisi ut aliquip ex ea commodo</li>
            <li className="list-item">✅ Duis aute irure dolor in reprehenderit in</li>
            <li className="list-item">✅ Ullamco laboris nisi ut aliquip ex ea</li>
          </ul>
          <p className="description">
            Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non
            nesciunt suscipit repellendus.
          </p>
          </div>
        </div>
        <div className="img-container">
          <img src={About_img} alt="" />
        
        </div>
      </section>
    </>
  );
};

export default about;
