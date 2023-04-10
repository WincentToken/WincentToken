import React, {useState} from 'react';
import DemoModal from "../DemoModal";
let counter1=0;
let counter2=0;
let hostUrl=process.env.REACT_APP_DATABASE_URL;
function TransferList(){
    const transferPossibility=[80,75,60,90];
    const[transferCounter1,setTransferCounter1]=useState(counter1);
    const[transferCounter2,setTransferCounter2]=useState(counter2);
    return(
        <>
            <div className='xl-width100 xl-height100 xl-display-flex xl-flexWrap-wrap xl-alignContent-evenly xl-border-white2 xl-position-relative xl-bg-test4 xl-position-relative m-width100 m-height100 m-display-flex m-flexWrap-wrap m-alignContent-evenly m-border-white2 m-position-relative m-bg-test4 m-position-relative s-display-none'>
                <div className="xl-width100 xl-height30 xl-display-flex xl-alignItems-end xl-justifyContent-start m-width100 m-height30 m-display-flex m-alignItems-end m-justifyContent-start">
                    <div className='xl-width49 xl-height-70 xl-marginL-10 xl-marginR-10 xl-border-white2 xl-bg-test4 xl-overflow-hidden m-width49 m-height-70 m-marginL-10 m-marginR-10 m-border-white2 m-bg-test4 m-overflow-hidden'>
                        <div className='xl-width100 xl-height100 xl-display-flex xl-justifyContent-between xl-bg-test4 m-width100 m-height100 m-display-flex m-justifyContent-between m-bg-test4'>
                      <div className='xl-width15 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width20 m-height100 m-display-flex m-justifyContent-center m-alignItems-center'>
                          <div className='xl-width-50 xl-height-50 xl-border-black2 xl-borderR50 xl-overflow-hidden xl-display-flex xl-justifyContent-center m-width-40 m-height-40 m-border-black2 m-borderR50 m-overflow-hidden m-display-flex m-justifyContent-center'>
                              <img className='xl-width90 m-width90' src={hostUrl+'/LogoDB/TeamLogo/19.png'}/>
                          </div>
                      </div>
                      <div className='xl-width85 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width80 m-height100 m-display-flex m-alignItems-center m-justifyContent-start'>
                        <div className='xl-width40 xl-color-white xl-fontSize-18 m-width40 m-color-white m-fontSize-12'>Team Name</div>
                        <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 xl-bg-test3 m-width-25 m-height-25 m-border-black2 m-borderR50 m-bg-test3 s-width-25 s-height-25 s-border-black2 s-borderR50 s-bg-test3'></div>
                        <div className='xl-width20 xl-fontSize-12 xl-marginL-10 xl-color-white m-width20 m-fontSize-10 m-marginL-10 m-color-white s-width20 s-fontSize-10 s-marginL-10 s-color-white'>league name</div>
                        <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 xl-bg-test3 m-display-none s-display-none'></div>
                        <div className='xl-width20 xl-fontSize-12 xl-marginL-10 xl-color-white m-display-none'>Team Area</div>
                      </div>
                      </div>
                    </div>
                    <div className='xl-width20 xl-height50 xl-marginL-10 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width20 m-height50 m-marginL-10 m-display-flex m-alignItems-center m-justifyContent-center s-width20 s-height50 s-marginL-10 s-display-flex s-alignItems-center s-justifyContent-center'>
                        <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate1 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate1'>
                            <i class="bi bi-caret-right-fill xl-fontSize-45 xl-color-red m-fontSize-18 m-color-red"></i>
                        </div>
                        <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate2 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate2'>
                            <i class="bi bi-caret-right-fill xl-fontSize-45 xl-color-red m-fontSize-18 m-color-red"></i>
                        </div>
                        <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate3 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate3'>
                            <i class="bi bi-caret-right-fill xl-fontSize-45 xl-color-red m-fontSize-18 m-color-red"></i>
                        </div>
                        <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate4 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate4'>
                            <i class="bi bi-caret-right-fill xl-fontSize-45 xl-color-red m-fontSize-18 m-color-red"></i>
                        </div>
                      </div>
                </div>
                <div className="xl-width100 xl-height30 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width100 m-height30 m-display-flex m-alignItems-center m-justifyContent-center">
                    <div className='xl-width49 xl-height-70 xl-border-white2 xl-overflow-hidden m-width49 m-height-70 m-border-white2 m-overflow-hidden'>
                        <div className='xl-width100 xl-height-70 xl-display-flex xl-justifyContent-between xl-bg-test4 m-width100 m-height-70 m-display-flex m-justifyContent-between m-bg-test4'>
                      <div className='xl-width15 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width15 m-height100 m-display-flex m-justifyContent-center m-alignItems-center'>
                        <div className='xl-width-50 xl-height-50 xl-border-black2 xl-borderR50 xl-overflow-hidden xl-display-flex xl-justifyContent-center m-width-40 m-height-40 m-border-black2 m-borderR50 m-overflow-hidden m-display-flex m-justifyContent-center'>
                            <img className='xl-width90 m-width90' src={hostUrl+'/LogoDB/PlayerLogo/146953.png'}/>
                        </div>
                      </div>
                      <div className='xl-width85 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width85 m-height100 m-display-flex m-alignItems-center m-justifyContent-start'>
                        <div className='xl-width40 xl-color-white xl-fontSize-18 m-width40 m-color-white m-fontSize-12'>Player Name</div>
                        <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 xl-bg-test3 m-width-25 m-height-25 m-border-black2 m-borderR50 m-bg-test3'></div>
                        <div className='xl-width20 xl-fontSize-12 xl-marginL-10 xl-color-white m-width20 m-fontSize-12 m-marginL-10 m-color-white'>country</div>
                      </div>
                      </div>

                    </div>
                </div>
                <div className="xl-width100 xl-height30 xl-display-flex xl-alignItems-start xl-justifyContent-end m-width100 m-height30 m-display-flex m-alignItems-start m-justifyContent-end">
                    <div className='xl-width20 xl-height50 xl-marginR-10 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width20 m-height50 m-marginR-10 m-display-flex m-alignItems-center m-justifyContent-center'>
                        <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate1 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate1'>
                            <i class="bi bi-caret-right-fill xl-fontSize-45 xl-color-green m-fontSize-18 m-color-green"></i>
                        </div>
                        <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate2 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate2'>
                            <i class="bi bi-caret-right-fill xl-fontSize-45 xl-color-green m-fontSize-18 m-color-green"></i>
                        </div>
                        <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate3 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate3'>
                            <i class="bi bi-caret-right-fill xl-fontSize-45 xl-color-green m-fontSize-18 m-color-green"></i>
                        </div>
                        <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate4 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate4'>
                            <i class="bi bi-caret-right-fill xl-fontSize-45 xl-color-green m-fontSize-18 m-color-green"></i>
                        </div>
                      </div>
                    <div className='xl-width49 xl-height-70 xl-marginR-10 xl-marginL-10 xl-border-white2 xl-bg-test3 xl-overflow-hidden m-width49 m-height-70 m-marginR-10 m-marginL-10 m-border-white2 m-bg-test3 m-overflow-hidden'>
                        <div className='xl-width100 xl-height-70 xl-display-flex xl-justifyContent-between xl-bg-test4 m-width100 m-height-70 m-display-flex m-justifyContent-between m-bg-test4'>
                      <div className='xl-width15 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width20 m-height100 m-display-flex m-justifyContent-center m-alignItems-center'>
                          <div className='xl-width-50 xl-height-50 xl-border-black2 xl-borderR50 xl-overflow-hidden xl-display-flex xl-justifyContent-center m-width-40 m-height-40 m-border-black2 m-borderR50 m-overflow-hidden m-display-flex m-justifyContent-center'>
                              <img className='xl-width90 m-width90' src={hostUrl+'/LogoDB/TeamLogo/24.png'}/>
                          </div>
                      </div>
                      <div className='xl-width85 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width80 m-height100 m-display-flex m-alignItems-center m-justifyContent-start'>
                        <div className='xl-width40 xl-color-white xl-fontSize-18 m-width40 m-color-white m-fontSize-12'>Team Name</div>
                        <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 xl-bg-test3 m-width-25 m-height-25 m-border-black2 m-borderR50'></div>
                        <div className='xl-width20 xl-fontSize-12 xl-marginL-10 xl-color-white m-width20 m-fontSize-10 m-marginL-10 m-color-white'>league name</div>
                        <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 xl-bg-test3 m-display-none'></div>
                        <div className='xl-width20 xl-fontSize-12 xl-marginL-10 xl-color-white m-display-none'>Team Area</div>
                      </div>
                      </div>
                    </div>
                </div>
                <div className='xl-width-180 xl-height-180 xl-borderR-10 xl-border-black2 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignItems-between xl-position-absolute xl-bottom-10 xl-left-10 xl-bg-test3 m-width-100 m-height-100 m-borderR-10 m-border-black2 m-display-flex m-flexWrap-wrap m-justifyContent-center m-alignItems-between m-position-absolute m-bottom-10 m-left-10 m-bg-test3'>
                    <div className='xl-width100 xl-height50 xl-display-flex xl-flexWrap-wrap xl-alignContent-center xl-justifyContent-center m-width100 m-height50 m-display-flex m-flexWrap-wrap m-alignContent-center m-justifyContent-center'>
                        <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-fontSize-20 xl-bold m-width100 m-display-flex m-justifyContent-center m-fontSize-14 m-bold s-width100'>value:</div>
                        <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-fontSize-20 xl-bold m-width100 m-display-flex m-justifyContent-center m-fontSize-14 m-bold'>30.000.000$</div>
                    </div>
                    <div className='xl-width100 xl-height50 xl-display-flex xl-flexWrap-wrap xl-alignContent-center xl-justifyContent-center m-width100 m-height50 m-display-flex m-flexWrap-wrap m-alignContent-center m-justifyContent-center'>
                        <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-fontSize-20 xl-bold m-width100 m-display-flex m-justifyContent-center m-fontSize-14 m-bold s-width100'>Wage:</div>
                        <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-fontSize-20 xl-bold m-width100 m-display-flex m-justifyContent-center m-fontSize-14 m-bold'>5.000.000$</div>
                    </div>
                </div>
                <div className='xl-width-180 xl-height-180 xl-borderR50 xl-bg-test3 xl-border-black2 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-position-absolute xl-top-10 xl-right-10 xl-bg-test3 m-width-100 m-height-100 m-borderR50 m-bg-test3 m-border-black2 m-display-flex m-alignItems-center m-justifyContent-center m-position-absolute m-top-10 m-right-10 m-bg-test3'>
                    <div className='xl-width-150 xl-height-150 xl-borderR50 xl-bg-test3 xl-border-black2 xl-display-flex xl-flexWrap-wrap xl-alignContent-center xl-justifyContent-center xl-overflow-hidden m-width-80 m-height-80 m-borderR50 m-bg-test3 m-border-black2 m-display-flex m-flexWrap-wrap m-alignContent-center m-justifyContent-center m-overflow-hidden'>
                        <div className='xl-width100 xl-text-center xl-fontSize-20 xl-bold m-width100 m-text-center m-fontSize-12 m-bold'>possibility:</div>
                        <div className='m-width100 m-text-center m-fontSize-14 m-bold'>{transferPossibility[transferCounter1]}%</div>
                    </div>
                </div>
                <div className='xl-width5 xl-height100 xl-position-absolute xl-display-flex xl-justifyContent-center xl-alignItems-center xl-left-0 m-width5 m-height100 m-position-absolute m-display-flex m-justifyContent-center m-alignItems-center m-left-0 s-width5 s-height100 s-position-absolute s-display-flex s-justifyContent-center s-alignItems-center s-left-0'>
                <button className='xl-display-iBlock xl-width-40 xl-height-40 xl-borderR50 xl-border-white2 xl-pointer xl-fontSize-20 m-display-iBlock m-width-30 m-height-30 m-borderR50 m-border-white2 m-pointer' onClick={()=>{
                    counter1--;
                    if(counter1==-1){
                        counter1=3;
                    }
                    setTransferCounter1(counter1);
                }}>&larr;</button>
            </div>
            <div className='xl-width5 xl-height100 xl-position-absolute xl-display-flex xl-justifyContent-center xl-alignItems-center xl-right-0 m-width5 m-height100 m-position-absolute m-display-flex m-justifyContent-center m-alignItems-center m-right-0'>
                <button className='xl-display-iBlock xl-width-40 xl-height-40 xl-borderR50 xl-border-white2 xl-pointer xl-fontSize-20 m-display-iBlock m-width-30 m-height-30 m-borderR50 m-border-white2 m-pointer' onClick={()=>{
                    counter1++;
                    if(counter1==4){
                        counter1=0;
                    }
                    setTransferCounter1(counter1);
                }}>&rarr;</button>
            </div>
            </div>

            <div className='xl-display-none m-display-none s-width100 s-height100 s-border-white2 s-bg-test4'>
                <div className='s-width100 s-height-30 s-display-flex s-justifyContent-center s-alignItems-center s-color-white s-marginT-15 s-fontSize-18'>Possibility:{transferPossibility[transferCounter2]}%</div>
                <div className='s-width100 s-height-80 s-marginT-30 s-display-flex s-justifyContent-center s-alignContent-end s-flexWrap-wrap'>
                    <div className='s-width-50 s-height-50 s-border-white2 s-borderR50 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden'>
                        <img className='s-width100 s-height100' src={hostUrl+'/LogoDB/PlayerLogo/146953.png'}/>
                    </div>
                    <div className='s-width100 s-display-flex s-justifyContent-center s-color-white s-fontSize-12'>Aaron Ramsdale</div>
                </div>
                <div className='s-width100 s-height-100 s-display-flex s-justifyContent-evenly s-alignItems-center'>
                    <div className='s-width-120 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                        <div className='s-width-50 s-height-50 s-border-white2 s-borderR50 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden'>
                            <img className='s-width100 s-height100' src={hostUrl+'/LogoDB/TeamLogo/19.png'}/>
                        </div>
                        <div className='s-width100 s-display-flex s-justifyContent-center s-color-white s-fontSize-12 s-marginT-5'>arsenal</div>
                    </div>
                    <div className='s-width-120 s-display-flex s-justifyContent-center s-flexWrap-wrap '>
                        <div className='s-width100 s-height-50 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden'>
                            <div
                                className=' s-width20 s-height80 s-display-flex s-alignItems-center s-arrowAnimate1'>
                                <i className="bi bi-caret-right-fill s-fontSize-26 s-color-green"></i>
                            </div>
                            <div
                                className=' s-width20 s-height80 s-display-flex s-alignItems-center s-arrowAnimate2'>
                                <i className="bi bi-caret-right-fill s-fontSize-26 s-color-green"></i>
                            </div>
                            <div
                                className=' s-width20 s-height80 s-display-flex s-alignItems-center s-arrowAnimate3'>
                                <i className="bi bi-caret-right-fill s-fontSize-26 s-color-green"></i>
                            </div>
                            <div
                                className=' s-width20 s-height80 s-display-flex s-alignItems-center s-arrowAnimate4'>
                                <i className="bi bi-caret-right-fill s-fontSize-26 s-color-green"></i>
                            </div>
                        </div>
                    </div>
                    <div className='s-width-120 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                        <div className='s-width-50 s-height-50 s-border-white2 s-borderR50 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden'>
                            <img className='s-width100 s-height100' src={hostUrl+'/LogoDB/TeamLogo/24.png'}/>
                        </div>
                        <div className='s-width100 s-display-flex s-justifyContent-center s-color-white s-fontSize-12'>chelsea</div>
                    </div>
                </div>
                <div className='s-width100 s-display-flex s-justifyContent-center s-marginT-15 s-marginB-10'>
                    <div className='s-width-100 s-height-120 s-display-flex s-flexWrap-wrap s-justifyContent-center s-alignItems-between'>
                        <div className='s-width100 s-height50 s-display-flex s-flexWrap-wrap s-alignContent-center s-justifyContent-center'>
                            <div className='s-width100 s-display-flex s-justifyContent-center  s-bold s-color-white'>value:</div>
                            <div className='s-width100 s-display-flex s-justifyContent-center  s-bold s-color-white'>30.000.000$</div>
                        </div>
                        <div className=' s-width100 s-height50 s-display-flex s-flexWrap-wrap s-alignContent-center s-justifyContent-center'>
                            <div className='s-width100 s-display-flex s-justifyContent-center  s-bold s-color-white s-width100'>Wage:</div>
                            <div className='s-width100 s-display-flex s-justifyContent-center  s-bold s-color-white'>5.000.000$</div>
                        </div>
                    </div>
                </div>
                <div className='s-width100 s-height-40 s-marginT-10 s-display-flex s-justifyContent-center s-marginT-30'>
                    <div className='s-width-100 s-height-40 s-display-flex s-justifyContent-between s-alignItems-center'>
                        <button className='s-width-40 s-height-40 s-bg-test3 s-borderR-10 s-pointer s-color-black s-fontSize-22' onClick={()=>{
                            counter2--;
                            if(counter2==-1){
                                counter2=3;
                            }
                            setTransferCounter2(counter2);
                        }}>&larr;</button>
                        <button className='s-width-40 s-height-40 s-bg-test3 s-borderR-10 s-pointer s-color-black s-fontSize-22' onClick={()=>{
                            counter2++;
                            if(counter2==4){
                                counter2=0;
                            }
                            setTransferCounter2(counter2);
                        }}>&rarr;</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TransferList;



