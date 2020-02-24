window.addEventListener('DOMContentLoaded', (event) => {

    const $button = document.querySelector(".ISSbutton");
    const $cityInput = document.querySelector("#cityInput");
    let $passinfo = document.querySelector(".passinfo");

    //let city = $cityInput.value;

    $button.addEventListener('click', (event) => {

        async function getISSpass() {
            try {

                //sets city variable to the value of the text input
                let city = $cityInput.value;

                //using weather API to get longitude and latitude data for locations
                //URL formats:
                //api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}
                //https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY
                //weather api key: d8303ef2132ab339562341a5bc6ca045
                const locationURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8303ef2132ab339562341a5bc6ca045`

                const options = { method: "GET" };

                let location = await fetch(locationURL, options);
                let result = await location.json();

                console.log(result); 
                //lattitude and longitude
                let lat = result.coord.lat;
                let lon = result.coord.lon;


                //requesting from ISS API for date and time of visible ISS passes
                //ISS APIl key: ZHXTDS-7VB9A6-ASMFN9-4BA6
                const ISSpassURL = `http://www.n2yo.com/rest/v1/satellite/visualpasses/25544/${lat}/${lon}/0/2/300/&apiKey=ZHXTDS-7VB9A6-ASMFN9-4BA6`

                let ISSpass = await fetch(ISSpassURL, options);
                let ISSresult = await ISSpass.json();
                let passes = ISSresult.passes;

                console.log(passes);
                
                // passes.forEach(item => {
                //     let unixtimestamp = item.startUTC;
                //     let date = new Date(unixtimestamp * 1000); //to calibrate to current year
                //     console.log(date);
                //     $passinfo.textContent = date;
                // });
                
                /*for every ISS pass, access the UTC start time. 
                Convert the unix time stamp to human readable time in 00:00 format
                Display the value of the first index in the array beacuse this is the ISS pass that occurs soonest*/
                let unixtimestamp = passes[0].startUTC;
                let date = new Date(unixtimestamp * 1000);
                $passinfo.textContent = date;
            

            } catch (err) { console.log(err); }
        }
        getISSpass();

    });

})
