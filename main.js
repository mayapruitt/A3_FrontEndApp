window.addEventListener('DOMContentLoaded', (event) => {

    const $locationButton = document.querySelector(".location-button");
    const $issButton = document.querySelector(".iss-pass-button");
    const $cityInput = document.querySelector("#cityInput");



    $locationButton.addEventListener('click', (event) => {

        async function getWeather() {
            try {

                let city = $cityInput.value;
                const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8303ef2132ab339562341a5bc6ca045`
                ///https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY

                const options = { method: "GET" };

                let weather = await fetch(weatherURL, options);
                let result = await weather.json();

                console.log(result);
                console.log(result.coord);

                let lat = result.coord.lat;
                let lon = result.coord.lon;

                const ISSpassURL = `http://www.n2yo.com/rest/v1/satellite/visualpasses/25544/${lat}/${lon}/0/2/300/&apiKey=ZHXTDS-7VB9A6-ASMFN9-4BA6`

                let ISSpass = await fetch(ISSpassURL, options);
                let ISSresult = await ISSpass.json();
                let passes = ISSresult.passes;

                console.log(passes);
                //console.log(passes[0].startUTC);
                /*for every ISS pass, access the UTC start time. 
                Convert the unix time stamp to human readable time in 00:00 format*/
                passes.forEach(item => {
                    let unixtimestamp = item.startUTC;
                    var date = new Date(unixtimestamp * 1000);
                    console.log(date);
                });







            } catch (err) {
                console.log(err);
            }
        }
        getWeather();

    })

    ///visualpasses/{ISSid}/{observer_lat}/{observer_lng}/{observer_alt}/{days}/{min_visibility} 

    // $issButton.addEventListener('click', (event) => {
    //     async function getISSpasses() {
    //         try {

    //             let lat = result.coord.lat;
    //             let lon = result.coord.lon;

    //             const ISSpassURL = `http://www.n2yo.com/rest/v1/satellite/visualpasses/25544/${lat}/${lon}/0/2/300/&apiKey=ZHXTDS-7VB9A6-ASMFN9-4BA6`

    //             const options = { method: "GET" };

    //             let ISSpass = await fetch(ISSpassURL, options);
    //             let ISSresult = await ISSpass.json();
    //             let passes = ISSresult.passes;

    //             console.log(passes);
    //             //console.log(passes[0].startUTC);
    //             /*for every ISS pass, access the UTC start time. 
    //             Convert the unix time stamp to human readable time in 00:00 format*/
    //             passes.forEach(item => {
    //                 let unixtimestamp = item.startUTC;
    //                 var date = new Date(unixtimestamp * 1000);
    //                 var hours;
    //                 var minutes;
    //                 if (date.getHours() < 10) {
    //                     hours = "0" + date.getHours();
    //                 }
    //                 if (date.getMinutes() < 10) {
    //                     minutes = "0" + date.getMinutes();
    //                 } else {
    //                     minutes = date.getMinutes();
    //                 }
    //                 //console.log(hours);
    //                 console.log(hours + ":" + minutes);

    //             });



    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     getISSpasses();
    // })



})





//https://dog.ceo/api/breeds/image/random
  // async function getISSLocation(){
        //     try{
        //         const ISSlocationURL = 'http://api.open-notify.org/iss-now.json'

        //         const options = {method: "GET"}

        //         let ISSnow = await fetch(ISSlocationURL, options);
        //         let result = await ISSnow.json();

        //         console.log(result);
        //         let position = result.iss_position;

        //         console.log(position);

        //         // $img.src = result.message;


        //         // console.log($img.src);


        //     } catch (err) {
        //         console.log(err);
        //     }
        // }
        // getISSLocation();

        //api key: d8303ef2132ab339562341a5bc6ca045