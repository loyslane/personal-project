module.exports = (app) => {
  const userControllerMethods = require('../controllers/userControllers');
  const weightControllerMethods = require('../controllers/weightControllers'); 

  app.route('/new-user')
  .post(userControllerMethods.createUser);

  app.route('/login')
  .post(userControllerMethods.findUser);

  app.route('/weight-summary')
  .get(weightControllerMethods.listWeights);

  app.route('/add-weight')
  .post(weightControllerMethods.addWeight);

  app.route('/:week')
  .put(weightControllerMethods.updateWeight);

};
