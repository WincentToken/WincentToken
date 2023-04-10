import React from 'react';
import RegionList from "./Lists/RegionList";
import SmallLeagueList from "./Lists/SmallLeagueList";
import SmallTeamList from "./Lists/SmallTeamList";
import SmallMatchList from "./Lists/SmallMatchList";
import SmallPlayerList from "./Lists/SmallPlayerList";
import DemoModal from "./DemoModal";
import { useEffect, useState } from 'react';
import news from "./News";
import axios from "axios";
let hostUrl=process.env.REACT_APP_DATABASE_URL;
let flag=true;

let transfers1=[1,2,3];
let transfers2=[1,2,3,4];
let transfers3=[1,2,3,4,5];
let counter1=0;
let counter2=0;
function NewsContentSlideShow() {
    const newsImgs=['whatsapp-image-2021-05-04-at-104742-am.jpg','5184.webp','playerIcon.png','team.png'];
    const newsheader=['header1','header2','header3','header4'];
    const newsText=['text1 this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content!','text2 this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content!','text3 this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo text and has no content! this is demo ','text4 this is demo text and has no content! this is demo text and has no content! this is demo text and has no content!no content! this is demo text and has no content! this is demo'];
    const[newsCounter1,setNewsCounter1]=useState(counter1);
    const[newsCounter2,setNewsCounter2]=useState(counter2);
    return (
            <>
                <div className='xl-width100 xl-height100 xl-border-white2 xl-display-flex xl-justifyContent-center xl-bg-test4 xl-overflow-hidden xl-position-relative m-width100 m-height100 m-border-white2 m-display-flex m-justifyContent-center m-bg-test4 m-overflow-hidden m-position-relative s-display-none'>
                    <div className='xl-width50 xl-height100 xl-display-flex xl-flexWrap-wrap xl-alignContent-between m-width50 m-height100 m-display-flex m-flexWrap-wrap m-alignContent-between'>
                        <div className='xl-height20 xl-fontSize-38 xl-bold xl-color-white xl-marginL-10 xl-marginT-10 xl-custom-textShadow m-height20 m-fontSize-30 m-bold m-color-white m-marginL-10 m-marginT-10 m-custom-textShadow'>{newsheader[newsCounter1]}</div>
                        <div className='xl-height50 xl-overflow-hidden m-height50 m-overflow-hidden'>
                            <p className='xl-color-white xl-fontSize-18 xl-marginL-10 m-color-white m-marginL-10'>{newsText[newsCounter1]}</p>
                        </div>
                        <div className='xl-height20 xl-width100 xl-display-flex xl-justifyContent-end m-height20 m-width100 m-display-flex m-justifyContent-end'>
                            <button className='xl-display-block xl-height-40 xl-fontSize-22 xl-bold xl-paddingL-15 xl-paddingR-15 xl-borderR-10 xl-marginR-15 xl-marginT-10 xl-bg-test3 xl-color-white xl-pointer xl-border-black2 xl-custom-textShadow m-display-block m-height-30 m-fontSize-18 m-bold m-paddingL-15 m-paddingR-15 m-borderR-10 m-marginR-15 m-marginT-10 m-bg-test3 m-color-white m-pointer m-border-black2 m-custom-textShadow'>Show more</button>
                        </div>
                    </div>
                    <div className='xl-width45 xl-height100 xl-display-flex xl-flexWrap-wrap xl-alignItems-center xl-justifyContent-center m-width45 m-height100 m-display-flex m-flexWrap-wrap m-alignItems-center'>
                        <img src={newsImgs[newsCounter1]} className='xl-width90 xl-height90 m-width90 m-height90'/>
                    </div>
                    <div className='xl-width5 xl-height100 xl-position-absolute xl-display-flex xl-justifyContent-center xl-alignItems-center xl-left-0 m-width5 m-height100 m-position-absolute m-display-flex m-justifyContent-center m-alignItems-center m-left-0'>
                        <button className='xl-display-iBlock xl-width-40 xl-height-40 xl-borderR50 xl-border-white2 xl-pointer xl-fontSize-20 m-display-iBlock m-width-30 m-height-30 m-borderR50 m-border-white2 m-pointer' onClick={()=>{
                            counter1--;
                            if(counter1==-1){
                                counter1=3;
                            }
                            setNewsCounter1(counter1);
                        }}>&larr;</button>
                    </div>
                    <div className='xl-width5 xl-height100 xl-position-absolute xl-display-flex xl-justifyContent-center xl-alignItems-center xl-right-0 m-width5 m-height100 m-position-absolute m-display-flex m-justifyContent-center m-alignItems-center m-right-0'>
                        <button className='xl-display-iBlock xl-width-40 xl-height-40 xl-borderR50 xl-border-white2 xl-pointer xl-fontSize-20 m-display-iBlock m-width-30 m-height-30 m-borderR50 m-border-white2 m-pointer' onClick={()=>{
                            counter1++;
                            if(counter1==4){
                                counter1=0;
                            }
                            setNewsCounter1(counter1);
                        }}>&rarr;</button>
                    </div>
                </div>
                <div className='xl-display-none m-display-none s-width100 s-height100 s-bg-test4 s-border-white2'>
                    <div className="s-height-70 s-fontSize-24 s-bold s-color-white s-marginL-10 s-marginT-10 s-custom-textShadow">{newsheader[newsCounter2]}</div>
                    <div className='s-width100 s-height-250 s-bg-blur1 s-display-flex s-justifyContent-center s-alignItems-center'>
                        <div className='s-width-300 s-height-200 s-border-black2 s-display-flex s-justifyContent-center s-alignItems-center'>
                            <img src={newsImgs[newsCounter2]} className='s-height100'/>
                        </div>
                    </div>
                    <div className='s-width99 s-height-100 s-marginT-10 s-marginB-10 s-overflow-hidden s-display-flex s-justifyContent-center'>
                        <p className='s-width95 s-color-white s-fontSize-13 s-text-center'>{newsText[newsCounter2]}</p>
                    </div>
                    <div className='s-width100 s-height-40 s-display-flex s-justifyContent-end s-alignItems-center'>
                        <button className='s-paddingB-5 s-paddingT-5 s-paddingL-10 s-paddingR-10 s-pointer s-borderR-10 s-marginR-15 s-color-black s-bg-test3'>show more</button>
                    </div>
                    <div className='s-width100 s-height-40 s-marginT-10 s-display-flex s-justifyContent-center'>
                        <div className='s-width-100 s-height-40 s-display-flex s-justifyContent-between s-alignItems-center'>
                            <button className='s-width-40 s-height-40 s-bg-test3 s-borderR-10 s-pointer s-color-black s-fontSize-22' onClick={()=>{
                                counter2--;
                                if(counter2==-1){
                                    counter2=3;
                                }
                                setNewsCounter2(counter2);
                            }}>&larr;</button>
                            <button className='s-width-40 s-height-40 s-bg-test3 s-borderR-10 s-pointer s-color-black s-fontSize-22' onClick={()=>{
                                counter2++;
                                if(counter2==4){
                                    counter2=0;
                                }
                                setNewsCounter2(counter2);
                            }}>&rarr;</button>
                        </div>
                    </div>
                </div>
            </>
    )
}

function NewsContent({transferNumber,news}) {
    const[showMore,setShowMore]=useState('xl-width90 xl-height-200 xl-overflow-hidden xl-marginT-15 xl-marginB-5')
    return (
        <>
            {news.length > 0 && (
                news.map((newses,index)=>{
                    return <div key={index} className='xl-width100 xl-border-white2 xl-display-flex xl-justifyContent-center xl-flexWrap-wrap xl-bg-test4 xl-overflow-hidden xl-position-relative xl-marginT-15 m-width95 m-height-250 m-border-white2 m-display-flex m-justifyContent-center m-flexWrap-wrap m-bg-test4 m-overflow-hidden m-position-relative m-marginT-10 s-width95 s-height-500 s-border-white2 s-display-flex s-justifyContent-center s-display-flex s-bg-test4 s-overflow-hidden s-position-relative s-marginT-10'>
                        <div className='xl-width90 xl-marginT-15 xl-marginB-5'>
                            <h2 className='xl-color-white xl-fontSize-30'>{newses.title}</h2>
                        </div>
                        <div className='xl-width100 xl-height-350 xl-marginT-15 xl-marginB-5 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test3'>
                            <img src='https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/13360/production/_129288687_messi.jpg' className='xl-height100'/>
                        </div>
                        <div className='xl-width90 xl-height-200 xl-overflow-hidden xl-marginT-15 xl-marginB-15'>
                            <p className='xl-color-white'>{newses.body}</p>
                        </div>
                        {/*<div className='xl-width90 xl-height-200 xl-overflow-hidden xl-marginT-15 xl-marginB-5'>*/}
                        {/*    <button onClick={()=>{*/}
                        {/*    setShowMore('xl-width90 xl-overflow-hidden xl-marginT-15 xl-marginB-5')}*/}
                        {/*    }>show more</button>*/}
                        {/*</div>*/}

            </div>
                })
            )}
        </>
    )
}
let b=2;

function PageNumber({setTransferNumber,newsPage,setNewsPage}) {
const [pageNumber,setPageNumber]=useState(b);

    return (
        <>
            <div className='xl-width100 xl-height-70 xl-marginT-15 xl-marginB-15 xl-display-flex xl-justifyContent-between xl-alignItems-center xl-border-white2 xl-bg-test4 m-width95 m-height-60 m-marginT-15 m-marginB-15 m-display-flex m-justifyContent-between m-alignItems-center m-border-white2 m-bg-test4 s-width95 s-height-60 s-marginT-15 s-marginB-15 s-display-flex s-justifyContent-between s-alignItems-center s-border-white2 s-bg-test4'>
                <ul className='xl-width100 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width100 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width100 s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                    <li><button className='xl-paddingT-5 xl-paddingB-5 xl-marginR-5 xl-paddingR-10 xl-paddingL-10 xl-borderR-15 xl-border-white2 xl-pointer m-paddingT-5 m-paddingB-5 m-marginR-5 m-paddingR-10 m-paddingL-10 m-borderR-15 m-border-white2 m-pointer s-paddingT-5 s-paddingB-5 s-marginR-5 s-paddingR-10 s-paddingL-10 s-borderR-15 s-border-white2 s-pointer' onClick={()=>{setTransferNumber(transfers1);
                        if(b>=3&&b<=99){
                            b--;
                            setPageNumber(b)
                            setNewsPage(b);
                        }
                        if(b-1==1){
                            setNewsPage(b-1)
                        }
                    }
                    }>{b-1}</button></li>
                    <li><button className='xl-paddingT-5 xl-paddingB-5 xl-marginR-5 xl-paddingR-10 xl-paddingL-10 xl-borderR-15 xl-border-white2 xl-pointer m-paddingT-5 m-paddingB-5 m-marginR-5 m-paddingR-10 m-paddingL-10 m-borderR-15 m-border-white2 m-pointer s-paddingT-5 s-paddingB-5 s-marginR-5 s-paddingR-10 s-paddingL-10 s-borderR-15 s-border-white2 s-pointer' onClick={()=>{setTransferNumber(transfers2);
                        setNewsPage(b)}}>{pageNumber}</button></li>
                    <li><button className='xl-paddingT-5 xl-paddingB-5 xl-marginR-5 xl-paddingR-10 xl-paddingL-10 xl-borderR-15 xl-border-white2 xl-pointer m-paddingT-5 m-paddingB-5 m-marginR-5 m-paddingR-10 m-paddingL-10 m-borderR-15 m-border-white2 m-pointer s-paddingT-5 s-paddingB-5 s-marginR-5 s-paddingR-10 s-paddingL-10 s-borderR-15 s-border-white2 s-pointer' onClick={()=>{setTransferNumber(transfers3);
                        if(b>=1&&b<=98){
                            b++;
                            setPageNumber(b);
                            setNewsPage(b)
                        }}}>{b+1}</button></li>
                    <li><button className='xl-paddingT-5 xl-marginR-5 xl-paddingB-5 xl-paddingR-10 xl-paddingL-10 xl-borderR-15 xl-border-white2 xl-pointer m-paddingT-5 m-marginR-5 m-paddingB-5 m-paddingR-10 m-paddingL-10 m-borderR-15 m-border-white2 m-pointer s-paddingT-5 s-marginR-5 s-paddingB-5 s-paddingR-10 s-paddingL-10 s-borderR-15 s-border-white2 s-pointer' onClick={()=>{
                        alert(pageNumber)
                    }}>...</button></li>
                    <li><button className='xl-paddingT-5 xl-marginR-5 xl-paddingB-5 xl-paddingR-10 xl-paddingL-10 xl-borderR-15 xl-border-white2 xl-pointer m-paddingT-5 m-marginR-5 m-paddingB-5 m-paddingR-10 m-paddingL-10 m-borderR-15 m-border-white2 m-pointer s-paddingT-5 s-marginR-5 s-paddingB-5 s-paddingR-10 s-paddingL-10 s-borderR-15 s-border-white2 s-pointer' onClick={()=>{setNewsPage(99)
                        b=99;
                        setPageNumber(100)
                    }}>100</button></li>
                </ul>
            </div>
        </>
    )
}

function News() {

    const [newsPage,setNewsPage]=useState(b-1);
    const [news,setNews]=useState('')
    const [transferNumber,setTransferNumber]=useState(transfers1)
    axios.post(hostUrl+'/news/pages/1').then((res)=>{
        setNews(res.data.result)
    })
    return (
        <>
            <main>
                {/*<div className='xl-width100 xl-height-400 xl-border-white2 xl-display-flex xl-justifyContent-center xl-bg-test4 xl-overflow-hidden xl-position-relative xl-marginT-15 xl-marginB-15 m-width95 m-height-250 m-border-white2 m-display-flex m-justifyContent-center m-bg-test4 m-overflow-hidden m-position-relative m-marginT-15 m-marginB-15 s-width95 s-height-550 s-border-white2 s-display-flex s-justifyContent-center s-bg-test4 s-overflow-hidden s-position-relative s-marginT-15 s-marginB-15'>*/}
                {/*    <NewsContentSlideShow />*/}
                {/*</div>*/}
                {/*<div className='xl-width100 xl-display-flex'>*/}
                {/*    <h2 className='xl-height-40 xl-marginB-5 xl-paddingT-10 xl-paddingB-10 xl-paddingR-40 xl-paddingR-40 xl-paddingL-40 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-border-white2 xl-fontSize-24 xl-bold xl-bg-test4 xl-color-white m-height-30 m-marginB-5 m-paddingT-10 m-paddingB-10 m-paddingR-40 m-paddingR-40 m-paddingL-40 m-display-flex m-justifyContent-center m-alignItems-center m-border-white2 m-fontSize-18 m-bold m-bg-test4 m-color-white s-height-30 s-marginB-5 s-paddingT-10 s-paddingB-10 s-paddingR-40 s-paddingR-40 s-paddingL-40 s-display-flex s-justifyContent-center s-alignItems-center s-border-white2 s-fontSize-18 s-bold s-bg-test4 s-color-white'>news</h2>*/}
                {/*</div>*/}

                <NewsContent transferNumber={transferNumber} newsPage={newsPage} news={news}/>
                <PageNumber setTransferNumber={setTransferNumber} setNewsPage={setNewsPage} newsPage={newsPage}/>
            </main>
        </>
    );
}

export default News;