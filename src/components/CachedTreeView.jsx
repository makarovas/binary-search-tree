import React from 'react';
import Tree from 'react-d3-tree';

const CachedTreeView = ({ treeBranch }) => {
  const handleClick = (nodeData) => console.log(nodeData)
  return (
    <div id="treeWrapper"   >
      <Tree
      onClick={handleClick}
        styles={{
          nodes: {
            node: {
              circle: {
                fill: '#d16ba5',
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: '1.6rem'
                }
              }
            },
            leafNode: {
              circle: {
                fill: '#5ffbf1',
                name: {
                  fontFamily: `'Roboto', sans-serif`,
                  fontSize: '1.6rem'
                }
              }
            }
          }
        }}
        collapsible={false}
        // orientation="vertical"
        translate={{
          x: 20,
          y: 350,
          scale: 0.2
        }}
        data={treeBranch}
      />
    </div>
  );
};

export default CachedTreeView;
