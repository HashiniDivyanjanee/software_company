import React from "react";
import "./services.css";
import Heading from "../../common/heading";
import ServiceCard from "./serviceCard";
const Services = () => {
  return (
    <>
      <section className="service backgrount">
        <div className="container">
          <Heading
            title="SERVICES"
            subtitle="We provide the best services for our customers"
          />
          <ServiceCard />
        </div>
      </section>
    </>
  );
};

export default Services;
