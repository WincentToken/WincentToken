
import React  from 'react';
import {useEffect,useState} from 'react';

function PlayerInternationalCard({playerName, playerCitizenship, playerPhoto, playerNumber,playerBirthday,playerTeamName}){
    return(
        <>
        <div className='xl-height-400 xl-display-flex xl-flexWrap-wrap xl-position-relative m-height100 m-display-flex m-flexWrap-wrap m-position-relative s-display-none'>
            <div className='xl-marginL-15 xl-width70 xl-height90 m-marginL-15 m-width70 m-height90'>
                <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                    <span className='xl-fontSize-30 xl-color-white m-fontSize-20 m-color-white'>Name</span>
                    <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-20 m-color-silver m-marginL-15'>{playerName}</span>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                    <span className='xl-fontSize-30 xl-color-white m-fontSize-20 m-color-white'>Country</span>
                    <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-20 m-color-silver m-marginL-15'>{playerCitizenship}</span>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                    <span className='xl-fontSize-30 xl-color-white m-fontSize-20 m-color-white'>Team</span>
                    <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-20 m-color-silver m-marginL-15'>{playerTeamName}</span>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                    <span className='xl-fontSize-30 xl-color-white m-fontSize-20 m-color-white'>Number</span>
                    <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-20 m-color-silver m-marginL-15'>{playerNumber} </span>
                </div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                    <span className='xl-fontSize-30 xl-color-white m-fontSize-20 m-color-white'>Birthday</span>
                    <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-20 m-color-silver m-marginL-15'>{playerBirthday}</span>
                </div>
            </div>
           <div className='xl-width-120 xl-height-150 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-position-absolut xl-top-30 xl-right-30 xl-border-black2 xl-bg-test3 xl-overflow-hidden m-width-70 m-height-80 m-position-absolut m-top-30 m-right-30 m-border-black2 m-bg-test3 m-display-flex m-justifyContent-center m-alignItems-center m-overflow-hidden'>
               <img alt='player personality photo' className='xl-width100 m-width100 s-width100' src={playerPhoto}/>
           </div>
        </div>

    <div className='xl-display-none m-display-none s-width100 s-height-160 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
        <div className='s-width-120 s-height-150 s-bg-test3 s-borderR-15 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden s-marginT-10'>
            <img className='s-height90' src={playerPhoto}/>
        </div>
        <div className='s-width100 s-height-30 s-fontSize-18 s-color-white s-text-center s-marginT-10'>{playerName}</div>
        <div className='s-width100 s-height-250 s-display-flex s-justifyContent-center s-marginT-10'>
            <div className='s-width-200'>
                <div className='s-text-center s-marginT-10 s-color-white'>citizenship : {playerCitizenship}</div>
                <div className='s-text-center s-marginT-10 s-color-white'>birthdate : {playerBirthday}</div>
                <div className='s-text-center s-marginT-10 s-color-white'>number : #{playerNumber}</div>
            </div>
        </div>

    </div>
    </>
    )
}



function PlayerInformationTable({playerBirthday,playerCitizenship,playerContractEnd}){
    return(
        <>
            <table className='xl-width100 xl-height70 xl-fontSize-24 m-width100 m-height70 s-width100 s-height70'>
                <tr>
                    <td className='xl-color-white m-color-white s-color-white'>gender:</td>
                    <td className='xl-bold xl-color-white m-bold m-color-white s-bold s-color-white'>male</td>
                </tr>
                <tr>
                    <td className='xl-color-white m-color-white s-color-white'>birthday(age):</td>
                    <td className='xl-bold xl-color-white m-bold m-color-white s-bold s-color-white'>{playerBirthday}</td>
                </tr>
                <tr>
                    <td className='xl-color-white m-color-white s-color-white'>Country:</td>
                    <td className='xl-bold xl-color-white m-bold m-color-white s-bold s-color-white'>{playerCitizenship}</td>
                </tr>
                <tr>
                    <td className='xl-color-white m-color-white s-color-white'>End of contract:</td>
                    <td className='xl-bold xl-color-white m-bold m-color-white s-bold s-color-white'>{playerContractEnd}</td>
                </tr>
            </table>
            <div className='xl-display-none m-display-none s-width100 s-height-50 s-bg-test3 s-display-flex s-justifyContent-center s-alignItems-center s-marginT-15'>
                <div className='s-width100 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
                    <div className='s-fontSize-12 s-marginR-15'>About this Player :</div>
                    <button className='s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2'>news</button>
                    <button className='s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2 s-marginL-5 s-marginR-5'>media</button>
                    <button className='s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2'>biography</button>
                </div>
            </div>
            <div className='xl-width100 xl-height-60 xl-bg-test3 xl-marginT-30 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-flexWrap-wrap m-width100 m-height-40 m-bg-test3 m-display-flex m-justifyContent-center m-alignItems-center m-flexWrap-wrap s-display-none'>
                <div className=' xl-marginR-15 m-fontSize-12 m-marginR-15 s-fontSize-12 s-marginR-15'>About this Player</div>
                <button className='xl-color-white xl-bg-test4 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-border-black2 m-color-white m-bg-test4 m-paddingB-5 m-paddingT-5 m-paddingL-10 m-paddingR-10 m-borderR-10 m-fontSize-10 m-border-black2'>News</button>
                <button className='xl-color-white xl-bg-test4 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-border-black2 xl-marginL-5 xl-marginR-5 m-color-white m-bg-test4 m-paddingB-5 m-paddingT-5 m-paddingL-10 m-paddingR-10 m-borderR-10 m-fontSize-10 m-border-black2 m-marginL-5 m-marginR-5'>Media</button>
                <button className='xl-color-white xl-bg-test4 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-border-black2 m-color-white m-bg-test4 m-paddingB-5 m-paddingT-5 m-paddingL-10 m-paddingR-10 m-borderR-10 m-fontSize-10 m-border-black2 s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2'>Biography</button>
            </div>
            </>
    )
}

function PlayerPosition({playerPosition,playerPhoto,position}){

    return(
        <>
            <div className='xl-width100 xl-height100 xl-display-flex xl-justifyContent-center xl-alignContent-evenly xl-flexWrap-wrap m-width100 m-height100 m-display-flex m-justifyContent-center m-alignContent-evenly m-flexWrap-wrap s-width100 s-height100 s-display-flex s-justifyContent-center s-alignContent-evenly s-flexWrap-wrap'>
                <div className='xl-width90 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-position-relative m-width90 m-display-flex m-alignItems-center m-justifyContent-center m-position-relative s-width90 s-display-flex s-alignItems-center s-justifyContent-center s-position-relative s-marginT-30' >
                    <img className='xl-width100 m-width100 s-width100' src='footballPitch.jpg'/>
                    <div className='xl-position-absolut xl-width100 xl-height100 m-position-absolut m-width100 m-height100 s-position-absolut s-width100 s-height100'>
                        <div className='xl-width-30 xl-height-30 xl-bg-test3 xl-borderR50 xl-position-absolut xl-display-flex xl-justifyContent-center xl-alignItems-center xl-overflow-hidden m-width-30 m-height-30 m-bg-test3 m-borderR50 m-position-absolut m-display-flex m-justifyContent-center m-alignItems-center m-overflow-hidden s-width-30 s-height-30 s-bg-test3 s-borderR50 s-position-absolut s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden' style={position}>
                            <img src={playerPhoto} className='xl-width90 m-width90 s-width90'/>
                        </div>
                    </div>
                </div>
                <div className='xl-width100 display-flex xl-justifyContent-center xl-alignItems-center m-width100 display-flex m-justifyContent-center m-alignItems-center s-width100 display-flex s-justifyContent-center s-alignItems-center'>
                    <div className='xl-color-white xl-fontSize-26 xl-text-center m-color-white m-fontSize-26 m-text-center s-color-white s-fontSize-26 s-text-center s-marginB-20 s-marginT-15'>{playerPosition}</div>
                </div>
            </div>
        </>
    )
}

function PlayerPerformanceTable_Technical(){
    return(
        <table className='xl-width70 xl-height-700 xl-bg-test3 xl-borderCollapse-collapse m-width70 m-height-700 m-bg-test3 m-borderCollapse-collapse s-width70 s-height-700 s-bg-test3 s-borderCollapse-collapse'>
            <tr>
                <td rowSpan='3' className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>technical</td>
                <td className='xl-border-white2 m-border-white2 s-border-white2'>
                    <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-fontSize-18 s-paddingL-10 s-paddingR-10'>season</span>
                    <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-fontSize-18 s-paddingL-10 s-paddingR-10'>2021-22</span>
                </td>
            </tr>
            <tr>
                <td className='xl-border-white2 m-border-white2 s-border-white2'>
                    <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-fontSize-18 s-paddingL-10 s-paddingR-10'>league</span>
                    <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-fontSize-18 s-paddingL-10 s-paddingR-10'>all league</span>
                </td>
            </tr>
            <tr>
                <td className='xl-border-white2 m-border-white2 s-border-white2'>
                    <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-fontSize-18 s-paddingL-10 s-paddingR-10'>match</span>
                    <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-fontSize-18 s-paddingL-10 s-paddingR-10'>all match</span>
                </td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>goal</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>8</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>assist</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>3</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>pass (true pass)_%</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>3200(2900)_75%</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>shoot (on target)_%</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>24(12)_50%</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>1 v 1 cross</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>14</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>interception (punch)</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>12</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>recovery ball </td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>15</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>tackle (tackle won)</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>29</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>block shot</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>4</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>foul incurred</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>30</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>offside</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>3</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>own goal</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>0</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>clean sheet</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>3</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>save(clerance)</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-14 s-border-white2 s-paddingL-10 s-paddingR-10'>0</td>
            </tr>

        </table>
    )
}

function PlayerPerformanceTable_Exprience() {
    return (
        <table className='xl-height90 xl-borderCollapse-collapse xl-bg-test3 m-height90 m-borderCollapse-collapse m-bg-test3 s-height90 s-borderCollapse-collapse s-bg-test3'>
            <tr>
                <td rowSpan='3' className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 m-border-white2 s-border-white2 s-paddingL-10 s-paddingR-10'>exprience</td>
                <td className='xl-border-white2 m-border-white2'>
                    <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-fontSize-18 s-paddingL-10 s-paddingR-10'>season</span>
                    <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-fontSize-18 s-paddingL-10 s-paddingR-10'>2021-22</span>
                </td>
            </tr>
            <tr>
                <td className='xl-border-white2 m-border-white2'>
                    <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-fontSize-18 s-paddingL-10 s-paddingR-10'>league</span>
                    <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-fontSize-18 s-paddingL-10 s-paddingR-10'>all league</span>
                </td>
            </tr>
            <tr>
                <td className='xl-border-white2 m-border-white2'>
                    <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-fontSize-18 s-paddingL-10 s-paddingR-10'>match</span>
                    <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-fontSize-18 s-paddingL-10 s-paddingR-10'>all match</span>
                </td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>all matches</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>10</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>start match</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>9</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>subsitution</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>1</td>
            </tr>
            <tr>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>minutes</td>
                <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>850</td>
            </tr>
        </table>
    )
}

function PlayerPerformanceTable_Physical({playerFeet, playerWeight, playerHeight}) {
    return (
        <table className='xl-height90 xl-borderCollapse-collapse xl-bg-test3 m-height90 m-borderCollapse-collapse m-bg-test3 s-height90 s-borderCollapse-collapse s-bg-test3'>
           <tr>
               <td rowSpan='3' className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>physical</td>
               <td className='xl-border-white2 m-border-white2 s-border-white2'>
                   <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-fontSize-18 s-paddingL-10 s-paddingR-10'>season</span>
                   <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-fontSize-18 s-paddingL-10 s-paddingR-10'>2021-22</span>
               </td>
           </tr>
           <tr>
               <td className='xl-border-white2 m-border-white2'>
                   <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-fontSize-18 s-paddingL-10 s-paddingR-10'>league</span>
                   <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-fontSize-18 s-paddingL-10 s-paddingR-10'>all league</span>
               </td>
           </tr>
           <tr>
               <td className='xl-border-white2 m-border-white2'>
                   <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-fontSize-18 s-paddingL-10 s-paddingR-10'>match</span>
                   <span className='xl-fontSize-18 xl-paddingL-10 xl-paddingR-10 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-fontSize-18 s-paddingL-10 s-paddingR-10'>all match</span>
               </td>
           </tr>
           <tr>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>xl-height</td>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>{playerHeight}</td>
           </tr>
           <tr>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>weight</td>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>{playerWeight}</td>
           </tr>
           <tr>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>foot</td>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>{playerFeet}</td>
           </tr>
           <tr>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>foul</td>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>14</td>
           </tr>
               <tr>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>running rate</td>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>12 km</td>
           </tr>
               <tr>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>speed rate</td>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>28.0km/h</td>
           </tr>
               <tr>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>high speed</td>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>32.3km/h</td>
           </tr>
               <tr>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>heading</td>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>65</td>
           </tr>
               <tr>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>yellow card</td>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>4</td>
           </tr>
               <tr>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>red card</td>
               <td className='xl-border-white2 xl-paddingL-10 xl-paddingR-10 m-border-white2 m-paddingL-10 m-paddingR-10 m-fontSize-12 s-border-white2 s-paddingL-10 s-paddingR-10'>1</td>
           </tr>
        </table>
    )
}

function PlayerHistoryTable() {
    return (
        <table className='xl-width-700 xl-height-200 xl-borderCollapse-collapse'>
            <tr>
                <td className='xl-border-white2'>season</td>
                <td className='xl-border-white2'>team</td>
                <td className='xl-border-white2'>wincent score</td>
                <td className='xl-border-white2'>wincent ranking</td>
                <td className='xl-border-white2'>wincent wage</td>
                <td className='xl-border-white2'>wincent value</td>
            </tr>
            <tr>
                <td className='xl-border-white2'>2020-1</td>
                <td className='xl-border-white2'>a team</td>
                <td className='xl-border-white2'>65.90</td>
                <td className='xl-border-white2'>234</td>
                <td className='xl-border-white2'>20.00m$</td>
                <td className='xl-border-white2'>40 m$</td>
            </tr>
            <tr>
                <td className='xl-border-white2'>2019-20</td>
                <td className='xl-border-white2'>b team</td>
                <td className='xl-border-white2'>65.09</td>
                <td className='xl-border-white2'>390</td>
                <td className='xl-border-white2'>10.50 m$</td>
                <td className='xl-border-white2'>30 m$</td>
            </tr>
            <tr>
                <td className='xl-border-white2'>2018-19</td>
                <td className='xl-border-white2'>c team</td>
                <td className='xl-border-white2'>65.90</td>
                <td className='xl-border-white2'>234</td>
                <td className='xl-border-white2'>20.00m$</td>
                <td className='xl-border-white2'>40 m$</td>
            </tr>
            <tr>
                <td className='xl-border-white2'>2017-18</td>
                <td className='xl-border-white2'>d team</td>
                <td className='xl-border-white2'>65.90</td>
                <td className='xl-border-white2'>234</td>
                <td className='xl-border-white2'>20.00m$</td>
                <td className='xl-border-white2'>90 m$</td>
            </tr>
            <tr>
                <td className='xl-border-white2'>2016-17</td>
                <td className='xl-border-white2'>e team</td>
                <td className='xl-border-white2'>66.00</td>
                <td className='xl-border-white2'>549</td>
                <td className='xl-border-white2'>9.00m$</td>
                <td className='xl-border-white2'>10 m$</td>
            </tr>
        </table>
    )
}

function PlayerAchievement(){
    return(
        <div className='xl-height100'></div>
    )
}

function PlayerNews(){
    return(
        <div className='xl-height100'></div>
    )
}

function PlayerStoreAndSupport(){
    return(
        <div className='xl-height100'></div>
    )
}

function PlayerContent(){
    return(
        <div className='xl-height100'></div>
    )
}

function PlayerMedia(){
    return(
        <div className='xl-height100'></div>
    )
}

function PlayerBiography(){
    return(
        <div className='xl-height100'></div>
    )
}


function PlayerProfile({playerName, playerBirthday, playerCitizenship, playerPhoto, playerNumber,playerTeamName,playerFeet,playerHeight,playerPosition,playerWeight,playerContractEnd,position}) {
  return (
      <>
        <div>
            <h3 className='xl-height-40 xl-marginT-10 xl-marginB-10 xl-display-iBlock xl-paddingL-40 xl-paddingR-40 xl-border-white2 xl-fontSize-24 xl-display-flex xl-alignItems-center xl-color-white xl-bg-test4 m-height-40 m-marginT-10 m-marginB-10 m-display-iBlock m-paddingL-40 m-paddingR-40 m-border-white2 m-fontSize-24 m-display-flex m-alignItems-center m-color-white m-bg-test4 s-height-40 s-marginT-10 s-marginB-10 s-display-iBlock s-paddingL-40 s-paddingR-40 s-border-white2 s-fontSize-24 s-display-flex s-alignItems-center s-color-white s-bg-test4'>player profile</h3>
        </div>
        <div className='xl-width100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-between m-width100 m-display-flex m-flexWrap-wrap m-justifyContent-between s-width100 s-display-flex s-flexWrap-wrap s-justifyContent-between'>
            <div className='xl-width64 xl-height-400 xl-bg-test4 xl-border-white2 m-width64 m-height-300 m-bg-test4 m-border-white2 s-width100 s-bg-test4 s-border-white2 s-height-350'>
                <PlayerInternationalCard playerName={playerName} playerCitizenship={playerCitizenship} playerPhoto={playerPhoto} playerNumber={playerNumber} playerBirthday={playerBirthday} playerTeamName={playerTeamName}/>
            </div>
          <div className='xl-width32 xl-height-400 xl-border-white2 xl-bg-test4 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width32 m-height-300 m-border-white2 m-display-flex m-alignItems-center m-justifyContent-center m-bg-test4 s-width100 s-border-white2 s-bg-test4 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center'>
              <PlayerPosition playerPosition={playerPosition} playerPhoto={playerPhoto} position={position}/>
          </div>
            <div className='xl-width100 xl-marginT-10 xl-display-flex xl-flexWrap-wrap xl-justifyContent-between m-width100 m-marginT-10 m-display-flex m-flexWrap-wrap m-justifyContent-between s-width100 s-marginT-10 s-display-flex s-flexWrap-wrap s-justifyContent-between'>
            <div className='xl-width64 xl-height-500 xl-border-white2 xl-bg-test4 m-width64 m-height-450 m-border-white2 m-bg-test4 s-width100 s-height-450 s-border-white2 s-bg-test4'>
                <PlayerInformationTable playerBirthday={playerBirthday} playerCitizenship={playerCitizenship} playerContractEnd={playerContractEnd}/>
            </div>
            <div className='xl-width32 xl-height-500 xl-display-flex xl-flexWrap-wrap xl-alignContent-between m-width32 m-height-450 m-display-flex m-flexWrap-wrap m-alignContent-between s-width100 s-display-flex s-flexWrap-wrap s-alignContent-between'>
                <div className='xl-width100 m-width100 s-width100'>
                    <h3 className='xl-height-40 xl-marginB-10 xl-display-iBlock xl-paddingL-40 xl-paddingR-40 xl-border-white2 xl-fontSize-22 lineHeight-40 xl-bg-test4 xl-color-white m-height-40 m-marginB-10 m-display-iBlock m-width100 m-text-center m-border-white2 m-fontSize-22 lineHeight-40 m-bg-test4 m-color-white s-height-40 s-marginT-10 s-marginB-10 s-display-iBlock s-paddingL-40 s-paddingR-40 s-border-white2 s-fontSize-22 lineHeight-40 s-bg-test4 s-color-white'>achievement</h3>
                    <div className='xl-width100 xl-height-450 xl-border-white2 xl-bg-test4 m-width100 m-height-400 m-border-white2 m-bg-test4 s-width100 s-height-220 s-border-white2 s-bg-test4'></div>
                </div>
            </div>
            </div>
        </div>
          <div>
              <h3 className='xl-height-40 xl-marginT-10 xl-marginB-10 xl-display-iBlock xl-paddingL-40 xl-paddingR-40 xl-border-white2 xl-fontSize-22 lineHeight-40 xl-bg-test4 xl-color-white m-height-40 m-marginT-10 m-marginB-10 m-display-iBlock m-paddingL-40 m-paddingR-40 m-border-white2 m-fontSize-22 lineHeight-40 m-bg-test4 m-color-white s-height-40 s-marginT-10 s-marginB-10 s-display-iBlock s-paddingL-40 s-paddingR-40 s-border-white2 s-fontSize-22 lineHeight-40 s-bg-test4 s-color-white'>performance</h3>
        </div>
          <div className='xl-width100 xl-display-flex xl-justifyContent-between m-width100 m-display-flex m-justifyContent-between s-width100 s-display-flex s-justifyContent-between s-flexWrap-wrap'>
              <div className='xl-width64 xl-height-800 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-border-white2 xl-bg-test4 m-width64 m-height-800 m-display-flex m-alignItems-center m-justifyContent-center m-border-white2 m-bg-test4 s-width100 s-height-800 s-display-flex s-alignItems-center s-justifyContent-center s-border-white2 s-bg-test4'>
                  <PlayerPerformanceTable_Technical/>
              </div>
              <div className='xl-width32 xl-height-800 xl-display-flex xl-flexWrap-wrap xl-alignContent-between m-width32 m-height-800 m-display-flex m-flexWrap-wrap m-alignContent-between s-width100 s-height-800 s-display-flex s-flexWrap-wrap s-alignContent-between'>
                  <div className='xl-width100 xl-height-300 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-border-white2 xl-bg-test4 m-width100 m-height-300 m-display-flex m-alignItems-center m-justifyContent-center m-border-white2 m-bg-test4 s-width100 s-height-300 s-display-flex s-alignItems-center s-justifyContent-center s-border-white2 s-bg-test4 s-marginT-15'>
                      <PlayerPerformanceTable_Exprience/>
                  </div>
                  <div className='xl-width100 xl-height-450 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-border-white2 xl-bg-test4 m-width100 m-height-450 m-display-flex m-alignItems-center m-justifyContent-center m-border-white2 m-bg-test4 s-width100 s-height-450 s-display-flex s-alignItems-center s-justifyContent-center s-border-white2 s-bg-test4'>
                      <PlayerPerformanceTable_Physical playerFeet={playerFeet} playerWeight={playerWeight} playerHeight={playerHeight}/>
                  </div>
              </div>
          </div>
      </>
  )
}
export default PlayerProfile;