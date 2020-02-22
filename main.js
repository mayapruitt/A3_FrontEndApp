window.addEventListener('DOMContentLoaded', (event) => {

    const $randomDog = document.querySelector(".button");
  
   

    $randomDog.addEventListener('click', (event) => {
        const $img = document.getElementById("dogimg");
        
        async function getRandomDog(){
            try{
                const dogAPI = 'https://dog.ceo/api/breeds/image/random';

                const options = {method: "GET"}

                let dog = await fetch(dogAPI, options);
                let result = await dog.json();

                console.log(result);
                
                $img.src = result.message;
                
                
                console.log($img.src);
   

            } catch (err) {
                console.log(err);
            }
        }
        getRandomDog();

    })


})





//https://dog.ceo/api/breeds/image/random