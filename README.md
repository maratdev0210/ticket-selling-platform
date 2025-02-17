# Ticket selling platform

A **ticket selling platform** that provides the stylings for different types of Venues.

The Current list of venues inlcudes:

- Basic Venue (the most common type of venues, where the stage is put in front of the crowd)
- Stadium Venue (the type of venue which is being present at stadiums, has an oval shape form)
- T-Shaped Venue (a popular venue in many countries, which allows more access for getting closer to your favorite performer)

## Seats

The seats have 3 types:

- regular seats
- lounge seats
- vip seats

Based on the seat _type_ there is a list of characteristics, which currently include the **color**, **price range** and
the **description** which pops up when the seat is being hovered on

**Docs on the Seats**:

`drawSeats(g, seatProps)`

- **g** is the `Graphics` instance containing methods such as `beginFill()`, and `drawCircle()`.
- **seatProps** is the manually created object that contains the property of the seats block: its **color** and the location (defined in **circles** property) of each seat.

`mapSeats(x, y, rows, columns, radius, space_between_seats)`

- **x** and **y** represent the top-left position of the seat
- **rows** and **columns** represent how many rows and how many columns the seat block spans
- **radius** represents the radius of each seat
- **space_between_seats** represents the space in px between two **_adjacent_** seats

`createSeatProps(mappedSeats, color)`

- **color** sets the seat's color of a seat block
- **circles** is the array containg the location of each seat
