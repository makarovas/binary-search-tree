import React from "react";
import Tree from "react-d3-tree";

const containerStyles = {
  width: "100%",
  height: "100vh",
};

const DBTreeView = ({ data, handleClick }) => {
  return (
    <div id="treeWrapper">
      <Tree
        style={containerStyles}
        onClick={handleClick}
        styles={{
          nodes: {
            node: {
              circle: {
                fill: "#d16ba5",
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: "1.6rem",
                },
              },
            },
            leafNode: {
              circle: {
                fill: "#5ffbf1",
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: "1.6rem",
                },
              },
            },
          },
        }}
        collapsible={false}
        translate={{
          x: 20,
          y: 350,
          scale: 0.2,
        }}
        data={data}
      />
    </div>
  );
};

export default DBTreeView;
