
// contains the actions of what to do
const { planets } = require('../../models/planets.model')
function getAllPlanets(req, res) { 
    // return 
  return res.status(200).json(planets);
}
module.exports = {
    getAllPlanets
};