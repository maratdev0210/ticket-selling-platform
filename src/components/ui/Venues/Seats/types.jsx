// seat types
export const seatType = ["standing", "lounge", "vip"];

// describe the characteristics of a seat based on its type
export const seatProperties = {
  standing: {
    color: "blue",
    price: [10, 100],
    desc: "standing seat", // shows on hover
  },
  lounge: {
    color: "red",
    price: [50, 250],
    decs: "lounge seat",
  },
  vip: {
    color: "yellow",
    price: [150, 300],
    decs: "vip seat",
  },
};

export function createSeatProps(color, mappedSeats) {
  return {
    color,
    circles: mappedSeats,
  };
}

export const color = [0x008000, 0xff0000, 0xffff00]; // shape's color fill
