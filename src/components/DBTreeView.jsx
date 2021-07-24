import React from "react";
import Tree from "react-d3-tree";

const containerStyles = {
  width: "100%",
  height: "100vh",
};

const DBTreeView = ({ data, handleClick }) => {
  // const [clickedNodeStyle, changeClickedNodeStyle] = React.useState(false);

  // const nodeHandleClick = (nodeData) => {
  //   handleClick(nodeData);
  //   changeClickedNodeStyle((prev) => !prev);
  // };

  return (
    <div id="treeWrapper">
      <Tree
        rootNodeClassName="node__root"
        transitionDuration={0}
        style={containerStyles}
        onClick={handleClick}
        separation={{ siblings: 0.5, nonSiblings: 0.5 }}
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
                fill: "#d16ba5",
                // fill: "#5ffbf1",
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
          x: 62,
          y: 422,
          scale: 0.2,
        }}
        data={data}
      />
    </div>
  );
};

export default DBTreeView;
