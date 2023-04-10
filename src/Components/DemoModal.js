import React from 'react';

import { useEffect, useState } from 'react';



function DemoModal() {
    const [demoModal,setDemoModal]=useState('xl-width100 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-blur2 xl-border-black2 xl-position-absolute xl-top-0 xl-left-0 m-width100 m-height100 m-display-flex m-justifyContent-center m-alignItems-center m-bg-blur2 m-border-black2 m-position-absolute m-top-0 m-left-0 s-width100 s-height100 s-display-flex s-justifyContent-center s-alignItems-center s-bg-blur2 s-border-black2 s-position-absolute s-top-0 s-left-0')
    return(
        <div className={demoModal}>
            <div className='xl-width100 xl-height-200 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap xl-alignContent-evenly m-width100 m-height-100 m-display-flex m-justifyContent-center m-flexWrap-wrap m-alignContent-evenly s-width100 s-height-100 s-display-flex s-justifyContent-center s-flexWrap-wrap s-alignContent-evenly'>
                <div className='xl-width100 xl-height-100 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap xl-alignContent-evenly m-width100 m-height-100 m-display-flex m-justifyContent-center m-flexWrap-wrap m-alignContent-evenly s-width100 s-display-flex s-justifyContent-center'><p className='xl-paddingR-10 xl-paddingL-10 xl-color-white m-paddingR-10 m-paddingL-10 m-color-white s-paddingR-10 s-paddingL-10 s-color-white'>This is only a demo version and the data is not correct</p></div>
                <button className='xl-paddingL-10 xl-paddingR-10 xl-paddingT-5 xl-paddingB-5 xl-bg-test3 xl-color-black xl-borderR-10 xl-pointer m-paddingL-10 m-paddingR-10 m-paddingT-5 m-paddingB-5 m-bg-test3 m-color-black m-borderR-10 m-pointer s-paddingL-10 s-paddingR-10 s-paddingT-5 s-paddingB-5 s-bg-test3 s-color-black s-borderR-10' onClick={()=>{
                    setDemoModal('xl-display-none m-display-none s-display-none')
                }}>see demo</button>
            </div>
        </div>

    )
}

export default DemoModal;




