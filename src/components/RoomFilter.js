import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

const getUniqueValue = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = getUniqueValue(rooms, "type");

  // add all

  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {" "}
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* Select Type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {" "}
            {types}{" "}
          </select>
        </div>

        {/* End of  Select Type */}
      </form>
    </section>
  );
}
