import React from 'react';
import App from "../App";
import { useEffect, useState } from 'react';
import UpcomingMatchesList from "../Lists/UpcomingMatchesList";
import LastResultList from "../Lists/LastResult";
import ScheduleList from "../Lists/ScheduleList";
let hostUrl=process.env.REACT_APP_DATABASE_URL;
function LeagueInternationalCard({leagueName1,leagueLogo,leagueCountry}) {

    return (
        <>
            <div className='xl-width100 xl-height100 m-width100 m-height100 s-display-none'>
                <div className='xl-height80 xl-width100 xl-display-flex xl-justifyContent-evenly m-height80 m-width100 m-display-flex m-justifyContent-evenly'>
                    <div className='xl-width60 xl-height100 m-width60 m-height100'>
                        <div className='xl-width100 xl-marginT-30 xl-display-flex xl-justifyContent-start m-width100 m-marginT-30 m-display-flex m-justifyContent-start'><span className='xl-color-white xl-fontSize-30 xl-marginR-15 m-color-white m-fontSize-24 m-marginR-15'>Name</span>
                            <span className='xl-color-white xl-fontSize-30 xl-color-silver m-color-white m-fontSize-24 m-color-silver'>{leagueName1}</span>
                        </div>
                        <div className='xl-width100 xl-marginT-30 xl-display-flex xl-justifyContent-start m-width100 m-marginT-30 m-display-flex m-justifyContent-start'><span className='xl-color-white xl-fontSize-30 xl-marginR-15 m-color-white m-fontSize-24 m-marginR-15'>Region</span>
                            <span className='xl-color-white xl-fontSize-30 xl-color-silver m-color-white m-fontSize-24 m-color-silver'>{leagueCountry}</span>
                        </div>
                    </div>
                    <div className='xl-width30 xl-height100 xl-display-flex xl-alignContent-evenly xl-justifyContent-center xl-flexWrap-wrap m-width30 m-height100 m-display-flex m-alignContent-evenly m-justifyContent-center m-flexWrap-wrap'>
                        <div className='xl-width-180 xl-height-180 xl-bg-test3 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-overflow-hidden xl-borderR-15 m-width-100 m-height-100 m-bg-test3 m-display-flex m-alignItems-center m-justifyContent-center m-overflow-hidden m-borderR-15'>
                            <img className='xl-width80 m-width80' src={leagueLogo}/>
                        </div>
                        <div className='xl-width-180 xl-height-250 xl-bg-test3 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-overflow-hidden xl-borderR-15 m-width-100 m-height-150 m-bg-test3 m-display-flex m-alignItems-center m-justifyContent-center m-overflow-hidden m-borderR-15'>
                            <img className='xl-width90 m-width90' src='Spain La Liga Trophy (3).jpg'/>
                        </div>
                    </div>
                </div>
                <div className='xl-width100 xl-height-60 xl-bg-test3 xl-marginT-30 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-flexWrap-wrap m-width100 m-height-40 m-bg-test3 m-display-flex m-justifyContent-center m-alignItems-center m-flexWrap-wrap'>
                    <div className=' xl-marginR-15 m-fontSize-12 m-marginR-15 s-fontSize-12 s-marginR-15'>About this League </div>
                    <button className='xl-color-white xl-bg-test4 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-border-black2 m-color-white m-bg-test4 m-paddingB-5 m-paddingT-5 m-paddingL-10 m-paddingR-10 m-borderR-10 m-fontSize-10 m-border-black2'>News</button>
                    <button className='xl-color-white xl-bg-test4 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-border-black2 xl-marginL-5 xl-marginR-5 m-color-white m-bg-test4 m-paddingB-5 m-paddingT-5 m-paddingL-10 m-paddingR-10 m-borderR-10 m-fontSize-10 m-border-black2 m-marginL-5 m-marginR-5'>Media</button>
                    <button className='xl-color-white xl-bg-test4 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-border-black2 m-color-white m-bg-test4 m-paddingB-5 m-paddingT-5 m-paddingL-10 m-paddingR-10 m-borderR-10 m-fontSize-10 m-border-black2 s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2'>History</button>
                </div>
            </div>
            <div className='xl-display-none m-display-none s-width100 s-height-160 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
                <div className='s-width-120 s-height-120 s-bg-test3 s-borderR-15 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden s-marginT-10'>
                    <img className='s-height90' src={leagueLogo}/>
                </div>
                <div className='s-width100 s-height-30 s-fontSize-18 s-color-white s-text-center s-marginT-10'>{leagueName1}</div>
                <div className='s-width100 s-height-250 s-display-flex s-justifyContent-center s-marginT-10'>
                    <div className='s-width-200'>
                        <div className='s-text-center s-marginT-10 s-color-white s-marginB-15'>region : {leagueCountry}</div>
                        <div className='s-width-100 s-height-120 s-display-flex s-overflow-hidden s-justifyContent-center s-alignItems-center s-marginLR-auto s-marginT-30'>
                            <img className='s-height100' src='Spain La Liga Trophy (3).jpg'/>
                        </div>
                    </div>
                </div>
                <div className='s-width100 s-height-50 s-bg-test3 s-display-flex s-justifyContent-center s-alignItems-center'>
                    <div className='s-width100 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
                        <div className='s-fontSize-12 s-marginR-15'>about this league :</div>
                        <button className='s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2'>news</button>
                        <button className='s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2 s-marginL-5 s-marginR-5'>media</button>
                        <button className='s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2'>history</button>
                    </div>
                </div>
            </div>
        </>
    )
}

function LeagueRateResult() {
    return (
        <div className='xl-width95 xl-height-40 xl-borderR-30 xl-border-black2 xl-bg-test m-width95 m-height-40 m-borderR-30 m-border-black2 m-bg-test s-width95 s-height-40 s-borderR-30 s-border-black2 s-bg-test'></div>
    )
}

function LeagueImages() {
    return (
        <>
            <div className='xl-width100 xl-height32 xl-borderR-15 xl-border-black2 m-width100 m-height32 m-borderR-15 m-border-black2 s-width100 s-height32 s-borderR-15 s-border-black2'>
                <img alt='League photo' />
            </div>
            <div className='xl-width100 xl-height32 xl-borderR-15 xl-border-black2 m-width100 m-height32 m-borderR-15 m-border-black2 s-width100 s-height32 s-borderR-15 s-border-black2' >
                <img alt='venue' />
            </div>
        </>
    )
}
let flag2=false;
function LeagueFamilyTable({standing,standingTeams}) {
    let array1=[];
    let array2=[];
            for (let i = 0; i < standingTeams.length; i++) {
                array1.push(standingTeams[i].name);
                array2.push(hostUrl+standingTeams[i].logo);
        }

    let row=1;
    let row2=0;
    let row3=0;
    let color1;
    let color2;
    let color3;
    let color4;
    let color5;
    let color6;
    let icon1;
    let icon2;
    let icon3;
    let icon4;
    let icon5;
    let icon6;

    return (
        <div className='xl-width100 xl-height100 m-width100 m-height100 s-width100 s-height100'>
            <div className='xl-width100 xl-height-70 xl-position-relative m-width100 m-height-70 m-position-relative s-width100 s-height-70 s-position-relative'>
                <div className='xl-width100 xl-height-50 xl-marginT-10 xl-border-black2 xl-display-flex xl-justifyContent-between xl-position-fixed xl-zIndex-2 xl-top-0 xl-bg-test m-width100 m-height-50 m-marginT-10 m-border-black2 m-display-flex m-justifyContent-between m-position-fixed m-zIndex-2 m-top-0 m-bg-test s-width100 s-height-50 s-marginT-10 s-border-black2 s-display-flex s-justifyContent-between s-position-fixed s-zIndex-2 s-top-0 s-bg-test'>
                    <div className='xl-width100 xl-height100 xl-display-flex xl-justifyContent-end m-width100 m-height100 m-display-flex m-justifyContent-end s-width100 s-height100 s-display-flex s-justifyContent-end'>
                        <div className='xl-width60 xl-height100 xl-display-flex xl-justifyContent-evenly m-width60 m-height100 m-display-flex m-justifyContent-evenly s-width60 s-height100 s-display-flex s-justifyContent-evenly'>
                            <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none' onClick={()=>{
                                console.log(array2)
                            }}>r</div>
                            <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>tC</div>
                            <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>wC</div>
                            <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>dC</div>
                            <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>lC</div>
                            <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>gS</div>
                            <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>lS</div>
                            <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>gD</div>
                            <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>tAS</div>
                            <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-fontSize-12 s-display-none'>i</div>
                            <div className='xl-marginL-10 xl-width32 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-evenly m-marginL-10 m-width32 m-height100 m-display-flex m-alignItems-center m-justifyContent-evenly m-fontSize-12 s-marginL-10 s-width50 s-height100 s-display-flex s-alignItems-center s-justifyContent-evenly s-fontSize-12'>
                                <div>recent six games</div>
                            </div>
                        </div>
                    </div>
                </div></div>
<div className='xl-width100 xl-height90 xl-marginT-10 xl-overflow-auto m-width100 m-height90 m-marginT-10 m-overflow-auto s-width100 s-height90 s-marginT-10 s-overflow-auto'>
            {standing.length > 0 && (
                <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap s-width100 s-display-flex s-flexWrap-wrap'>
                    {
                        standing.map((user,index)=>{
                            if(user){
                                if(user.recentFirstResult==0){
                                    color1='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test7 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test7 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test7 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon1= <i className="bi bi-check-lg xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                else if(user.recentFirstResult==1){
                                    color1='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test8 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test8 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test8 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon1= <i className="bi bi-dash xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                else{
                                    color1='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test6 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test6 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test6 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon1=<i className="bi bi-x xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                if(user.recentSecondResult==0){
                                    color2='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test7 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test7 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test7 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon2= <i className="bi bi-check-lg xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                else if(user.recentSecondResult==1){
                                    color2='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test8 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test8 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test8 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon2= <i className="bi bi-dash xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                else{
                                    color2='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test6 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test6 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test6 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon2=<i className="bi bi-x xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                if(user.recentThirdResult==0){
                                    color3='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test7 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test7 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test7 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon3= <i className="bi bi-check-lg xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                else if(user.recentThirdResult==1){
                                    color3='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test8 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test8 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test8 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon3= <i className="bi bi-dash xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                else{
                                    color3='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test6 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test6 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test6 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon3=<i className="bi bi-x xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                if(user.recentFourthResult==0){
                                    color4='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test7 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test7 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test7 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon4= <i className="bi bi-check-lg xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                else if(user.recentFourthResult==1){
                                    color4='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test8 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test8 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test8 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon4= <i className="bi bi-dash xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                else{
                                    color4='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test6 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test6 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test6 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon4=<i className="bi bi-x xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                if(user.recentFifthResult==0){
                                    color5='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test7 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test7 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test7 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon5= <i className="bi bi-check-lg xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                else if(user.recentFifthResult==1){
                                    color5='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test8 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test8 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test8 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon5= <i className="bi bi-dash xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                else{
                                    color5='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test6 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test6 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test6 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon5=<i className="bi bi-x xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                if(user.recentSixthResult==0){
                                    color6='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test7 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test7 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test7 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon6= <i className="bi bi-check-lg xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                else if(user.recentSixthResult==1){
                                    color6='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test8 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test8 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test8 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon6= <i className="bi bi-dash xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }
                                else{
                                    color6='xl-width-25 xl-height-25 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test6 m-width-15 m-height-15 m-borderR50 m-border-black2 m-bg-test6 m-display-flex m-justifyContent-center m-alignItems-center s-width-15 s-height-15 s-borderR50 s-border-black2 s-bg-test6 s-justifyContent-center s-display-flex s-alignItems-center';
                                    icon6=<i className="bi bi-x xl-color-white xl-fontSize-18 m-color-white s-color-white"></i>;
                                }

                                        return <li key={index} className='xl-width100 xl-height-50 xl-marginB-10 xl-border-black2 xl-display-flex xl-justifyContent-between m-width100 m-height-50 m-marginB-10 m-border-black2 m-display-flex m-justifyContent-between s-width100 s-height-50 s-marginB-10 s-border-black2 s-display-flex s-justifyContent-between'>
                                            <div className='xl-width40 xl-height100 xl-display-flex xl-justifyContent-start xl-alignItems-center m-width40 m-height100 m-display-flex m-justifyContent-start m-alignItems-center s-width40 s-height100 s-display-flex s-justifyContent-start s-alignItems-center'>
                                                <div className='xl-width-40 xl-text-center xl-color-white xl-fontSize-20 m-width-40 m-text-center m-color-white m-fontSize-20 s-width-40 s-text-center s-color-white '>{row++}</div>
                                                <div className='xl-width-50 xl-height100 xl-marginL-5 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-50 m-height100 m-marginL-5 m-display-flex m-alignItems-center m-justifyContent-center s-width-40 s-height-40 s-marginL-5 s-display-flex s-alignItems-center s-justifyContent-center'>
                                                    <img className='xl-height90 m-height90 s-height90' src={array2[row3++]}></img>
                                                </div>
                                                <div className='xl-width-250 xl-height100 xl-marginL-10 xl-display-flex xl-alignItems-center xl-color-white m-width-250 m-height100 m-marginL-10 m-display-flex m-alignItems-center m-color-white m-fontSize-12 s-width-250 s-height100 s-marginL-10 s-display-flex s-alignItems-center s-color-white s-fontSize-12' >{array1[row2++]}</div>
                                            </div>
                                            <div className='xl-width60 xl-height100 xl-display-flex xl-justifyContent-evenly m-width60 m-height100 m-display-flex m-justifyContent-evenly s-width60 s-height100 s-display-flex s-justifyContent-evenly'>
                                                <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.red}</div>
                                                <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.totalCount}</div>
                                                <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.winCount}</div>
                                                <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.drawCount}</div>
                                                <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.loseCount}</div>
                                                <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.getScore}</div>
                                                <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.loseScore}</div>
                                                <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.goalDifference}</div>
                                                <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.totalAddScore}</div>
                                                <div className='xl-width-30 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width-30 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white m-fontSize-12 s-width-30 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white s-fontSize-10 s-display-none'>{user.integral}</div>
                                                <div className='xl-marginL-10 xl-width32 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-evenly m-marginL-10 m-width32 m-height100 m-display-flex m-alignItems-center m-justifyContent-evenly s-marginL-10 s-width50 s-height100 s-display-flex s-alignItems-center s-justifyContent-evenly'>
                                                    <div className={color1}>{icon1}</div>
                                                    <div className={color2}>{icon2}</div>
                                                    <div className={color3}>{icon3}</div>
                                                    <div className={color4}>{icon4}</div>
                                                    <div className={color5}>{icon5}</div>
                                                    <div className={color6}>{icon6}</div>
                                                </div>
                                            </div>
                                        </li>

                            }

                        })
                    }

                </ul>
            )}
</div>
        </div>
    )

}


function LeagueTable() {
    return (
        <>
            <div className='xl-width100 xl-height-660 xl-borderR-15 xl-border-black2 xl-overflow-hidden'>
                <ul className='xl-width100 xl-height-40 xl-marginT-5 xl-display-flex xl-justifyContent-evenly'>
                    <li className='xl-width24 xl-height100'><button className='xl-display-block xl-width100 xl-height100 xl-border-black2 transform-skew-25 xl-pointer'>league1</button></li>
                    <li className='xl-width24 xl-height100'><button className='xl-display-block xl-width100 xl-height100 xl-border-black2 transform-skew-25 xl-pointer'>league2</button></li>
                    <li className='xl-width24 xl-height100'><button className='xl-display-block xl-width100 xl-height100 xl-border-black2 transform-skew-25 xl-pointer'>league3</button></li>
                    <li className='xl-width24 xl-height100'><button className='xl-display-block xl-width100 xl-height100 xl-border-black2 transform-skew-25 xl-pointer'>league4</button></li>
                </ul>
                <div className='xl-width-120 xl-height-40 xl-marginLR-auto xl-marginT-10 xl-borderR-15 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-pointer'>
                    <div>select season</div>
                </div>
                <div className='xl-width99 xl-height-610 xl-marginLR-auto xl-overflow-auto'>
                    <App />
                </div>
            </div>
        </>
    )
}

function PerformanceTable() {
    return (
        <div className='xl-width100 xl-height-900 xl-borderR-15 xl-border-black2'>
            <table className='xl-width-300 xl-borderCollapse-collapse'>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>played</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>goals for</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>goals against</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>possession %</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>shots (on target)</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>pass (true)</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr><tr>
                    <td className='border-black2 xl-width50 xl-height-30'>goal chance</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>1 v 1 cross</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>interception</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>tackle (tackle win)</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>recovery ball</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>block shoot</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>raining rate</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr><tr>
                    <td className='border-black2 xl-width50 xl-height-30'>speed rate</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>heading</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>save and clearance</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>clean sheet</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>own goal</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>foul conceded</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>foul occurred</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>offside conceded</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>offside occurred</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>yellow card</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>
                <tr>
                    <td className='border-black2 xl-width50 xl-height-30'>red card</td>
                    <td className='border-black2 xl-width50 xl-height-30'></td>
                </tr>


            </table>
        </div>
    )
}

function LeagueScoreAndSupport() {
    return (
        <div className='xl-width100 xl-height100'></div>
    )
}

function LeagueMedia() {
    return (
        <div className='xl-width100 xl-height100'></div>
    )
}

function ManagerProfile() {
    return (
        <>
            <div className='xl-width100 xl-height100 xl-overflow-auto m-width100 m-height100 m-overflow-auto'>
                <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap'>
                    <li className='xl-width100 xl-marginT-10 xl-border-black2 m-width100 m-marginT-10 m-border-black2'>
                        <div className='xl-width100 xl-height-70 xl-display-flex xl-justifyContent-between xl-bg-test3 m-width100 m-height-70 m-display-flex m-justifyContent-between m-bg-test3'>
                            <div className='xl-width15 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width15 m-height100 m-display-flex m-justifyContent-center m-alignItems-center'>
                                <div className='xl-width-50 xl-height-50 xl-border-black2 xl-borderR50 m-width-50 m-height-50 m-border-black2 m-borderR50'></div>
                            </div>
                            <div className='xl-width85 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width85 m-height100 m-display-flex m-alignItems-center m-justifyContent-start'>
                                <div className='xl-width40 xl-marginL-5 m-width40 m-marginL-5'>manager name</div>
                                <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 m-width-25 m-height-25 m-border-black2 m-borderR50'></div>
                                <div className='xl-width20 xl-fontSize-10 xl-marginL-10 m-width20 m-fontSize-10 m-marginL-10'>team name</div>
                                <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 m-width-25 m-height-25 m-border-black2 m-borderR50'></div>
                                <div className='xl-width20 xl-fontSize-10 xl-marginL-10 m-width20 m-fontSize-10 m-marginL-10'>team area</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}


function LeagueProfile({leagueName1,leagueLogo,leagueCountry,standing,standingTeams}) {
    return (
        <>
                <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-alignItems-center xl-marginT-15 m-width95 m-display-flex m-justifyContent-start m-alignItems-center m-marginT-15 s-width95 s-display-flex s-justifyContent-start s-alignItems-center s-marginT-15'>
                    <h2 className='xl-height-50 xl-display-flex xl-alignItems-center xl-paddingR-40 xl-paddingL-40 xl-border-white2 xl-bg-test4 xl-color-white m-height-50 m-display-flex m-alignItems-center m-paddingR-40 m-paddingL-40 m-border-white2 m-bg-test4 m-color-white s-height-50 s-display-flex s-alignItems-center s-paddingR-40 s-paddingL-40 s-border-white2 s-bg-test4 s-color-white'>league profile</h2>
                </div>
            <div className='xl-width100 xl-height-650 xl-display-flex xl-justifyContent-between m-width95 m-height-350 m-display-flex m-justifyContent-between s-width95 s-display-flex s-justifyContent-between'>
                <div className='xl-width100 xl-border-white2 xl-bg-test4 xl-marginT-5 m-width100 m-border-white2 m-bg-test4 m-marginT-5 s-width100 s-border-white2 s-bg-test4 s-marginT-5 s-height-500'>
                    <LeagueInternationalCard leagueName1={leagueName1} leagueLogo={leagueLogo} leagueCountry={leagueCountry}/>
                </div>

            </div>
            <div className='xl-width100 xl-display-flex xl-justifyContent-between m-width95 m-display-flex m-justifyContent-between s-width95 s-display-flex s-justifyContent-between'>
                <div className='xl-width100 m-width100 s-width100'>
                    <div className='xl-width100 xl-marginT-15 xl-display-flex xl-justifyContent-start xl-flexWrap-wrap m-width100 m-marginT-15 m-display-flex m-justifyContent-start m-flexWrap-wrap s-width100 s-marginT-15 s-display-flex s-justifyContent-start s-flexWrap-wrap'>
                        <h2 className='xl-height-50 xl-display-flex xl-alignItems-center xl-paddingR-40 xl-paddingL-40 xl-border-white2 xl-bg-test4 xl-color-white m-height-50 m-display-flex m-alignItems-center m-paddingR-40 m-paddingL-40 m-border-white2 m-bg-test4 m-color-white s-height-50 s-display-flex s-alignItems-center s-paddingR-40 s-paddingL-40 s-border-white2 s-bg-test4 s-color-white'>league table</h2>
                        <div className='xl-width100 xl-height-900 xl-border-white2 xl-bg-test4 xl-marginT-5 m-width100 m-height-900 m-border-white2 m-bg-test4 m-marginT-5 s-width100 s-height-900 s-border-white2 s-bg-test4 s-marginT-5'>
                            <LeagueFamilyTable standing={standing} standingTeams={standingTeams}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='xl-width100 m-width95 s-width95'>
                <div className='xl-width100 xl-marginT-15 xl-display-flex xl-justifyContent-start xl-flexWrap-wrap m-width100 m-marginT-15 m-display-flex m-justifyContent-start m-flexWrap-wrap s-width100 s-marginT-15 s-display-flex s-justifyContent-start s-flexWrap-wrap'>
                    <h2 className='xl-height-50 xl-display-flex xl-alignItems-center xl-paddingR-40 xl-paddingL-40 xl-border-white2 xl-bg-test4 xl-color-white m-height-50 m-display-flex m-alignItems-center m-paddingR-40 m-paddingL-40 m-border-white2 m-bg-test4 m-color-white s-height-50 s-display-flex s-alignItems-center s-paddingR-40 s-paddingL-40 s-border-white2 s-bg-test4 s-color-white'>last matches</h2>
                    <div className='xl-width100 xl-height-410 xl-border-white2 xl-bg-test4 xl-marginT-5 m-width100 m-height-410 m-border-white2 m-bg-test4 m-marginT-5 m-height-410 m-border-white2 s-width100 s-height-410 s-border-white2 s-bg-test4 s-marginT-5 s-height-410 s-border-white2 '>
                        <LastResultList/>
                    </div>
                    <h2 className='xl-height-50 xl-marginT-15 xl-display-flex xl-alignItems-center xl-paddingR-40 xl-paddingL-40 xl-border-white2 xl-bg-test4 xl-color-white m-height-50 m-marginT-15 m-display-flex m-alignItems-center m-paddingR-40 m-paddingL-40 m-border-white2 m-bg-test4 m-color-white s-height-50 s-marginT-15 s-display-flex s-alignItems-center s-paddingR-40 s-paddingL-40 s-border-white2 s-bg-test4 s-color-white'>income matches</h2>
                    <div className='xl-width100 xl-height-410 xl-border-white2 xl-bg-test4 xl-marginT-5 m-width100 m-height-410 m-border-white2 m-bg-test4 m-marginT-5 s-width100 s-height-410 s-border-white2 s-bg-test4 s-marginT-5'>
                        <UpcomingMatchesList/>
                    </div>
                    <h2 className='xl-height-50 xl-marginT-15 xl-display-flex xl-alignItems-center xl-paddingR-40 xl-paddingL-40 xl-border-white2 xl-bg-test4 xl-color-white m-height-50 m-marginT-15 m-display-flex m-alignItems-center m-paddingR-40 m-paddingL-40 m-border-white2 m-bg-test4 m-color-white s-height-50 s-marginT-15 s-display-flex s-alignItems-center s-paddingR-40 s-paddingL-40 s-border-white2 s-bg-test4 s-color-white'>Schedule</h2>
                    <div className='xl-width100 xl-height-410 xl-border-white2 xl-bg-test4 xl-marginT-5 m-width100 m-height-410 m-border-white2 m-bg-test4 m-marginT-5 s-width100 s-height-410 s-border-white2 s-bg-test4 s-marginT-5'>
                        <ScheduleList/>
                    </div>
                </div>
            </div>

        </>
    )
}
export default LeagueProfile;