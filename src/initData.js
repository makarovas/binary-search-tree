import uuid from "uuid";

export const initialState = {
  root: {
    value: [21, JSON.stringify(uuid())],
    left: {
      value: [1, JSON.stringify(uuid())],
      left: null,
      right: {
        value: [2, JSON.stringify(uuid())],
        left: null,
        right: {
          value: [3, JSON.stringify(uuid())],
          left: null,
          right: {
            value: [4, JSON.stringify(uuid())],
            left: null,
            right: null,
          },
        },
      },
    },
    right: {
      value: [231, JSON.stringify(uuid())],
      left: {
        value: [43, JSON.stringify(uuid())],
        left: {
          value: [22, JSON.stringify(uuid())],
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: [444, JSON.stringify(uuid())],
        left: null,
        right: {
          value: [3242342, JSON.stringify(uuid())],
          left: {
            value: [234242, JSON.stringify(uuid())],
            left: null,
            right: null,
          },
          right: null,
        },
      },
    },
  },
};

// import uuid from "uuid";

// export const initialState = {
//   root: {
//     value: 21,
//     uniqId: uuid(),
//     left: {
//       value: 1,
//       uniqId: uuid(),
//       left: null,
//       right: {
//         value: 2,
//         uniqId: uuid(),

//         left: null,
//         right: {
//           value: 3,
//           uniqId: uuid(),

//           left: null,
//           right: {
//             value: 4,
//             uniqId: uuid(),

//             left: null,
//             right: null,
//           },
//         },
//       },
//     },
//     right: {
//       value: 231,
//       uniqId: uuid(),

//       left: {
//         value: 43,
//         uniqId: uuid(),

//         left: {
//           value: 22,
//           uniqId: uuid(),

//           left: null,
//           right: null,
//         },
//         right: null,
//       },
//       right: {
//         value: 444,
//         uniqId: uuid(),

//         left: null,
//         right: {
//           value: 3242342,
//           uniqId: uuid(),

//           left: {
//             value: 234242,
//             uniqId: uuid(),

//             left: null,
//             right: null,
//           },
//           right: null,
//         },
//       },
//     },
//   },
// };
