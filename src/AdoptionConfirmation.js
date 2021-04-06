import React from "react";

function AdoptionConfirmation(props) {
  if (props.message) {
    return (
      <div className="d-flex justify-content-center confirmation mt-2 mb-2">
        <strong>{props.message}</strong>
      </div>
    );
  }
  return <></>;
}

export default AdoptionConfirmation;
