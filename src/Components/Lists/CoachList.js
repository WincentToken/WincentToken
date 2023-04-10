import React  from 'react';
import {useEffect,useState} from 'react';
import DemoModal from "../DemoModal";
// import dotenv from 'dotenv'
// dotenv.config()
function CoachList({coach}) {

  return (
      <div className='xl-width100 xl-height100 xl-overflow-auto m-width100 m-height100 m-overflow-auto s-width100 s-height100 m-overflow-auto'>
          {/*{coach.length > 0 && (*/}
              <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap s-width100 s-display-flex m-flexWrap-wrap'>
                  {/*{coach.map((aCoach,index) => (*/}
                  <li className='xl-width100 xl-marginT-10 xl-border-black2 xl-pointer m-width100 m-marginT-10 m-border-black2 m-pointer s-width100 s-marginT-10 s-border-black2 s-pointer'>
                      <div className='xl-width100 xl-height-70 xl-display-flex xl-justifyContent-between xl-bg-test4 m-width100 m-height-70 m-display-flex m-justifyContent-between m-bg-test4 s-width100 s-height-80 s-display-flex s-justifyContent-between s-bg-test4 s-flexWrap-wrap'>
                          <div className='xl-width15 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width20 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height-60 s-display-flex s-justifyContent-center s-alignItems-center'>
                              <div className='xl-width-50 xl-height-50 xl-border-black2 xl-bg-test3 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden m-width-40 m-height-40 m-border-black2 m-bg-test3 m-borderR50 m-display-flex m-justifyContent-center m-alignItems-center m-overflow-hidden s-width-40 s-height-40 s-border-black2 s-bg-test3 s-borderR50 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden'>
                                  {/*<img className='xl-width100 xl-height100 m-width100 m-height100 s-width100 s-height100' src={process.env.REACT_APP_DATABASE_URL+coach.photo}/>*/}
                              </div>
                          </div>
                          <div className='xl-width85 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width80 m-height100 m-display-flex m-alignItems-center m-justifyContent-start s-width80 s-display-flex s-alignItems-center s-justifyContent-start'>
                              {/*<div className='xl-width40 xl-color-white m-width40 m-color-white m-fontSize-12 s-width100 s-color-white s-fontSize-12 s-display-flex s-justifyContent-center s-text-center'>{coach.name}</div>*/}
                              <div className='xl-width-25 xl-height-25 xl-border-black2 xl-bg-test3 xl-borderR50 m-display-none s-display-none'></div>
                              {/*<div className='xl-width20 xl-fontSize-10 xl-marginL-10 xl-color-white m-display-none s-display-none'>{coach.leagueName}</div>*/}
                              <div className='xl-width-25 xl-height-25 xl-border-black2 xl-bg-test3 xl-borderR50 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width-25 m-height-25 m-border-black2 m-bg-test3 m-borderR50 m-display-flex m-justifyContent-center m-alignItems-center s-display-none'>
                                  {/*<img className='xl-height90 m-height90' src={process.env.REACT_APP_DATABASE_URL+coach.teamLogo}/>*/}
                              </div>
                              {/*<div className='xl-width20 xl-fontSize-12 xl-marginL-10 xl-color-white m-width20 m-fontSize-10 m-marginL-10 m-color-white s-display-none'>{coach.teamName}</div>*/}
                          </div>
                      </div>
                  </li>
                  {/*))}*/}
              </ul>
          {/*)}*/}
      </div>
  )
}
export default CoachList;