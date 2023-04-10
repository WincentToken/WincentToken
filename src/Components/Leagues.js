
import {FirstFilter} from "./FirstFilter";
import React from 'react';
import LeagueProfile from "./Profiles/LeagueProfile";
import RegionList from "./Lists/RegionList";
import SmallLeagueList from "./Lists/SmallLeagueList";
import { useEffect, useState } from 'react';
import axios from "axios";
import {useParams, useSearchParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";

let flag=true;
function LeagueFilter({setLeagueName1,setLeagueLogo,setLeagueCountry,setStanding,setStandingTeam,setSearchParams,SearchParams , leagueName}){
    const [modal,setModal]= useState('xl-width-100vw xl-height-100vh xl-position-fixed xl-zIndex-2 xl-bg-blur1 xl-top-0 xl-left-0 xl-display-none xl-justifyContent-center xl-alignItems-center m-width-100vw m-height-100vh m-position-fixed m-zIndex-2 m-bg-blur1 m-top-0 m-left-0 m-display-none m-justifyContent-center m-alignItems-center s-width-100vw s-height-100vh s-position-fixed s-zIndex-2 s-bg-blur1 s-top-0 s-left-0 s-display-none s-justifyContent-center s-alignItems-center');
    const [openCloseFilter,setOpenCloseFilter]=useState('xl-width100 xl-overflow-hidden xl-height0 xl-display-flex xl-justifyContent-between xl-alignContent-center xl-flexWrap-wrap xl-bg-test12 xl-marginT-15 m-width95 m-overflow-hidden m-height0 m-display-flex m-justifyContent-between m-alignContent-center m-flexWrap-wrap m-bg-test12 m-marginT-15 s-width95 s-overflow-hidden s-height0 s-display-flex s-justifyContent-between s-alignContent-center s-flexWrap-wrap s-bg-test12 s-marginT-15');
    const [filterToggle,setFilterToggle]=useState('xl-height95 xl-borderR50 xl-position-absolute xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 xl-opactity60 m-height95 m-borderR50 m-position-absolute m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 m-opactity60 s-height95 s-borderR50 s-position-absolute s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2 s-opactity60');
    const [filteroffOrOn,setFilterffOrOn]=useState('Filter off');
    const [filteroffOrOnText,setFilterffOrOnText]=useState('xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-right-10 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-right-10 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-right-10');
    function openOrClose(){
        if(flag==true){
            setOpenCloseFilter('xl-width100 xl-overflow-hidden xl-openMatchFilter xl-display-flex xl-justifyContent-between xl-alignContent-center xl-flexWrap-wrap xl-bg-test12 xl-custom-border8 xl-marginT-15 m-width95 m-overflow-hidden m-openMatchFilter m-display-flex m-justifyContent-between m-alignContent-center m-flexWrap-wrap m-bg-test12 m-custom-border8 m-marginT-15 s-width95 s-overflow-hidden s-openMatchFilter s-display-flex s-justifyContent-between s-alignContent-center s-flexWrap-wrap s-bg-test12 s-custom-border8 s-marginT-15');
            setFilterToggle('xl-height95 xl-borderR50 xl-marginL-15 xl-position-absolute xl-toggleFilterOn xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 xl-opactity60 m-height95 m-borderR50 m-marginL-15 m-position-absolute m-toggleFilterOn m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 m-opactity60 s-height95 s-borderR50 s-marginL-15 s-position-absolute s-toggleFilterOn s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2 s-opactity60');
            setFilterffOrOn('Filter on');
            setFilterffOrOnText("xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-left-10 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-left-10 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-left-10");
            flag=false;
            
        }
        else{
            setOpenCloseFilter('xl-width100 xl-overflow-hidden xl-closeMatchFilter xl-display-flex xl-justifyContent-between xl-flexWrap-wrap xl-bg-test12 xl-custom-border8 xl-marginT-15 m-width100 m-overflow-hidden m-closeMatchFilter m-display-flex m-justifyContent-between m-flexWrap-wrap m-bg-test12 m-custom-border8 m-marginT-15 s-width100 s-overflow-hidden s-closeMatchFilter s-display-flex s-justifyContent-between s-flexWrap-wrap s-bg-test12 s-custom-border8 s-marginT-15');
            setFilterToggle('xl-height95 xl-borderR50 xl-position-absolute xl-toggleFilterOff xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 m-height95 m-borderR50 m-position-absolute m-toggleFilterOff m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 s-height95 s-borderR50 s-position-absolute s-toggleFilterOff s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2');
            setFilterffOrOn('Filter off');
            setFilterffOrOnText("xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-right-10 xl-opactity60 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-right-10 m-opactity60 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-right-10 s-opactity60");
            flag=true;
        }
    }
    const [leagueId,setLeagueId]= useState([]);
    const [leagues, setLeagues] = useState([]);
    const [teams, setTeams] = useState([]);
    const [players, setPlayers] = useState([]);
    const [flag2,setFlag2]= useState(false);
    const [coach, setCoach] = useState([]);
    const navigate=useNavigate();
    // const location=useLocation();


    return(
        <>
        <div className={openCloseFilter}>
        <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height-60 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height-60 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <button className='xl-width25 xl-height-40 xl-border-black2 xl-borderR-10 xl-bg-test xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-bold xl-pointer xl-color-black m-width25 m-height-40 m-border-black2 m-borderR-10 m-bg-test m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-18 m-bold m-pointer m-color-black s-width25 s-height-40 s-border-black2 s-borderR-10 s-bg-test s-display-flex s-justifyContent-center s-alignItems-center s-bold s-pointer s-color-black' onClick={()=>{
                      // console.log(location.pathname.split('/')[2]);
                      console.log(SearchParams)
                  }}>clear filter</button>
              </div>
              <div className='xl-width100 xl-display-flex xl-justifyContent-center m-width100 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width100 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width24 xl-marginT-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width60 m-marginT-10 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width60 s-marginT-10 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-bold xl-bg-test0 xl-color-white m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-bold m-bg-test0 m-color-white s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-bold s-bg-test0 s-color-white'>region</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-bg-test0 xl-custom-border8 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-bg-test0 m-custom-border8 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-bg-test0 s-custom-border8'>
                      <RegionList setLeagues={setLeagues} setTeams={setTeams} setPlayers={setPlayers} setCoach={setCoach}/>
                  </div>
              </div>
              <div className='xl-width24 xl-marginT-10 xl-marginL-15 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width60 m-marginT-10 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width60 s-marginT-10 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-bold xl-bg-test0 xl-color-white m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-bold m-bg-test0 m-color-white s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-bold s-bg-test0 s-color-white'>leagues</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-bg-test0 xl-custom-border8 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-bg-test0 m-custom-border8 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-bg-test0 s-custom-border8'>
                      <SmallLeagueList leagues={leagues} setLeagueId={setLeagueId} flag2={flag2} setFlag2={setFlag2} setTeams={setTeams} setPlayers={setPlayers} setCoach={setCoach}/>
                  </div>
              </div>
              </div>
              <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height-60 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height-60 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <button className='xl-width25 xl-height-40 xl-border-black2 xl-borderR-10 xl-bg-test xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-bold xl-pointer xl-color-black m-width25 m-height-40 m-border-black2 m-borderR-10 m-bg-test m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-18 m-bold m-pointer m-color-black s-width25 s-height-40 s-border-black2 s-borderR-10 s-bg-test s-display-flex s-justifyContent-center s-alignItems-center s-bold s-pointer s-color-black' onClick={()=>{
                      if(flag2==true){
                          axios.post(process.env.REACT_APP_DATABASE_URL+`/League/DisplayLeague/${leagueId}`).then((response) => {
                              console.log(response.data.result[0].leagueId)
                              navigate(`/leagues/${response.data.result[0].leagueId}`);
                              setLeagueName1(response.data.result[0].name);
                              if(response.data.result[0].logo==' '){
                                  setLeagueLogo('ball.png');
                              }
                              else{
                                  setLeagueLogo(process.env.REACT_APP_DATABASE_URL+response.data.result[0].logo);
                              }
                              setLeagueCountry(response.data.result[0].country);
                          })

                              axios.post(process.env.REACT_APP_DATABASE_URL+'/standing/'+leagueId).then((response)=>{
                                      setStanding(response.data.filter_data[0].data.totalStandings);
                                      setStandingTeam(response.data.filter_data[0].data.teamInfos);
                              }).catch(error=>{
                                  setStanding('');
                                  setStandingTeam('');
                              })
                      }
                      else{setModal('xl-width-100vw xl-height-100vh xl-position-fixed xl-zIndex-2 xl-bg-blur1 xl-top-0 xl-left-0 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width-100vw m-height-100vh m-position-fixed m-zIndex-2 m-bg-blur1 m-top-0 m-left-0 m-display-flex m-justifyContent-center m-alignItems-center s-width-100vw s-height-100vh s-position-fixed s-zIndex-2 s-bg-blur1 s-top-0 s-left-0 s-display-flex s-justifyContent-center s-alignItems-center')}
                      setFlag2(false)
                  }}>do filter</button>
              </div>
              </div>
        <div className='xl-width100 xl-display-flex xl-justifyContent-center m-width100 m-display-flex m-justifyContent-center s-width100 s-display-flex s-justifyContent-center'>
        <div className='xl-width-150 xl-height-50 xl-marginT-15 xl-borderR-30 xl-border-white2 xl-display-flex xl-alignItems-center xl-justifyContent-start xl-bg-test4 xl-position-relative xl-pointer m-width-150 m-height-50 m-marginT-15 m-borderR-30 m-border-white2 m-display-flex m-alignItems-center m-justifyContent-start m-bg-test4 m-position-relative m-pointer s-width-150 s-height-50 s-marginT-15 s-borderR-30 s-border-white2 s-display-flex s-alignItems-center s-justifyContent-start s-bg-test4 s-position-relative s-pointer' onClick={openOrClose}>
            <div className='xl-display-flex xl-alignItems-center m-display-flex m-alignItems-center s-display-flex s-alignItems-center'>
                <img src='ball.png' className={filterToggle}/>
                <div className={filteroffOrOnText}>{filteroffOrOn}</div>
            </div>
        </div>
        </div>
        </>
    )
}
// let flag1=true;
function Leagues() {
const [flag2,setFlag3]=useState(true)
    const [leagueName1,setLeagueName1]= useState('Spanish La Liga');
    const [leagueLogo,setLeagueLogo]= useState(process.env.REACT_APP_DATABASE_URL+'/LogoDB/LeagueLogo/1134.png');
    const [leagueCountry,setLeagueCountry]= useState('Spain');
    const [standing,setStanding]=useState('')
    const [standingTeams,setStandingTeam]=useState('')
    const { leagueName }=useParams();
    const[SearchParams,setSearchParams]=useSearchParams({ n: leagueName});
    let num=SearchParams.get('n');
    if(leagueName&&flag2==true){
        axios.post(process.env.REACT_APP_DATABASE_URL+`/League/DisplayLeague/${num}`).then((response) => {
            setLeagueName1(response.data.result[0].name);
            if(response.data.result[0].logo==' '){
                setLeagueLogo('ball.png');
            }
            else{
                setLeagueLogo(process.env.REACT_APP_DATABASE_URL+response.data.result[0].logo);
            }
            setLeagueCountry(response.data.result[0].country);

        }).catch(err=>{
            alert(err)
        })

        axios.post(process.env.REACT_APP_DATABASE_URL+'/standing/'+num).then((response)=>{
            setStanding(response.data.filter_data[0].data.totalStandings);
            setStandingTeam(response.data.filter_data[0].data.teamInfos);
        }).catch(error=>{
            setStanding('');
            setStandingTeam('');
        })
        setFlag3(false)
    }

    return (
      <>
          <main>
              <LeagueFilter setLeagueName1={setLeagueName1} setLeagueLogo={setLeagueLogo} setLeagueCountry={setLeagueCountry} setStanding={setStanding} setStandingTeam={setStandingTeam} setSearchParams={setSearchParams} SearchParams={SearchParams} leagueName={leagueName} setFlag3={setFlag3}/>
              <LeagueProfile leagueName1={leagueName1} leagueLogo={leagueLogo} leagueCountry={leagueCountry} standing={standing} standingTeams={standingTeams}/>
          </main>
      </>
  );
}

export default Leagues;
