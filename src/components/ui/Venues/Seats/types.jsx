// seat types
export const seatType = ["standing", "lounge", "vip"];

// describe the characteristics of a seat based on its type
export const seatProperties = {
  standing: {
    color: "green",
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

// price range for different seat types
// 0 -> standing seats;  1 -> lounge seats; 2 -> vip seats
export const priceRange = {
  0: {
    minPrice: 10,
    maxPrice: 50,
  },
  1: {
    minPrice: 80,
    maxPrice: 150,
  },
  2: {
    minPrice: 200,
    maxPrice: 300,
  },
};

export const color = ["green", "red", "yellow"]; // shape's color fill
