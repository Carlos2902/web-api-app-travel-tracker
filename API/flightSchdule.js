// Arrival schedule process
// Function to handle finding flights when the user clicks the button
async function handleFindFlights() {
  // Get input values
  const departureAirport = document.getElementById('departure-airport').value;
  const arrivalAirport = document.getElementById('arrival-airport').value;
  const arrivalDateInput = document.getElementById('arrival-date').value;
  
  // Validate input values (optional)
  if (!departureAirport || !arrivalAirport || !arrivalDateInput) {
      console.error("Please fill in all required fields.");
      return;
  }
  
  // Construct the date object from the input value
  const arrivalDateValue = new Date(arrivalDateInput);
  const year = arrivalDateValue.getFullYear();
  const month = (arrivalDateValue.getMonth() + 1).toString().padStart(2, '0');
  const day = arrivalDateValue.getDate().toString().padStart(2, '0');
  const formattedArrivalDate = `${year}${month}${day}`;
  
  // Construct the URL
  const url = `https://timetable-lookup.p.rapidapi.com/TimeTable/${departureAirport}/${arrivalAirport}/${formattedArrivalDate}/`;
  
  // Fetch data from API
  await fetchArrivalFlightData(url);
}

// Function to fetch flight data from the API
async function fetchArrivalFlightData(url) {
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
      console.log(result);
  } catch (error) {
      console.error(error);
  }
}