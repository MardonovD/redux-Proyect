import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Natyija = () => {
  useEffect(() => {
    console.log(store);
  });
  
  const store = useSelector((store) => store);

  return <div className="natija"></div>;
};

export default Natyija;