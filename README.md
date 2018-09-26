# python_mongo
## JSON file
contains act as actions array

## Running instruction
1. Download a json stream of data
2. python3 jsonToMongo.py

## Sample Mongo output
> db.stream_data.find().pretty()
```
{
	"_id" : ObjectId("5babc74a6c3a9d61f127ca8a"),
	"tx_id" : "1125ede029b3585ab5dad7d87354f5a46625b9ef72f6811f468e294398e7e165",
	"timestamp" : ISODate("2018-09-26T11:13:00.500Z"),
	"account_details" : {
		"account" : "newname133",
		"action" : "create",
		"count" : 1
	}
}
{
	"_id" : ObjectId("5babc74a6c3a9d61f127ca8b"),
	"tx_id" : "1125ede029b3585ab5dad7d87354f5a46625b9ef72f6811f468e294398e7e165",
	"timestamp" : ISODate("2018-09-26T11:13:00.500Z"),
	"account_details" : {
		"account" : "mymultisig11",
		"action" : "create",
		"count" : 2
	}
}
{
	"_id" : ObjectId("5babc74a6c3a9d61f127ca8c"),
	"tx_id" : "1125ede029b3585ab5dad7d87354f5a46625b9ef72f6811f468e294398e7e165",
	"timestamp" : ISODate("2018-09-26T11:13:00.500Z"),
	"account_details" : {
		"account" : "partner11111",
		"action" : "transfer",
		"count" : 1
	}
}
```