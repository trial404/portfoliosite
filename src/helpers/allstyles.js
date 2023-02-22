export const colorIds = [
  {
    id: "b1",
    isActive: false,
    initStyles: {
      color: "#85b6ff",
      height: "75px",
      width: "75px",
      justifySelf: "end",
      alignSelf: "end",
    },
  },
  {
    id: "b2",
    isActive: false,
    initStyles: {
      color: "#4ecb71",
      height: "75px",
      width: "75px",
      justifySelf: "start",
      alignSelf: "end",
    },
  },
  {
    id: "b3",
    isActive: false,
    initStyles: {
      color: "#ff7e76",
      height: "75px",
      width: "75px",
      justifySelf: "end",
      alignSelf: "start",
    },
  },
  {
    id: "b4",
    isActive: false,
    initStyles: {
      color: "#ffee58",
      height: "75px",
      width: "75px",
      justifySelf: "start",
      alignSelf: "start",
    },
  },
];

export const StateStylesAll = {
  init: {
    gridTemplateColumns: "[first] 100px [line2] 100px",
    gridTemplateRows: "[first] 100px [line2] 100px",
  },
  bigBlue: {
    gridTemplateColumns: "1fr auto",
    gridTemplateRows: "1fr auto",
  },
  bigYellow: {
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "1fr auto",
  },
  bigGreen: {
    gridTemplateColumns: "1fr auto",
    gridTemplateRows: "auto 1fr",
  },
  bigRed: {
    gridTemplateColumns: "auto 1fr",
    gridTemplateRows: "auto 1fr",
  },
};
