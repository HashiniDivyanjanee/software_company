import React from "react";
import "./services.css";
import Heading from "../../common/heading";
import ServiceCard from "./serviceCard";
const Services = () => {
  return (
    <>
      <section className="service backgrount">
        <div className="">
          <Heading
            title="SERVICES"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <ServiceCard />
        </div>
      </section>
    </>
  );
};

export default Services;
