import React from "react";
import spinnerGif from "./assets/spinner.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        className="text-center mx-auto"
        width={180}
        src={spinnerGif}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
