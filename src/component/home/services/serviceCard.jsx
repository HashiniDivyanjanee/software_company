import React from "react";
import { service } from "../../data/data";

const ServiceCard = () => {
  return (
    <>
      <div className="serviceCard">
        {
          <div className="flex">
            {service.map((items, index) => (
              <div className="box" key={index}>
                <div className="img">
                  <img src={items.icon} alt="" />
                </div>
                <div className="content">
                  <h4>{items.text}</h4>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </>
  );
};

export default ServiceCard;
