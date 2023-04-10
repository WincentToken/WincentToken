import React from 'react';
import DemoModal from "../DemoModal";
import { useEffect, useState } from 'react';
import axios from "axios";
let flag2=false;
function ScheduleList() {


    const [selectedStyle, setSelectedStyle] = useState({});
    const activeItem = (id) => {
        setSelectedStyle(prvState => ({
            selectedStyle,
            [id]: !prvState[id]
        }))
    }

    const [data,setData]=useState([]);
      axios.post('https://db.wincent.studio/Schedule/188').then((response)=> {
        setData(response.data.filter_data[0].data);
      })
  return (
      <>
    <div className='xl-width100 xl-height100 xl-overflow-auto m-width100 m-height100 m-overflow-auto s-display-none'>
      {data.length > 0 && (
        <ul className='xl-width100 xl-display-flex xl-flexWrap-wrap m-width100 m-display-flex m-flexWrap-wrap s-width100 s-display-flex s-flexWrap-wrap' >
          {data.map((user,index) => (
            <li key={index}  style={{
                backgroundColor: selectedStyle[`${index}`]
                    ? "gray"
                    : "initial"
            }} onClick={()=>{activeItem(index)}} className='xl-width100 xl-marginT-10 xl-border-black2 xl-bg-test4 m-width100 m-marginT-10 m-border-black2 m-bg-test4'>
              <div className='xl-width100 xl-height-50 xl-display-flex xl-justifyContent-between m-width100 m-height-50 m-display-flex m-justifyContent-between' onClick={()=>{
                  console.log(data[index].matchId)
              }}>
                <div className='xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <div className='xl-display-flex xl-alignItems-center xl-justifyContent-center xl-paddingT-5 xl-paddingB-5 xl-paddingL-10 xl-paddingR-10 xl-fontSize-18 xl-color-white m-display-flex m-alignItems-center m-justifyContent-center m-paddingT-5 m-paddingB-5 m-paddingL-10 m-paddingR-10 m-fontSize-13 m-color-white s-display-flex s-alignItems-center s-justifyContent-center s-paddingT-5 s-paddingB-5 s-paddingL-10 s-paddingR-10 s-fontSize-13 s-color-white'>{data[index].location}</div>
                </div>
                <div className='xl-width55 xl-height100 xl-display-flex xl-justifyContent-center xl-alignItems-center m-width55 m-height100 m-display-flex m-justifyContent-center m-alignItems-center s-width55 s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                  <div className='xl-width45 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width45 m-height100 m-display-flex m-alignItems-center m-justifyContent-center s-width45 s-height100 s-display-flex s-alignItems-center s-justifyContent-center'>
                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-border-black2 xl-bg-test3 m-width-30 m-height-30 m-borderR50 m-border-black2 m-bg-test3 s-width-30 s-height-30 s-borderR50 s-border-black2 s-bg-test3' title='club logo'>
                      <img className='xl-height100 m-height100 s-height100'/>
                    </div>
                    <div className='xl-fontSize-18 xl-color-white xl-marginL-10 m-fontSize-10 m-color-white m-marginL-10 s-fontSize-10 s-color-white s-marginL-10'>{data[index].homeName}</div>
                  </div>
                  <div className='xl-width10 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width10 m-height100 m-display-flex m-alignItems-center m-justifyContent-center' >
                    <div className='xl-width-40 xl-height-40 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-color-white xl-fontSize-20 m-width-30 m-height-30 m-display-flex m-justifyContent-center m-alignItems-center m-color-white m-fontSize-20 s-width-30 s-height-30 s-borderR50 s-border-black2 s-bg-test3'>
                        vs
                    </div>
                  </div>
                  <div className='xl-width45 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width45 m-height100 m-display-flex m-alignItems-center m-justifyContent-center s-width45 s-height100 s-display-flex s-alignItems-center s-justifyContent-center'>
                    <div className='xl-fontSize-18 xl-color-white xl-marginR-10 m-fontSize-10 m-color-white m-marginR-10 s-fontSize-10 s-color-white s-marginR-10'>{data[index].awayName}</div>
                    <div className='xl-width-40 xl-height-40 xl-borderR50 xl-border-black2 xl-bg-test3 m-width-30 m-height-30 m-borderR50 m-border-black2 m-bg-test3 s-width-30 s-height-30 s-borderR50 s-border-black2 s-bg-test3' title='club logo'>
                      <img className='xl-height100 m-height100 s-height100'/>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
        <DemoModal/>
    </div>


    <div className='xl-display-none m-display-none s-width100 s-height100 s-overflow-auto'>
        {data.length > 0 && (
            <ul className='s-width100 s-display-flex s-flexWrap-wrap'>
                {data.map((user,index) => (
                    <li key={index}  style={{
                        backgroundColor: selectedStyle[`${index}`]
                            ? "gray"
                            : "initial"
                    }} className='s-width100 s-marginT-10 s-border-black2' onClick={()=>{activeItem(index)}}>
                        <div className='s-width100 s-height-30 s-display-flex s-justifyContent-evenly s-alignItems-center s-text-center s-fontSize-12 s-color-white'>
                            sunday 17/1/2021_18:30
                        </div>
                        <div className='s-width100 s-height-50 s-display-flex s-justifyContent-evenly'>
                            <div className='s-width-70 s-display-flex s-justifyContent-center s-flexWrap-wrap s-marginT-10'>
                                <div className='s-width-30 s-height-30 s-borderR50 s-bg-test3 s-overflow-hidden s-display-flex s-alignItems-center s-justifyContent-center s-overflow-hidden'>
                                    <img className='s-height90'/>
                                </div>
                                <div className='s-width100 s-display-flex s-justifyContent-center s-fontSize-10 s-color-white s-text-center'>{data[index].homeName}</div>
                            </div>
                            <div className='s-width-80 s-display-flex s-justifyContent-center s-flexWrap-wrap s-marginT-10 s-marginR-15 s-marginL-15'>
                                <div className='s-width-40 s-height-40 s-borderR50 s-bg-test3 s-overflow-hidden s-display-flex s-alignItems-center s-justifyContent-center s-overflow-hidden'>
                                    <img className='s-height90'/>
                                </div>
                                <div className='s-width100 s-display-flex s-justifyContent-center s-fontSize-10 s-color-white'></div>
                            </div>
                            <div className='s-width-70 s-display-flex s-justifyContent-center s-flexWrap-wrap s-marginT-10'>
                                <div className='s-width-30 s-height-30 s-borderR50 s-bg-test3 s-overflow-hidden s-display-flex s-alignItems-center s-justifyContent-center s-overflow-hidden'>
                                    <img className='s-height90'/>
                                </div>
                                <div className='s-width100 s-display-flex s-justifyContent-center s-fontSize-10 s-color-white s-text-center'>{data[index].awayName}</div>
                            </div>
                        </div>
                        <div className='s-width100 s-display-flex s-justifyContent-center s-marginT-30'>
                            <button className='s-marginB-10 s-bg-test3 s-borderR-10 s-fontSize-10 s-color-black s-paddingL-10 s-paddingB-5 s-paddingR-10 s-paddingT-5 s-marginR-10'>new</button>
                            <button className='s-marginB-10 s-bg-test3 s-borderR-10 s-fontSize-10 s-color-black s-paddingL-10 s-paddingB-5 s-paddingR-10 s-paddingT-5 s-marginL-10'>media</button>
                        </div>
                    </li>
                ))}
            </ul>
        )}
    </div>
    </>
  )
}
export default ScheduleList;



