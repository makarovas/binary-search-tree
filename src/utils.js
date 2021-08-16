function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

export const searchNumber = (data, value, setVerify, setText) => {
  var verify = searchInTree(data, value);
  if (verify) {
    setText("Found");
  } else {
    setText("Not Found");
  }
  setVerify(true);
};

export const searchInTree = (data, value) => {
  var found = false;
  var current = data.root;

  while (!found && current) {
    if (value < current.value) {
      current = current.left;
    } else if (value > current.value) {
      current = current.right;
    } else {
      found = true;
    }
  }
  return found;
};

const loopIfIsArray = (arr) => {
  let temp = [];
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      let index = arr[i];
      if (Array.isArray(index)) {
        return loopIfIsArray(index);
      }
    }
  }
  return temp;
};

export const searchParentsConnection = (data, value1, value2) => {
  var found = false;
  var current = data;
  // console.log(current);
  for (let i = 0; i < current.length; i++) {
    for (let j = 0; j < current.length; j++) {
      if (!found && current[i].children.length) {
        current = current[i].children;
        searchParentsConnection(current, value1, value2);
      }
    }
  }

  while (!found && current) {
    if (value1 < current.value) {
      current = current[0]?.children;
    } else if (value1 > current.value) {
      current = current[0].right;
    } else {
      found = true;
    }
  }
  return found;
};

export function insert(data, value, setVerify, setData) {
  let node = new Node(value);
  if (!data.root) setData({ root: node });
  else {
    let current = data.root;
    while (!!current) {
      if (node.value < current.value) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else if (node.value > current.value) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        break;
      }
    }
  }
  setVerify(false);
  return data;
}

export const formatData = (data) => {
  const res = Object.keys(data).map((key) => {
    return {
      name: data[key] && data[key].value ? String(data[key].value) : key,
      children: traverse(data.root) ? [traverse(data.root)] : null,
    };
  });

  if (res[0].children) {
    return res[0].children;
  }

  return res;
};

export const traverse = (obj) => {
  if (!obj) return null;

  if (obj.left) {
    traverse(obj.left);
  }

  if (obj.value) {
    let children = [];

    if (obj.left) {
      children = [...children, traverse(obj.left)];
    }

    if (obj.right) {
      children = [...children, traverse(obj.right)];
    }

    return {
      name: String(obj.value),
      children: children.length && [traverse(obj.left)].length ? children : [],
    };
  }
  if (obj.right) {
    traverse(obj.right);
  }
};

export const comparator = ({ targetList, node, source }) => {
  if (targetList.length) {
    const res = targetList.reduce((accumulator, targetItem, i) => {
      if (!targetItem.id) {
        extractId(targetItem);
      }
      if (node.id === targetItem.id) {
        // mean that node is actually in targetList
        console.log("// mean that node in targetList");
        return targetList;
      } else if (node.id !== targetItem.id) {
        return [...new Set([...accumulator, targetItem, node])];
      }
      // else if (targetItem.children.length) {
      //   //repeat but with child
      //   return comparator({ targetList: targetItem.children, node, source });
      // }
      return targetItem;
    }, []);
    return res;
  }
  return [node];
};

export const extractId = (target) => {
  const name = target?.name || "";
  return (target.id = name
    ? name.substring(name.length - 37).substring(0, 36)
    : "");
};
