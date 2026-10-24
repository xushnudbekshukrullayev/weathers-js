let inp = document.getElementById("inp") 
let btn = document.getElementById("btn") 
let cityName = document.getElementById("cityName") 
let temp = document.getElementById("temp") 
let desc = document.getElementById("desc") 
let result = document.querySelector(".result")

let API_KEY ="3ea523ae68d2729e7a30afc99ce643e7"
let data =[]

async function getWeather(city) {
    try{
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
        `;
        let response= await fetch(url) 
        console.log(response)
         data = await response.json()
         cityName.innerHTML= data.name 
         temp.innerHTML= `${Math.round(data.main. temp)} 'C`
         result.classList.remove("hidden")
    }
    catch(error ){
        console.log('xatolik ', error);
    }
}
btn .addEventListener("click",()=>{
    let value = inp.value.trim()

    if(value !==""){
        getWeather(value)
    }
    else{
        alert("shahar nomini kiriting")
    
    }

})
document.addEventListener("keydown",(e)=>{
    if(e.key ==="Enter"){
        let  value =inp.value.trim()
    }
    if(value !==""){
        getWeather(value)
    }
    else{
        alert("shahar nomini kiriting")
    }
})