
// contains the actions of what to do
const { getAllplanets } = require('../../models/planets.model')
async function httpGetAllPlanets(req, res) { 
    // return 
  //return res.status(200).json(getAllplanets);
  return res.status(200).json(await getAllplanets());
}
module.exports = {
  httpGetAllPlanets
};