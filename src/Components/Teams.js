import React from 'react';
import {FirstFilter} from './FirstFilter';
import TeamProfile from './Profiles/TeamProfile';
import RegionList from "./Lists/RegionList";
import SmallLeagueList from "./Lists/SmallLeagueList";
import SmallTeamList from "./Lists/SmallTeamList";
import axios from "axios";
import { useEffect, useState } from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import{useNavigate} from "react-router-dom";


let flag=true;

function TeamsFilter({setTeamName1,resetFilter,setTeamStart,setTeamArea,setTeamLogo,setTeamCountry,setLeagueName,setVenue,setPlayers2,setSearchParams,SearchParams}){
    const [openCloseFilter,setOpenCloseFilter]=useState('xl-width100 xl-overflow-hidden xl-height0 xl-display-flex xl-justifyContent-between xl-alignContent-center xl-flexWrap-wrap xl-bg-blur1 xl-marginT-15 m-width95 m-overflow-hidden m-height0 m-display-flex m-justifyContent-between m-alignContent-center m-flexWrap-wrap m-bg-blur1 m-marginT-15 s-width95 s-overflow-hidden s-height0 s-display-flex s-justifyContent-between s-alignContent-center s-flexWrap-wrap s-bg-blur1 s-marginT-15');
    const [filterToggle,setFilterToggle]=useState('xl-height95 xl-borderR50 xl-position-absolute xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 xl-opactity60 m-height95 m-borderR50 m-position-absolute m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 m-opactity60 s-height95 s-borderR50 s-position-absolute s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2 s-opactity60');
    const [filterOffOrOn,setFilterOffOrOn]=useState('Filter Off');
    const [filterOffOrOnText,setFilterOffOrOnText]=useState('xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-right-10 xl-opactity60 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-right-10 m-opactity60 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-right-10 s-opactity60');
    function openOrClose(){
        if(flag==true){
            setOpenCloseFilter('xl-width100 xl-overflow-hidden xl-openMatchFilter xl-display-flex xl-justifyContent-between xl-alignContent-center xl-flexWrap-wrap xl-bg-test12 xl-custom-border8 xl-marginT-15 m-width95 m-overflow-hidden m-openMatchFilter m-display-flex m-justifyContent-between m-alignContent-center m-flexWrap-wrap m-bg-test12 m-custom-border8 m-marginT-15 s-width95 s-overflow-hidden s-openMatchFilter s-display-flex s-justifyContent-between s-alignContent-center s-flexWrap-wrap s-bg-test12 s-custom-border8 s-marginT-15');
            setFilterToggle('xl-height95 xl-borderR50 xl-marginL-15 xl-position-absolute xl-toggleFilterOn xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 m-height95 m-borderR50 m-marginL-15 m-position-absolute m-toggleFilterOn m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 s-height95 s-borderR50 s-marginL-15 s-position-absolute s-toggleFilterOn s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2');
            setFilterOffOrOn('Filter on');
            setFilterOffOrOnText("xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-left-10 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-left-10 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-left-10");
            flag=false;
            
        }
        else{
            setOpenCloseFilter('xl-width100 xl-overflow-hidden xl-closeMatchFilter xl-display-flex xl-justifyContent-between xl-alignContent-center xl-flexWrap-wrap xl-bg-test12 xl-custom-border8 xl-marginT-15 m-width95 m-overflow-hidden m-closeMatchFilter m-display-flex m-justifyContent-between m-alignContent-center m-flexWrap-wrap m-bg-test12 m-custom-border8 m-marginT-15 s-width95 s-overflow-hidden s-closeMatchFilter s-display-flex s-justifyContent-between s-alignContent-center s-flexWrap-wrap s-bg-test12 s-custom-border8 s-marginT-15');
            setFilterToggle('xl-height95 xl-borderR50 xl-position-absolute xl-toggleFilterOff xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 m-height95 m-borderR50 m-position-absolute m-toggleFilterOff m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 s-height95 s-borderR50 s-position-absolute s-toggleFilterOff s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2');
            setFilterOffOrOn('Filter Off');
            setFilterOffOrOnText("xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-right-10 xl-opactity60 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-right-10 m-opactity60 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-right-10 s-opactity60");
            flag=true;
        }
    }

    const [leagues, setLeagues] = useState([]);
    const [coach, setCoach] = useState([]);
    const [teams, setTeams] = useState([]);
    const [players, setPlayers] = useState([]);
    const [teamId,setTeamId]= useState([]);
    const [leagueId,setLeagueId]= useState([]);
    const [flag2,setFlag2]= useState(false);
    const navigate=useNavigate()

    const [modal,setModal]= useState('xl-width-100vw xl-height-100vh xl-position-fixed xl-zIndex-2 xl-bg-blur1 xl-top-0 xl-left-0 xl-display-none xl-justifyContent-center xl-alignItems-center m-width-100vw m-height-100vh m-position-fixed m-zIndex-2 m-bg-blur1 m-top-0 m-left-0 m-display-none m-justifyContent-center m-alignItems-center s-width-100vw s-height-100vh s-position-fixed s-zIndex-2 s-bg-blur1 s-top-0 s-left-0 s-display-none s-justifyContent-center s-alignItems-center');

    return(
        <>
        <div className={openCloseFilter}>
        <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height-60 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height-60 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <button className='xl-width25 xl-height-40 xl-border-black2 xl-borderR-10 xl-bg-test xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-bold xl-pointer xl-color-black m-width25 m-height-40 m-border-black2 m-borderR-10 m-bg-test m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-18 m-bold m-pointer m-color-black s-width25 s-height-40 s-border-black2 s-borderR-10 s-bg-test s-display-flex s-justifyContent-center s-alignItems-center s-bold s-pointer s-color-black' onClick={()=>{

                  }}>reset filter</button>
              </div>
              <div className='xl-width100 xl-display-flex xl-justifyContent-center m-width100 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width100 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width24 xl-marginT-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-bold xl-color-white xl-bg-test0 m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-bold m-color-white m-bg-test0 s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-bold s-color-white s-bg-test0'>region</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test0 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test0 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test0'>
                      <RegionList setLeagues={setLeagues} setTeams={setTeams} setPlayers={setPlayers} setCoach={setCoach}/>
                  </div>
              </div>
              <div className='xl-width24 xl-marginT-10 xl-marginL-15 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10 m-marginL-15 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10 s-marginL-15 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-bold xl-color-white xl-bg-test0 m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-bold m-color-white m-bg-test0 s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-bold s-color-white s-bg-test0'>leagues</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test0 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test0 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test0'>
                      <SmallLeagueList leagues={leagues} setTeams={setTeams} setLeagueId={setLeagueId} setFlag2={setFlag2} setPlayers={setPlayers} setCoach={setCoach}/>
                  </div>
              </div>
                  <div className='xl-width24 xl-marginT-10 xl-marginL-15 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10 m-marginL-15 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10 s-marginL-15 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-bold xl-color-white xl-bg-test0 m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-bold m-color-white m-bg-test0 s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-bold s-color-white s-bg-test0'>teams</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test0 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test0 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test0'>
                      <SmallTeamList teams={teams} setTeamId={setTeamId} flag2={flag2} setFlag2={setFlag2} setPlayers={setPlayers} setCoach={setCoach}/>
                  </div>
              </div>
              </div>
              <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height-60 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height-60 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <button className='xl-width25 xl-height-40 xl-border-black2 xl-borderR-10 xl-bg-test xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-bold xl-pointer xl-color-black m-width25 m-height-40 m-border-black2 m-borderR-10 m-bg-test m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-18 m-bold m-pointer m-color-black s-width25 s-height-40 s-border-black2 s-borderR-10 s-bg-test s-display-flex s-justifyContent-center s-alignItems-center s-bold s-pointer s-color-black' onClick={()=>{
                      console.log(SearchParams)
                      if(flag2==true){
                          axios.post(process.env.REACT_APP_DATABASE_URL+'/Team/DisplayTeam/'+teamId).then((response) => {
                              navigate(`/teams/${response.data.result[0].teamId}`);
                              setTeamName1(response.data.result[0].name);
                              setTeamStart(response.data.result[0].foundingDate);
                              setTeamArea(response.data.result[0].area);
                              setCoach(response.data.result[0].coach)
                              setTeamLogo(response.data.result[0].logo);
                              setTeamCountry(response.data.result[0].country);
                              setLeagueName(response.data.result[0].leagueName);
                              setVenue(response.data.result[0].venue);
                              console.log(response.data.result[0].name)
                              if(response.data.result[0].logo==""){
                                  setTeamLogo('team.png');
                              }
                              else{
                                  setTeamLogo(response.data.result[0].logo);
                              }
                          }).catch(error=>{
                              console.log('ERROR')
                          })
                          axios.post(process.env.REACT_APP_DATABASE_URL+'/Player/DisplayPlayer/FilterByTeam/'+teamId).then((response)=>{
                              setPlayers2(response.data.result);
                          }).catch(error2=>{
                              setPlayers2('');
                          })
                      }
                      else{setModal('xl-width-100vw xl-height-100vh xl-position-fixed xl-zIndex-2 xl-bg-blur1 xl-top-0 xl-left-0 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width-100vw m-height-100vh m-position-fixed m-zIndex-2 m-bg-blur1 m-top-0 m-left-0 m-display-flex m-justifyContent-center m-alignItems-center s-width-100vw s-height-100vh s-position-fixed s-zIndex-2 s-bg-blur1 s-top-0 s-left-0 s-display-flex s-justifyContent-center s-alignItems-center')}
                      setFlag2(false)
                  }}>do filter</button>
              </div>
              </div>
        <div className='xl-width100 xl-display-flex xl-justifyContent-center m-width100 m-display-flex m-justifyContent-center s-width100 s-display-flex s-justifyContent-center'>
        <div className='xl-width-150 xl-height-50 xl-marginT-15 xl-borderR-30 xl-border-white2 xl-display-flex xl-alignItems-center xl-justifyContent-start xl-bg-test4 xl-position-relative xl-pointer m-width-150 m-height-50 m-marginT-15 m-borderR-30 m-border-white2 m-display-flex m-alignItems-center m-justifyContent-start m-bg-test4 m-position-relative m-pointer s-width-150 s-height-50 s-marginT-15 s-borderR-30 s-border-white2 s-display-flex s-alignItems-center s-justifyContent-start s-bg-test4 s-position-relative s-pointer' onClick={openOrClose}>
            <button className='xl-display-flex xl-alignItems-center xl-pointer m-display-flex m-alignItems-center m-pointer s-display-flex s-alignItems-center s-pointer'>
                <img src='ball.png' className={filterToggle}/>
                <div className={filterOffOrOnText}>{filterOffOrOn}</div>
            </button>
        </div>
        </div>
            <div className={modal}>
                <div className='xl-width-450 xl-height-250 xl-border-white2 xl-bg-test0 xl-position-relative m-width-450 m-height-250 m-border-white2 m-bg-test0 m-position-relative s-width-450 s-height-250 s-border-white2 s-bg-test0 s-position-relative'>
                    <div className='xl-width100 xl-height-50 xl-display-flex xl-alignItems-center xl-justifyContent-end m-width100 m-height-50 m-display-flex m-alignItems-center m-justifyContent-end s-width100 s-height-50 s-display-flex s-alignItems-center s-justifyContent-end'>
                        <div className='xl-width-50 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width-50 m-height100 m-display-flex m-alignItems-center m-justifyContent-center s-width-50 s-height100 s-display-flex s-alignItems-center s-justifyContent-center'>
                            <i className="bi bi-x-lg xl-fontSize-22 xl-color-white xl-pointer s-fontSize-22 s-color-white s-pointer" onClick={()=>{
                                setModal('xl-width-100vw xl-height-100vh xl-position-fixed xl-zIndex-2 xl-bg-blur1 xl-top-0 xl-left-0 xl-display-none xl-justifyContent-center xl-alignItems-center m-width-100vw m-height-100vh m-position-fixed m-zIndex-2 m-bg-blur1 m-top-0 m-left-0 m-display-none m-justifyContent-center m-alignItems-center s-width-100vw s-height-100vh s-position-fixed s-zIndex-2 s-bg-blur1 s-top-0 s-left-0 s-display-none s-justifyContent-center s-alignItems-center')
                            }}></i>
                        </div>
                    </div>
                    <div className='xl-width90 xl-marginLR-auto xl-marginT-15 xl-color-white xl-fontSize-20 xl-bold m-width90 m-marginLR-auto m-marginT-15 m-color-white m-fontSize-20 m-bold s-width90 s-marginLR-auto s-marginT-15 s-color-white s-fontSize-20 s-bold'>select team before press do filter button!</div>
                    <div className='xl-width100 xl-height-80 xl-position-absolute xl-bottom-0 xl-display-flex xl-justifyContent-end xl-alignItems-center m-width100 m-height-80 m-position-absolute m-bottom-0 m-display-flex m-justifyContent-end m-alignItems-center s-width100 s-height-80 s-position-absolute s-bottom-0 s-display-flex s-justifyContent-end s-alignItems-center'>
                        <button className='xl-marginR-15 xl-borderR-10 xl-paddingR-40 xl-paddingL-40 xl-paddingT-10 xl-paddingB-10 xl-bg-test xl-pointer xl-bold m-marginR-15 m-borderR-10 m-paddingR-40 m-paddingL-40 m-paddingT-10 m-paddingB-10 m-bg-test m-pointer m-bold s-marginR-15 s-borderR-10 s-paddingR-40 s-paddingL-40 s-paddingT-10 s-paddingB-10 s-bg-test s-pointer s-bold' onClick={()=>{
                            setModal('xl-width-100vw xl-height-100vh xl-position-fixed xl-zIndex-2 xl-bg-blur1 xl-top-0 xl-left-0 xl-display-none xl-justifyContent-center xl-alignItems-center m-width-100vw m-height-100vh m-position-fixed m-zIndex-2 m-bg-blur1 m-top-0 m-left-0 m-display-none m-justifyContent-center m-alignItems-center s-width-100vw s-height-100vh s-position-fixed s-zIndex-2 s-bg-blur1 s-top-0 s-left-0 s-display-none s-justifyContent-center s-alignItems-center')
                        }}>OK</button>
                    </div>
                </div>
            </div>
        </>
    )
}

function Teams() {
    const [flag2,setFlag3]=useState(true)
    const [teamName1,setTeamName1]= useState('Manchester City');
    const [teamStart,setTeamStart]= useState('1880');
    const [teamArea,setTeamArea]= useState('Manchester');
    const [teamLogo,setTeamLogo]= useState('/LogoDB/TeamLogo/26.png');
    const [teamCountry,setTeamCountry]= useState('England');
    const [leagueName,setLeagueName]= useState('English Premier League');
    const [venue,setVenue]= useState([]);
    const [players,setPlayers2]= useState([]);
    const { teamName }=useParams();
    const[SearchParams,setSearchParams]=useSearchParams({ n: teamName});
    let num=SearchParams.get('n');
    if(teamName&&flag2==true){
        axios.post(process.env.REACT_APP_DATABASE_URL+'/Team/DisplayTeam/'+num).then(
            (response) => {
            setTeamName1(response.data.result[0].name);
            setTeamStart(response.data.result[0].foundingDate);
            setTeamArea(response.data.result[0].area);
            setTeamLogo(response.data.result[0].logo);
            setTeamCountry(response.data.result[0].country);
            setLeagueName(response.data.result[0].leagueName);
            setVenue(response.data.result[0].venue);
            console.log(response.data.result[0].name)
            if(response.data.result[0].logo==""){
                setTeamLogo('team.png');
            }
            else{
                setTeamLogo(response.data.result[0].logo);
            }

        }).catch(error=>{
            alert(error)
        })
        axios.post(process.env.REACT_APP_DATABASE_URL+'/Player/DisplayPlayer/FilterByTeam/'+num).then((response)=>{
            setPlayers2(response.data.result);
        }).catch(error2=>{
            setPlayers2('');
        })
        setFlag3(false)
    }
    let resetFilter='resetFilter';
    if(flag==true){
        axios.post(process.env.REACT_APP_DATABASE_URL+"/Player/DisplayPlayer/FilterByTeam/26").then((response)=>{
            setPlayers2(response.data.result.filter(item=>item.position!=='Coach'));
                flag=false;
            }
        )
    }

    return (
      <>
          <main>
          <TeamsFilter setTeamName1={setTeamName1} setTeamStart={setTeamStart} resetFilter={resetFilter} teamArea={teamArea} setTeamArea={setTeamArea} setTeamLogo={setTeamLogo} setTeamCountry={setTeamCountry} setLeagueName={setLeagueName} setVenue={setVenue} setPlayers2={setPlayers2} setSearchParams={setSearchParams} SearchParams={SearchParams}/>
              <div className='xl-width100 xl-marginB-15 xl-borderR-15 m-width100 m-marginB-15 m-borderR-15 s-width100 s-marginB-15 s-borderR-15'>
              <TeamProfile teamName1={teamName1} teamStart={teamStart} teamArea={teamArea} teamLogo={teamLogo} teamCountry={teamCountry} leagueName={leagueName} venue={venue} players={players}/>
              </div>
          </main>
      </>
  );
}

export default Teams;
