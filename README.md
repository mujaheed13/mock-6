# Air Ticket Booking

To register a user

```
POST api/register
```

- This route requires email, password and name.
- If all the fields are not present it will return the status code 400.

To Login

```
POST api/login
```

- This route requires email and password.

To get all flights

```
GET api/flights
```

To get flight by id

```
GET api/flights/:id
```

To add a new flight

```
POST api/flights
```

- This route requires airline,
flightNo,
departure,
arrival,
departureTime,
arrivalTime,
seats,
price.
- If all the fields are not present it will return the status code 400.

To update a flight

```
PATCH api/flights/:id
```

To delete a flight

```
DELETE api/flights/:id
```

To book a flight

```
POST api/booking
```
- This route requires user id and flight id.

To get all the bookings

```
GET api/dashboard
```
