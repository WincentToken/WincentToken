import '../CSS/wnt.css';
import React, {useState} from 'react';
import Map from "./Map/Map1";
import LiveMatchesList from "./Lists/LiveMatchesList";
import LastResultList from "./Lists/LastResult";
import RegionList from "./Lists/RegionList";
import LeagueList from "./Lists/LeagueList";
import TeamList from "./Lists/TeamList";
import PlayerList from "./Lists/PlayerList";
import Players from "./Players";
import CoachList from "./Lists/CoachList";
import TransferList from "./Lists/TransferList";
import IncomingMatchesList from "./Lists/IncomingMatchesList";
import DemoModal from "./DemoModal";
import axios from "axios";

let counter=0;
let hostUrl=process.env.REACT_APP_DATABASE_URL;
function TopNews(){
    const newsImgs=['whatsapp-image-2021-05-04-at-104742-am.jpg','5184.webp','playerIcon.png','team.png'];
    const newsheader=['header1','header2','header3','header4'];
    const newsText=['text1 this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content!','text2 this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content!','text3 this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo ','text4 this is demo text and has no content! this is demo text and has no content! this is demo text and has no content!no content! this is demo text and has no content! this is demo'];
    const[newsCounter,setNewsCounter]=useState(counter);
    return(
        <>
            <div className='xl-width100 xl-height100 xl-border-white2 xl-display-flex xl-justifyContent-center xl-bg-test4 xl-overflow-hidden xl-position-relative m-width100 m-height100 m-border-white2 m-display-flex m-justifyContent-center m-bg-test4 m-overflow-hidden m-position-relative s-display-none'>
                <div className='xl-width50 xl-height100 xl-display-flex xl-flexWrap-wrap xl-alignContent-between m-width50 m-height100 m-display-flex m-flexWrap-wrap m-alignContent-between'>
                    <div className='xl-height20 xl-fontSize-38 xl-bold xl-color-white xl-marginL-10 xl-marginT-10 xl-custom-textShadow m-height20 m-fontSize-30 m-bold m-color-white m-marginL-10 m-marginT-10 m-custom-textShadow'>{newsheader[newsCounter]}</div>
                    <div className='xl-height50 xl-overflow-hidden m-height50 m-overflow-hidden m-marginT-30'>
                        <p className='xl-color-white xl-fontSize-18 xl-marginL-10 m-color-white m-marginL-10 '>{newsText[newsCounter]}</p>
                    </div>
                    <div className='xl-height20 xl-width100 xl-display-flex xl-justifyContent-end m-height20 m-width100 m-display-flex m-justifyContent-end'>
                        <button className='xl-display-block xl-height-40 xl-fontSize-22 xl-bold xl-paddingL-15 xl-paddingR-15 xl-borderR-10 xl-marginR-15 xl-marginT-10 xl-bg-test3 xl-color-white xl-pointer xl-border-black2 xl-custom-textShadow m-display-block m-height-30 m-fontSize-18 m-bold m-paddingL-15 m-paddingR-15 m-borderR-10 m-marginR-15 m-marginT-10 m-bg-test3 m-color-white m-pointer m-border-black2 m-custom-textShadow'>Show more</button>
                    </div>
                </div>
                <div className='xl-width45 xl-height100 xl-display-flex xl-flexWrap-wrap xl-alignItems-center xl-justifyContent-center m-width45 m-height100 m-display-flex m-flexWrap-wrap m-alignItems-center m-justifyContent-center'>
                    <img src={newsImgs[newsCounter]} className='xl-width90 xl-height90 m-width90 m-height90'/>
                </div>
                <div className='xl-width5 xl-height100 xl-position-absolute xl-display-flex xl-justifyContent-center xl-alignItems-center xl-left-0 m-width5 m-height100 m-position-absolute m-display-flex m-justifyContent-center m-alignItems-center m-left-0'>
                    <button className='xl-display-iBlock xl-width-40 xl-height-40 xl-borderR50 xl-border-white2 xl-pointer xl-fontSize-20 m-display-iBlock m-width-30 m-height-30 m-borderR50 m-border-white2 m-pointer' onClick={()=>{
                        counter--;
                        if(counter==-1){
                            counter=3;
                        }
                        setNewsCounter(counter);
                    }}>&larr;</button>
                </div>
                <div className='xl-width5 xl-height100 xl-position-absolute xl-display-flex xl-justifyContent-center xl-alignItems-center xl-right-0 m-width5 m-height100 m-position-absolute m-display-flex m-justifyContent-center m-alignItems-center m-right-0'>
                    <button className='xl-display-iBlock xl-width-40 xl-height-40 xl-borderR50 xl-border-white2 xl-pointer xl-fontSize-20 m-display-iBlock m-width-30 m-height-30 m-borderR50 m-border-white2 m-pointer' onClick={()=>{
                        counter++;
                        if(counter==4){
                            counter=0;
                        }
                        setNewsCounter(counter);
                    }}>&rarr;</button>
                </div>
            </div>
            <div className='xl-display-none m-display-none s-width100 s-height100 s-bg-test4 s-border-white2'>
                <div className="s-height-70 s-fontSize-24 s-bold s-color-white s-marginL-10 s-marginT-10 s-custom-textShadow">{newsheader[newsCounter]}</div>
                <div className='s-width100 s-height-250 s-bg-blur1 s-display-flex s-justifyContent-center s-alignItems-center'>
                    <div className='s-width-300 s-height-200 s-display-flex s-justifyContent-center s-alignItems-center'>
                        <img src={newsImgs[newsCounter]} className=' s-height90'/>
                    </div>
                </div>
                <div className='s-width99 s-height-100 s-marginT-10 s-marginB-10 s-overflow-hidden s-display-flex s-justifyContent-center'>
                    <p className='s-width95 s-color-white s-fontSize-13 s-text-center'>{newsText[newsCounter]}</p>
                </div>
                <div className='s-width100 s-height-40 s-display-flex s-justifyContent-end s-alignItems-center'>
                    <button className='s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-pointer s-borderR-10 s-marginR-15 s-color-black s-bg-test3'>show more</button>
                </div>
                <div className='s-width100 s-height-40 s-marginT-10 s-display-flex s-justifyContent-center'>
                    <div className='s-width-100 s-height-40 s-display-flex s-justifyContent-between s-alignItems-center'>
                        <button className='s-width-40 s-height-40 s-bg-test3 s-borderR-10 s-pointer s-color-black s-fontSize-22' onClick={()=>{
                            counter--;
                            if(counter==-1){
                                counter=3;
                            }
                            setNewsCounter(counter);
                        }}>&larr;</button>
                        <button className='s-width-40 s-height-40 s-bg-test3 s-borderR-10 s-pointer s-color-black s-fontSize-22' onClick={()=>{
                            counter++;
                            if(counter==4){
                                counter=0;
                            }
                            setNewsCounter(counter);
                        }}>&rarr;</button>
                    </div>
                </div>
            </div>
        </>
    )
}

let flag1=true;
let flag2=true;
let flag3=true;
let flag4=true;

function Home() {

    const [leagues, setLeagues] = useState([]);
    if(flag1==true){
        axios.post(hostUrl+"/League/DisplayLeague/FilterByCountry/1").then((response)=>{
                setLeagues(response.data.result);
                flag1=false;
            }
        )
    }
    const [teams, setTeams] = useState([]);
    if(flag2==true){
        axios.post(hostUrl+"/Team/DisplayTeam/FilterByLeague/188").then((response)=>{
            setTeams(response.data.result);
                flag2=false;
            }
        )
    }

    const [players, setPlayers] = useState([]);
    if(flag3==true){
        axios.post(hostUrl+"/Player/DisplayPlayer/FilterByTeam/88").then((response)=>{
            setPlayers(response.data.result);
                flag3=false;
            }
        )
    }

    const [coach, setCoach] = useState([]);
    if(flag4==true){
        axios.post(hostUrl+"/Player/DisplayPlayer/FilterByTeam/88").then((response)=>{
            setCoach(response.data.result.find(item=>item.position==='Coach'));
                flag4=false;
            }
        )
    }
    const [map,setMap]=useState();
    const [mapURL,setMapURL]=useState('https://db.wincent.studio/LogoDB/MapLogo/World(2).svg');

    return (
      <>
          <div className='xl-width-1200 xl-marginLR-auto xl-marginB-10 xl-display-flex xl-justifyContent-between xl-alignItems-center xl-flexWrap-wrap m-width-690 m-marginLR-auto m-marginB-10 m-display-flex m-justifyContent-center m-alignItems-center m-flexWrap-wrap m-overflow-hidden s-width95 s-marginLR-auto s-marginB-10 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap s-overflow-hidden'>
              <div className='xl-width100 xl-display-flex xl-justifyContent-between xl-alignItems-center xl-position-relative xl-bg-test9 xl-border-white2 xl-marginT-15 m-width95 m-display-flex m-justifyContent-between m-alignItems-center m-position-relative m-bg-test9 m-border-white2 m-marginT-15 s-width95 s-display-flex s-justifyContent-between s-alignItems-center s-position-relative s-bg-test4 s-border-white2 s-marginT-15'>
                  <div className='xl-width19 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap xl-borderRight-white2 xl-height100 m-width19 m-display-flex m-justifyContent-center m-flexWrap-wrap m-borderRight-white2 m-height100 s-width100 s-display-flex s-justifyContent-center s-flexWrap-wrap s-borderRight-white2 s-height100'>
                  <div className='xl-width100 xl-height-40 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-fontSize-20 xl-bold xl-color-white m-width100 m-height-30 m-marginB-5 m-display-flex m-justifyContent-center m-alignItems-center m-bold m-color-white s-width100 s-height-30 s-marginB-5 s-display-flex s-justifyContent-center s-alignItems-center s-bold s-color-white'>region</div>


                  <div className='xl-width100 xl-height-500 xl-marginT-10 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-fontSize-14 m-width100 m-height-300 m-marginT-10 m-overflow-hidden m-display-flex m-flexWrap-wrap m-fontSize-14 s-width100 s-height-300 s-marginT-10 s-overflow-hidden s-display-flex s-flexWrap-wrap s-fontSize-14 s-justifyContent-center'>
                      <RegionList setLeagues={setLeagues} setTeams={setTeams} setPlayers={setPlayers} setCoach={setCoach}/>
                  </div>
              </div>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-bg-test9 xl-position-relative m-width100 m-height-300 m-overflow-hidden  m-bg-test9 m-position-relative s-width100 s-height-300 s-overflow-hidden s-bg-test9 s-position-relative s-display-none'>
                  <Map map={map} setMap={setMap} mapURL={mapURL} setMapURL={setMapURL}/>
              </div>

              </div>
          </div>
          <main>
              <div className='m-width100 m-display-flex m-justifyContent-center m-flexWrap-wrap'>
              </div>
              <div className='xl-width49 xl-marginT-10 xl-marginR-5 m-width47 m-marginT-10 m-width47 m-marginT-10 m-marginR-5 s-width95 s-marginT-10'>
                  <h2 className='xl-width100 xl-color-white xl-height-40 xl-marginB-10 xl-display-iBlock xl-text-center xl-paddingB-10 xl-paddingT-10 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 m-color-white m-height-30 m-marginB-5 m-display-iBlock m-paddingL-40 m-paddingR-40 m-paddingB-10 m-paddingT-10 m-border-white2 m-fontSize-18 m-lineHeight-40 m-bg-test4 s-color-white s-height-30 s-marginB-5 s-display-iBlock s-paddingL-40 s-paddingR-40 s-paddingB-10 s-paddingT-10 s-border-white2 s-fontSize-18 s-lineHeight-40 s-bg-test4'>top leagues</h2>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-border-white2 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-border-white2 m-bg-test4 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-border-white2 s-bg-test4'>
                      <LeagueList leagues={leagues} setTeams={setTeams} setPlayers={setPlayers} setCoach={setCoach}/>
                  </div>
              </div>
              <div className='xl-width49 xl-marginT-10 xl-marginL-5 m-width47 m-marginT-10 m-marginL-5 s-width95 s-marginT-10'>
                  <h2 className='xl-width100 xl-color-white xl-height-40 xl-marginB-10 xl-display-iBlock xl-text-center xl-paddingB-10 xl-paddingT-10 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 m-color-white m-height-30 m-marginB-5 m-display-iBlock m-paddingL-40 m-paddingR-40 m-paddingB-10 m-paddingT-10 m-border-white2 m-fontSize-18 s-lineHeight-40 m-bg-test4 s-color-white s-height-30 s-marginB-5 s-display-iBlock s-paddingL-40 s-paddingR-40 s-paddingB-10 s-paddingT-10 s-border-white2 s-fontSize-18 s-lineHeight-40 s-bg-test4'>top teams</h2>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-border-white2 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-border-white2 m-bg-test4 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-border-white2 s-bg-test4'>
                      <TeamList teams={teams} setPlayers={setPlayers} setCoach={setCoach}/>
                  </div>
              </div>
              <div className='xl-width49 xl-marginT-10 xl-marginR-5 m-width47 m-marginT-10 m-marginR-5 s-width95 s-marginT-10'>
                  <h2 className='xl-width100 xl-color-white xl-height-40 xl-marginB-10 xl-display-iBlock xl-text-center xl-paddingB-10 xl-paddingT-10 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 m-color-white m-height-30 m-marginB-5 m-display-iBlock m-paddingL-40 m-paddingR-40 m-paddingB-10 m-paddingT-10 m-border-white2 m-fontSize-18 m-lineHeight-40 m-bg-test4 s-color-white s-height-30 s-marginB-5 s-display-iBlock s-paddingL-40 s-paddingR-40 s-paddingB-10 s-paddingT-10 s-border-white2 s-fontSize-18 s-lineHeight-40 s-bg-test4'>top players</h2>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-border-white2 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-border-white2 m-bg-test4 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-border-white2 s-bg-test4'>
                      <PlayerList players={players}/>
                  </div>
              </div>
              <div className='xl-width49 xl-marginT-10 xl-marginL-5 m-width47 m-marginT-10 m-marginL-5 s-width95 s-marginT-10'>
                  <h2 className='xl-width100 xl-color-white xl-height-40 xl-marginB-10 xl-display-iBlock xl-text-center xl-paddingB-10 xl-paddingT-10 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 m-color-white m-height-30 m-marginB-5 m-display-iBlock m-paddingL-40 m-paddingR-40 m-paddingB-10 m-paddingT-10 m-border-white2 m-fontSize-18 m-lineHeight-40 m-bg-test4 s-color-white s-height-30 s-marginB-5 s-display-iBlock s-paddingL-40 s-paddingR-40 s-paddingB-10 s-paddingT-10 s-border-white2 s-fontSize-18 s-lineHeight-40 s-bg-test4'>top coaches</h2>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-border-white2 xl-bg-test4 m-width100 m-height-300 m-overflow-hidden m-display-flex m-flexWrap-wrap m-border-white2 m-bg-test4 s-width100 s-height-300 s-overflow-hidden s-display-flex s-flexWrap-wrap s-border-white2 s-bg-test4'>
                      <CoachList coach={coach}/>
                  </div>
              </div>
              <div className='xl-width99 xl-marginT-10 m-width95 m-marginT-10 s-width95 s-marginT-10'>
                  <h2 className='xl-width100 xl-color-white xl-height-40 xl-marginB-10 xl-display-iBlock xl-text-center xl-paddingB-10 xl-paddingT-10 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 m-color-white m-height-30 m-marginB-5 m-display-iBlock m-paddingL-40 m-paddingR-40 m-paddingB-10 m-paddingT-10 m-border-white2 m-fontSize-18 m-lineHeight-40 m-bg-test4 s-color-white s-height-30 s-marginB-5 s-display-iBlock s-paddingL-40 s-paddingR-40 s-paddingB-10 s-paddingT-10 s-border-white2 s-fontSize-18 s-lineHeight-40 s-bg-test4'>top news</h2>
                  <div className='xl-width100 xl-height-400 m-width100 m-height-250 s-width100 s-height-550'>
                      <TopNews/>
                  </div>
              </div>
              <div className='xl-width99 xl-marginT-10 m-width95 m-marginT-10 xl-display-flex xl-justifyContent-start xl-flexWrap-wrap m-display-flex m-justifyContent-start m-flexWrap-wrap s-display-flex s-justifyContent-start s-flexWrap-wrap s-marginT-10 s-width95'>
                  <h2 className='xl-width100 xl-color-white xl-height-40 xl-marginB-10 xl-display-iBlock xl-text-center xl-paddingB-10 xl-paddingT-10 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 m-color-white m-height-30 m-marginB-5 m-display-iBlock m-paddingL-40 m-paddingR-40 m-paddingB-10 m-paddingT-10 m-border-white2 m-fontSize-18 m-lineHeight-40 m-bg-test4 s-color-white s-height-30 s-marginB-5 s-display-iBlock s-paddingL-40 s-paddingR-40 s-paddingB-10 s-paddingT-10 s-border-white2 s-fontSize-18 s-lineHeight-40 s-bg-test4'>last transfer</h2>
                  <div className='xl-width100 xl-height-400 m-width100 m-height-250 s-width100 s-height-500'>
                  <TransferList/>
                  </div>
              </div>
              <div className='xl-width99 xl-marginT-10 m-width95 m-marginT-10 s-width95 s-marginT-10'>
                  <h2 className='xl-width100 xl-color-white xl-height-40 xl-marginB-10 xl-display-iBlock xl-text-center xl-paddingB-10 xl-paddingT-10 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 m-color-white m-height-30 m-marginB-5 m-display-iBlock m-paddingL-40 m-paddingR-40 m-paddingB-10 m-paddingT-10 m-border-white2 m-fontSize-18 m-lineHeight-40 m-bg-test4 s-color-white s-height-30 s-marginB-5 s-display-iBlock s-paddingL-40 s-paddingR-40 s-paddingB-10 s-paddingT-10 s-border-white2 s-fontSize-18 s-lineHeight-40 s-bg-test4'>live matches</h2>
                  <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-border-white2 xl-bg-test4 m-width100 m-height-250 m-overflow-hidden m-display-flex m-flexWrap-wrap m-border-white2 m-bg-test4 s-width100 s-height-400 s-overflow-hidden s-display-flex s-flexWrap-wrap s-border-white2 s-bg-test4'>
                      <LiveMatchesList/>
                  </div>
              </div>
              <div className='xl-width99 xl-marginT-10 m-width95 m-marginT-10 s-width95 s-marginT-10'>
                  <h2 className='xl-width100 xl-color-white xl-height-40 xl-marginB-10 xl-display-iBlock xl-text-center xl-paddingB-10 xl-paddingT-10 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 m-color-white m-height-30 m-marginB-5 m-display-iBlock m-paddingL-40 m-paddingR-40 m-paddingB-10 m-paddingT-10 m-border-white2 m-fontSize-18 m-lineHeight-40 m-bg-test4 s-color-white s-height-30 s-marginB-5 s-display-iBlock s-paddingL-40 s-paddingR-40 s-paddingB-10 s-paddingT-10 s-border-white2 s-fontSize-18 s-lineHeight-40 s-bg-test4'>last results</h2>
                  <div className='xl-width100 xl-height-400 xl-overflow-hidden xl-display-flex xl-flexWrap-wrap xl-bg-test4 xl-border-white2 m-width100 m-height-250 m-overflow-hidden m-display-flex m-flexWrap-wrap m-bg-test4 m-border-white2 s-width100 s-height-400 s-overflow-hidden s-display-flex s-flexWrap-wrap s-bg-test4 s-border-white2'>
                      <LastResultList/>
                  </div>
              </div>
          </main>
      </>
  );
}

export default Home;
