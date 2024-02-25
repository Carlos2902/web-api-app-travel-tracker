// https://rapidapi.com/flightlookup/api/timetable-lookup/

// Arrival schedule process

// Step 1: Get input values
const departureAirport = document.getElementById('departure-airport').value;
const arrivalAirport = document.getElementById('arrival-airport').value;
const arrivalDate = document.getElementById('arrival-date').value;

// Step 2: API Url with the user values
const url = `https://timetable-lookup.p.rapidapi.com/TimeTable/${departureAirport}/${arrivalAirport}/${arrivalDate}/`;

// Step 3: Fetching Data from API
fetchFlightData(url);

async function fetchFlightData(url) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '62bb2de5ffmshc7d259477fa8df3p173ed5jsn6ac51b6655d2',
        'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      parseAndDisplayFlightDetails(result);
    } catch (error) {
      console.error(error);
    }
  }