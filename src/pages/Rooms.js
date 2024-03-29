import React from "react";
import Hero from "../components/Hero";
import RoomsContainer from "../components/RoomsContainer";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
