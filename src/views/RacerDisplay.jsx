import React, { useEffect, useState } from 'react';

export default function RacerDisplay() {

    const [season, setSeason] = useState(2023);
    const [round, setRound] = useState(1);
    const [racers, setRacers] = useState([]);

    useEffect(() => {
        console.log('Hello I am the effect and I have been executed');
        fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
                setRacers(racerStandings);
            })
    }, [season, round]);

    const tableHeaders = ["#", 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor'];

    const handleFormSubmit = event => {
        event.preventDefault();
        let season = event.target.season.value;
        let round = event.target.round.value;
        setSeason(season);
        setRound(round);
        event.target.season.value = '';
        event.target.round.value = '';
    };

    // function handleFormSubmit(event){
    //     event.preventDefault();
    //     let season = event.target.season.value;
    //     let round = event.target.round.value;
    //     setSeason(season);
    //     setRound(round);
    //     event.target.season.value = '';
    //     event.target.round.value = '';
    // };

    return (
        <div>
            <h1 className="text-center">Racer Standings</h1>

            <form action="" className='row my-3' onSubmit={handleFormSubmit}>
                <div className="col-12 col-md-5">
                    <input type="text" name="season" className="form-control" placeholder='Enter Season e.g. 2023'/>
                </div>
                <div className="col-12 col-md-5">
                    <input type="text" name="round" className="form-control" placeholder='Enter Round e.g. 1' />
                </div>
                <div className="col">
                    <input type="submit" value="Search" className="btn btn-success w-100" />
                </div>
            </form>

            <table className="table table-primary table-striped">
                <thead>
                    <tr>
                        {tableHeaders.map(header => <th key={header}>{header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {racers.map( racer => (
                        <tr key={racer.position}>
                            <th>{racer.position}</th>
                            <th>{racer.Driver.givenName}</th>
                            <th>{racer.Driver.familyName}</th>
                            <th>{racer.points}</th>
                            <th>{racer.wins}</th>
                            <th>{racer.Driver.nationality}</th>
                            <th>{racer.Constructors[0].name}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
