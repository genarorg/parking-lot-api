# parking-lot-api

Lets build a simple API to handle operations. We run a small 
parking lot business and we need a system that allows us to
perform some basic operations:

1. Register a new vehicle entry and issue a ticket number(identifier)
2. Fetch the current amount due for a given ticket.
3. Allow a manager to get a list of all available parking spaces
and their current occupancy status.
   
Create a **POST** endpoint that allows us to create an entry.
This endpoint should take a JSON object as input, and it should receive
the following fields:

1. Vehicle plate number.
2. Vehicle make.
3. Vehicle color.

The response should have some sort of identifier for the created entry

Create a **GET** endpoint that takes an entry identifier and returns the
amount due at this point in time. 

**Pricing policies**

We have a flexible pricing policy to cater to the needs of our customer. Here
are the details:

1. Every hour we charge $10
2. After 8 hours, a daily rate of $80 applies.
3. Overnight fee is $20.

**Hours of operation and capacity**

Our hours of operation are 8am to 8pm
Maximum number of parking spots: 5
