import React from "react";
import Tree from "react-d3-tree";

const TreeView = ({ changeTree, branch }) => {
  return (
    <>
      <Tree
        onClick={changeTree}
        styles={{
          nodes: {
            node: {
              circle: {
                fill: "#d16ba5",
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
        data={branch}
      />
    </>
  );
};

export default TreeView;
