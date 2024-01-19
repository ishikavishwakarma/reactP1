import React, { useEffect, useState } from 'react'
import Search from './Search'
import axios from 'axios';

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setloading] = useState(false);
  const [weather, setweather] = useState(null);

  const dataHandler = async (param)=>{
    setloading(true);
 try {
    const response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=a95e0b4ef3cd012f2b3a9052b43b70d1`)
    const data = response.data;
    // console.log(data);
    if(data){
      setloading(false)
      setweather(data)
    }
 } catch (error) {
  setloading(false)
  console.log(error);
 }
  }
  const getdate=()=>{
    return new Date().toLocaleDateString('en-us',{
      weekday:'long',
      month:'long',
      day:'numeric',
      year:'numeric'
    })
  }

  const weekday = getdate().split(' ')[0];
  const month = getdate().split(',')[1];
 
  const year = getdate().split(' ')[3];

  const searchHandler = async ()=>{
  dataHandler(search)
  }

  useEffect(() => {
    dataHandler('bhopal');
  }, [ ])
  console.log(weather)

  return (
    <>
    <Search search={search} setSearch ={setSearch} searchHandler={searchHandler} />
    
        <div className='flex w-full'>

          <div className='left w-1/2 flex flex-col justify-center align-middle pl-5 text-center'>
          {loading ? <h2 className='mt-20 text-4xl font-medium'>loading..</h2> :
          <div className='data mt-20 text-4xl font-medium '> {weather? 
          <h1>{weather.name}  ,  {weather.sys.country}</h1>
          
          : ""} </div>
          }
          <div className='mt-6 flex flex-col align-middle justify-center ' >
            
          <h3  className='text-xl  font-normal pb-1'>{weekday}</h3>
          <h3 className='text-xl font-normal pb-1'>{month}</h3>
          <h3 className='text-xl font-normal pb-1'>{year}</h3>
          </div>
        </div>
        <div className="right w-1/2 flex flex-col justify-center align-middle text-center'">
           <div className="data2 pr-32">
           {loading ? <h2 className='mt-20 text-4xl font-medium '>loading..</h2> :
          
          <div className='data mt-20 text-4xl font-medium  '> {weather? 
         <div  className='flex align-middle flex-col text-center justify-center pt-10'>
          <h5>{weather.main.temp}°</h5>
           <h1 className='text-2xl font-normal pt-5'>{weather.weather[0].description}  </h1>
           <h5  className='text-2xl font-normal pt-1'>{weather.wind.speed} <span>- Wind Speed</span></h5>
           <h5  className='text-2xl font-normal pt-1'>{weather.main.humidity}<span>% Humidity</span></h5>
           <h5  className='text-2xl font-normal pt-1'>{weather.main.pressure}<span>mb Pressure</span></h5>
         </div>
          
          : ""} </div>
          }
           </div>
        </div>
        </div>
        
        </>
  )
}

export default Weather