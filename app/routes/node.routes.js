module.exports = (app) => {
    const nodes = require('../controllers/node.controller.js');

    // Retrieve resource information
    app.get('/account/:name', nodes.resourceInfo);

    // Stake order
    app.post('/stake', nodes.stake);

    // Unstake order
    app.post('/unstake', nodes.unstake);


}