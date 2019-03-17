const controllerConstructor = require('./controller');

module.exports = (app, db) => {
    const controller = controllerConstructor(db);

    app.route('/api/teams').get(controller.getTeams);
    app.route('/api/info').get(controller.getTeamInfo);
};
