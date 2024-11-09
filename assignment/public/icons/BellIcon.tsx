import * as React from "react";
interface BellIcon{
    width?:string,
    height?:string
}
const BellIcon = ({width,height}:BellIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width?width:"25"}
    height={height?height:"25"}
    fill="none"
    stroke="#000"
    strokeWidth="0.528"
    viewBox="0 0 24 24"
  >
    <path
      id="SVGRepo_iconCarrier"
      stroke="#464455"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.714 17.25c0 .966-.767 1.75-1.714 1.75s-1.714-.784-1.714-1.75M12 5a4.5 4.5 0 0 0-4.5 4.5v1.308c0 .786-.16 1.565-.47 2.288l-.433 1.01a1 1 0 0 0 .92 1.394h8.967a1 1 0 0 0 .919-1.394l-.433-1.01a5.8 5.8 0 0 1-.47-2.288V9.5A4.5 4.5 0 0 0 12 5m0 0V4"
    ></path>
  </svg>
);

export default BellIcon;
