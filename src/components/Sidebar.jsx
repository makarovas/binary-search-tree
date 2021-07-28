import React from "react";

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
  choosedBranch,
  editedNodevalue,
}) => {
  const [customValue, setCustomValue] = React.useState(null);
  console.log(editedNodevalue?.value?.name);
  return (
    <div className="sidebar-wrapper">
      <button
        className="next-node-button fullwidth next-node"
        disabled={!editedNodevalue}
        onClick={() => searchNumber(parseInt(current, 10))}
      >
        Edit Node value
      </button>
      <input
        className="next-node-input  next-node"
        type="number"
        name="custom"
        value={editedNodevalue?.value?.name}
        onChange={(e) => setCustomValue(e.target.value)}
        placeholder="Change node value"
      />
      <button
        className="next-node-button fullwidth next-node"
        onClick={() => {}}
        disabled={Boolean(!choosedBranch.length)}
      >
        {">>Apply changes to db>>"}
      </button>
      <button className="next-node-button fullwidth next-node" onClick={reset}>
        Reset changes
      </button>
      <button
        className="next-node-to-cash  next-node"
        onClick={passDataOnClick}
        disabled={Boolean(!choosedBranch.length)}
      >
        {"<<Download to the Cash<<"}
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
