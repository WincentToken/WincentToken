import React  from 'react';
import {useEffect,useState} from 'react';


let hostUrl=process.env.REACT_APP_DATABASE_URL;
function CoachInternationalCard({coachName,coachPhoto,coachBirthday,coachCitizenship,coachTeamName}){
    return(
        <>
            <div className='xl-height-400 xl-display-flex xl-flexWrap-wrap xl-position-relative m-height100 m-display-flex m-flexWrap-wrap m-position-relative s-display-none'>
                <div className='xl-marginL-15 xl-width70 xl-height90 m-marginL-15 m-width70 m-height90'>
                    <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                        <span className='xl-fontSize-30 xl-color-white m-fontSize-20 m-color-white'>Name</span>
                        <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-20 m-color-silver m-marginL-15'>{coachName}</span>
                    </div>
                    <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                        <span className='xl-fontSize-30 xl-color-white m-fontSize-20 m-color-white'>Country</span>
                        <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-20 m-color-silver m-marginL-15'>{coachCitizenship}</span>
                    </div>
                    <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                        <span className='xl-fontSize-30 xl-color-white m-fontSize-20 m-color-white'>Team</span>
                        <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-20 m-color-silver m-marginL-15'>{coachTeamName}</span>
                    </div>
                    <div className='xl-width100 xl-display-flex xl-justifyContent-start xl-marginT-10 m-width100 m-display-flex m-justifyContent-start m-marginT-10'>
                        <span className='xl-fontSize-30 xl-color-white m-fontSize-20 m-color-white'>Birthday</span>
                        <span className='xl-fontSize-30 xl-color-silver xl-marginL-15 m-fontSize-20 m-color-silver m-marginL-15'>{coachBirthday}</span>
                    </div>
                </div>
                <div className='xl-width-120 xl-height-150 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-position-absolut xl-top-30 xl-right-30 xl-border-black2 xl-bg-test3 xl-overflow-hidden m-width-70 m-height-80 m-position-absolut m-top-30 m-right-30 m-border-black2 m-bg-test3 m-display-flex m-justifyContent-center m-alignItems-center m-overflow-hidden'>
                    <img alt='player personality photo' className='xl-width100 m-width100 s-width100' src={hostUrl+coachPhoto}/>
                </div>
            </div>

            <div className='xl-display-none m-display-none s-width100 s-height-160 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
                <div className='s-width-120 s-height-150 s-bg-test3 s-borderR-15 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden s-marginT-10'>
                    <img className='s-height90' src={hostUrl+coachPhoto}/>
                </div>
                <div className='s-width100 s-height-30 s-fontSize-18 s-color-white s-text-center s-marginT-10'>{coachName}</div>
                <div className='s-width100 s-height-250 s-display-flex s-justifyContent-center s-marginT-10'>
                    <div className='s-width-200'>
                        <div className='s-text-center s-marginT-10 s-color-white'>Citizenship: {coachCitizenship}</div>
                       <div className='s-text-center s-marginT-10 s-color-white'>Birthday: {coachBirthday}</div>
                        <div className='s-text-center s-marginT-10 s-color-white'>Team:{coachTeamName}</div>
                    </div>
                </div>

            </div>
    </>
    )
}

function CoachImage({coachPhoto}){
    return(
            <img className='xl-width100 xl-height100 m-width100 m-height100 s-width50' alt='Coach picture' src={hostUrl+coachPhoto}/>
    )
}

function CoachInformationTable({coachBirthday,coachCitizenship,coachContractEnd}){
    return(
        <>
            <table className='xl-marginL-15 xl-width70 xl-height70 xl-fontSize-24 m-width100 m-height70 s-width100 s-height70'>
                <tr>
                    <td className='xl-color-white m-color-white s-color-white'>Gender:</td>
                    <td className='xl-bold xl-color-white m-bold m-color-white s-bold s-color-white'>Male</td>
                </tr>
                <tr>
                    <td className='xl-color-white m-color-white s-color-white'>Birthday:</td>
                    <td className='xl-bold xl-color-white m-bold m-color-white s-bold s-color-white'>{coachBirthday}</td>
                </tr>
                <tr>
                    <td className='xl-color-white m-color-white s-color-white'>Country:</td>
                    <td className='xl-bold xl-color-white m-bold m-color-white s-bold s-color-white'>{coachCitizenship}</td>
                </tr>
                <tr>
                    <td className='xl-color-white m-color-white s-color-white'>End of contract:</td>
                    <td className='xl-bold xl-color-white m-bold m-color-white s-bold s-color-white'>{coachContractEnd}</td>
                </tr>
            </table>
            <div className='xl-display-none m-display-none s-width100 s-height-50 s-bg-test3 s-display-flex s-justifyContent-center s-alignItems-center s-marginT-15'>
                <div className='s-width100 s-display-flex s-justifyContent-center s-alignItems-center s-flexWrap-wrap'>
                    <div className='s-fontSize-12 s-marginR-15'>About this Coach :</div>
                    <button className='s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2'>news</button>
                    <button className='s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2 s-marginL-5 s-marginR-5'>media</button>
                    <button className='s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2'>biography</button>
                </div>
            </div>
            <div className='xl-width100 xl-height-60 xl-bg-test3 xl-marginT-30 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-flexWrap-wrap m-width100 m-height-40 m-bg-test3 m-display-flex m-justifyContent-center m-alignItems-center m-flexWrap-wrap s-display-none'>
                <div className=' xl-marginR-15 m-fontSize-12 m-marginR-15 s-fontSize-12 s-marginR-15'>About this Coach</div>
                <button className='xl-color-white xl-bg-test4 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-border-black2 m-color-white m-bg-test4 m-paddingB-5 m-paddingT-5 m-paddingL-10 m-paddingR-10 m-borderR-10 m-fontSize-10 m-border-black2'>News</button>
                <button className='xl-color-white xl-bg-test4 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-border-black2 xl-marginL-5 xl-marginR-5 m-color-white m-bg-test4 m-paddingB-5 m-paddingT-5 m-paddingL-10 m-paddingR-10 m-borderR-10 m-fontSize-10 m-border-black2 m-marginL-5 m-marginR-5'>Media</button>
                <button className='xl-color-white xl-bg-test4 xl-paddingB-5 xl-paddingT-5 xl-paddingL-10 xl-paddingR-10 xl-borderR-10 xl-border-black2 m-color-white m-bg-test4 m-paddingB-5 m-paddingT-5 m-paddingL-10 m-paddingR-10 m-borderR-10 m-fontSize-10 m-border-black2 s-color-white s-bg-test4 s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-borderR-10 s-fontSize-10 s-border-black2'>Biography</button>
            </div>
        </>
    )
}

function CoachProfile({coachName,coachBirthday,coachCitizenship,coachPhoto,coachContractEnd,coachTeamName}) {
  return (
      <>
        <div className='xl-width100 m-width100 s-width100'>
            <h3 className='xl-height-40 xl-marginT-10 xl-marginB-10 xl-display-iBlock xl-paddingL-40 xl-paddingR-40 xl-border-white2 xl-fontSize-22 xl-lineHeight-40 xl-bg-test4 xl-color-white m-height-40 m-marginT-10 m-marginB-10 m-display-iBlock m-paddingL-40 m-paddingR-40 m-border-white2 m-fontSize-22 m-lineHeight-40 m-bg-test4 m-color-white s-height-40 s-marginT-10 s-marginB-10 s-display-iBlock s-paddingL-40 s-paddingR-40 s-border-white2 s-fontSize-22 s-lineHeight-40 s-bg-test4 s-color-white'>Coach profile</h3>
        </div>
          <div className='xl-width100 xl-display-flex xl-flexWrap-wrap xl-justifyContent-between m-width100 m-display-flex m-flexWrap-wrap m-justifyContent-between s-width100 s-display-flex s-flexWrap-wrap s-justifyContent-between'>
              <div className='xl-width100 xl-height-300 xl-bg-test4 xl-border-white2 m-width100 m-height-200 m-bg-test4 m-border-white2 s-width100 s-bg-test4 s-border-white2 s-height-350'>
                <CoachInternationalCard coachName={coachName} coachPhoto={coachPhoto} coachBirthday={coachBirthday} coachCitizenship={coachCitizenship} coachTeamName={coachTeamName}/>
            </div>

        </div>
          <div className='xl-width100 xl-marginT-10 xl-height-400 xl-display-flex xl-justifyContent-between m-width100 m-marginT-10 m-height-350 m-display-flex m-justifyContent-between s-width100 s-marginT-10 s-display-flex s-justifyContent-between s-flexWrap-wrap'>
              <div className='xl-width100 xl-height100 xl-border-white2 xl-bg-test4 m-width100 m-height100 m-border-white2 m-bg-test4 s-width100 s-height-300 s-border-white2 s-bg-test4'>
                  <CoachInformationTable coachBirthday={coachBirthday} coachCitizenship={coachCitizenship} coachContractEnd={coachContractEnd}/>
              </div>
          </div>
      </>
  )
    }
export default CoachProfile;