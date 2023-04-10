
import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import results from "./Results";

function Navigation() {
    let flag=true;
    const[openCloseMenu,setOpenCloseMenu]=useState('s-display-none');
    const[smallSearchBar,setSmallSearchBar]=useState('s-display-none');
    return (
        <>
            <nav className='xl-width100 xl-position-sticky xl-top-0 xl-zIndex-3 xl-marginT-10 xl-marginLR-auto xl-display-flex xl-flexWrap-wrap xl-justifyContent-center xl-alignItems-center xl-position-relative xl-boxShadow1 m-width100 m-position-sticky m-top-0 m-zIndex-3 m-marginT-10 m-marginLR-auto m-display-flex m-flexWrap-wrap m-justifyContent-center m-alignItems-center m-position-relative s-display-none'>
                <div className='xl-width100 xl-height-70 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-bg-test0 m-width100 m-height-70 m-display-flex m-alignItems-center m-justifyContent-between m-bg-test0 '>
                    <div className='xl-width-1200 xl-height-70 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-bg-test0 m-width100 m-height-70 m-display-flex m-alignItems-center m-justifyContent-center m-bg-test0 '>
                        <div className='xl-width32 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-start m-width32 m-height100 m-display-flex m-alignItems-center m-justifyContent-start'>
                            <input type='text' className='xl-width60 xl-paddingR-15 xl-paddingL-15 xl-paddingT-10 xl-paddingB-10 xl-marginL-15 m-width60 m-paddingR-15 m-paddingL-15 m-paddingT-10 m-paddingB-10 m-marginL-15' placeholder='Search' />
                            <button className='xl-width-40 xl-height-40 xl-bg-test11 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-pointer m-width-40 m-height-40 m-bg-test11 m-display-flex m-justifyContent-center m-alignItems-center m-pointer'>
                                <i className="bi bi-search xl-color-white xl-fontSize-20"></i>
                            </button>
                        </div>
                        <div className='xl-width20 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-center m-width20 m-height100 m-display-flex m-alignItems-center m-justifyContent-center'>
                            <img alt='WNT logo' src='index.png' className='xl-height90 xl-pointer m-height90 m-pointer' />
                        </div>
                        <div className='xl-width32 xl-height100 xl-display-flex xl-alignItems-center xl-justifyContent-end m-width32 m-height100 m-display-flex m-alignItems-center m-justifyContent-end'>
                            <Link className='xl-width-35 xl-marginR-15 xl-display-flex xl-flexWrap-wrap xl-progress xl-color-red1 m-progress m-color-red1' to='/signUp'>
                                <div className="xl-width100 xl-display-flex xl-justifyContent-center">
                                    <i className="bi bi-person-circle xl-fontSize-34 xl-color-white m-fontSize-34 m-color-white"></i>
                                </div>
                            </Link>
                            <div className='xl-width-30 xl-height-30 xl-marginL-15 xl-borderR50 xl-border-black2 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-marginR-15 xl-pointer m-width-30 m-height-30 m-marginL-15 m-borderR50 m-border-black2 m-display-flex m-alignItems-center m-justifyContent-center m-marginR-15 m-pointer'>
                                <img className='xl-width100 m-width100' src='1024px-United-kingdom_flag_icon_round.svg.png'alt='lan'/>
                            </div>
                        </div>
                    </div>
                    </div>

                <div className='xl-width100 xl-height-50 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-bg-test0 m-width100 m-height-50 m-display-flex m-alignItems-center m-justifyContent-center m-bg-test0'>
                    <div className='xl-width-1200 xl-height-50 xl-display-flex xl-alignItems-center xl-justifyContent-between xl-bg-test0 m-width100 m-height-50 m-display-flex m-alignItems-center m-justifyContent-between m-bg-test0'>
                        <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-evenly m-alignItems-center m-width100 m-height-60 m-display-flex m-justifyContent-evenly m-alignItems-center'>
                            <Link className='xl-color-white xl-fontSize-20 xl-marginT-10 m-color-white m-fontSize-18' to='/home'>home</Link>
                            <Link className='xl-color-white xl-fontSize-20 xl-marginT-10 m-color-white m-fontSize-18' to='/matches'>matches</Link>
                            <Link className='xl-color-white xl-fontSize-20 xl-marginT-10 m-color-white m-fontSize-18' to='/results'>results</Link>
                            <Link className='xl-color-white xl-fontSize-20 xl-marginT-10 m-color-white m-fontSize-18' to='/news'>news</Link>
                            <Link className='xl-color-white xl-fontSize-20 xl-marginT-10 m-color-white m-fontSize-18' to='/transfer'>transfer</Link>
                        </div>
                    </div>
                </div>
                <div className='xl-width100 xl-height-40 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-bg-test m-width100 m-height-40 m-display-flex m-alignItems-center m-justifyContent-center m-bg-test'>
                    <div className='xl-width-1200 xl-height-40 xl-display-flex xl-alignItems-center xl-justifyContent-center xl-bg-test m-width100 m-height-40 m-display-flex m-alignItems-center m-justifyContent-center m-bg-test'>
                        <div className='xl-width100 xl-height-60 xl-display-flex xl-justifyContent-evenly xl-alignItems-center m-width100 m-height-60 m-display-flex m-justifyContent-evenly m-alignItems-center'>
                            <Link className='xl-marginL-15 xl-fontSize-15 m-marginL-5 m-fontSize-12' to='/leagues'>leagues</Link>
                            <Link className='xl-marginL-15 xl-fontSize-15 m-marginL-5 m-fontSize-12' to='/teams'>teams</Link>
                            <Link className='xl-marginL-15 xl-fontSize-15 m-marginL-5 m-fontSize-12' to='/players'>players</Link>
                            <Link className='xl-marginL-15 xl-fontSize-15 m-marginL-5 m-fontSize-12' to='/coaches'>coaches</Link>
                        </div>
                    </div>

                </div>
        </nav>
            <nav className='xl-display-none m-display-none s-width100 s-height-60 s-bg-test4 s-marginT-10 s-position-sticky s-top-0 s-zIndex-2 s-custom-border9'>
                <div className='s-width100 s-height100 s-display-flex s-justifyContent-between'>
                    <div className='s-width30 s-height100 s-display-flex s-alignItems-center s-justifyContent-start'>
                        <div className='s-width-30 s-height-30 s-marginL-10 s-display-flex s-alignItems-center s-justifyContent-center'>
                            <Link to='/signUp'><i className="bi bi-person-circle s-color-white s-fontSize-26"></i></Link>
                        </div>
                        <div className='s-width-30 s-height-30 s-marginL-10 s-display-flex s-alignItems-center s-justifyContent-center'>
                            <i class="bi bi-search s-color-white s-fontSize-26" onClick={()=>{
                                smallSearchBar==['s-display-none'] ? setSmallSearchBar('s-display-flex s-justifyContent-center s-alignItems-center s-bg-test3 s-width100 s-height-45') : setSmallSearchBar('s-display-none')
                            }
                                }></i>
                        </div>
                    </div>
                    <div className='s-width30 s-height100 s-display-flex s-justifyContent-center s-alignItems-center'>
                        <div className='s-height-50 s-pointer'>
                            <img className='s-height100' src='index.png'/>
                        </div>
                    </div>
                    <div className='s-width30 s-height100 s-display-flex s-alignItems-center s-justifyContent-end'>
                        <div className='s-width-30 s-height-30 s-marginR-10'>
                            <img className='s-width100 s-border-black2 s-pointer' src='1024px-United-kingdom_flag_icon_round.svg.png'alt='lan'/>
                        </div>
                        <div className='s-width-30 s-height-30 s-marginR-10 s-display-flex s-alignItems-center s-justifyContent-center s-pointer'>
                            <i class="bi bi-three-dots s-fontSize-24 s-color-white" onClick={()=>{
                                if(flag==true){
                                    setOpenCloseMenu('s-width100 s-height-100vh s-position-fixed s-zIndex-2 s-top-0 s-bg-blur1 s-display-flex s-justifyContent-end s-overflow-hidden');
                                    flag=false;
                                }
                                else{
                                    setOpenCloseMenu('s-display-none');
                                    flag=true;
                                }
                            }}></i>
                        </div>
                    </div>
                </div>
                <div className={smallSearchBar}><input type='text' className='s-width80 s-paddingB-5 s-paddingT-5 s-paddingR-40 s-paddingL-10'/></div>

                <div className={openCloseMenu}>
                    <ul className='s-width90 s-bg-test s-overflow-auto'>
                        <li className='s-width100 s-marginB-10 s-marginT-35 s-display-flex s-justifyContent-end s-alignItems-center'>
                            <div className='s-width-25 s-height-25 s-marginR-15 s-pointer s-display-flex s-justifyContent-center s-alignItems-center' onClick={()=>{
                                if(flag==false){
                                    setOpenCloseMenu('s-width100 s-height-100vh s-position-fixed s-zIndex-2 s-top-0 s-bg-blur1 s-display-flex s-justifyContent-end s-overflow-hidden');
                                    flag=true;
                                }
                                else{
                                    setOpenCloseMenu('s-display-none');
                                    flag=false;
                                }
                            }}>
                                <i className="bi bi-x-square s-fontSize-24"></i>
                            </div>
                        </li>
                        <li className='s-width100 s-marginB-10 s-marginT-35 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            if(flag==true){
                                setOpenCloseMenu('s-display-none')
                                flag=false;
                            }
                        }} to='/home'>home</Link></li>
                        <li className='s-width100 s-marginB-10 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            if(flag==true){
                                setOpenCloseMenu('s-display-none')
                                flag=false;
                            }
                        }} to='/matches'>matches</Link></li>
                        <li className='s-width100 s-marginB-10 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            if(flag==true){
                                setOpenCloseMenu('s-display-none')
                                flag=false;
                            }
                        }} to='/results'>results</Link></li>
                        <li className='s-width100 s-marginB-10 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            if(flag==true){
                                setOpenCloseMenu('s-display-none')
                                flag=false;
                            }
                        }} to='/news'>news</Link></li>
                        <li className='s-width100 s-marginB-10 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            if(flag==true){
                                setOpenCloseMenu('s-display-none')
                                flag=false;
                            }
                        }} to='/leagues'>leagues</Link></li>
                        <li className='s-width100 s-marginB-10 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            if(flag==true){
                                setOpenCloseMenu('s-display-none')
                                flag=false;
                            }
                        }} to='/teams'>teams</Link></li>
                        <li className='s-width100 s-marginB-10 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            if(flag==true){
                                setOpenCloseMenu('s-display-none')
                                flag=false;
                            }
                        }} to='/players'>players</Link></li>
                        <li className='s-width100 s-marginB-10 s-marginT-10 s-display-flex s-justifyContent-center s-alignItems-center s-borderBottom-black'><Link className=' s-display-flex s-justifyContent-center s-alignItems-center s-width100 s-marginB-10' onClick={()=>{
                            if(flag==true){
                                setOpenCloseMenu('s-display-none')
                                flag=false;
                            }
                        }} to='/coaches'>coaches</Link></li>

                    </ul>
                </div>
            </nav>
     </>
    );
}

export default Navigation;
