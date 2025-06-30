document.querySelector('button').addEventListener('click',()=>{


const location =document.getElementById('cityInput').value ;




function udatetem(data) {

    const element =document.getElementById('weatherDetails');



element.innerHTML=`Hello  Today weather is: ${data.current.temp_c}`;
}




 fetch(`http://api.weatherapi.com/v1/current.json?key=d88f62599be1487faee83326251006&q=${location}&aqi=yes`)

.then(response=>response.json())
.then(data=>udatetem(data) )
 .catch(error => console.error('Error fetching weather:', error));







});





// document.querySelector('button').addEventListener('click', () => {
//   const city = document.getElementById('cityInput').value;

//   function updateTemp(data) {
//     const element = document.getElementById('weatherDetails');
//     element.innerHTML = `Hello! Today's weather is: ${data.current.temp_c}°C`;
//   }

//   fetch(`http://api.weatherapi.com/v1/current.json?key=d88f62599be1487faee83326251006&q=${city}&aqi=yes`)
//     .then(response => response.json())
//     .then(data => updateTemp(data))
//     .catch(error => console.error('Error fetching weather:', error));
// });
