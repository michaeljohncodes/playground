import React from "react";

const Card = (props) => {
  return (
    <div className=" bg-amber-200 w-80 h-40 p-5 m-7">
      <h2 className=" text-3xl bg-blue-300">
        Name: {props.firstname} {props.lastname}{" "}
      </h2>
      <img src={props.myimage} alt="" className=" bg-amber-950" />
      <i className="bg-cyan-500">Email: {props.email}</i>
      <p className="text-amber-950">Address: {props.address}</p>
    </div>
  );
};

export default Card;
