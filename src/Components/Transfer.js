
import React from 'react';
import TransferList from './Lists/TransferList';

import { useEffect, useState } from 'react';
import axios from "axios";
let hostUrl=process.env.REACT_APP_DATABASE_URL;
let transfers1=[1,2,3];
let transfers2=[1,2,3,4];
let transfers3=[1,2,3,4,5];
function TransferContents({transferNumber,transferData}){

    return(

        <>
            {transferData.length > 0 && (
                transferData.map((transfer,index)=>{
                return <div key={index} className='xl-width100 xl-height-400 xl-marginT-15 xl-marginB-15 xl-display-flex xl-justifyContent-start xl-flexWrap-wrap m-width95 m-height-250 m-marginT-15 m-marginB-15 m-display-flex m-justifyContent-start m-flexWrap-wrap s-display-none'>
                <div className='xl-width100 xl-height100 xl-display-flex xl-flexWrap-wrap xl-alignContent-evenly xl-border-white2 xl-position-relative xl-bg-test4 xl-position-relative m-width100 m-height100 m-display-flex m-flexWrap-wrap m-alignContent-evenly m-border-white2 m-position-relative m-bg-test4 m-position-relative'>
                <div className="xl-width100 xl-height30 xl-display-flex xl-alignItems-end xl-justifyContent-start m-width100 m-height30 m-display-flex m-alignItems-end m-justifyContent-start s-width100 s-height30 s-display-flex s-alignItems-end s-justifyContent-start">
                <div className='xl-width49 xl-height-70 xl-marginL-10 xl-marginR-10 xl-border-white2 xl-bg-test4 xl-overflow-hidden m-width49 m-height-70 m-marginL-10 m-marginR-10 m-border-white2 m-bg-test4 m-overflow-hidden s-width49 s-height-70 s-marginL-10 s-marginR-10 s-border-white2 s-bg-test4 s-overflow-hidden'>
                <div className='xl-width100 xl-height100 xl-display-flex xl-justifyContent-between xl-bg-test4 m-width100 m-height100 m-display-flex m-justifyContent-between m-bg-test4 s-width100 s-height100 s-display-flex s-justifyContent-between s-bg-test4'>
                <div className='xl-width15 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width20 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width20 s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                <div className='xl-width-50 xl-height-50 xl-border-black2 xl-borderR50 xl-bg-test3 m-width-40 m-height-40 m-border-black2 m-borderR50 m-bg-test3 s-width-40 s-height-40 s-border-black2 s-borderR50 s-bg-test3'></div>
                </div>
                <div className='xl-width85 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width80 m-height100 m-display-flex m-alignItems-center m-justifyContent-start s-width80 s-height100 s-display-flex s-alignItems-center s-justifyContent-start'>
                <div className='xl-width40 xl-color-white xl-fontSize-18 m-width40 m-color-white m-fontSize-12 s-width40 s-color-white s-fontSize-12'>{transfer.fromTeam}</div>
                <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 xl-bg-test3 m-width-25 m-height-25 m-border-black2 m-borderR50 m-bg-test3 s-width-25 s-height-25 s-border-black2 s-borderR50 s-bg-test3'></div>
                <div className='xl-width20 xl-fontSize-12 xl-marginL-10 xl-color-white m-width20 m-fontSize-10 m-marginL-10 m-color-white s-width20 s-fontSize-10 s-marginL-10 s-color-white'>league name</div>
                <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 xl-bg-test3 m-display-none s-display-none'></div>
                <div className='xl-width20 xl-fontSize-12 xl-marginL-10 xl-color-white m-display-none s-display-none'>Team Area</div>
                </div>
                </div>
                </div>
                <div className='xl-width20 xl-height50 xl-marginL-10 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width20 m-height50 m-marginL-10 m-display-flex m-alignItems-center m-justifyContent-center s-width20 s-height50 s-marginL-10 s-display-flex s-alignItems-center s-justifyContent-center'>
                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate1 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate1 s-width20 s-height80 s-display-flex s-alignItems-center s-arrowAnimate1'>
                <i className="bi bi-caret-right-fill xl-fontSize-45 xl-color-red m-fontSize-18 m-color-red s-color-red"></i>
                </div>
                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate2 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate2 s-width20 s-height80 s-display-flex s-alignItems-center s-arrowAnimate2'>
                <i className="bi bi-caret-right-fill xl-fontSize-45 xl-color-red m-fontSize-18 m-color-red s-color-red"></i>
                </div>
                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate3 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate3 s-width20 s-height80 s-display-flex s-alignItems-center s-arrowAnimate3'>
                <i className="bi bi-caret-right-fill xl-fontSize-45 xl-color-red m-fontSize-18 m-color-red s-color-red"></i>
                </div>
                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate4 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate4 s-width20 s-height80 s-display-flex s-alignItems-center s-arrowAnimate4'>
                <i className="bi bi-caret-right-fill xl-fontSize-45 xl-color-red m-fontSize-18 m-color-red s-color-red"></i>
                </div>
                </div>
                </div>
                <div className="xl-width100 xl-height30 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width100 m-height30 m-display-flex m-alignItems-center m-justifyContent-center s-width100 s-height30 s-display-flex s-alignItems-center s-justifyContent-center">
                <div className='xl-width49 xl-height-70 xl-border-white2 xl-overflow-hidden m-width49 m-height-70 m-border-white2 m-overflow-hidden s-width49 s-height-70 s-border-white2 s-overflow-hidden'>

                <div className='xl-width100 xl-height-70 xl-display-flex xl-justifyContent-between xl-bg-test4 m-width100 m-height-70 m-display-flex m-justifyContent-between m-bg-test4 s-height-70 s-display-flex s-justifyContent-between s-bg-test4'>
                <div className='xl-width15 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width15 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width15 s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                <div className='xl-width-50 xl-height-50 xl-border-black2 xl-borderR50 xl-bg-test3 m-width-40 m-height-40 m-border-black2 m-borderR50 m-bg-test3 s-width-40 s-height-40 s-border-black2 s-borderR50 s-bg-test3'></div>
                </div>
                <div className='xl-width85 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width85 m-height100 m-display-flex m-alignItems-center m-justifyContent-start s-width85 s-height100 s-display-flex s-alignItems-center s-justifyContent-start'>
                <div className='xl-width40 xl-color-white xl-fontSize-18 m-width40 m-color-white m-fontSize-12 s-width40 s-color-white s-fontSize-12'>Player Name</div>
                <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 xl-bg-test3 m-display-none s-display-none'></div>
                <div className='xl-width20 xl-fontSize-12 xl-marginL-10 xl-color-white m-display-none s-display-none'>Team name</div>
                <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 xl-bg-test3 m-width-25 m-height-25 m-border-black2 m-borderR50 m-bg-test3 s-width-25 s-height-25 s-border-black2 s-borderR50 s-bg-test3'></div>
                <div className='xl-width20 xl-fontSize-12 xl-marginL-10 xl-color-white m-width20 m-fontSize-12 m-marginL-10 m-color-white s-width20 s-fontSize-12 s-marginL-10 s-color-white'>country</div>
                </div>
                </div>

                </div>
                </div>
                <div className="xl-width100 xl-height30 xl-display-flex xl-alignItems-start xl-justifyContent-end m-width100 m-height30 m-display-flex m-alignItems-start m-justifyContent-end s-width100 s-height30 s-display-flex s-alignItems-start s-justifyContent-end">
                <div className='xl-width20 xl-height50 xl-marginR-10 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width20 m-height50 m-marginR-10 m-display-flex m-alignItems-center m-justifyContent-center s-width20 s-height50 s-marginR-10 s-display-flex s-alignItems-center s-justifyContent-center'>
                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate1 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate1 s-width20 s-height80 s-display-flex s-alignItems-center s-arrowAnimate1'>
                <i className="bi bi-caret-right-fill xl-fontSize-45 xl-color-green m-fontSize-18 m-color-green s-color-green"></i>
                </div>
                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate2 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate2 s-width20 s-height80 s-display-flex s-alignItems-center s-arrowAnimate2'>
                <i className="bi bi-caret-right-fill xl-fontSize-45 xl-color-green m-fontSize-18 m-color-green s-color-green"></i>
                </div>
                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate3 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate3 s-width20 s-height80 s-display-flex s-alignItems-center s-arrowAnimate3'>
                <i className="bi bi-caret-right-fill xl-fontSize-45 xl-color-green m-fontSize-18 m-color-green s-color-green"></i>
                </div>
                <div className='xl-width20 xl-height80 xl-display-flex xl-alignItems-center xl-arrowAnimate4 m-width20 m-height80 m-display-flex m-alignItems-center m-arrowAnimate4 s-width20 s-height80 s-display-flex s-alignItems-center s-arrowAnimate4'>
                <i className="bi bi-caret-right-fill xl-fontSize-45 xl-color-green m-fontSize-18 m-color-green s-color-green"></i>
                </div>
                </div>
                <div className='xl-width49 xl-height-70 xl-marginR-10 xl-marginL-10 xl-border-white2 xl-bg-test3 xl-overflow-hidden m-width49 m-height-70 m-marginR-10 m-marginL-10 m-border-white2 m-bg-test3 m-overflow-hidden s-width49 s-height-70 s-marginR-10 s-marginL-10 s-border-white2 s-bg-test3 s-overflow-hidden'>
                <div className='xl-width100 xl-height-70 xl-display-flex xl-justifyContent-between xl-bg-test4 m-width100 m-height-70 m-display-flex m-justifyContent-between m-bg-test4 s-width100 s-height-70 s-display-flex s-justifyContent-between s-bg-test4'>
                <div className='xl-width15 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width20 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width20 s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                <div className='xl-width-50 xl-height-50 xl-border-black2 xl-borderR50 xl-bg-test3 m-width-40 m-height-40 m-border-black2 m-borderR50 m-bg-test3 s-width-40 s-height-40 s-border-black2 s-borderR50 s-bg-test3'></div>
                </div>
                <div className='xl-width85 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width80 m-height100 m-display-flex m-alignItems-center m-justifyContent-start s-width80 s-height100 s-display-flex s-alignItems-center s-justifyContent-start'>
                <div className='xl-width40 xl-color-white xl-fontSize-18 m-width40 m-color-white m-fontSize-12 s-width40 s-color-white s-fontSize-12'>{transfer.toTeam}</div>
                <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 xl-bg-test3 m-width-25 m-height-25 m-border-black2 m-borderR50 s-width-25 s-height-25 s-border-black2 s-borderR50 s-bg-test3'></div>
                <div className='xl-width20 xl-fontSize-12 xl-marginL-10 xl-color-white m-width20 m-fontSize-10 m-marginL-10 m-color-white s-width20 s-fontSize-10 s-marginL-10 s-color-white'>league name</div>
                <div className='xl-width-25 xl-height-25 xl-border-black2 xl-borderR50 xl-bg-test3 m-display-none s-display-none'></div>
                <div className='xl-width20 xl-fontSize-12 xl-marginL-10 xl-color-white m-display-none s-display-none'>Team Area</div>
                </div>
                </div>
                </div>
                </div>
                <div className='xl-width-180 xl-height-180 xl-borderR-10 xl-border-black2 xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignItems-between xl-position-absolute xl-bottom-10 xl-left-10 xl-bg-test3 m-width-100 m-height-100 m-borderR-10 m-border-black2 m-display-flex m-flexWrap-wrap m-justifyContent-center m-alignItems-between m-position-absolute m-bottom-10 m-left-10 m-bg-test3 s-width-100 s-height-100 s-borderR-10 s-border-black2 s-display-flex s-flexWrap-wrap s-justifyContent-center s-alignItems-between s-position-absolute s-bottom-10 s-left-10 s-bg-test3'>
                <div className='xl-width100 xl-height50 xl-display-flex xl-flexWrap-wrap xl-alignContent-center xl-justifyContent-center m-width100 m-height50 m-display-flex m-flexWrap-wrap m-alignContent-center m-justifyContent-center s-width100 s-height50 s-display-flex s-flexWrap-wrap s-alignContent-center s-justifyContent-center'>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-fontSize-20 xl-bold m-width100 m-display-flex m-justifyContent-center m-fontSize-14 m-bold s-width100 s-display-flex s-justifyContent-center s-fontSize-14 s-bold'>value:</div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-fontSize-20 xl-bold m-width100 m-display-flex m-justifyContent-center m-fontSize-14 m-bold s-width100 s-display-flex s-justifyContent-center s-fontSize-14 s-bold'>30.000.000$</div>
                </div>
                <div className='xl-width100 xl-height50 xl-display-flex xl-flexWrap-wrap xl-alignContent-center xl-justifyContent-center m-width100 m-height50 m-display-flex m-flexWrap-wrap m-alignContent-center m-justifyContent-center s-width100 s-height50 s-display-flex s-flexWrap-wrap s-alignContent-center s-justifyContent-center'>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-fontSize-20 xl-bold m-width100 m-display-flex m-justifyContent-center m-fontSize-14 m-bold s-width100 s-display-flex s-justifyContent-center s-fontSize-14 s-bold'>Wage:</div>
                <div className='xl-width100 xl-display-flex xl-justifyContent-center xl-fontSize-20 xl-bold m-width100 m-display-flex m-justifyContent-center m-fontSize-14 m-bold s-width100 s-display-flex s-justifyContent-center s-fontSize-14 s-bold'>5.000.000$</div>
                </div>
                </div>
                <div className='xl-width-180 xl-height-180 xl-borderR50 xl-bg-test3 xl-border-black2 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-position-absolute xl-top-10 xl-right-10 xl-bg-test3 m-width-100 m-height-100 m-borderR50 m-bg-test3 m-border-black2 m-display-flex m-alignItems-center m-justifyContent-center m-position-absolute m-top-10 m-right-10 m-bg-test3 s-width-100 s-height-100 s-borderR50 s-bg-test3 s-border-black2 s-display-flex s-alignItems-center s-justifyContent-center s-position-absolute s-top-10 s-right-10 s-bg-test3'>
                <div className='xl-width-150 xl-height-150 xl-borderR50 xl-bg-test3 xl-border-black2 xl-display-flex xl-flexWrap-wrap xl-alignContent-center xl-justifyContent-center xl-overflow-hidden m-width-80 m-height-80 m-borderR50 m-bg-test3 m-border-black2 m-display-flex m-flexWrap-wrap m-alignContent-center m-justifyContent-center m-overflow-hidden s-width-80 s-height-80 s-borderR50 s-bg-test3 s-border-black2 s-display-flex s-flexWrap-wrap s-alignContent-center s-justifyContent-center s-overflow-hidden'>
                <div className='xl-width100 xl-text-center xl-fontSize-20 xl-bold m-width100 m-text-center m-fontSize-12 m-bold s-width100 s-text-center s-fontSize-12 s-bold'>transfer type:</div>
                <div className='m-width100 m-text-center m-fontSize-14 m-bold s-width100 s-text-center s-fontSize-14 s-bold'>{transfer.type}</div>
                </div>
                </div>
                </div>
                </div>
            })
                )}

            {transferData.length > 0 && (
                transferData.map((transfer,index)=>{
                    return <div key={index} className='xl-display-none m-display-none s-width95 s-height-420 s-marginT-15 s-marginB-15 s-display-flex s-justifyContent-start s-flexWrap-wrap'>
            <div className=' s-width100 s-height100 s-border-white2 s-bg-test4'>
                <div className='s-width100 s-height-30 s-display-flex s-justifyContent-center s-alignItems-center s-color-white s-marginT-15 s-fontSize-18'>transfer type:{transfer.type}</div>
                <div className='s-width100 s-height-80 s-marginT-30 s-display-flex s-justifyContent-center s-alignContent-end s-flexWrap-wrap'>
                    <div className='s-width-50 s-height-50 s-border-white2 s-borderR50 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden'>
                        <img className='s-width100 s-height100' src='http://localhost:4000/LogoDB/PlayerLogo/146953.png'/>
                    </div>
                    <div className='s-width100 s-display-flex s-justifyContent-center s-color-white s-fontSize-12'>Aaron Ramsdale</div>
                </div>
                <div className='s-width100 s-height-100 s-display-flex s-justifyContent-evenly s-alignItems-center'>
                    <div className='s-width-120 s-display-flex s-justifyContent-center s-flexWrap-wrap'>
                        <div className='s-width-50 s-height-50 s-border-white2 s-borderR50 s-display-flex s-justifyContent-center s-alignItems-center s-overflow-hidden'>
                            <img className='s-width100 s-height100' src='http://localhost:4000/LogoDB/TeamLogo/19.png'/>
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
                            <img className='s-width100 s-height100' src='http://localhost:4000/LogoDB/TeamLogo/24.png'/>
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
            </div>
            </div>
                })
            )}
        </>
    )
}

let b=2;
function PageNumber({setTransferNumber,newsPage,setNewsPage,setTransferData}) {
    const [pageNumber,setPageNumber]=useState(b);
    const[transferPagesNumber,setTransferPagesNumber]=useState()
    axios.post(hostUrl+'/transfer/count').then((res)=>{
        setTransferPagesNumber((res.data.count)/10)
    })
    return (
        <>
            <div className='xl-width100 xl-height-70 xl-marginT-15 xl-marginB-15 xl-display-flex xl-justifyContent-between xl-alignItems-center xl-border-white2 xl-bg-test4 m-width95 m-height-60 m-marginT-15 m-marginB-15 m-display-flex m-justifyContent-between m-alignItems-center m-border-white2 m-bg-test4 s-width95 s-height-60 s-marginT-15 s-marginB-15 s-display-flex s-justifyContent-between s-alignItems-center s-border-white2 s-bg-test4'>
                <ul className='xl-width100 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                    <li><button className='xl-paddingT-5 xl-paddingB-5 xl-marginR-5 xl-paddingR-10 xl-paddingL-10 xl-borderR-15 xl-border-white2 xl-pointer m-paddingT-5 m-paddingB-5 m-marginR-5 m-paddingR-10 m-paddingL-10 m-borderR-15 m-border-white2 m-pointer s-paddingT-5 s-paddingB-5 s-marginR-5 s-paddingR-10 s-paddingL-10 s-borderR-15 s-border-white2 s-pointer' onClick={()=>{setTransferNumber(transfers1);
                        if(b>=3&&b<=transferPagesNumber-1){
                            b--;
                            setPageNumber(b)
                            setNewsPage(b);
                        }
                        if(b-1==1){
                            setNewsPage(b-1)
                        }
                        axios.post(hostUrl+'/transfer/pages/'+(b)).then((res)=>{
                            console.log(b-1);
                            setTransferData(res.data.result)

                        })
                    }
                    }>{b-1}</button></li>
                    <li><button className='xl-paddingT-5 xl-paddingB-5 xl-marginR-5 xl-paddingR-10 xl-paddingL-10 xl-borderR-15 xl-border-white2 xl-pointer m-paddingT-5 m-paddingB-5 m-marginR-5 m-paddingR-10 m-paddingL-10 m-borderR-15 m-border-white2 m-pointer s-paddingT-5 s-paddingB-5 s-marginR-5 s-paddingR-10 s-paddingL-10 s-borderR-15 s-border-white2 s-pointer' onClick={()=>{setTransferNumber(transfers2);
                        setNewsPage(b);
                        axios.post(hostUrl+'/transfer/pages/'+b).then((res)=>{
                            console.log(b);
                            setTransferData(res.data.result)
                            for(let i=0;i<=res.data.result.length;i++){
                                axios.post(hostUrl+'/Team/DisplayTeam/'+res.data.result[i].fromTeamId).then((res)=>{
                                    console.log(res.data.result[0].area);
                                });
                                axios.post(hostUrl+'/Player/DisplayPlayer/FilterByPlayer/'+res.data.result[i].playerId).then((res)=>{
                                    console.log(res.data.result[0]);
                                });
                            }

                        })
                    }}>{pageNumber}</button></li>
                    <li><button className='xl-paddingT-5 xl-paddingB-5 xl-marginR-5 xl-paddingR-10 xl-paddingL-10 xl-borderR-15 xl-border-white2 xl-pointer m-paddingT-5 m-paddingB-5 m-marginR-5 m-paddingR-10 m-paddingL-10 m-borderR-15 m-border-white2 m-pointer s-paddingT-5 s-paddingB-5 s-marginR-5 s-paddingR-10 s-paddingL-10 s-borderR-15 s-border-white2 s-pointer' onClick={()=>{setTransferNumber(transfers3);
                        if(b>=1&&b<=transferPagesNumber-2){
                            b++;
                            setPageNumber(b);
                            setNewsPage(b);
                            axios.post(hostUrl+'/transfer/pages/'+(b+1)).then((res)=>{
                                console.log(b);
                                setTransferData(res.data.result)
                            })
                        }}}>{b+1}</button></li>
                    <li><button className='xl-paddingT-5 xl-marginR-5 xl-paddingB-5 xl-paddingR-10 xl-paddingL-10 xl-borderR-15 xl-border-white2 xl-pointer m-paddingT-5 m-marginR-5 m-paddingB-5 m-paddingR-10 m-paddingL-10 m-borderR-15 m-border-white2 m-pointer s-paddingT-5 s-marginR-5 s-paddingB-5 s-paddingR-10 s-paddingL-10 s-borderR-15 s-border-white2 s-pointer' onClick={()=>{
                        alert(pageNumber)
                    }}>...</button></li>
                    <li><button className='xl-paddingT-5 xl-marginR-5 xl-paddingB-5 xl-paddingR-10 xl-paddingL-10 xl-borderR-15 xl-border-white2 xl-pointer m-paddingT-5 m-marginR-5 m-paddingB-5 m-paddingR-10 m-paddingL-10 m-borderR-15 m-border-white2 m-pointer s-paddingT-5 s-marginR-5 s-paddingB-5 s-paddingR-10 s-paddingL-10 s-borderR-15 s-border-white2 s-pointer' onClick={()=>{setNewsPage(transferPagesNumber)
                        b=transferPagesNumber-1;
                        setPageNumber(transferPagesNumber-1);
                        console.log(transferPagesNumber)
                    }}>{transferPagesNumber}</button></li>
                </ul>

            </div>
        </>
    )
}

function Transfer() {
    const [transferNumber,setTransferNumber]=useState(transfers1);
    const [newsPage,setNewsPage]=useState(b-1);
    const[transferData,setTransferData]=useState(transfers1)
    return (
      <>
          <main>
              <TransferContents transferNumber={transferNumber} transferData={transferData}/>
              <PageNumber setTransferNumber={setTransferNumber} setNewsPage={setNewsPage} newsPage={newsPage} setTransferData={setTransferData}/>
          </main>
      </>
  );
}

export default Transfer;