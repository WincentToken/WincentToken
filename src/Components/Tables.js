
import React from 'react';
import { FirstFilter, Filter3 } from './FirstFilter';
import App from './App';
import RegionList from "./Lists/RegionList";
import SmallLeagueList from "./Lists/SmallLeagueList";
import SmallTeamList from "./Lists/SmallTeamList";
import SmallMatchList from "./Lists/SmallMatchList";
import SmallPlayerList from "./Lists/SmallPlayerList";
import { useEffect, useState } from 'react';

function AddDeleteTableRows() {


    const [rowsData, setRowsData] = useState([]);

    const addTableRows = () => {

        const rowsInput = {
            fullName: '',
            emailAddress: '',
            salary: ''
        }
        setRowsData([...rowsData, rowsInput])

    }
    const deleteTableRows = (index) => {
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
    }

    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target;
        const rowsInput = [...rowsData];
        rowsInput[index][name] = value;
        setRowsData(rowsInput);



    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Email Address</th>
                                <th>Salary</th>
                                <th><button className="btn btn-outline-success" onClick={addTableRows} >+</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRows rowsData={rowsData} deleteTableRows={deleteTableRows} handleChange={handleChange} />

                        </tbody>
                    </table>

                </div>
                <div className="col-sm-4">

                </div>
            </div>
        </div>
    )

}

function TableRows({ rowsData, deleteTableRows, handleChange }) {


    return (

        rowsData.map((data, index) => {
            const { fullName, emailAddress, salary } = data;
            return (
                <>
                    <tr key={index}>
                        <td>
                            <input type="text" value={fullName} onChange={(evnt) => (handleChange(index, evnt))} name="fullName" className="form-control" />
                        </td>
                    </tr>
                    <tr key={index}>
                    <td><input type="text" value={emailAddress} onChange={(evnt) => (handleChange(index, evnt))} name="emailAddress" className="form-control" /> </td>
                    </tr>
                    
                    <td><input type="text" value={salary} onChange={(evnt) => (handleChange(index, evnt))} name="salary" className="form-control" /> </td>
                    <tr>
                    <td><button className="btn btn-outline-danger" onClick={() => (deleteTableRows(index))}>x</button></td>
                </tr>
</>
            )
        })
   
    )
    
}

let flag = true;
function TableFilter() {
    const [openCloseFilter, setOpenCloseFilter] = useState('width100 overflow-hidden height0 display-flex justifyContent-between flexWrap-wrap bg-blur1 marginT-15');
    const [filterToggle,setFilterToggle]=useState('height95 borderR50 position-absolute display-flex justifyContent-between alignItems-center zIndex-2 opactity60');
    const [filteroffOrOn,setFilterffOrOn]=useState('Filter off');
    const [filteroffOrOnText,setFilterffOrOnText]=useState('text-center bold fontSize-20 color-white position-absolute right-10 opactity60');
    function openOrClose() {
        if (flag == true) {
            setOpenCloseFilter('width100 overflow-hidden openMatchFilter display-flex justifyContent-between alignContent-center flexWrap-wrap bg-blur1 marginT-15');
            setFilterToggle('height95 borderR50 marginL-15 position-absolute toggleFilterOn display-flex justifyContent-between alignItems-center zIndex-2');
            setFilterffOrOn('Filter on');
            setFilterffOrOnText("text-center bold fontSize-20 color-white position-absolute left-10");
            flag = false;

        }
        else {
            setOpenCloseFilter('width100 overflow-hidden closeMatchFilter display-flex justifyContent-between alignContent-center flexWrap-wrap bg-blur1 marginT-15');
            setFilterToggle('height95 borderR50 position-absolute toggleFilterOff display-flex justifyContent-between alignItems-center zIndex-2');
            setFilterffOrOn('Filter off');
            setFilterffOrOnText("text-center bold fontSize-20 color-white position-absolute right-10 opactity60");
            flag = true;
        }
    }
    const [leagues, setLeagues] = useState([]);
    const [teams, setTeams] = useState([]);
    return (
        <>
            <div className={openCloseFilter}>
                <div className='width100 height-60 display-flex justifyContent-center alignItems-center'>
                    <div className='width25 height-40 borderR-10 border-black2 bg-test3 display-flex justifyContent-center alignItems-center fontSize-20 bold pointer color-white'>reset filter</div>
                </div>
                <FirstFilter />
                <Filter3 />
                <div className='width100 display-flex justifyContent-center'>
                    <div className='width19 marginT-10 display-flex justifyContent-center flexWrap-wrap'>
                        <div className='width100 height-40 marginB-5 display-flex justifyContent-center alignItems-center border-white2 fontSize-20 bold bg-test4 color-white'>region</div>
                        <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap border-white2 bg-test4'>
                            <RegionList setLeagues={setLeagues} setTeams={setTeams}/>
                        </div>
                    </div>
                    <div className='width19 marginT-10 marginL-15 display-flex justifyContent-center flexWrap-wrap'>
                        <div className='width100 height-40 marginB-5 display-flex justifyContent-center alignItems-center border-white2 fontSize-20 bold bg-test4 color-white'>leagues</div>
                        <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap border-white2 bg-test4'>
                            <SmallLeagueList leagues={leagues} setTeams={setTeams}/>
                        </div>
                    </div>
                    <div className='width19 marginT-10 marginL-15 display-flex justifyContent-center flexWrap-wrap'>
                        <div className='width100 height-40 marginB-5 display-flex justifyContent-center alignItems-center border-white2 fontSize-20 bold bg-test4 color-white'>teams</div>
                        <div className='width100 height-500 overflow-hidden display-flex flexWrap-wrap border-white2 bg-test4'>
                            <SmallTeamList teams={teams}/>
                        </div>
                    </div>
                </div>
                <div className='width100 height-60 display-flex justifyContent-center alignItems-center'>
                    <div className='width25 height-40 borderR-10 border-black2 bg-test3 display-flex justifyContent-center alignItems-center fontSize-20 bold pointer color-white'>do filter</div>
                </div>
            </div>
            <div className='width100 display-flex justifyContent-center'>
            <div className='width-150 height-50 marginT-15 marginB-15 borderR-30 border-white2 display-flex alignItems-center justifyContent-start bg-test4 position-relative pointer' onClick={openOrClose}>
            <div className='display-flex alignItems-center'>
                <img src='ball.png' className={filterToggle}/>
                <div className={filteroffOrOnText}>{filteroffOrOn}</div>
            </div>
        </div>
            </div>
        </>
    )
}

function PageNumber() {
    return (
        <>
            <div className='width100 height-70 marginT-15 marginB-15 display-flex justifyContent-between alignItems-cente border-white2 bg-test4'>
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

function Table() {

    return (
        <>
            <AddDeleteTableRows />
        </>
    )
}

function Tables() {
    return (
        <>
            <main>
                <TableFilter />
                <div className='width100 height-400 bg-test4 border-white2'>
                    <Table />
                </div>
                <PageNumber />
            </main>
        </>
    );
}
export default Tables;
