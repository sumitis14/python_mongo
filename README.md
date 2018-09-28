# Stake - Unstake - Resource Info

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

1. node server.js
2. Use postman to perform GET/POST

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

### Resource Information
```
{
    "account_name": "komododragon",
    "privileged": false,
    "last_code_update": "1970-01-01T00:00:00.000",
    "created": "2018-06-09T07:12:52.000",
    "core_liquid_balance": "24396.1422 EOS",
    "ram_quota": 658123,
    "net_weight": 54138991,
    "cpu_weight": 54138990,
    "net_limit": {
        "used": 1173,
        "available": 1037506658,
        "max": 1037507831
    },
    "cpu_limit": {
        "used": 36327,
        "available": 197481297,
        "max": 197517624
    },
    "ram_usage": 3906,
    "total_resource": {
        "owner": "komododragon",
        "net_weight": "5413.8991 EOS",
        "cpu_weight": "5413.8990 EOS",
        "ram_bytes": 656723
    },
    "self_delegated_bandwidth": {
        "from": "komododragon",
        "to": "komododragon",
        "net_weight": "5404.0000 EOS",
        "cpu_weight": "5404.0000 EOS"
    }
}
```


