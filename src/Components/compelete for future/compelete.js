import '../CSS/kim.css';
import {FirstFilter} from './FirstFilter';
import App from "./App";
import React  from 'react';
import Map from "./Map/Map1";
import LiveMatchesList from "./Lists/LiveMatchesList";
import LastResultList from "./Lists/LastResult";
import LeagueList from "./Lists/LeagueList";
import TeamList from "./Lists/TeamList";
import PlayerList from "./Lists/PlayerList";
import CoachList from "./Lists/CoachList";

function TopNews(){
    return(
        <>
        <div className='width100 height90 border-black2 borderR-15 display-flex justifyContent-center bg-test5 overflow-hidden position-relative'>
            <div className='width50 height100 display-flex flexWrap-wrap alignContent-between'>
                <div className='height30 fontSize-34 bold'>header</div>
                <div className='height70'>
                    <p>text text text text text text text text text text text text text text text text text text text text text text text </p>
                </div>
            </div>
            <div className='width45 height100 display-flex flexWrap-wrap alignContent-between'>
                <img src='3.jpg' className='width100 height100'/>
            </div>
            <div className='width5 height100 position-absolute display-flex justifyContent-center alignItems-center left-0'>
                <button className='display-iBlock width-40 height-40 borderR50 border-black2 pointer fontSize-20'>&larr;</button>
            </div>
            <div className='width5 height100 position-absolute display-flex justifyContent-center alignItems-center right-0'>
                <button className='display-iBlock width-40 height-40 borderR50 border-black2 pointer fontSize-20'>&rarr;</button>
            </div>
        </div>
        </>
    )
}

function TopContent(){
    return(
        <>
        <div className='width100 height90 border-black2 borderR-15 display-flex justifyContent-center bg-test5 overflow-hidden position-relative'>
            <div className='width50 height100 display-flex flexWrap-wrap alignContent-between'>
                <div className='height30 fontSize-34 bold'>header</div>
                <div className='height70'>
                    <p>text text text text text text text text text text text text text text text text text text text text text text text </p>
                </div>
            </div>
            <div className='width45 height100 display-flex flexWrap-wrap alignContent-between'>
                <img src='3.jpg' className='width100 height100'/>
            </div>
            <div className='width5 height100 position-absolute display-flex justifyContent-center alignItems-center left-0'>
                <button className='display-iBlock width-40 height-40 borderR50 border-black2 pointer fontSize-20'>&larr;</button>
            </div>
            <div className='width5 height100 position-absolute display-flex justifyContent-center alignItems-center right-0'>
                <button className='display-iBlock width-40 height-40 borderR50 border-black2 pointer fontSize-20'>&rarr;</button>
            </div>
        </div>
        </>
    )
}

function MediaSlideShow(){
    return(
    <>
        <div className='width100 height90 border-black2 borderR-15 display-flex justifyContent-center bg-test5 overflow-hidden position-relative'>
            <div className='width50 height100 display-flex flexWrap-wrap alignContent-between'>
                <div className='height30 fontSize-34 bold'>header</div>
                <div className='height70'>
                    <p>text text text text text text text text text text text text text text text text text text text text text text text </p>
                </div>
            </div>
            <div className='width45 height100 display-flex flexWrap-wrap alignContent-between'>
                <img src='3.jpg' className='width100 height100'/>
            </div>
            <div className='width5 height100 position-absolute display-flex justifyContent-center alignItems-center left-0'>
                <button className='display-iBlock width-40 height-40 borderR50 border-black2 pointer fontSize-20'>&larr;</button>
            </div>
            <div className='width5 height100 position-absolute display-flex justifyContent-center alignItems-center right-0'>
                <button className='display-iBlock width-40 height-40 borderR50 border-black2 pointer fontSize-20'>&rarr;</button>
            </div>
        </div>
        </>
    )
}

function LastProductInsert(){
    return(
        <>
            <div className='width100 height90 marginLR-auto display-flex justifyContent-center flexWrap-wrap'>
                <div className='width100 height15 borderR-15 border-black2 bg-test3'>price</div>
            <div className='width100 height60 border-black2 borderR-15 bg-test3'>
                <img alt='image'/>
            </div>
                <div className='width100 height20 border-black2 borderR-15 bg-test3'></div>
            </div>

        </>
    )
}

function LastSupportNeeded(){
    return(
        <>
            <div className='width100 height90 marginLR-auto display-flex justifyContent-center flexWrap-wrap'>
                <div className='width100 height15 borderR-15 border-black2 bg-test3'>header</div>
            <div className='width100 height60 border-black2 borderR-15 bg-test3'>
                support needed text
            </div>
                <div className='width100 height20 border-black2 borderR-15 bg-test3'></div>
            </div>

        </>
    )
}

function TransferSlideShow(){
    return(
        <>
            <div className='width100 height80 display-flex flexWrap-wrap alignContent-evenly borderR-15 border-black2 position-relative bg-test0 position-relative'>
                <div className="width100 height30 display-flex alignItems-end justifyContent-start">
                    <div className='width50 height80 marginL-10 marginR-10 borderR-15 border-black2 bg-test3'></div>
                    <div className='width20 height50 marginL-10 borderR-15 border-black2 bg-test3'></div>
                </div>
                <div className="width100 height30 display-flex alignItems-center justifyContent-center">
                    <div className='width50 height80 borderR-15 border-black2 bg-test3'></div>
                </div>
                <div className="width100 height30 display-flex alignItems-start justifyContent-end">
                    <div className='width20 height50 marginR-10 borderR-15 border-black2 bg-test3'></div>
                    <div className='width50 height80 marginR-10 marginL-10 borderR-15 border-black2 bg-test3'></div>
                </div>
                <div className='width-180 height-180 borderR-15 border-black2 position-absolute bottom-10 left-10 bg-test3'></div>
                <div className='width-180 height-180 borderR50 border-black2 display-flex alignItems-center justifyContent-center position-absolute top-10 right-10 bg-test3'>
                    <div className='width-150 height-150 borderR50 border-black2 display-flex flexWrap-wrap alignContent-center justifyContent-center overflow-hidden'>
                        <div className='width100 text-center fontSize-20 bold'>possibility:</div>
                        <div className='width100 text-center fontSize-20 bold'>80%</div>
                    </div>
                </div>
                <div className='width5 height100 position-absolute display-flex justifyContent-center alignItems-center left-0'>
                <button className='display-iBlock width-40 height-40 borderR50 border-black2 pointer fontSize-20'>&larr;</button>
            </div>
            <div className='width5 height100 position-absolute display-flex justifyContent-center alignItems-center right-0'>
                <button className='display-iBlock width-40 height-40 borderR50 border-black2 pointer fontSize-20'>&rarr;</button>
            </div>
            </div>
        </>
    )
}



function Home() {
    return (
      <>
          <FirstFilter/>
          <div className='width-1200 height-550 marginT-10 marginLR-auto marginB-10 display-flex justifyContent-between alignItems-center'>
              <div className='width100 height100 borderR-15 border-black2 display-flex justifyContent-center overflow-hidden bg-test0'>
                 <Map/>
                  <input type='search' placeholder='SEARCH' className='width90 height-30 paddingL-30 paddingR-30 paddingB-10 paddingT-10 top-10 position-absolute text-center borderR-15 border-black1 color-black bg-test2'/>
              </div>
          </div>
          <main>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top leagues</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap borderR-15 border-black2'>
                      <LeagueList/>
                  </div>
              </div>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top teams</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap border-black2 borderR-15'>
                      <TeamList/>
                  </div>
              </div>
              <div className='width100 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top news</h2>
                  <div className='width100 height-400'>
                      <TopNews/>
                  </div>

              </div>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top players</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap borderR-15 border-black2'>
                      <PlayerList/>
                  </div>
              </div>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top coaches</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <CoachList/>
                  </div>
              </div>
              <div className='width100 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top content</h2>
                  <div className='width100 height-400'>
                      <TopContent/>
                  </div>

              </div>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top managers</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <App/>
                  </div>
              </div>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top medicals</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <App/>
                  </div>
              </div>
              <div className='width100 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top media slide show</h2>
                  <div className='width100 height-400'>
                      <MediaSlideShow/>
                  </div>
              </div>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top presses</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <App/>
                  </div>
              </div>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top referees</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <App/>
                  </div>
              </div>
              <div className='width100 height-500 marginB-15 display-flex justifyContent-start flexWrap-wrap overflow-hidden'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>transfer slide show last</h2>
              <TransferSlideShow/>
              </div>
                            <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top supplies</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <App/>
                  </div>
              </div>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>top fans</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <App/>
                  </div>
              </div>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>last product insert</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <LastProductInsert/>
                  </div>
              </div>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>last support needed</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <LastSupportNeeded/>
                  </div>
              </div>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>last results</h2>
                  <div className='width100 height-400 overflow-hidden display-flex flexWrap-wrap bg-test0 borderR-15 border-black2'>
                      <LastResultList/>
                  </div>
              </div>
              <div className='width49 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>incomming matches</h2>
                  <div className='width100 height-400 overflow-hidden display-flex flexWrap-wrap bg-test0 borderR-15 border-black2'>
                      <LastResultList/>
                  </div>
              </div>
              <div className='width100 marginT-10'>
                  <h2 className='height-40 marginB-5 display-iBlock paddingL-40 paddingR-40 paddingB-10 paddingT-10 borderR-15 border-black2 fontSize-22 lineHeight-40 bg-test6'>live matches</h2>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap borderR-15 border-black2 bg-test0'>
                      <LiveMatchesList/>
                  </div>
              </div>
          </main>
      </>
  );
}

export default Home;
