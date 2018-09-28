module.exports = (app) => {
    const nodes = require('../controllers/node.controller.js');

    // Retrieve resource information
    app.get('/account/:name', nodes.resourceInfo);

    // Create a new Note
    app.post('/stake', nodes.stake);

    // Retrieve all Notes
    app.post('/unstake', nodes.unstake);


}