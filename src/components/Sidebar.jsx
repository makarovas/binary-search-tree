import React from "react";
import ExibeOrdem from "./ExibeOrdem";

const Sidebar = ({
  verify,
  text,
  array,
  searchNumber,
  current,
  setCurrent,
  insert,
  data,
  reset,
  passDataOnClick,
}) => {
  return (
    <div className="sidebar-wrapper">
      <button
        className="next-node-button fullwidth next-node"
        disabled={!current || isNaN(current)}
        onClick={() => searchNumber(parseInt(current, 10))}
      >
        Edit
      </button>
      <button className="next-node-button fullwidth next-node" onClick={reset}>
        Reset
      </button>
      <button
        className="next-node-to-cash  next-node"
        onClick={passDataOnClick}
      >
        {"<Download to the Cash<"}
      </button>
      <input
        className="next-node-input  next-node"
        type="number"
        name="current"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        placeholder="Enter node to the tree"
      />
      <button
        className="next-node-button fullwidth next-node"
        disabled={!current || isNaN(current)}
        onClick={() => {
          insert(parseInt(current, 10));
          setCurrent("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default Sidebar;
