import React  from 'react';
import {useEffect,useState} from 'react';
import axios from "axios";
import DemoModal from "../DemoModal";
let teamId='99';
let hostUrl=process.env.REACT_APP_DATABASE_URL;
function TeamList({teams,setPlayers,setCoach}) {
  const [selectedStyle, setSelectedStyle] = useState({});
  const activeItem = (id) => {
    setSelectedStyle(prvState => ({
      selectedStyle,
      [id]: !prvState[id]
    }))
  }
  let teamImgSrc;
  return (
        <div className='xl-width100 xl-height100 xl-overflow-auto m-width100 m-height100 m-overflow-auto s-width100 s-height100 s-overflow-auto'>
      {teams.length > 0 && (
              <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap m-width100 s-width100 s-display-flex s-flexWrap-wrap s-width100'>
                {[...teams].sort((a, b) =>
                    a.name > b.name ? 1 : -1,).map((team,index) =>{
                  if(team){
                    if(team.logo===""){
                      teamImgSrc='team.png'
                    }
                    else{
                      teamImgSrc=hostUrl+team.logo;
                    }
                    if(teams==''){
                      setPlayers('');
                      setCoach('')
                    }
                    return <li key={index}  style={{
                      backgroundColor: selectedStyle[`${index}`]
                          ? "gray"
                          : "initial"
                    }} className='xl-width100 xl-marginT-10 xl-border-black2 xl-pointer xl-bg-test4 m-width100 m-marginT-10 m-border-black2 m-pointer m-bg-test4 s-width100 s-marginT-10 s-border-black2 s-pointer s-bg-test4' onClick={()=>{
                      activeItem(index)
                teamId=team.teamId;
                console.log(teamId)
                let playersAddress = process.env.REACT_APP_DATABASE_URL+`/Player/DisplayPlayer/FilterByTeam/${teamId}`;
                axios.post(playersAddress).then((response) => {
                    setPlayers(response.data.result.filter(item=>item.position!=='Coach'));
                    setCoach(response.data.result.find(item=>item.position==='Coach'))
                  }).catch(()=>{
                  setPlayers([])
                  setCoach([])
                })
              } }>
                      <div className='xl-width100 xl-height-70 xl-display-flex xl-justifyContent-between m-width100 m-height-70 m-display-flex m-justifyContent-between s-width100 s-height-80 s-display-flex s-justifyContent-between s-flexWrap-wrap'>
                        <div className='xl-width15 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width20 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height50 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
                          <div className='xl-width-50 xl-height-50 xl-border-black2 xl-bg-test3 xl-borderR50 xl-overflow-hidden xl-display-flex xl-justifyContent-center xl-alignContent-center m-width-40 m-height-40 m-border-black2 m-bg-test3 m-borderR50 m-overflow-hidden m-display-flex m-justifyContent-center m-alignContent-center s-width100 s-height-30 s-overflow-hidden s-display-flex s-justifyContent-center s-alignContent-center'>
                            <img className='xl-height100 m-height100 s-height100' src={teamImgSrc}/>
                          </div>
                        </div>
                        <div className='xl-width85 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width80 m-height100 m-display-flex m-alignItems-center m-justifyContent-start s-width100 s-height50 s-display-flex s-flexWrap-wrap s-alignItems-center s-justifyContent-start'>
                          <div className='xl-width40 xl-color-white m-width50 m-color-white m-fontSize-12 s-width100 s-color-white s-fontSize-14 s-text-center'>{team.name}</div>
                          <div className='xl-width-25 xl-height-25 xl-border-black2 xl-bg-test3 xl-borderR50 xl-overflow-hidden m-width-25 m-height-25 m-border-black2 m-bg-test3 m-borderR50 m-overflow-hidden s-display-none'>
                            <img className='xl-height100 m-height100 s-height100' src={hostUrl+team.leagueLogo}/>
                          </div>
                          <div className='xl-width20 xl-fontSize-13 xl-marginL-10 xl-color-white m-width20 m-fontSize-10 m-marginL-10 m-color-white s-display-none'>{team.country}</div>
                        </div>
                      </div>

                </li>
                  }
                })
                }
        </ul>
      )}
    </div>
  )
    }
export default TeamList;