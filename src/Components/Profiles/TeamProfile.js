
import React  from 'react';
import { useEffect, useState } from 'react';

let hostUrl=process.env.REACT_APP_DATABASE_URL;

function TeamInternationalCard({teamName,teamStart,teamArea,teamLogo,teamCountry,leagueName}){
    return(
        <>
            <div className='xl-width100 xl-height100 m-width100 m-height100 s-display-none'>
                <div className='xl-width100 xl-height80 xl-display-flex xl-alignItems-center xl-justifyContent-evenly m-width100 m-height80 m-display-flex m-alignItems-center m-justifyContent-evenly'>
                    <div className='xl-width60 xl-height90 m-width60 m-height90'>
                        <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                            <span className='xl-fontSize-30 xl-color-white m-fontSize-24 m-color-white'>Name</span>
                            <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-24 m-color-silver m-marginL-15'>{teamName}</span>
                        </div>
                        <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                            <span className='xl-fontSize-30 xl-color-white m-fontSize-24 m-color-white'>Country</span>
                            <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-24 m-color-silver m-marginL-15'>{teamCountry}</span>
                        </div>
                        <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                            <span className='xl-fontSize-30 xl-color-white m-fontSize-24 m-color-white'>Area</span>
                            <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-24 m-color-silver m-marginL-15'>{teamArea}</span>
                        </div>
                        <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                            <span className='xl-fontSize-30 xl-color-white m-fontSize-24 m-color-white'>League</span>
                            <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-24 m-color-silver m-marginL-15'>{leagueName}</span>
                        </div>
                        <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                            <span className='xl-fontSize-30 xl-color-white m-fontSize-24 m-color-white'>Since</span>
                            <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-24 m-color-silver m-marginL-15'>{teamStart}</span>
                        </div>
                    </div>
                    <div className='xl-width30 xl-height90 xl-display-flex xl-alignContent-evenly xl-justifyContent-center xl-flexWrap-wrap m-width30 m-height90 m-display-flex m-alignContent-evenly m-justifyContent-center m-flexWrap-wrap'>
                        <div className='xl-width-180 xl-height-180 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-borderR-15 xl-bg-test3 m-width-150 m-height-150 m-display-flex m-justifyContent-center m-alignItems-center m-borderR-15 m-bg-test3'>
                            <img className='xl-width90 m-width90' src={hostUrl+teamLogo}/>
                        </div>
                        <div className='xl-width-180 xl-height-280 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-borderR-15 xl-bg-test3 xl-overflow-hidden m-width-150 m-height-200 m-display-flex m-justifyContent-center m-alignItems-center m-borderR-15 m-bg-test3 m-overflow-hidden'>
                            <img className='xl-height90 m-height90' src='whatsapp-image-2021-05-04-at-104742-am.jpg'/>
                        </div>
                    </div>
                </div>
                <div className='xl-width100 xl-height-60 xl-bg-test3 xl-marginT-30 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-flexWrap-wrap m-width100 m-height-40 m-bg-test3 m-display-flex m-justifyContent-center m-alignItems-center m-flexWrap-wrap'>
                    <div className=' xl-marginR-15 m-fontSize-12 m-marginR-15 s-fontSize-12 s-marginR-15'>About this Team</div>
                    <button className='xl-color-white xl-bg-test4 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-border-black2 m-color-white m-bg-test4 m-paddingB-5 m-paddingT-5 m-paddingL-10 m-paddingR-10 m-borderR-10 m-fontSize-10 m-border-black2'>News</button>
                    <button className='xl-color-white xl-bg-test4 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-border-black2 xl-marginL-5 xl-marginR-5 m-color-white m-bg-test4 m-paddingB-5 m-paddingT-5 m-paddingL-10 m-paddingR-10 m-borderR-10 m-fontSize-10 m-border-black2 m-marginL-5 m-marginR-5'>Media</button>
                    <button className='xl-color-white xl-bg-test4 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-border-black2 m-color-white m-bg-test4 m-paddingB-5 m-paddingT-5 m-paddingL-10 m-paddingR-10 m-borderR-10 m-fontSize-10 m-border-black2 s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2'>History</button>
                </div>
            </div>
            <div className='xl-display-none m-display-none s-width100 s-height-160 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
                <div className='s-width-120 s-height-120 s-bg-test3 s-borderR-15 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden s-marginT-10'>
                    <img className='s-height90' src={hostUrl+teamLogo}/>
                </div>
                <div className='s-width100 s-height-30 s-fontSize-18 s-color-white s-text-center s-marginT-10'>{teamName}</div>
                <div className='s-width100 s-height-250 s-display-flex s-justifyContent-center s-marginT-10'>
                    <div className='s-width-200'>
                        <div className='s-text-center s-marginT-10 s-color-white'>country / city : {teamCountry} / {teamArea}</div>
                        <div className='s-text-center s-marginT-10 s-color-white'>since : {teamStart}</div>
                        <div className='s-width-100 s-height-120 s-display-flex s-overflow-hidden s-justifyContent-center s-alignItems-center s-marginLR-auto s-marginT-15'>
                            <img className='s-height100' src='whatsapp-image-2021-05-04-at-104742-am.jpg'/>
                        </div>
                    </div>
                </div>
                <div className='s-width100 s-height-50 s-bg-test3 s-display-flex s-justifyContent-center s-alignItems-center'>
                    <div className='s-width100 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
                        <div className='s-fontSize-12 s-marginR-15'>about this team :</div>
                        <button className='s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2'>news</button>
                        <button className='s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2 s-marginL-5 s-marginR-5'>media</button>
                        <button className='s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2'>history</button>
                    </div>
                </div>
            </div>
        </>
    )
}

function TeamRateResult(){
    return(
        <div className='xl-width100 xl-height-40 xl-borderR-30 xl-border-black2 xl-bg-test'></div>
        )
}

function TeamImages(){
    return(
        <>
            <div className='xl-width100 xl-height32 xl-borderR-15 xl-border-black2'>
                <img alt='team photo'/>
            </div>
            <div className='xl-width100 xl-height32 xl-borderR-15 xl-border-black2'>
                <img alt='venuse'/>
            </div>
        </>
    )
}

function TeamWincentScore(){
    return(
        <>
            <div>wincent score:</div>
                <div>96.84</div>
                <div>wincent rank:</div>
                <div>1</div>
        </>
    )
}

function TeamWincentWage(){
    return(
        <>
           <div>wincent wage:</div>
           <div>90M$</div>
           <div>wincent value:</div>
           <div>40M$</div>
        </>
    )
}

function TeamAchievement(){
    return(
        <>
            <div className='xl-height32'>
            </div>
        </>
    )
}
let playerImgSrc;
function TeamFamilyTable({players}){
    return(
        <>
          <div className='xl-width100 xl-height-660 xl-overflow-hidden m-width100 m-height-660 m-overflow-hidden s-width100 s-height-660 s-overflow-hidden'>
                <ul className='xl-width100 xl-height-40 xl-marginT-5 xl-display-flex xl-justifyContent-start m-width100 m-height-40 m-marginT-5 m-display-flex m-justifyContent-start s-width100 s-height-40 s-marginT-5 s-display-flex s-justifyContent-start'>
                    <li className='xl-width15 xl-height100 m-width15 m-height100 s-width15 s-height100'><button className='xl-display-block xl-bg-test3 xl-color-black xl-width100 xl-height100 xl-border-black2 xl-transform-skew-25 xl-pointer m-display-block m-bg-test3 m-color-black m-width100 m-height100 m-border-black2 m-transform-skew-25 m-pointer s-display-block s-bg-test3 s-color-black s-width100 s-height100 s-border-black2 s-transform-skew-25 s-pointer'>Player</button></li>
                    <li className='xl-width15 xl-height100 m-width15 m-height100 s-width15 s-height100'><button className='xl-display-block xl-bg-test3 xl-color-black xl-width100 xl-height100 xl-border-black2 xl-transform-skew-25 xl-pointer m-display-block m-bg-test3 m-color-black m-width100 m-height100 m-border-black2 m-transform-skew-25 m-pointer s-display-block s-bg-test3 s-color-black s-width100 s-height100 s-border-black2 s-transform-skew-25 s-pointer'>Coach</button></li>
                </ul>
                <div className='xl-width-120 xl-height-40 xl-marginLR-auto xl-marginT-10 xl-marginB-10 xl-borderR-10 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-pointer xl-bg-test3 m-width-120 m-height-40 m-marginLR-auto m-marginT-10 m-marginB-10 m-borderR-10 m-border-black2 m-display-flex m-justifyContent-center m-alignItems-center m-pointer m-bg-test3 s-width-120 s-height-40 s-marginLR-auto s-marginT-10 s-marginB-10 s-borderR-10 s-border-black2 s-display-flex s-justifyContent-center s-alignItems-center s-pointer s-bg-test3'>
                    <div>select season</div>
                </div>
                <div className='xl-width100 xl-height-40 xl-bg-test m-width100 m-height-40 m-bg-test s-width100 s-height-40 s-bg-test'>
                    <ul className='xl-height100 xl-display-flex xl-justifyContent-evenly xl-alignItems-center m-display-flex m-justifyContent-evenly m-alignItems-center s-display-flex s-justifyContent-evenly s-alignItems-center'>
                        <li className='xl-width10 m-width20 s-width15'></li>
                        <li className='xl-width20 xl-fontSize-12 xl-text-center m-width20 m-fontSize-12 m-text-center s-width15 s-fontSize-10 s-text-center'>Name</li>
                        <li className='xl-width20 xl-fontSize-12 xl-text-center m-width20 m-fontSize-12 m-text-center s-width15 s-fontSize-10 s-text-center'>Position</li>
                        <li className='xl-width20 xl-fontSize-12 xl-text-center m-width20 m-fontSize-12 m-text-center s-width15 s-fontSize-10 s-text-center'>National</li>
                        <li className='xl-width20 xl-fontSize-12 xl-text-center m-width20 m-fontSize-12 m-text-center s-width15 s-fontSize-10 s-text-center'>Contract date</li>
                    </ul>
                </div>
              <div className='xl-width100 xl-height-500 xl-overflow-hidden xl-marginLR-auto xl-overflow-auto xl-bg-test xl-marginT-5 m-width100 m-marginLR-auto m-height-510 m-overflow-auto m-marginT-5 m-bg-test s-width100 s-marginLR-auto s-height-510 s-marginT-5 s-overflow-auto s-bg-test'>
                  {players.length > 0 && (
                  <ul className='xl-width100 xl-overflow-auto m-width100 m-overflow-auto s-width100 s-overflow-auto'>
                      {[...players].sort((a, b) =>
                          a.name > b.name ? 1 : -1,).map((player,index) =>{
                          if(players) {
                              if (player.photo === "") {
                                  playerImgSrc = 'playerIcon.png'
                              } else {
                                  playerImgSrc = hostUrl + player.photo;
                              }
                              return <li key={index}
                                         className='xl-width100 xl-height-60 xl-marginB-5 xl-border-black2 xl-display-flex xl-justifyContent-evenly xl-alignItems-center m-width100 m-height-60 m-marginB-5 m-border-black2 m-display-flex m-justifyContent-evenly m-alignItems-center s-width100 s-height-60 s-marginB-5 s-border-black2 s-display-flex s-justifyContent-evenly s-alignItems-center'>
                                  <div
                                      className='xl-width10 xl-height100 m-width20 s-width20 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width10 m-height100 m-width20 s-width20 m-display-flex m-alignItems-center m-justifyContent-center s-width10 s-height100 m-width20 s-width15 s-display-flex s-alignItems-center s-justifyContent-center'>
                                      <div
                                          className='xl-width-50 xl-height-50 xl-borderR50 xl-bg-test xl-display-flex xl-alignItems-center xl-justifyContent-center xl-overflow-hidden xl-border-black2 m-width-50 m-height-50 m-borderR50 m-bg-test m-display-flex m-alignItems-center m-justifyContent-center m-overflow-hidden m-border-black2 s-width-50 s-height-50 s-borderR50 s-bg-test s-display-flex s-alignItems-center s-justifyContent-center s-overflow-hidden s-border-black2'>
                                          <img className='xl-width90 m-width90 s-width90' src={playerImgSrc}/>
                                      </div>
                                  </div>
                                  <div
                                      className='xl-width20 xl-height100 xl-fontSize-14 xl-display-flex xl-justifyContent-evenly xl-alignItems-center xl-text-center m-width20 m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-12 s-width15 s-fontSize-10 s-display-flex s-justifyContent-center s-alignItems-center'>{player.name}</div>
                                  <div
                                      className='xl-width20 xl-height100 xl-fontSize-14 xl-display-flex xl-justifyContent-evenly xl-alignItems-center xl-text-center m-width20 m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-12 s-width15 s-fontSize-10 s-display-flex s-justifyContent-center s-alignItems-center'>{player.position}</div>
                                  <div
                                      className='xl-width20 xl-height100 xl-fontSize-14 xl-display-flex xl-justifyContent-evenly xl-alignItems-center xl-text-center m-width20 m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-12 s-width15 s-fontSize-10 s-display-flex s-justifyContent-center s-alignItems-center'>{player.country}</div>
                                  <div
                                      className='xl-width20 xl-height100 xl-fontSize-14 xl-display-flex xl-justifyContent-evenly xl-alignItems-center xl-text-center m-width20 m-display-flex m-justifyContent-center m-alignItems-center m-fontSize-12 s-width15 s-fontSize-10 s-display-flex s-justifyContent-center s-alignItems-center'>{player.contractEndDate}</div>
                              </li>
                          }
                      })
                      }
                  </ul>
                      )}
                </div>
          </div>
        </>
    )
}

function TeamTable(){
    return(
        <>
            <div className='xl-width100 xl-height-660 xl-overflow-hidden m-width100 m-height-660 m-overflow-hidden s-width100 s-height-660 s-overflow-hidden'>
                <ul className='xl-width100 xl-height-40 xl-marginT-5 xl-display-flex xl-justifyContent-evenly m-width100 m-height-40 m-marginT-5 m-display-flex m-justifyContent-evenly s-width100 s-height-40 s-marginT-5 s-display-flex s-justifyContent-evenly'>
                    <li className='xl-width24 xl-height100 m-width24 m-height100 s-width24 s-height100'><button className='xl-display-block xl-width100 xl-height100 xl-border-black2 xl-transform-skew-25 xl-pointer m-display-block m-width100 m-height100 m-border-black2 m-transform-skew-25 m-pointer s-display-block s-width100 s-height100 s-border-black2 s-transform-skew-25 s-pointer'>league1</button></li>
                    <li className='xl-width24 xl-height100 m-width24 m-height100 s-width24 s-height100'><button className='xl-display-block xl-width100 xl-height100 xl-border-black2 xl-transform-skew-25 xl-pointer m-display-block m-width100 m-height100 m-border-black2 m-transform-skew-25 m-pointer s-display-block s-width100 s-height100 s-border-black2 s-transform-skew-25 s-pointer'>league2</button></li>
                    <li className='xl-width24 xl-height100 m-width24 m-height100 s-width24 s-height100'><button className='xl-display-block xl-width100 xl-height100 xl-border-black2 xl-transform-skew-25 xl-pointer m-display-block m-width100 m-height100 m-border-black2 m-transform-skew-25 m-pointer s-display-block s-width100 s-height100 s-border-black2 s-transform-skew-25 s-pointer'>league3</button></li>
                    <li className='xl-width24 xl-height100 m-width24 m-height100 s-width24 s-height100'><button className='xl-display-block xl-width100 xl-height100 xl-border-black2 xl-transform-skew-25 xl-pointer m-display-block m-width100 m-height100 m-border-black2 m-transform-skew-25 m-pointer s-display-block s-width100 s-height100 s-border-black2 s-transform-skew-25 s-pointer'>league4</button></li>
                </ul>
                <div className='xl-width-120 xl-height-40 xl-marginB-10 xl-marginLR-auto xl-marginT-10 xl-borderR-10 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-pointer xl-bg-test3 m-width-120 m-height-40 m-marginB-10 m-marginLR-auto m-marginT-10 m-borderR-10 m-border-black2 m-display-flex m-justifyContent-center m-alignItems-center m-pointer m-bg-test3 s-width-120 s-height-40 s-marginB-10 s-marginLR-auto s-marginT-10 s-borderR-10 s-border-black2 s-display-flex s-justifyContent-center s-alignItems-center s-pointer s-bg-test3'>
                    <div>select season</div>
                </div>
                <div className='xl-width100 xl-height-610 xl-marginLR-auto xl-overflow-auto m-width100 m-height-610 m-marginLR-auto m-overflow-auto s-width100 s-height-610 s-marginLR-auto s-overflow-auto'>
                </div>
            </div>
        </>
    )
}

function PerformanceTable(){
    return(

            <table className='xl-width-300 xl-borderCollapse-collapse m-width-300 m-borderCollapse-collapse s-width-300 s-borderCollapse-collapse'>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>played</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>goals for</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>goals against</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>possession %</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>possession %</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>pass (true)</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr><tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>goal chance</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>1 v 1 cross</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>interception</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>tackle (tackle win)</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>recovery ball</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>block shoot</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>raining rate</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr><tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>speed rate</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>heading</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>save and clearance</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>clean sheet</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>own goal</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>foul conceded</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>foul occurred</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>offside conceded</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>offside occurred</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>yellow card</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
                <tr>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'>red card</td>
                    <td className='xl-border-white2 xl-color-white xl-width50 xl-height-30 m-border-white2 m-color-white m-width50 m-height-30 s-border-white2 s-color-white s-width50 s-height-30'></td>
                </tr>
            </table>
    )
}

function TeamScoreAndSupport(){
    return(
        <div className='xl-width100 xl-height100 m-width100 m-height100 s-width100 s-height100'></div>
    )
}

function TeamMedia(){
    return(
        <div className='xl-width100 xl-height100 m-width100 m-height100 s-width100 s-height100'></div>
    )
}

function TeamApproval(){
    return(
        <div className='xl-width100 xl-height100'></div>
    )
}

function TeamNews(){
    return(
        <div className='xl-width100 xl-height100'></div>
    )
}

function TeamContent(){
    return(
        <div className='xl-width100 xl-height100'></div>
    )
}

function TeamBiography(){
    return(
        <div className='xl-width100 xl-height100'></div>
    )
}

function TeamProfile({teamName1,teamStart,teamArea,teamLogo,teamCountry,leagueName,venue,players}) {

  return(
      <>
          <div>
            <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-alignItems-center xl-marginT-15 m-width100 m-display-flex m-justifyContent-start m-alignItems-center m-marginT-15 s-width100 s-display-flex s-justifyContent-start s-alignItems-center s-marginT-15'>
                <h2 className='xl-height-50 xl-marginB-5 xl-display-flex xl-alignItems-center xl-paddingR-40 xl-paddingL-40 xl-border-white2 xl-bg-test4 xl-color-white m-height-50 m-marginB-5 m-display-flex m-alignItems-center m-paddingR-40 m-paddingL-40 m-border-white2 m-bg-test4 m-color-white s-height-50 s-marginB-5 s-display-flex s-alignItems-center s-paddingR-40 s-paddingL-40 s-border-white2 s-bg-test4 s-color-white'>team profile</h2>
            </div>
        </div>
              <div className='xl-width100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center m-width100 m-display-flex m-flexWrap-wrap m-justifyContent-center s-width95 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
              <div className='xl-width100 xl-height-700 xl-border-white2 xl-bg-test4 m-width100 m-height-550 m-border-white2 m-bg-test4 s-width100 s-height-550 s-border-white2 s-bg-test4'>
                  <TeamInternationalCard teamName={teamName1} teamStart={teamStart} teamArea={teamArea} teamLogo={teamLogo} teamCountry={teamCountry} leagueName={leagueName}/>
              </div>
              <div className='xl-width95 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap xl-alignContent-between m-width95 m-display-flex m-justifyContent-center m-flexWrap-wrap m-alignContent-between s-width100 s-display-flex s-justifyContent-center s-flexWrap-wrap s-alignContent-between'>
                  <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-flexWrap-wrap xl-alignContent-evenly m-width100 m-display-flex m-justifyContent-start m-flexWrap-wrap m-alignContent-evenly s-width100 s-display-flex s-justifyContent-start s-flexWrap-wrap s-alignContent-evenly s-marginT-15'>
                      <div className='xl-width100 xl-border-white2 xl-bg-test4 xl-display-flex xl-alignItems-center xl-marginT-15 m-width100 m-border-white2 m-bg-test4 m-display-flex m-alignItems-center m-marginT-15 s-border-white2'>
                          <img className='xl-width100 xl-color-white m-width100 m-color-white s-width100 s-color-white' alt={venue} src='5184.webp'/>
                      </div>
                  </div>
              </div>
          </div>
          <div className='xl-width100 xl-marginT-15 xl-display-flex xl-justifyContent-center m-width100 m-marginT-15 m-display-flex m-justifyContent-center s-width100 s-marginT-15 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
              <div className='xl-width95 m-width95 s-width95'>
                  <h3 className='xl-height-40 xl-marginT-15 xl-marginB-5 xl-display-iBlock xl-paddingL-40 xl-paddingR-40 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 xl-color-white m-height-40 m-marginT-15 m-marginB-5 m-display-iBlock m-paddingL-40 m-paddingR-40 m-border-white2 m-fontSize-18 m-lineHeight-40 m-bg-test4 m-color-white s-height-40 s-marginT-15 s-marginB-5 s-display-iBlock s-paddingL-40 s-paddingR-40 s-border-white2 s-fontSize-18 s-lineHeight-40 s-bg-test4 s-color-white'>table family</h3>
                  <div className='xl-width100 xl-border-white2 xl-bg-test4 m-width100 m-border-white2 m-bg-test4 s-width100 s-border-white2 s-bg-test4'>
                    <TeamFamilyTable players={players}/>
                  </div>
              </div>
          </div>
          <div className='xl-width100 xl-display-flex xl-justifyContent-between m-width100 m-display-flex m-justifyContent-between s-width100 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
              <div className='xl-width64 m-width64 s-width95'>
                  <h3 className='xl-height-40 xl-marginT-15 xl-marginB-5 xl-display-iBlock xl-paddingL-40 xl-paddingR-40 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 xl-color-white m-height-40 m-marginT-15 m-marginB-5 m-display-iBlock m-paddingL-40 m-paddingR-40 m-border-white2 m-fontSize-18 m-lineHeight-40 m-bg-test4 m-color-white s-height-40 s-marginT-15 s-marginB-5 s-display-iBlock s-paddingL-40 s-paddingR-40 s-border-white2 s-fontSize-18 s-lineHeight-40 s-bg-test4 s-color-white'>performance</h3>
                  <div className='xl-width100 xl-height-900 xl-border-white2 xl-bg-test4 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width100 m-height-900 m-border-white2 m-bg-test4 m-display-flex m-alignItems-center m-justifyContent-center s-width100 s-height-900 s-border-white2 s-bg-test4 s-display-flex s-alignItems-center s-justifyContent-center'>
                  <PerformanceTable/>
                  </div>
              </div>
              <div className='xl-width32 m-width32 s-width95'>
                  <h3 className='xl-height-40 xl-marginT-15 xl-marginB-5 xl-display-iBlock xl-paddingL-40 xl-paddingR-40 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 xl-color-white m-height-40 m-marginT-15 m-marginB-5 m-display-iBlock m-paddingL-40 m-paddingR-40 m-border-white2 m-fontSize-18 m-lineHeight-40 m-bg-test4 m-color-white s-height-40 s-marginT-15 s-marginB-5 s-display-iBlock s-paddingL-40 s-paddingR-40 s-border-white2 s-fontSize-18 s-lineHeight-40 s-bg-test4 s-color-white'>matches</h3>
                  <div className='xl-width100 xl-height-410 xl-border-white2 xl-bg-test4 m-width100 m-height-410 m-border-white2 m-bg-test4 s-width100 s-height-410 s-border-white2 s-bg-test4'>
                      <TeamScoreAndSupport/>
                  </div>
                  <h3 className='xl-height-40 xl-marginT-15 xl-marginB-5 xl-display-iBlock xl-paddingL-40 xl-paddingR-40 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 xl-color-white m-marginT-15 m-marginB-5 m-display-iBlock m-paddingL-40 m-paddingR-40 m-border-white2  m-lineHeight-40 m-bg-test4 m-color-white s-height-40 s-marginT-15 s-marginB-5 s-display-iBlock s-paddingL-40 s-paddingR-40 s-border-white2  s-lineHeight-40 s-bg-test4 s-color-white'>incomeing matches</h3>
                  <div className='xl-width100 xl-height-410 xl-border-white2 xl-bg-test4 m-width100 m-height-410 m-border-white2 m-bg-test4 s-width100 s-height-410 s-border-white2 s-bg-test4'>
                      <TeamMedia/>
                  </div>
              </div>
          </div>
      </>
  )
    }
export default TeamProfile;