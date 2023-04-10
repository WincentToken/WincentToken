import React from 'react';
import {FirstFilter} from "./FirstFilter";
import App from "./App";
import LastResult from "./Lists/LastResult";
import RegionList from "./Lists/RegionList";
import SmallLeagueList from "./Lists/SmallLeagueList";
import SmallTeamList from "./Lists/SmallTeamList";
import SmallMatchList from "./Lists/SmallMatchList";
import SmallPlayerList from "./Lists/SmallPlayerList";
import { useEffect, useState } from 'react';

let flag=true;
function ResultsFilter(){
    const [leagues, setLeagues] = useState([]);
    const [teams, setTeams] = useState([]);
    const [teamId, setTeamId] = useState([]);
    const [leagueId, setLeagueId] = useState([]);
    const [players, setPlayers] = useState([]);
    const [coach, setCoach] = useState([]);
    const [playerId, setPlayerId] = useState([]);
    const [flag2, setFlag2] = useState([]);
    const [openCloseFilter,setOpenCloseFilter]=useState('xl-width100 xl-overflow-hidden xl-height0 xl-display-flex xl-justifyContent-evenly xl-flexWrap-wrap xl-bg-test0 m-width95 m-overflow-hidden m-height0 m-display-flex m-justifyContent-evenly m-flexWrap-wrap m-bg-test0 s-width95 s-overflow-hidden s-height0 s-display-flex s-justifyContent-evenly s-flexWrap-wrap s-bg-test0');
    const [filterToggle,setFilterToggle]=useState('xl-height95 xl-borderR50 xl-position-absolute xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 xl-opactity60 m-height95 m-borderR50 m-position-absolute m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 m-opactity60 s-height95 s-borderR50 s-position-absolute s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2 s-opactity60');
    const [filteroffOrOn,setFilterffOrOn]=useState('Filter off');
    const [filteroffOrOnText,setFilterffOrOnText]=useState('xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-right-10 xl-opactity60 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-right-10 m-opactity60 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-right-10 s-opactity60');
    function openOrClose(){
        if(flag==true){
            setOpenCloseFilter('xl-width100 xl-overflow-hidden xl-openMatchFilter xl-display-flex xl-justifyContent-evenly xl-alignContent-center xl-flexWrap-wrap xl-bg-test0 xl-custom-border8 m-width95 m-overflow-hidden m-openMatchFilter m-display-flex m-justifyContent-center m-alignContent-center m-flexWrap-wrap m-bg-test0 m-custom-border8 s-width95 s-overflow-hidden s-openMatchFilter s-display-flex s-justifyContent-center s-alignContent-center s-flexWrap-wrap s-bg-test0 s-custom-border8');
            setFilterToggle('xl-height95 xl-borderR50 xl-marginL-15 xl-position-absolute xl-toggleFilterOn xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 m-height95 m-borderR50 m-marginL-15 m-position-absolute m-toggleFilterOn m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 s-height95 s-borderR50 s-marginL-15 s-position-absolute s-toggleFilterOn s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2');
            setFilterffOrOn('Filter on');
            setFilterffOrOnText("xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-left-10 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-left-10 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-left-10");
            flag=false;
        }
        else{
            setOpenCloseFilter('xl-width100 xl-overflow-hidden xl-closeMatchFilter xl-display-flex xl-justifyContent-evenly xl-alignContent-center xl-flexWrap-wrap xl-bg-test0 xl-custom-border8 m-width95 m-overflow-hidden m-closeMatchFilter m-display-flex m-justifyContent-evenly m-alignContent-center m-flexWrap-wrap m-bg-test0 m-custom-border8 s-width95 s-overflow-hidden s-closeMatchFilter s-display-flex s-justifyContent-evenly s-alignContent-center s-flexWrap-wrap s-bg-test0 s-custom-border8');
            setFilterToggle('xl-height95 xl-borderR50 xl-position-absolute xl-toggleFilterOff xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 m-height95 m-borderR50 m-position-absolute m-toggleFilterOff m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 s-height95 s-borderR50 s-position-absolute s-toggleFilterOff s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2');
            setFilterffOrOn('Filter off');
            setFilterffOrOnText("xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-right-10 xl-opactity60 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-right-10 m-opactity60 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-right-10 s-opactity60");
            flag=true;
        }
    }

    return(
        <>
        <div className={openCloseFilter}>
        <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height-60 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height-60 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <button className='xl-width25 xl-height-40 xl-borderR-10 xl-border-black2 xl-bg-test3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-bold xl-pointer xl-color-black m-width25 m-height-40 m-borderR-10 m-border-black2 m-bg-test3 m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-20 m-bold m-pointer m-color-black s-width25 s-height-40 s-borderR-10 s-border-black2 s-bg-test3 s-display-flex s-justifyContent-center s-alignItems-center s-bold s-pointer s-color-black'>reset filter</button>
              </div>
           <div className='xl-width100 xl-display-flex xl-justifyContent-center m-width100 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width100 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
               <div className='xl-width24 xl-marginT-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-color-white xl-bold xl-bg-test4 m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-color-white m-bold m-bg-test4 s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-color-white s-bold s-bg-test4'>region</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test4 s-width100 s-height-350 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test4'>
                      <RegionList setLeagues={setLeagues} setTeams={setTeams} setPlayers={setPlayers} setCoach={setCoach}/>
                  </div>
              </div>
              <div className='xl-width24 xl-marginT-10 xl-marginL-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10 m-marginL-10 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10 s-marginL-10 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-color-white xl-bold xl-bg-test4 xl-color-white m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-color-white m-bold m-bg-test4 s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-color-white s-bold s-bg-test4'>leagues</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test4 s-width100 s-height-350 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test4'>
                      <SmallLeagueList leagues={leagues} setTeams={setTeams} setLeagueId={setLeagueId} setFlag2={setFlag2} setPlayers={setPlayers} setCoach={setCoach}/>
                  </div>
              </div>
              <div className='xl-width24 xl-marginT-10 xl-marginL-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-color-white xl-bold xl-bg-test4 xl-color-white m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center  m-custom-border8 m-fontSize-20 m-color-white m-bold m-bg-test4 s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-color-white s-bold s-bg-test4'>teams</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test4 s-width100 s-height-350 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test4'>
                      <SmallTeamList teams={teams} setPlayers={setPlayers} setTeamId={setTeamId} teamId={teamId} setFlag2={setFlag2} setCoach={setCoach}/>
                  </div>
              </div>
              <div className='xl-width24 xl-marginT-10 xl-marginL-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10 m-marginL-10 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10 s-marginL-10 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-color-white xl-bold xl-bg-test4 m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-color-white m-bold m-bg-test4 s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-color-white s-bold s-bg-test4'>matches list</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test4 s-width100 s-height-350 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test4'>
                      <SmallMatchList/>
                  </div>
              </div>
           </div>
           <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height-60 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height-60 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <button className='xl-width25 xl-height-40 xl-borderR-10 xl-border-black2 xl-bg-test3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-bold xl-pointer xl-color-black m-width25 m-height-40 m-borderR-10 m-border-black2 m-bg-test3 m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-20 m-bold m-pointer m-color-black s-width25 s-height-40 s-borderR-10 s-border-black2 s-bg-test3 s-display-flex s-justifyContent-center s-alignItems-center s-bold s-pointer s-color-black'>do filter</button>
              </div>
              </div>
        <div className='xl-width100 xl-display-flex xl-justifyContent-center m-width100 m-display-flex m-justifyContent-center s-width100 s-display-flex s-justifyContent-center'>
        <button className='xl-width-150 xl-height-50 xl-marginT-15 xl-borderR-30 xl-custom-border8 xl-display-flex xl-alignItems-center xl-justifyContent-start xl-bg-test4 xl-position-relative xl-pointer m-width-150 m-height-50 m-marginT-15 m-borderR-30 m-custom-border8 m-display-flex m-alignItems-center m-justifyContent-start m-bg-test4 m-position-relative m-pointer s-width-150 s-height-50 s-marginT-15 s-borderR-30 s-custom-border8 s-display-flex s-alignItems-center s-justifyContent-start s-bg-test4 s-position-relative s-pointer' onClick={openOrClose}>
            <div className='xl-display-flex xl-alignItems-center m-display-flex m-alignItems-center s-display-flex s-alignItems-center'>
                <img src='ball.png' className={filterToggle}/>
                <div className={filteroffOrOnText}>{filteroffOrOn}</div>
            </div>
        </button>
        </div>
        
        </>
    )
}

function MatchStaff(){
return(
    <>
            <div className='xl-width95 xl-height90 xl-marginT-15 xl-marginB-15 xl-bg-test4 m-width95 m-height90 m-marginT-15 m-marginB-15 m-bg-test4 s-width95 s-height90 s-marginT-15 s-marginB-15 s-bg-test4'>
                <div className='xl-width100 xl-height-120 m-width100 m-height-120 s-width100 s-height-120'>
                <ul className='xl-width100 xl-height100 m-width100 m-height100 s-width100 s-height100'>
                    <li className='xl-width100 xl-height50 xl-border-white2 xl-display-flex xl-justifyContent-between xl-alignItems-center m-width100 m-height50 m-border-white2 m-display-flex m-justifyContent-between m-alignItems-center s-width100 s-height50 s-border-white2 s-display-flex s-justifyContent-between s-alignItems-center'>
                        <div className='xl-fontSize-20 xl-color-white xl-marginL-10 m-color-white m-marginL-10 s-color-white s-marginL-10'>league_week:</div>
                        <div className='xl-fontSize-20 xl-color-white xl-marginR-10 m-color-white m-marginR-10 s-color-white s-marginR-10'>preamer league - 2week</div>
                    </li>
                    <li className='xl-width100 xl-height50 xl-border-white2 xl-display-flex xl-justifyContent-between xl-alignItems-center m-width100 m-height50 m-border-white2 m-display-flex m-justifyContent-between m-alignItems-center s-width100 s-height50 s-border-white2 s-display-flex s-justifyContent-between s-alignItems-center'>
                        <div className='xl-fontSize-20 xl-color-white xl-marginL-10 m-color-white m-marginL-10 s-color-white s-marginL-10'>date_time:</div>
                        <div className='xl-fontSize-20 xl-color-white xl-marginR-10 m-color-white m-marginR-10 s-color-white s-marginR-10'>sunday 2019/09/22 - 18:30</div>
                    </li>
                </ul>
            </div>
                <div className='xl-width100 xl-height-120 xl-marginT-10 m-width100 m-height-120 m-marginT-10 s-width100 s-height-120 s-marginT-10'>
                <ul className='xl-width100 xl-height100 m-width100 m-height100 s-width100 s-height100'>
                    <li className='xl-width100 xl-height50 xl-border-white2 xl-display-flex xl-justifyContent-between xl-alignItems-center m-width100 m-height50 m-border-white2 m-display-flex m-justifyContent-between m-alignItems-center s-width100 s-height50 s-border-white2 s-display-flex s-justifyContent-between s-alignItems-center'>
                        <div className='xl-fontSize-20 xl-color-white xl-marginL-10 m-color-white m-marginL-10 s-color-white s-marginL-10'>city_venus:</div>
                        <div className='xl-fontSize-20 xl-color-white xl-marginR-10 m-color-white m-marginR-10 s-color-white s-marginR-10'>london_wembly</div>
                    </li>
                    <li className='xl-width100 xl-height50 xl-border-white2 xl-display-flex xl-justifyContent-between xl-alignItems-center m-width100 m-height50 m-border-white2 m-display-flex m-justifyContent-between m-alignItems-center s-width100 s-height50 s-border-white2 s-display-flex s-justifyContent-between s-alignItems-center'>
                        <div className='xl-fontSize-20 xl-color-white xl-marginL-10 m-color-white m-marginL-10 s-color-white s-marginL-10'>referee:</div>
                        <div className='xl-fontSize-20 xl-color-white xl-marginR-10 m-color-white m-marginR-10 s-color-white s-marginR-10'>name name name</div>
                    </li>
                </ul>
            </div>
                <div className='xl-width100 xl-marginT-10 m-width100 m-marginT-10 s-width100 s-marginT-10'>
                <ul className='xl-width100 m-width100 s-width100'>
                    <li className='xl-width100 xl-height-60 xl-border-white2 xl-display-flex xl-justifyContent-between xl-alignItems-center m-width100 m-height-60 m-border-white2 m-display-flex m-justifyContent-between m-alignItems-center s-width100 s-height-60 s-border-white2 s-display-flex s-justifyContent-between s-alignItems-center'>
                        <div className='xl-fontSize-20 xl-color-white xl-marginL-10 m-color-white m-marginL-10 s-color-white s-marginL-10'>team list</div>
                        <div className='xl-fontSize-20 xl-color-white xl-marginR-10 m-color-white m-marginR-10 s-color-white s-marginR-10'>team list</div>
                    </li>
                    <li className='xl-width100 xl-height-450 xl-display-flex xl-border-white2 m-width100 m-height-450 m-display-flex m-border-white2 s-width100 s-height-450 s-display-flex s-border-white2'>
                        <div className='xl-width50 xl-height100 xl-bg-test5 m-width50 m-height100 m-bg-test5 s-width50 s-height100 s-bg-test5'></div>
                        <div className='xl-width50 xl-height100 xl-bg-test5 m-width50 m-height100 m-bg-test5 s-width50 s-height100 s-bg-test5'></div>
                    </li>
                </ul>
            </div>
                <div className='xl-width100 m-width100 s-width100'>
                    <ul className='xl-width100 xl-fontSize-20 xl-color-white m-width100 m-color-white s-width100 s-color-white' >
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width40 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>ball xl-position</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                        </li>
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>321</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width40 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>pass (true)</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>321</div>
                        </li>
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width40 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>shot (on target)</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                        </li>
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>321</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width40 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>goal expect</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>321</div>
                        </li>
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white mswidth40 msheight100 msdisplay-flex msalignItems-center msjustifyContent-center s-color-white'>save</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                        </li>
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>321</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white mswidth40 msheight100 msdisplay-flex msalignItems-center msjustifyContent-center s-color-white'>tackle (win)</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>321</div>
                        </li>
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white mswidth40 msheight100 msdisplay-flex msalignItems-center msjustifyContent-center s-color-white'>interception (recovery ball)</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                        </li>
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>321</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white mswidth40 msheight100 msdisplay-flex msalignItems-center msjustifyContent-center s-color-white'>comer</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>321</div>
                        </li>
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white mswidth40 msheight100 msdisplay-flex msalignItems-center msjustifyContent-center s-color-white'>foul</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                        </li>
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>321</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white mswidth40 msheight100 msdisplay-flex msalignItems-center msjustifyContent-center s-color-white'>offside</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>321</div>
                        </li>
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white mswidth40 msheight100 msdisplay-flex msalignItems-center msjustifyContent-center s-color-white'>yellow/red card</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                        </li>
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>321</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width40 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>free kick (penalty)</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>321</div>
                        </li>
                        <li className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between xl-border-white2 m-width100 m-height-50 m-display-flex m-justifyContent-between m-border-white2 s-width100 s-height-50 s-display-flex s-justifyContent-between s-border-white2'>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                            <div className='xl-width40 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width40 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width40 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>fan number</div>
                            <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-color-white m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center m-color-white s-width20 s-height100 s-display-flex s-alignItems-center s-justifyContent-center s-color-white'>123</div>
                        </li>
                    </ul>
                </div>
            </div>

    </>
  )
}

function Results() {
return (
   <>
       <main>
           <div className='xl-width100 xl-marginT-10 m-width95 m-marginT-10 s-width95 s-marginT-10'>
                  <h2 className='xl-height-40 xl-marginB-15 xl-display-iBlock xl-paddingL-40 xl-paddingR-40 xl-paddingB-10 xl-paddingT-10 xl-border-white2 xl-fontSize-22 lineHeight-40 xl-bg-test4 xl-color-white m-height-30 m-marginB-15 m-display-iBlock m-paddingL-40 m-paddingR-40 m-paddingB-10 m-paddingT-10 m-border-white2 m-fontSize-18 lineHeight-40 m-bg-test4 m-color-white s-height-30 s-marginB-15 s-display-iBlock s-paddingL-40 s-paddingR-40 s-paddingB-10 s-paddingT-10 s-border-white2 s-fontSize-18 lineHeight-40 s-bg-test4 s-color-white'>last matches result</h2>
                  <div className='xl-width99 xl-height-400 xl-marginB-15 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-border-white2 xl-bg-test4 m-width100 m-height-300 m-marginB-15 m-overflow-hidden m-display-flex m-flexWrap-wrap m-border-white2 m-bg-test4 s-width100 s-height-400 s-marginB-15 s-overflow-hidden s-display-flex s-flexWrap-wrap s-border-white2 s-bg-test4'>
                      <LastResult/>
                  </div>
              </div>
           <ResultsFilter/>
           <div className='xl-width100 xl-marginT-15 xl-marginB-10 xl-display-flex xl-flexWrap-wrap xl-justifyContent-start xl-alignContent-start m-width95 m-marginT-15 m-marginB-10 m-display-flex m-flexWrap-wrap m-justifyContent-start m-alignContent-start s-width95 s-marginT-15 s-marginB-10 s-display-flex s-flexWrap-wrap s-justifyContent-start s-alignContent-start' >
               <h2 className='xl-height-40 xl-marginB-15 xl-display-iBlock xl-paddingL-40 xl-paddingR-40 xl-paddingB-10 xl-paddingT-10 xl-border-white2 xl-fontSize-22 lineHeight-40 xl-bg-test4 xl-color-white m-height-30 m-marginB-15 m-display-iBlock m-paddingL-40 m-paddingR-40 m-paddingB-10 m-paddingT-10 m-border-white2 m-fontSize-18 lineHeight-40 m-bg-test4 m-color-white s-height-30 s-marginB-15 s-display-iBlock s-paddingL-40 s-paddingR-40 s-paddingB-10 s-paddingT-10 s-border-white2 s-fontSize-18 lineHeight-40 s-bg-test4 s-color-white'>matches staff</h2>
               <div className='xl-width100 xl-border-white2 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-bg-test4 m-width100 m-border-white2 m-display-flex m-flexWrap-wrap m-justifyContent-center m-bg-test4 s-width100 s-border-white2 s-display-flex s-flexWrap-wrap s-justifyContent-center s-bg-test4'>
               <MatchStaff/>
               </div>
               
           </div>
       </main>
   </>
 );
}

export default Results;
