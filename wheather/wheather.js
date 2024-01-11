let cityname=document.getElementById('input')
let loc=document.getElementById('loca')
let takedate=document.getElementById('date')
let temp=document.getElementById('temp')
let hum=document.getElementById('hum')
let feel=document.getElementById('feel')
let wind=document.getElementById('wind')
let sunn=document.getElementById('sunny')
let submit= async()=>{
    if(cityname.value.length == 0)
    {
        alert('please enter city name')
    }
    else{
        // api fetch
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
        let res= await fetch(url)
        let data=await res.json()
        loc.innerText=`${data.name}, ${data.sys.country}`
        hum.innerText=` Humidity :${data.main.humidity}`
        feel.innerText=`Feels Like :${data.main.feels_like}`
        wind.innerText=`Wind Speed :${data.wind.speed}`

        if(data.main.temp < 0){
        temp.innerHTML=`${data.main.temp}<sup>o</sup>C 🥶`
        sunn.innerText=`🥶 Freezing`
        }
        else if(data.main.temp <20){
        temp.innerHTML=`${data.main.temp}<sup>o</sup>C ❄️`
        sunn.innerText=`❄️ Cold`
        }
        else if(data.main.temp >20 && data.main.temp < 30){
        temp.innerHTML=`${data.main.temp}<sup>o</sup>C ☁️`
        sunn.innerText=`☁️ Cloudy`
        }
        else {
        temp.innerHTML=`${data.main.temp}<sup>o</sup>C 🥵`
        sunn.innerText=`🥵 Hot`
        }

        
        let date=new Date()
        takedate.innerText=`${date.toDateString()}` 

    }
}
