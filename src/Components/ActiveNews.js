import React from 'react';
import {FirstFilter} from './FirstFilter';
import App from './App';
function ActiveNews() {
    return (
      <>
          <main>
              <div className='xl-width100 xl-border-white2 xl-position-relative xl-bg-test4 m-width95 m-border-white2 m-position-relative m-bg-test4 s-width100 s-border-white2 s-position-relative s-bg-test4'>
               <div className='xl-width-70 xl-height-70 xl-marginT-10 xl-marginL-10 xl-borderR50 xl-border-black2 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test3 xl-pointer m-width-70 m-height-70 m-marginT-10 m-marginL-10 m-borderR50 m-border-black2 m-display-flex m-justifyContent-center m-alignItems-center m-bg-test3 m-pointer s-width-70 s-height-70 s-marginT-10 s-marginL-10 s-borderR50 s-border-black2 s-display-flex s-justifyContent-center s-alignItems-center s-bg-test3 s-pointer'>
                   <p className='xl-text-center xl-color-white m-text-center m-color-white s-text-center s-color-white'>back</p>
               </div>
                <div className='xl-width100 xl-marginT-15 xl-display-flex xl-justifyContent-evenly m-width100 m-marginT-15 m-display-flex m-justifyContent-evenly s-width100 s-marginT-15 s-display-flex s-justifyContent-evenly'>
                    <div className='xl-width64 xl-display-flex xl-flexWrap-wrap xl-justifyContent-end m-width64 m-display-flex m-flexWrap-wrap m-justifyContent-end s-width64 s-display-flex s-flexWrap-wrap s-justifyContent-end'>
                        <h2 className='xl-width100 xl-height-50 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-border-white2 xl-bg-test3 xl-color-white m-width100 m-height-50 m-display-flex m-alignItems-center m-justifyContent-center m-border-white2 m-bg-test3 m-color-white s-width100 s-height-50 s-display-flex s-alignItems-center s-justifyContent-center s-border-white2 s-bg-test3 s-color-white'>header</h2>
                        <div className='xl-width100 xl-height-400 xl-marginT-15 xl-marginB-15 xl-border-white2 xl-bg-test3 m-width100 m-height-400 m-marginT-15 m-marginB-15 m-border-white2 m-bg-test3 s-width100 s-height-400 s-marginT-15 s-marginB-15 s-border-white2 s-bg-test3'></div>
                        <div className='xl-width-200 xl-height-110 xl-marginB-15 xl-border-white2 xl-bg-test3 m-width-200 m-height-110 m-marginB-15 m-border-white2 m-bg-test3 s-width-200 s-height-110 s-marginB-15 s-border-white2 s-bg-test3'></div>
                    </div>
                    <div className='xl-width32 xl-height-600 xl-border-white2 xl-bg-test3 xl-marginB-15 m-width32 m-height-600 m-border-white2 m-bg-test3 m-marginB-15 s-width32 s-height-600 s-border-white2 s-bg-test3 s-marginB-15'></div>
                </div>
              </div>
          </main>
      </>
  );
}

export default ActiveNews;
