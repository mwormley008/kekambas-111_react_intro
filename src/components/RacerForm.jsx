import React from 'react'

export default function RacerForm({ updateRacers }) {

    const handleFormSubmit = event => {
        event.preventDefault();
        let season = event.target.season.value;
        let round = event.target.round.value;
        updateRacers(season, round);
        event.target.season.value = '';
        event.target.round.value = '';
    };

    return (
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
    )
}
