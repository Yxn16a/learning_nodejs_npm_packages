
// contains the actions of what to do
const { getAllplanets } = require('../../models/planets.model')
function httpGetAllPlanets(req, res) { 
    // return 
  return res.status(200).json(getAllplanets);
}
module.exports = {
  httpGetAllPlanets
};