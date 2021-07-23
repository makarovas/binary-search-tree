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
      <button className="next-node-to-cash  next-node" onClick={() => {}}>
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
      {/* <div style = {{paddingTop:2}}>
          <button
            className="next-node-button fullwidth"
            disabled={false}
            onClick={() => em_ordem(data.root)}
          > 
          Em ordem
          </button>
        </div>
        <div style = {{paddingTop:2}}>
          <button
            className="next-node-button fullwidth"
            disabled={false}
            onClick={() => pre_ordem(data.root)}
          > 
          Pre ordem
          </button>
        </div>
        <div style = {{paddingTop:2}}>
          <button
                className="next-node-button fullwidth"
                disabled={false}
                onClick={() => pos_ordem(data.root)}
              > 
              Pos ordem
          </button>
        </div> */}
      <div className="container-div">
        {verify && (
          <span style={{ fontSize: 15, color: "red", fontWeight: "bold" }}>
            {text}
          </span>
        )}
        {array.length > 0 && <ExibeOrdem array={array} />}
      </div>
    </div>
  );
};

export default Sidebar;
