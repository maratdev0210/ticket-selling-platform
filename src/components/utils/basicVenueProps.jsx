// mapped seats for basic Venue

/*
  MAPPED_SEATS = (
    x,           // top-left location of a seat along the x coordinate
    y,           // top-left location of a seat along the y coordinate, 
    rows,        // number of rows that the section contains, 
    columns,     // number of columns that the section contains,
    desc,        // short description of a seat in the section (appears when the user hovers the seat)
    type, 
    colorCode,   // 0 for standing, 1 for lounge, 2 for vip; [0 -> green, 1 -> red, 2 -> yellow]
    section,     // section id (appears in ticket info once the user buys them)
  )
*/

export const MAPPED_SEATS = [
  {
    x: 75,
    y: 230,
    rows: 25,
    columns: 10,
    desc: "vip zone",
    type: "vip",
    colorCode: 2,
    section: "211",
  },
  {
    x: 200,
    y: 230,
    rows: 25,
    columns: 20,
    desc: "dance zone",
    type: "standing",
    colorCode: 0,
    section: "011",
  },
  {
    x: 85,
    y: 100,
    rows: 5,
    columns: 10,
    desc: "lounge seats | vip seats",
    type: "lounge",
    colorCode: 1,
    section: "111",
  },
  {
    x: 200,
    y: 90,
    rows: 5,
    columns: 10,
    desc: "lounge seats | vip seats",
    type: "lounge",
    colorCode: 1,
    section: "112",
  },
  {
    x: 320,
    y: 80,
    rows: 5,
    columns: 10,
    desc: "lounge seats | vip seats",
    type: "lounge",
    colorCode: 1,
    section: "113",
  },
  {
    x: 435,
    y: 70,
    rows: 5,
    columns: 10,
    desc: "lounge seats | vip seats",
    type: "lounge",
    colorCode: 1,
    section: "114",
  },
  {
    x: 85,
    y: 520,
    rows: 5,
    columns: 10,
    desc: "lounge seats | vip seats",
    type: "lounge",
    colorCode: 1,
    section: "115",
  },
  {
    x: 200,
    y: 525,
    rows: 5,
    columns: 10,
    desc: "lounge seats | vip seats",
    type: "lounge",
    colorCode: 1,
    section: "116",
  },
  {
    x: 315,
    y: 530,
    rows: 5,
    columns: 10,
    desc: "lounge seats | vip seats",
    type: "lounge",
    colorCode: 1,
    section: "117",
  },
  {
    x: 430,
    y: 535,
    rows: 5,
    columns: 10,
    desc: "lounge seats | vip seats",
    type: "lounge",
    colorCode: 1,
    section: "118",
  },
  {
    x: 420,
    y: 200,
    rows: 7,
    columns: 3,
    desc: "vip zone",
    type: "vip",
    colorCode: 2,
    section: "212",
  },
  {
    x: 420,
    y: 280,
    rows: 7,
    columns: 3,
    desc: "vip zone",
    type: "vip",
    colorCode: 2,
    section: "213",
  },
  {
    x: 420,
    y: 360,
    rows: 7,
    columns: 3,
    desc: "vip zone",
    type: "vip",
    colorCode: 2,
    section: "214",
  },
  {
    x: 420,
    y: 440,
    rows: 7,
    columns: 3,
    desc: "vip zone",
    type: "vip",
    colorCode: 2,
    section: "215",
  },
  {
    x: 460,
    y: 190,
    rows: 6,
    columns: 2,
    desc: "vip zone",
    type: "vip",
    colorCode: 2,
    section: "216",
  },

  {
    x: 460,
    y: 260,
    rows: 6,
    columns: 2,
    desc: "vip zone",
    type: "vip",
    colorCode: 2,
    section: "217",
  },
  {
    x: 460,
    y: 360,
    rows: 6,
    columns: 2,
    desc: "vip zone",
    type: "vip",
    colorCode: 2,
    section: "218",
  },
  {
    x: 460,
    y: 430,
    rows: 6,
    columns: 2,
    desc: "vip zone",
    type: "vip",
    colorCode: 2,
    section: "219",
  },
  {
    x: 490,
    y: 180,
    rows: 10,
    columns: 5,
    decs: "lounge zone",
    type: "lounge",
    colorCode: 1,
    section: "119",
  },
  {
    x: 490,
    y: 310,
    rows: 10,
    columns: 5,
    decs: "lounge zone",
    type: "lounge",
    colorCode: 1,
    section: "120",
  },
  {
    x: 490,
    y: 430,
    rows: 10,
    columns: 5,
    decs: "lounge zone",
    type: "lounge",
    colorCode: 1,
    section: "121",
  },
  {
    x: 560,
    y: 150,
    rows: 40,
    columns: 1,
    desc: "vip zone",
    type: "vip",
    colorCode: 2,
    section: "220",
  },
];
