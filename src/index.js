import React  from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Components/Home';
import Players from './Components/Players';
import Teams from './Components/Teams';
import News from './Components/News';
import Results from './Components/Results';
import LogIn from './Components/LogIn';
import Matches from './Components/Matches';
import Coaches from './Components/Coaches';
import Transfer from './Components/Transfer'
import Leagues from "./Components/Leagues";
import ComingSoon from "./Components/ComingSoon";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, useSearchParams} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/footer";
import {useState} from "react";

import { CookiesProvider } from "react-cookie";
import Cookies from 'universal-cookie';
import PlayerProfile from "./Components/Profiles/PlayerProfile";
const cookies = new Cookies();
cookies.set('myCat', 'Pacman', { path: '/' });

// Function to add our give multiple cache data
const addMultipleCacheData = async (cacheList) => {

 for (var i = 0; i < cacheList.length; i++) {
  // Converting our response into Actual Response form
  const data = new Response(JSON.stringify(cacheList[i].cacheData));

  if ('caches' in window) {
   // Opening given cache and putting our data into it
   var cache = await caches.open(cacheList[i].cacheName)
   cache.put(cacheList[i].url, data);
  }
 }
};

const CacheToBeStored = [
 { cacheName: 'CacheOne', cacheData: '1 CacheData',
  url: 'https://localhost:3008' },
 { cacheName: 'CacheTwo', cacheData: '2 CacheData',
  url: 'https://localhost:3008' },
 { cacheName: 'CacheThree', cacheData: '3rd CacheData',
  url: 'https://snyk.io/advisor/npm-package/react-cookie/example' },
]
addMultipleCacheData(CacheToBeStored)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <CookiesProvider>
     <BrowserRouter>
 <Navigation />
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/players' element={<Players/>}></Route>
  <Route path='/players/:playerName1' element={<Players/>}></Route>
  <Route path='/teams' element={<Teams/>}></Route>
  <Route path='/teams/:teamName' element={<Teams/>}></Route>
  <Route path='/news' element={<News/>}></Route>
  <Route path='/results' element={<Results/>}></Route>
  <Route path='/media' element={<ComingSoon/>}></Route>
  <Route path='/store' element={<ComingSoon/>}></Route>
  <Route path='/login' element={<LogIn/>}></Route>
  <Route path='/SignUp' element={<ComingSoon/>}></Route>
  <Route path='/Matches' element={<Matches/>}></Route>
  <Route path='/Coaches' element={<Coaches/>}></Route>
  <Route path='/Managers' element={<ComingSoon/>}></Route>
  <Route path='/Medicals' element={<ComingSoon/>}></Route>
  <Route path='/Staff' element={<ComingSoon/>}></Route>
  <Route path='/Fan' element={<ComingSoon/>}></Route>
  <Route path='/Referees' element={<ComingSoon/>}></Route>
  <Route path='/Support' element={<ComingSoon/>}></Route>
  <Route path='/Press' element={<ComingSoon/>}></Route>
  <Route path='/Store' element={<ComingSoon/>}></Route>
  <Route path='/Support' element={<ComingSoon/>}></Route>
  <Route path='/Bet' element={<ComingSoon/>}></Route>
  <Route path='/Leagues' element={<Leagues/>}></Route>
  <Route path='/Leagues/:leagueName' element={<Leagues/>}></Route>
  <Route path='/Transfer' element={<Transfer/>}></Route>
  <Route path='/bet' element={<ComingSoon/>}></Route>
  <Route path='/hangout' element={<ComingSoon/>}></Route>
  <Route path='/*' element={<ComingSoon/>}></Route>
 </Routes>
 <Footer/>
    </BrowserRouter>
    </CookiesProvider>

);

reportWebVitals();
