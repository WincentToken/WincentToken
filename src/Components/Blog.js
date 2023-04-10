import {Filter3, FirstFilter} from "./FirstFilter";
import React from 'react';
import App from './App';

function NewsContentSlideShow(){
    return(
        <>
        <div className='width100 height-400 border-black2 borderR-15 display-flex justifyContent-center bg-test5 overflow-hidden position-relative'>
            <div className='width50 height100 display-flex flexWrap-wrap alignContent-start'>
                <div className='width80 height-70 marginT-10 borderR-15 border-black2'></div>
                <div className='width100 marginB-10 marginT-10 fontSize-34 bold'>header</div>
                <div >
                    <p>text text text text text text text text text text text text text text text text text text text text text text text </p>
                </div>
            </div>
            <div className='width45 height100 display-flex flexWrap-wrap alignContent-between'>
                <img src='3.jpg' className='width100 height100'/>
            </div>
            <div className='width5 height100 position-absolute display-flex justifyContent-center alignItems-center left-0'>
                <button className='display-iBlock width-40 height-40 borderR50 border-black2 pointer fontSize-20'>&larr;</button>
            </div>
            <div className='width5 height100 position-absolute display-flex justifyContent-center alignItems-center right-0'>
                <button className='display-iBlock width-40 height-40 borderR50 border-black2 pointer fontSize-20'>&rarr;</button>
            </div>
        </div>
        </>
    )
}

function NewsContent(){
    return(
        <>
        <div className='width100 height-400 border-black2 borderR-15 display-flex justifyContent-center bg-test5 overflow-hidden position-relative'>
            <div className='width50 height100 display-flex flexWrap-wrap alignContent-start'>
                <div className='width80 height-70 marginT-10 borderR-15 border-black2'></div>
                <div className='width100 marginB-10 marginT-10 fontSize-34 bold'>header</div>
                <div >
                    <p>text text text text text text text text text text text text text text text text text text text text text text text </p>
                </div>
            </div>
            <div className='width45 height100 display-flex flexWrap-wrap alignContent-between'>
                <img src='3.jpg' className='width100 height100'/>
            </div>
        </div>
        </>
    )
}

function NewsSubGroup(){
    return(
        <>
            <div className='width100 height-70 marginT-5 display-flex justifyContent-between alignItems-center borderR-15 border-black2 bg-test4'>
             <ul className='width100 height100 display-flex justifyContent-evenly alignItems-center'>
             <li><button className='paddingT-5 paddingB-5 paddingR-10 paddingL-10 borderR-15 pointer bg-test7 color-white bold'>....</button></li>
             <li><button className='paddingT-5 paddingB-5 paddingR-10 paddingL-10 borderR-15 pointer bg-test7 color-white bold'>.....</button></li>
             <li><button className='paddingT-5 paddingB-5 paddingR-10 paddingL-10 borderR-15 pointer bg-test7 color-white bold'>.....</button></li>
             <li><button className='paddingT-5 paddingB-5 paddingR-10 paddingL-10 borderR-15 pointer bg-test7 color-white bold'>....</button></li>
             <li><button className='paddingT-5 paddingB-5 paddingR-10 paddingL-10 borderR-15 pointer bg-test7 color-white bold'>.....</button></li>
             <li><button className='paddingT-5 paddingB-5 paddingR-10 paddingL-10 borderR-15 pointer bg-test7 color-white bold'>....</button></li>
             <li><button className='paddingT-5 paddingB-5 paddingR-10 paddingL-10 borderR-15 pointer bg-test7 color-white bold'>....</button></li>
             <li><button className='paddingT-5 paddingB-5 paddingR-10 paddingL-10 borderR-15 pointer bg-test7 color-white bold'>...</button></li>
             <li><button className='paddingT-5 paddingB-5 paddingR-10 paddingL-10 borderR-15 pointer bg-test7 color-white bold'>....</button></li>
             </ul>
         </div>
        </>
        )
}

function SeasonFilter(){
    return(
        <>
        <div className='width100 height-60 marginB-5 borderR-15 border-black2 bg-test4 display-flex alignItems-center justifyContent-center'>
            <div className='bg-test7'>
                season :
                <input type='date' className='bg-test7 color-black'/>
            </div>
        </div>
        </>
    )
}

function ActiveNews(){
    return(
        <>
            <div className='width100 borderR-15 border-black2 position-relative bg-test0'>
               <div className='width-70 height-70 marginT-10 marginL-10 borderR50 border-black2 display-flex justifyContent-center alignItems-center bg-test3 pointer'>
                   <p className='text-center'>back</p>
               </div>
                <div className='width95 height-1200 marginT-10 marginLR-auto display-flex'>
                    <div className='width70 height100'></div>
                    <div className='width30 height-1100'>
                        <div className='width90 height40 display-flex justifyContent-center alignItems-center'>
                            <div className='width90 height90 borderR-15 border-black2 bg-test3'></div>
                        </div>
                        <div className='width90 height60 display-flex flexWrap-wrap justifyContent-end alignContent-evenly'>
                            <div className='width80 height25 border-black2 borderR-15 bg-test5'>
                                <img alt='image'/>
                            </div>
                            <div className='width80 height25 border-black2 borderR-15 bg-test5'>
                                <img alt='image'/>
                            </div>
                            <div className='width80 height25 border-black2 borderR-15 bg-test5'>
                                <img alt='image'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='width100 height-40 display-flex alignItems-center justifyContent-center bg-test3 '>
                    <h3>other user media</h3>
                </div>
                <div className='width100 height-400 marginT-15 marginB-15 display-flex justifyContent-center flexWrap-wrap borderR-15'>
                <NewsContent/>
                </div>
                <div className='width100 height-400 marginT-15 marginB-15 display-flex justifyContent-center flexWrap-wrap borderR-15'>
                <NewsContent/>
                </div>
                <PageNumber/>
            </div>
        </>
    )
}

function PageNumber(){
    return(
        <>
            <div className='width100 height-70 marginT-15 marginB-15 display-flex justifyContent-between alignItems-center borderR-15 bg-test0'>
             <ul className='width100 height100 display-flex justifyContent-center alignItems-center'>
             <li><button className='paddingT-5 paddingB-5 marginR-5 paddingR-10 paddingL-10 borderR-15 border-black2 pointer'>1</button></li>
             <li><button className='paddingT-5 paddingB-5 marginR-5 paddingR-10 paddingL-10 borderR-15 border-black2 pointer'>2</button></li>
             <li><button className='paddingT-5 paddingB-5 marginR-5 paddingR-10 paddingL-10 borderR-15 border-black2 pointer'>3</button></li>
             <li><button className='paddingT-5 paddingB-5 marginR-5 paddingR-10 paddingL-10 borderR-15 border-black2 pointer'>4</button></li>
                 <li><button className='paddingT-5 marginR-5 paddingB-5 paddingR-10 paddingL-10 borderR-15 border-black2 pointer'>...</button></li>
                 <li><button className='paddingT-5 marginR-5 paddingB-5 paddingR-10 paddingL-10 borderR-15 border-black2 pointer'>100</button></li>
             </ul>
         </div>
        </>
        )
}



function Blog() {
    return(
      <>
          <main>
              <div className='width100 height-400 marginT-15 marginB-15 display-flex justifyContent-center flexWrap-wrap borderR-15'>
                <NewsContentSlideShow/>
              </div>
              <div className='width100 height-60 display-flex justifyContent-center alignItems-center'>
                  <div className='width25 height-40 borderR-30 border-black2 bg-test3 display-flex justifyContent-center alignItems-center fontSize-20 bold pointer'>clear filter</div>
              </div>
         <FirstFilter/>
              <SeasonFilter/>
              <Filter3/>
              <NewsSubGroup/>
              <div className='width19 marginT-10 display-flex justifyContent-center flexWrap-wrap'>
                  <div className='width100 height-40 marginB-5 display-flex justifyContent-center alignItems-center borderR-15 border-black2 fontSize-20 bold bg-test6'>region</div>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <App/>
                  </div>
              </div>
              <div className='width19 marginT-10 display-flex justifyContent-center flexWrap-wrap'>
                  <div className='width100 height-40 marginB-5 display-flex justifyContent-center alignItems-center borderR-15 border-black2 fontSize-20 bold bg-test6'>leagues</div>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <App/>
                  </div>
              </div>
              <div className='width19 marginT-10 display-flex justifyContent-center flexWrap-wrap'>
                  <div className='width100 height-40 marginB-5 display-flex justifyContent-center alignItems-center borderR-15 border-black2 fontSize-20 bold bg-test6'>teams (rank)</div>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <App/>
                  </div>
              </div>
              <div className='width19 marginT-10 display-flex justifyContent-center flexWrap-wrap'>
                  <div className='width100 height-40 marginB-5 display-flex justifyContent-center alignItems-center borderR-15 border-black2 fontSize-20 bold bg-test6'>matches</div>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <App/>
                  </div>
              </div>
           <div className='width19 marginT-10 display-flex justifyContent-center flexWrap-wrap'>
                  <div className='width100 height-40 marginB-5 display-flex justifyContent-center alignItems-center borderR-15 border-black2 fontSize-20 bold bg-test6'>person</div>
                  <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap '>
                      <App/>
                  </div>
              </div>
              <div className='width100 height-60 display-flex justifyContent-center alignItems-center'>
                  <div className='width25 height-40 border-black2 borderR-30 bg-test3 display-flex justifyContent-center alignItems-center fontSize-20 bold pointer'>do filter</div>
              </div>
              <div className='width100 marginT-15 marginB-15 display-flex justifyContent-start flexWrap-wrap borderR-15'>
                  <h2 className='height-40 marginB-5 paddingT-10 paddingB-10 paddingR-40 paddingR-40 paddingL-40 display-flex justifyContent-center alignItems-center borderR-15 border-black2 fontSize-24 bold bg-test6'>slide show top news</h2>
              <NewsContent/>
              </div>
              <div className='width100 marginT-15 display-flex justifyContent-start flexWrap-wrap borderR-15'>
                  <h2 className='height-40 marginB-5 paddingT-10 paddingB-10 paddingR-40 paddingR-40 paddingL-40 display-flex justifyContent-center alignItems-center borderR-15 border-black2 fontSize-24 bold bg-test6'>last news</h2>
                  <NewsContent/>
              </div>
              <div className='width100 marginT-15 display-flex justifyContent-center flexWrap-wrap borderR-15'>
                  <NewsContent/>
              </div>
              <div className='width100 height-400 marginT-15 display-flex justifyContent-center flexWrap-wrap borderR-15'>
                  <NewsContent/>
              </div>
              <PageNumber/>
              <ActiveNews/>
          </main>
      </>
  );
}

export default Blog;