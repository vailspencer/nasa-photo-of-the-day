import React from 'react';

const Photo = ({theDate,theTitle, theUrl, theExplanation, copyright}) => {
   console.log(theTitle)
   return(
       <div>
        <div>
            <img src={theUrl} alt= 'Space'/>
        </div>
        <h2>Date:{theDate}</h2>
        <div> By: {copyright}</div>

        <div>
            <p>{theExplanation}</p>
        </div>
       </div>
   )
}

export default Photo;