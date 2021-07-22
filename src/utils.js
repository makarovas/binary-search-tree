function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

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

export const searchNumber = (data, value, setVerify, setText) => {
  var verify = search(data, value);
  if (verify) {
    setText("Found");
  } else {
    setText("Not Found");
  }
  setVerify(true);
};

export const search = (data, value) => {
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
