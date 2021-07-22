export const initialState = {
  root: {
    value: 21,
    left: {
      value: 1,
      left: null,
      right: {
        value: 2,
        left: null,
        right: {
          value: 3,
          left: null,
          right: {
            value: 4,
            left: null,
            right: null,
          },
        },
      },
    },
    right: {
      value: 231,
      left: {
        value: 43,
        left: {
          value: 22,
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: 444,
        left: null,
        right: {
          value: 3242342,
          left: {
            value: 234242,
            left: null,
            right: null,
          },
          right: null,
        },
      },
    },
  },
};
