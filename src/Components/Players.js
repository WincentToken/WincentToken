
import React from 'react';
import {FirstFilter} from './FirstFilter';
import PlayerProfile from "./Profiles/PlayerProfile";
import RegionList from "./Lists/RegionList";
import SmallLeagueList from "./Lists/SmallLeagueList";
import SmallTeamList from "./Lists/SmallTeamList";
import SmallPlayerList from "./Lists/SmallPlayerList";
import { useEffect, useState } from 'react';
import { useParams, useSearchParams} from 'react-router-dom';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
let hostUrl=process.env.REACT_APP_DATABASE_URL;

let flag=true;
function PlayerFilter({setPlayerName,setPlayerBirthday,setPlayerCitizenship,setPlayerPhoto, setPlayerNumber,setPlayerTeamName,setPlayerPosition,setPlayerFeet,setPlayerHeight,setPlayerWeight,setPlayerContractEnd,setPosition,setSearchParams}){
    const [openCloseFilter,setOpenCloseFilter]=useState('xl-width100 xl-overflowY-hidden xl-height0 xl-marginT-15 xl-display-flex xl-justifyContent-between xl-alignContent-center xl-flexWrap-wrap m-width95 m-overflowY-hidden m-height0 m-marginT-15 m-display-flex m-justifyContent-between m-alignContent-center m-flexWrap-wrap s-width95 s-overflowY-hidden s-height0 s-marginT-15 s-display-flex s-justifyContent-between s-alignContent-center s-flexWrap-wrap');
    const [filterToggle,setFilterToggle]=useState('xl-height95 xl-borderR50 xl-position-absolute xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 xl-opactity60 m-height95 m-borderR50 m-position-absolute m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 m-opactity60 s-height95 s-borderR50 s-position-absolute s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2 s-opactity60');
    const [filteroffOrOn,setFilterffOrOn]=useState('Filter off');
    const [filteroffOrOnText,setFilterffOrOnText]=useState('xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-right-10 xl-opactity60 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-right-10 m-opactity60 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-right-10 s-opactity60');
    function openOrClose(){
        if(flag==true){
            setOpenCloseFilter('xl-width100 xl-overflowY-hidden xl-marginT-15 xl-openMatchFilter xl-custom-border8 xl-display-flex xl-justifyContent-between xl-alignContent-center xl-flexWrap-wrap xl-bg-test0 m-width95 m-overflowY-hidden m-marginT-15 m-openMatchFilter m-custom-border8 m-display-flex m-justifyContent-between m-alignContent-center m-flexWrap-wrap m-bg-test0 s-width95 s-overflowY-hidden s-marginT-15 s-openMatchFilter s-custom-border8 s-display-flex s-justifyContent-between s-alignContent-center s-flexWrap-wrap s-bg-test0');
            setFilterToggle('xl-height95 xl-borderR50 xl-marginL-15 xl-position-absolute xl-toggleFilterOn xl-display-flex xl-justifyContent-between xl-alignItems-center xl-zIndex-2 m-height95 m-borderR50 m-marginL-15 m-position-absolute m-toggleFilterOn m-display-flex m-justifyContent-between m-alignItems-center m-zIndex-2 s-height95 s-borderR50 s-marginL-15 s-position-absolute s-toggleFilterOn s-display-flex s-justifyContent-between s-alignItems-center s-zIndex-2');
            setFilterffOrOn('Filter on');
            setFilterffOrOnText("xl-text-center xl-bold xl-fontSize-20 xl-color-white xl-position-absolute xl-left-10 m-text-center m-bold m-fontSize-20 m-color-white m-position-absolute m-left-10 s-text-center s-bold s-fontSize-20 s-color-white s-position-absolute s-left-10");
            flag=false;

        }
        else{
            setOpenCloseFilter('xl-width100 xl-overflowY-hidden xl-marginT-15 xl-closeMatchFilter xl-custom-border8 xl-display-flex xl-justifyContent-between xl-alignContent-center xl-flexWrap-wrap xl-bg-test0 m-width95 m-overflowY-hidden m-marginT-15 m-closeMatchFilter m-custom-border8 m-display-flex m-justifyContent-between m-alignContent-center m-flexWrap-wrap m-bg-test0 s-width95 s-overflowY-hidden s-marginT-15 s-closeMatchFilter s-custom-border8 s-display-flex s-justifyContent-between s-alignContent-center s-flexWrap-wrap s-bg-test0');
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
    const [coach, setCoach] = useState([]);
    const [playerId, setPlayerId] = useState([]);
    const [flag2, setFlag2] = useState([]);
    const navigate=useNavigate()
    return(
        <>        
        <div className={openCloseFilter}>
        <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height-60 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height-60 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <button className='xl-width25 xl-height-40 xl-border-black2 xl-borderR-10 xl-bg-test xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-bold xl-pointer xl-color-black m-width25 m-height-40 m-border-black2 m-borderR-10 m-bg-test m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-18 m-bold m-pointer m-color-black s-width25 s-height-40 s-border-black2 s-borderR-10 s-bg-test s-display-flex s-justifyContent-center s-alignItems-center s-bold s-pointer s-color-black'>reset filter</button>
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
                  <div className='xl-width24 xl-marginT-10 xl-marginL-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10  m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10  s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-bold xl-bg-test4 xl-color-white m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-bold m-bg-test4 m-color-white s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-bold s-bg-test4 s-color-white'>teams</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test4 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test4'>
                      <SmallTeamList teams={teams} setPlayers={setPlayers} setTeamId={setTeamId} teamId={teamId} setFlag2={setFlag2}/>
                  </div>
              </div>
                  <div className='xl-width24 xl-marginT-10 xl-marginL-10 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap m-width45 m-marginT-10 m-marginL-10 m-display-flex m-justifyContent-center m-flexWrap-wrap s-width45 s-marginT-10 s-marginL-10 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-custom-border8 xl-fontSize-20 xl-bold xl-bg-test4 xl-color-white m-width100 m-height-40 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-custom-border8 m-fontSize-20 m-bold m-bg-test4 m-color-white s-width100 s-height-40 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-custom-border8 s-fontSize-20 s-bold s-bg-test4 s-color-white'>player</div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-custom-border8 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-custom-border8 m-bg-test4 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-custom-border8 s-bg-test4'>
                      <SmallPlayerList players={players} setPlayerId={setPlayerId} setFlag2={setFlag2}/>
                  </div>
              </div>
              </div>
                <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height-60 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height-60 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <button className='xl-width25 xl-height-40 xl-border-black2 xl-borderR-10 xl-bg-test xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-bold xl-pointer xl-color-black m-width25 m-height-40 m-border-black2 m-borderR-10 m-bg-test m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-18 m-bold m-pointer m-color-black s-width25 s-height-40 s-border-black2 s-borderR-10 s-bg-test s-display-flex s-justifyContent-center s-alignItems-center s-bold s-pointer s-color-black' onClick={()=>{
                      if(flag2==true){
                          axios.post(process.env.REACT_APP_DATABASE_URL+`/Player/DisplayPlayer/FilterByPlayer/${playerId}`).then((response) => {
                              if(response.data.result[0].position==='Left Winger'){
                                  setPosition({top: '10%',right:'20%'})
                              }
                              else if(response.data.result[0].position==='Goalkeeper'){
                                  setPosition({top:'50%',marginTop:'-15px',left:'5%'})
                              }
                              else if(response.data.result[0].position==='Right Winger'){
                                  setPosition({bottom: '10%',right:'20%'})
                              }
                              else if(response.data.result[0].position==='Right-Back'){
                                  setPosition({bottom: '10%',left:'20%'})
                              }
                              else if(response.data.result[0].position==='Centre Back' || response.data.result[0].position==='Centre-Back'){
                                  setPosition({top:'50%',marginTop:'-15px',left:'20%'})
                              }
                              else if(response.data.result[0].position==='Left-Back'){
                                  setPosition({top: '10%',left:'20%'})
                              }
                              else if(response.data.result[0].position==='Centre Forward' || response.data.result[0].position==='Centre-Forward'){
                                  setPosition({top:'50%',marginTop:'-15px',right:'20%'})
                              }
                              else if(response.data.result[0].position==='Forward'){
                                  setPosition({top:'50%',marginTop:'-15px',right:'20%'})
                              }
                              else if(response.data.result[0].position==='Attacking Midfield' || response.data.result[0].position==='Attacking-Midfield'){
                                  setPosition({top:'50%',marginTop:'-15px',right:'35%'})
                              }
                              else if(response.data.result[0].position==='Defensive Midfield' || response.data.result[0].position==='Defensive-Midfield'){
                                  setPosition({top:'50%',marginTop:'-15px',left:'35%'})
                              }
                              else if(response.data.result[0].position==='Central Midfield' || response.data.result[0].position==='Central-Midfield' || response.data.result[0].position==='Midfielder'){
                                  setPosition({top:'50%',marginTop:'-14px',left:'50%',marginLeft:'-14px'})
                              }
                              else if(response.data.result[0].position==='Right Midfield' || response.data.result[0].position==='Right-Midfield'){
                                  setPosition({bottom:'15%',left:'50%',marginLeft:'-14px'})
                              }
                              else if(response.data.result[0].position==='Left Midfield' || response.data.result[0].position==='Left-Midfield'){
                                  setPosition({top:'15%',left:'50%',marginLeft:'-14px'})
                              }
                              else{
                                  setPosition({display:'none'})
                              }
                              navigate(`/players/${response.data.result[0].playerId}`)
                              // setSearchParams(response.data.result[0].name);
                              setPlayerName(response.data.result[0].name);
                              setPlayerBirthday(response.data.result[0].birthday);
                              setPlayerCitizenship(response.data.result[0].country);
                              setPlayerTeamName(response.data.result[0].teamName);
                              setPlayerHeight(response.data.result[0].height);
                              setPlayerWeight(response.data.result[0].weight);
                              setPlayerPosition(response.data.result[0].position);
                              setPlayerFeet(response.data.result[0].feet);
                              setPlayerContractEnd(response.data.result[0].contractEndDate)
                              if(response.data.result[0].photo==""){
                                  setPlayerPhoto('playerIcon.png');
                              }
                              else{
                                  setPlayerPhoto(hostUrl+response.data.result[0].photo);
                              }
                              setPlayerNumber(response.data.result[0].number);
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


function Players() {
    const [flag2,setFlag3]=useState(true);
    const [playerName,setPlayerName]= useState('Neymar da Silva Santos Junior');
    const [playerBirthday,setPlayerBirthday]= useState('1992-02-05');
    const [playerCitizenship,setPlayerCitizenship]= useState('Brazil');
    const [playerPhoto,setPlayerPhoto]= useState(process.env.REACT_APP_DATABASE_URL+'/LogoDB/PlayerLogo/80902.png');
    const [playerNumber,setPlayerNumber]= useState('10');
    const [playerTeamName,setPlayerTeamName]= useState('Paris Paint Permain');
    const [playerHeight,setPlayerHeight]= useState('175');
    const [playerWeight,setPlayerWeight]= useState('68');
    const [playerFeet,setPlayerFeet]= useState('Right');
    const [playerPosition,setPlayerPosition]= useState('Left Winger');
    const [playerContractEnd,setPlayerContractEnd]= useState('2025-06-30');
    const [position,setPosition]=useState({top: '10%',right:'20%'})
    const { playerName1 }=useParams();
    const[SearchParams,setSearchParams]=useSearchParams({ n: playerName1});
    let num=SearchParams.get('n');
    if(playerName1&&flag2==true){
        axios.post(process.env.REACT_APP_DATABASE_URL+`/Player/DisplayPlayer/FilterByPlayer/`+num).then(
            (response) => {

            if(response.data.result[0].position==='Left Winger'){
                setPosition({top: '10%',right:'20%'})
            }
            else if(response.data.result[0].position==='Goalkeeper'){
                setPosition({top:'50%',marginTop:'-15px',left:'5%'})
            }
            else if(response.data.result[0].position==='Right Winger'){
                setPosition({bottom: '10%',right:'20%'})
            }
            else if(response.data.result[0].position==='Right-Back'){
                setPosition({bottom: '10%',left:'20%'})
            }
            else if(response.data.result[0].position==='Centre Back' || response.data.result[0].position==='Centre-Back'){
                setPosition({top:'50%',marginTop:'-15px',left:'20%'})
            }
            else if(response.data.result[0].position==='Left-Back'){
                setPosition({top: '10%',left:'20%'})
            }
            else if(response.data.result[0].position==='Centre Forward' || response.data.result[0].position==='Centre-Forward'){
                setPosition({top:'50%',marginTop:'-15px',right:'20%'})
            }
            else if(response.data.result[0].position==='Forward'){
                setPosition({top:'50%',marginTop:'-15px',right:'20%'})
            }
            else if(response.data.result[0].position==='Attacking Midfield' || response.data.result[0].position==='Attacking-Midfield'){
                setPosition({top:'50%',marginTop:'-15px',right:'35%'})
            }
            else if(response.data.result[0].position==='Defensive Midfield' || response.data.result[0].position==='Defensive-Midfield'){
                setPosition({top:'50%',marginTop:'-15px',left:'35%'})
            }
            else if(response.data.result[0].position==='Central Midfield' || response.data.result[0].position==='Central-Midfield' || response.data.result[0].position==='Midfielder'){
                setPosition({top:'50%',marginTop:'-14px',left:'50%',marginLeft:'-14px'})
            }
            else if(response.data.result[0].position==='Right Midfield' || response.data.result[0].position==='Right-Midfield'){
                setPosition({bottom:'15%',left:'50%',marginLeft:'-14px'})
            }
            else if(response.data.result[0].position==='Left Midfield' || response.data.result[0].position==='Left-Midfield'){
                setPosition({top:'15%',left:'50%',marginLeft:'-14px'})
            }
            else{
                setPosition({display:'none'})
            }
            // setSearchParams(response.data.result[0].name);
            setPlayerName(response.data.result[0].name);
            setPlayerBirthday(response.data.result[0].birthday);
            setPlayerCitizenship(response.data.result[0].country);
            setPlayerTeamName(response.data.result[0].teamName);
            setPlayerHeight(response.data.result[0].height);
            setPlayerWeight(response.data.result[0].weight);
            setPlayerPosition(response.data.result[0].position);
            setPlayerFeet(response.data.result[0].feet);
            setPlayerContractEnd(response.data.result[0].contractEndDate)
            if(response.data.result[0].photo==""){
                setPlayerPhoto('playerIcon.png');
            }
            else{
                setPlayerPhoto(hostUrl+response.data.result[0].photo);
            }

            setPlayerNumber(response.data.result[0].number);
        })
        setFlag3(false)
    }


    return (
      <>

          <main>
              <PlayerFilter setPlayerNumber={setPlayerNumber} setPlayerPhoto={setPlayerPhoto} setPlayerCitizenship={setPlayerCitizenship} setPlayerBirthday={setPlayerBirthday} setPlayerName={setPlayerName} setPlayerTeamName={setPlayerTeamName} setPlayerHeight={setPlayerHeight} setPlayerFeet={setPlayerFeet} setPlayerPosition={setPlayerPosition} setPlayerWeight={setPlayerWeight} setPlayerContractEnd={setPlayerContractEnd} setPosition={setPosition} setSearchParams={setSearchParams}/>
              <div className='xl-width100 xl-marginB-15 m-width95 m-marginB-15 s-width95 s-marginB-15'>
                  <PlayerProfile playerName={playerName} playerBirthday={playerBirthday} playerCitizenship={playerCitizenship} playerPhoto={playerPhoto} playerNumber={playerNumber} playerTeamName={playerTeamName} playerHeight={playerHeight} playerFeet={playerFeet} playerPosition={playerPosition} playerWeight={playerWeight} playerContractEnd={playerContractEnd} position={position}/>
              </div>
          </main>
      </>
  );
}

export default Players;






