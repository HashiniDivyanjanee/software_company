import React from "react";
import { service } from "../../data/data";

const ServiceCard = () => {
  return (
    <>
      <div className="flex">
        {
          <div className=" flex">
            {service.map((items, index) => (
              <div className="container" key={index}>
                <div className="img">
                  <img src={items.icon} alt="" />
                </div>
                <div className="content">
                  <h2>{items.text}</h2>
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
