import React from "react";

export default function ValidationError(props) {
  if (props.message) {
    return (
      <div className="d-flex justify-content-center error">{props.message}</div>
    );
  }
  return <></>;
}
