# Stake/Unstake/Resource

## Directory structure
```
api_dir/
    └── app/
        └── controllers/node.contoller.js
        └── routes/node.routes.js
    └── config/
        └── eos.config.js
    └── logs/
    └── server.js
```

### To run

> node server.js
> Use postman to perform GET/POST

## Sample EP actions

### Stake:
```
input:
{
    "to_account"  : "tryrepeateos",
    "stake_cpu" : 0.0002,
    "stake_net" : 0.0001
}
output:
{
    "transaction_id": "bcef961240069aa3821acba2a352d44c17338970d4613b5ed588962f1072f1ca",
    "block_num": 16505237,
    "block_time": 1538029187000
}
```

### Unstake
```
input:
{
    "to_account"  : "tryrepeateos",
    "unstake_cpu" : 0.0010,
    "unstake_net" : 0.0001
}
output:
{
    "transaction_id": "feb7e4b3ff33686da8fa1dcb99c654dcb367bb29c18bc684c1971769b7bc7dcf",
    "block_num": 16505222,
    "block_time": 1538029179500
}
```


