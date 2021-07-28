import React from "react";
import Tree from "react-d3-tree";
// import uuid from "uuid";

const containerStyles = {
  width: "100%",
  height: "100vh",
};

// const getParent = function (root, n, parent) {
//   if (!root) return null;
//   if (root.val === n) return parent;
//   return getParent(root.left, n, root) || getParent(root.right, n, root);
// };

// const uniqid = uuid();
export const Node = ({ nodeDatum, foreignObjectProps, handleClick }) => {
  const [state, toggleState] = React.useState(false);

  const handleClickState = () => {
    toggleState((prev) => !prev);
    // handleClick(nodeDatum, uniqid);
    handleClick(nodeDatum);
  };
  const name = nodeDatum.name.substr(0, nodeDatum.name.indexOf(","));
  return (
    <g onClick={handleClickState}>
      <circle r={15} fill={state ? "blue" : "black"}>
        {/* <span style={{ display: "none" }}>{uniqid}</span> */}
      </circle>

      <foreignObject {...foreignObjectProps}>
        <h3 style={{ textAlign: "center" }}>{name}</h3>
      </foreignObject>
    </g>
  );
};

const renderForeignObjectNode = ({
  nodeDatum,
  foreignObjectProps,
  handleClick,
}) => (
  <Node
    handleClick={handleClick}
    nodeDatum={nodeDatum}
    foreignObjectProps={foreignObjectProps}
  />
);

const DBTreeView = ({ data, handleClick }) => {
  const nodeSize = { x: 40, y: 60 };

  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

  return (
    <div id="treeWrapper">
      <Tree
        renderCustomNodeElement={(rd3tProps, nodeData) =>
          renderForeignObjectNode({
            ...rd3tProps,
            foreignObjectProps,
            handleClick,
            nodeData,
          })
        }
        transitionDuration={0}
        style={containerStyles}
        separation={{ siblings: 0.5, nonSiblings: 0.5 }}
        styles={{
          nodes: {
            node: {
              circle: {
                fill: "black",
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: "1.6rem",
                },
              },
            },
            leafNode: {
              circle: {
                fill: "black",
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
