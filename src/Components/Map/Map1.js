import React  from 'react';
import {useEffect,useState} from 'react';
import axios from "axios";

function Map({map,setMap,mapURL,setMapURL}) {
    let svg=[];
    axios.get(mapURL).then(res => {
            return svg.push(res.data.split(`<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">`));
        }
    ).then(()=>{
 setMap(svg[0][1].replace('<svg width="1440pt" height="1080pt" viewBox="0 0 1440 1080" enable-background="new 0 0 1440 1080"\n' +
     '\tversion="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >','<svg  id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"\n' +
     '             xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1749.6 1312.2" >'))
    })
    const changeMap = (event) => {
        const fillValue = event.target.getAttribute('fill');
        if (fillValue === '#FFFF73') {
            setMapURL("https://db.wincent.studio/LogoDB/MapLogo/NorthAmerica.svg");
        }
        else if(fillValue==='#00A9E6'){
            setMapURL("https://db.wincent.studio/LogoDB/MapLogo/Africa.svg");
        }
        else if(fillValue==='#FFC700'){
            setMapURL("https://db.wincent.studio/LogoDB/MapLogo/Australia.svg");
        }
        else if(fillValue==='#FF73DF'){
            setMapURL("https://db.wincent.studio/LogoDB/MapLogo/Asia.svg");
        }
        else if(fillValue==='#00FFC5'){
            setMapURL("https://db.wincent.studio/LogoDB/MapLogo/Europe.svg");
        }
        else if(fillValue==='#F57A7A'){
            setMapURL("https://db.wincent.studio/LogoDB/MapLogo/SouthAmerica.svg");
        }
        else{
            console.log("Ocean")
        }
    };
    return (<>
        <div className='xl-position-absolute xl-width-30 xl-height-30  xl-left-30 xl-bottom-30 xl-zIndex-2 m-position-absolute m-width-30 m-height-30 m-left-30 m-bottom-30 m-zIndex-2' onClick={()=>{
            setMapURL('https://db.wincent.studio/LogoDB/MapLogo/World(2).svg')
        }}>back</div>
        <div onClick={changeMap} className='xl-marginL-20 xl-width100 xl-height100 xl-justifyContent-center xl-alignContent-center xl-display-flex xl-position-absolut xl-right-0' dangerouslySetInnerHTML={{__html: map}}>
        </div>
        </>
    )
}
export default Map;



