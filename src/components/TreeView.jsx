import React from "react";
import Tree from "react-d3-tree";

const nodeStyle = ({ click }) => ({
  nodes: {
    node: {
      name: {
        stroke: "white",
        strokeWidth: 1,
        fontSize: "larger",
        fill: click ? "green" : "white",
      },
    },
    leafNode: {
      name: {
        stroke: "white",
        strokeWidth: 1,
        fontSize: "larger",
        fill: "white",
      },
    },
  },
});

const TreeView = ({ changeTree, branch }) => {
  const [nodeClicked, handleOnNodeClick] = React.useState(false);

  return (
    <Tree
      onNodeClick={handleOnNodeClick}
      onClick={changeTree}
      styles={{
        nodes: {
          node: {
            circle: {
              fill: nodeClicked ? "black" : "#d16ba5",
              name: {
                fontFamily: `'Roboto', sans-serif`,
                fontSize: "2rem",
              },
            },
          },
          leafNode: {
            circle: {
              fill: "#5ffbf1",
              name: {
                fontFamily: `'Roboto', sans-serif`,
                fontSize: "2rem",
              },
            },
          },
        },
      }}
      collapsible={false}
      translate={{
        x: 100,
        y: 60,
        scale: 0.5,
      }}
      zoom={0.8}
      separation={{ siblings: 0.5, nonSiblings: 0.5 }}
      data={branch}
    />
  );
};

export default TreeView;
