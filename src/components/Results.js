import React from 'react';
import BuildResults from './BuildResults.js';


const Results = ({ results,minDate,maxDate }) => {
    // initial render will be empty
    if (results === 'none' || results === undefined || results === null) {
        return null
    }

    // filters too specific
    if (results.length === 0) {
        return (
            <p>No results - try broadening your search filters!</p>
        )
    }
    return (
        <ul>
            {/* map array object and create BuildResult table for each fetched response */}
            {results.map((result, i) => {
                return (
                    <BuildResults key={i} Difficulty={result.value} Category={result.category.title}
                                 Question= {result.question} Answer={result.answer} Air_Date={(result.airdate+"").toString()}
                                 ID={result.id} />    
                )
            })};
        </ul>
    )
    // was going to manually filter the min and max dates as the API isn't seem to be working properly, but ran out of time
    /** 
    return (
        <ul>
            {results.map((result, i) => {
                if (minDate == null && maxDate == null) {
                    return (
                        <BuildResults key={i} Difficulty={result.value} Category={result.category.title}
                                    Question= {result.question} Answer={result.answer} Air_Date={(result.airdate+"").toString()}
                                    ID={result.id} />    
                    )
                }
                minDate = parseInt(minDate);
                maxDate = parseInt(maxDate);
                var airDate = parseInt(result.airdate.split("-")[0]);

                if (minDate <= airDate && airDate <= maxDate) {
                    return (
                        <BuildResults key={i} Difficulty={result.value} Category={result.category.title}
                                    Question= {result.question} Answer={result.answer} Air_Date={(result.airdate+"").toString()}
                                    ID={result.id} />    
                    )
                } else {
                    return null
                }
            })}};
        </ul>
    )
    */
}

export default Results;