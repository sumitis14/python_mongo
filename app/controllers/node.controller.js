const Eos = require('eosjs');
const config = require('../../config/eos.config.js');
const eos = Eos(config);

var api_logger = require('../../logs/node.logger.js'); 

exports.resourceInfo = (req, res) => {
    eos.getAccount({account_name: String(req.params.name)
    }).then(result => {
        res.json({
            "account_name"              : result['account_name'],
            "privileged"                : result['privileged'],
            "last_code_update"          : result['last_code_update'],
            "created"                   : result['created'],
            "core_liquid_balance"       : result['core_liquid_balance'],
            "ram_quota"                 : result['ram_quota'],
            "net_weight"                : result['net_weight'],
            "cpu_weight"                : result['cpu_weight'],
            "net_limit"                 : result['net_limit'],
            "cpu_limit"                 : result['cpu_limit'],
            "ram_usage"                 : result['ram_usage'],
            "total_resource"            : result['total_resources'],
            "self_delegated_bandwidth"  : result['self_delegated_bandwidth']
        })
        api_logger.info("Resource info collected");
    }).catch(err => {
        api_logger.error(err)
        res.json(err)
    });
};


// API EP for stake ---- /stake/ ---- body {from,to,cpu,net}
exports.stake= (req, res) => {

    var stake_cpu       =   req.body.stake_cpu.toFixed(4) + ' EOS'
    var stake_net       =   req.body.stake_net.toFixed(4) + ' EOS'
    //var from_account    =   String(req.body.from_account)
    var to_account      =   String(req.body.to_account)

    let actions = [];
       actions.push({
            account: 'eosio',
            name: 'delegatebw',
            authorization: [{
                actor: 'tryrepeateos',
                permission: 'active'
            }],
            data: {
                from: 'tryrepeateos',
                receiver: to_account,
                stake_cpu_quantity: stake_cpu,
                stake_net_quantity: stake_net,
                transfer: 0,
            },
       });

    eos.transaction(
        {actions:actions}
    ).then(result => {
        api_logger.info("Started Staking");
        res.json({
            "transaction_id": result['transaction_id'],
            "block_num"     : result['processed']['block_num'],
            "block_time"    : Date.parse(result['processed']['block_time'])
        })
    }).catch(err => {
        api_logger.error("Internal Server Error -- Could not perform Stake action")
        res.send(err)
    });
};

// API EP for unstake ---- /unstake/ ---- body {from,to,cpu,net}
exports.unstake= (req, res) =>{
    var to_account      =   String(req.body.to_account)
    var unstake_cpu     =   req.body.unstake_cpu.toFixed(4) + ' EOS'
    var unstake_net     =   req.body.unstake_net.toFixed(4) + ' EOS'

    let actions = [];
       actions.push({
            account: 'eosio',
            name: 'undelegatebw',
            authorization: [{
                actor: 'tryrepeateos',
                permission: 'active'
            }],
            data: {
                from: 'tryrepeateos',
                receiver: to_account,
                unstake_cpu_quantity: unstake_cpu,
                unstake_net_quantity: unstake_net,
                transfer: 0,
            },
       });


    eos.transaction(
        {actions:actions}
    ).then(result => {
        api_logger.info("UNSTAKING");
        res.json({
            "transaction_id": result['transaction_id'],
            "block_num"     : result['processed']['block_num'],
            "block_time"    : Date.parse(result['processed']['block_time'])
        })
    }).catch(err => {
        api_logger.error("Internal Server Error -- Could not perform Unstake action")
        res.send(err)
    });
};