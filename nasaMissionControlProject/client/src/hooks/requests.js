const API_URL = 'http://localhost:8000';
async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  const response = await fetch(`${API_URL}/planets`)
  return await response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${API_URL}/launches`)
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    // this will give an assending order flight number
    return a.flightNumber - b.flightNumber
  })
}

async function httpSubmitLaunch(launch) {
  try {
    // TODO: Once API is ready.
    // Submit given launch data to launch system.
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      // this changes the json to a string or changes launch into a stringjr
      body: JSON.stringify(launch),
    })
  } catch (err) {
    // this will play a failure error
    return {
      ok: false
    };
  }

}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    })
  } catch (err) {
    console.log(err); 
    return {
      ok:false, 
    }

  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};