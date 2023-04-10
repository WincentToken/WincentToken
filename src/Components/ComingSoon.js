import React from 'react';


// function ComingSoon() {
//
//     return (
//         <div className='xl-width-1200 xl-height-700 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-bg-test4 xl-marginLR-auto xl-overflow-hidden m-width-690 m-height-500 m-display-flex m-justifyContent-center m-alignItems-center m-bg-test4 m-marginLR-auto m-overflow-hidden s-width95 s-height-500 s-display-flex s-justifyContent-center s-alignItems-center s-bg-test4 s-marginLR-auto'>
//             <div className='xl-fontSize-45 xl-color-white xl-bold m-fontSize-40 m-color-white m-bold s-fontSize-34 s-color-white s-bold'>Coming soon</div>
//             <div className='xl-width-80 xl-height-80 xl-display-flex xl-justifyContent-center xl-alignItems-center xl-borderR50 xl-overflow-hidden xl-ballAnimate m-width-50 m-height-50 m-display-flex m-justifyContent-center m-alignItems-center m-borderR50 m-overflow-hidden m-ballAnimate s-width-50 s-height-50 s-display-flex s-justifyContent-center s-alignItems-center s-borderR50 s-overflow-hidden s-ballAnimate'>
//             <img className='xl-width100 xl-height100 m-width100 m-height100 s-width100 s-height100' src='ball.png'/>
//             </div>
//         </div>
//     )
// }

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ComingSoon() {
    const [items, setItems] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        fetch('/api/items')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error(error));
    }, []);

    function handleClick(id) {
        history.push(`/items/${id}`);
    }

    return (
        <ul>
            {items.map(item => (
                <li key={item.id} onClick={() => handleClick(item.id)}>
                    {item.name}
                </li>
            ))}
        </ul>
    );
}

export default ComingSoon;




