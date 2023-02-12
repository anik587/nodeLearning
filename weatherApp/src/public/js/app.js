console.log('Client side javascript file is loaded!')

let button = document.getElementById('weather')
let city = document.getElementById('city')
let timezone = document.getElementById('timezone')
let summary = document.getElementById('summary')
let precipType = document.getElementById('precipType')
button.addEventListener('submit', (e)=>{
    
    e.preventDefault()
    timezone.textContent = 'Loading....'
    summary.textContent = ''
    precipType.textContent = ''
 
        fetch('/weather-data?city=' + city.value).then((response) => {
            if(response.status !== 200){
                response.json().then(data => {
                    timezone.textContent = data.message
                })

            }else{
                response.json().then(data => {
                    timezone.textContent = 'Time Zone : ' + data.data[0]
                    summary.textContent = 'Summery : ' + data.data[1]
                    precipType.textContent = 'Forecast : ' + data.data[2]
                })
            }
        })

})