import {FirstFilter} from './FirstFilter';
import CoachProfile from "./Profiles/CoachProfile";
import React from 'react';
import App from './App';
import RegionList from "./Lists/RegionList";
import SmallLeagueList from "./Lists/SmallLeagueList";
import SmallTeamList from "./Lists/SmallTeamList";
import SmallPlayerList from "./Lists/SmallPlayerList";
import { useEffect, useState } from 'react';
import SmallCoachList from "./Lists/SmallCoachList ";
import axios from "axios";
import {useParams, useSearchParams} from "react-router-dom";
let hostUrl=process.env.REACT_APP_DATABASE_URL;
let flag=true;
function CoachFilter({setCoachName,setCoachBirthday,setCoachCitizenship,setCoachPhoto,setCoachContractEnd,setCoachPosition,setCoachTeamName,SearchParams,setSearchParams}){
    const [openCloseFilter,setOpenCloseFilter]=useState('xl-width100 xl-overflow-hidden xl-height0 xl-display-flex xl-justifyContent-between xl-alignContent-center xl-flexWrap-wrap xl-bg-test0 xl-marginT-15 m-width95 m-overflow-hidden m-height0 m-display-flex m-justifyContent-between m-alignContent-center m-flexWrap-wrap m-bg-test0 m-marginT-15 s-width95 s-overflow-hidden s-height0 s-display-flex s-justifyContent-between s-alignContent-center s-flexWrap-wrap s-bg-test0 s-marginT-15');
    const [filterToggle,setFilterToggle]=useState('xl-height95 xl-borderR50 xl-position-absolute xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 xl-opactity60 m-height95 m-borderR50 m-position-absolute m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 m-opactity60 s-height95 s-borderR50 s-position-absolute s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2 s-opactity60');
    const [filteroffOrOn,setFilterffOrOn]=useState('Filter off');
    const [filteroffOrOnText,setFilterffOrOnText]=useState('xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-right-10 xl-opactity60 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-right-10 m-opactity60 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-right-10 s-opactity60');
    function openOrClose(){
        if(flag==true){
            setOpenCloseFilter('xl-width100 xl-overflow-hidden xl-openMatchFilter xl-display-flex xl-justifyContent-between xl-alignContent-center xl-flexWrap-wrap xl-bg-test0 xl-custom-border8 xl-marginT-15 m-width95 m-overflow-hidden m-openMatchFilter m-display-flex m-justifyContent-between m-alignContent-center m-flexWrap-wrap m-bg-test0 m-custom-border8 m-marginT-15 s-width95 s-overflow-hidden s-openMatchFilter s-display-flex s-justifyContent-between s-alignContent-center s-flexWrap-wrap s-bg-test0 s-custom-border8 s-marginT-15');
            setFilterToggle('xl-height95 xl-borderR50 xl-marginL-15 xl-position-absolute xl-toggleFilterOn xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 m-height95 m-borderR50 m-marginL-15 m-position-absolute m-toggleFilterOn m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 s-height95 s-borderR50 s-marginL-15 s-position-absolute s-toggleFilterOn s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2');
            setFilterffOrOn('Filter on');
            setFilterffOrOnText("xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-left-10 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-left-10 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-left-10");
            flag=false;
            
        }
        else{
            setOpenCloseFilter('xl-width100 xl-overflow-hidden xl-closeMatchFilter xl-display-flex xl-justifyContent-between xl-alignContent-center xl-flexWrap-wrap xl-bg-test0 xl-marginT-15 m-width95 m-overflow-hidden m-closeMatchFilter m-display-flex m-justifyContent-between m-alignContent-center m-flexWrap-wrap m-bg-test0 m-marginT-15 s-width95 s-overflow-hidden s-closeMatchFilter s-display-flex s-justifyContent-between s-alignContent-center s-flexWrap-wrap s-bg-test0 s-marginT-15');
            setFilterToggle('xl-height95 xl-borderR50 xl-position-absolute xl-toggleFilterOff xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 m-height95 m-borderR50 m-position-absolute m-toggleFilterOff m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 s-height95 s-borderR50 s-position-absolute s-toggleFilterOff s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2');
            setFilterffOrOn('Filter off');
            setFilterffOrOnText("xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-right-10 xl-opactity60 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-right-10 m-opactity60 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-right-10 s-opactity60");
            flag=true;
        }
    }
    const [leagues, setLeagues] = useState([]);
    const [teams, setTeams] = useState([]);
    const [teamId, setTeamId] = useState([]);
    const [leagueId, setLeagueId] = useState([]);
    const [players, setPlayers] = useState([]);
    const [coaches, setCoaches] = useState([]);
    const [coach, setCoach] = useState([]);
    const [playerId, setPlayerId] = useState([]);
    const [coachId, setCoachId] = useState([]);
    const [flag2, setFlag2] = useState([]);

    return(
        <>
        <div className={openCloseFilter}>
        <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height-60 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height-60 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <button className='xl-width25 xl-height-40 xl-border-black2 xl-borderR-10 xl-bg-test3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-bold xl-pointer xl-color-black m-width25 m-height-40 m-border-black2 m-borderR-10 m-bg-test3 m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-20 m-bold m-pointer m-color-black s-width25 s-height-40 s-border-black2 s-borderR-10 s-bg-test3 s-display-flex s-justifyContent-center s-alignItems-center s-fontSize-12 s-bold s-pointer s-color-black'>reset filter</button>
              </div>
              <div className='xl-width100 xl-display-flex xl-justifyContent-center m-width100 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width100 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width24 xl-marginT-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-bold xl-bg-test4 xl-color-white m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-bold m-bg-test4 m-color-white s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-bold s-bg-test4 s-color-white'>region</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test4 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test4'>
                      <RegionList setLeagues={setLeagues} setTeams={setTeams} setPlayers={setPlayers} setCoach={setCoach}/>
                  </div>
              </div>
              <div className='xl-width24 xl-marginT-10 xl-marginL-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10 m-marginL-10 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10 s-marginL-10 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-bold xl-bg-test4 xl-color-white m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-bold m-bg-test4 m-color-white s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-bold s-bg-test4 s-color-white'>leagues</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test4 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test4'>
                      <SmallLeagueList leagues={leagues} setTeams={setTeams} setLeagueId={setLeagueId} setFlag2={setFlag2} setPlayers={setPlayers} setCoach={setCoach}/>
                  </div>
              </div>
                  <div className='xl-width24 xl-marginT-10 xl-marginL-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-bold xl-bg-test4 xl-color-white m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-bold m-bg-test4 m-color-white s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-bold s-bg-test4 s-color-white'>teams</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test4 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test4'>
                      <SmallTeamList teams={teams} setPlayers={setPlayers} setTeamId={setTeamId} teamId={teamId} setFlag2={setFlag2} setCoaches={setCoaches} setCoach={setCoach}/>
                  </div>
              </div>
                  <div className='xl-width24 xl-marginT-10 xl-marginL-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10 m-marginL-10 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10 s-marginL-10 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-bold xl-bg-test4 xl-color-white m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-bold m-bg-test4 m-color-white s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-bold s-bg-test4 s-color-white'>coaches</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test4 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test4'>
                      <SmallCoachList coaches={coaches} setPlayerId={setPlayerId} setFlag2={setFlag2} setCoachId={setCoachId}/>
                  </div>
              </div>
              </div>
                <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height-60 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height-60 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <button className='xl-width25 xl-height-40 xl-border-black2 xl-borderR-10 xl-bg-test3 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-bold xl-pointer xl-color-black m-width25 m-height-40 m-border-black2 m-borderR-10 m-bg-test3 m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-20 m-bold m-pointer m-color-black s-width25 s-height-40 s-border-black2 s-borderR-10 s-bg-test3 s-display-flex s-justifyContent-center s-alignItems-center s-fontSize-12 s-bold s-pointer s-color-black'
                          onClick={()=>{
                              if(flag2==true){
                                  axios.post(process.env.REACT_APP_DATABASE_URL+`/Player/DisplayPlayer/FilterByPlayer/${playerId}`).then((response) => {
                                      setSearchParams(response.data.result.find(item=>item.position==='Coach').name)
                                      setCoachName(response.data.result.find(item=>item.position==='Coach').name);
                                      setCoachBirthday(response.data.result.find(item=>item.position==='Coach').birthday);
                                      setCoachCitizenship(response.data.result.find(item=>item.position==='Coach').country);
                                      setCoachPhoto(response.data.result.find(item=>item.position==='Coach').photo);
                                      setCoachTeamName(response.data.result.find(item=>item.position==='Coach').teamName);
                                      setCoachPosition(response.data.result.find(item=>item.position==='Coach').position);
                                      setCoachContractEnd(response.data.result.find(item=>item.position==='Coach').contractEndDate)
                                  })
                              }
                              setFlag2(false)
                          }}>do filter</button>
              </div>
              </div>
        <div className='xl-width100 xl-display-flex xl-justifyContent-center m-width100 m-display-flex m-justifyContent-center s-width100 s-display-flex s-justifyContent-center'>
        <div className='xl-width-150 xl-height-50 xl-marginT-15 xl-borderR-30 xl-custom-border8 xl-display-flex xl-alignItems-center xl-justifyContent-start xl-bg-test4 xl-position-relative xl-pointer m-width-150 m-height-50 m-marginT-15 m-borderR-30 m-custom-border8 m-display-flex m-alignItems-center m-justifyContent-start m-bg-test4 m-position-relative m-pointer s-width-150 s-height-50 s-marginT-15 s-borderR-30 s-custom-border8 s-display-flex s-alignItems-center s-justifyContent-start s-bg-test4 s-position-relative s-pointer' onClick={openOrClose}>
            <div className='xl-display-flex xl-alignItems-center m-display-flex m-alignItems-center s-display-flex s-alignItems-center'>
                <img src='ball.png' className={filterToggle}/>
                <div className={filteroffOrOnText}>{filteroffOrOn}</div>
            </div>
        </div>
        </div>
        </>
    )
}

function Coaches() {
    const [coachName,setCoachName]= useState('Amatriain Arteta Mikel');
    const [coachBirthday,setCoachBirthday]= useState('1982-03-26');
    const [coachCitizenship,setCoachCitizenship]= useState('Spain');
    const [coachPhoto,setCoachPhoto]= useState('/LogoDB/PlayerLogo/2213.jpg');
    const [coachTeamName,setCoachTeamName]= useState('Arsenal');
    const [coachPosition,setCoachPosition]= useState('');
    const [coachContractEnd,setCoachContractEnd]= useState('2025-06-30');
    const { coachName1 }=useParams();
    const[SearchParams,setSearchParams]=useSearchParams({ n: coachName1});
    return (
      <>

          <main>
              <CoachFilter setCoachPhoto={setCoachPhoto} setCoachCitizenship={setCoachCitizenship} setCoachBirthday={setCoachBirthday} setCoachName={setCoachName} setCoachTeamName={setCoachTeamName} setCoachPosition={setCoachPosition} setCoachContractEnd={setCoachContractEnd} setSearchParams={setSearchParams} SearchParams={SearchParams}/>
              <div className='xl-width100 xl-marginT-10 xl-marginB-15 m-width95 m-marginT-10 m-marginB-15 s-width95 s-marginT-10 s-marginB-15'>
                  <CoachProfile coachName={coachName} coachBirthday={coachBirthday} coachCitizenship={coachCitizenship} coachPhoto={coachPhoto} coachTeamName={coachTeamName} coachPosition={coachPosition} coachContractEnd={coachContractEnd}/>
              </div>
          </main>
      </>
  );
}

export default Coaches;
