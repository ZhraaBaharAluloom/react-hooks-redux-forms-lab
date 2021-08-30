import React from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { bandAdded } from "./bandsSlice";

// Components
import BandInput from "./BandInput";

function BandsContainer() {
  const bansName = useSelector((state) => state.bands.entities).map(
    (_name, index) => <li key={index}>{_name}</li>
  );

  const dispatch = useDispatch();

  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }

  return (
    <>
      <BandInput onBandSubmit={handleBandSubmit} />
      <h4>Bands Name:</h4>
      <ul>{bansName}</ul>
    </>
  );
}

export default BandsContainer;
