import React from 'react';
import styled from 'styled-components'

const PhotoBox = styled.div `
padding:35px;

` 


const Photo = ({theDate,theTitle, theUrl, theExplanation, copyright}) => {
console.log(theTitle)
   return(
    <div>
        <PhotoBox>
        <div>
        <img src={theUrl} alt= 'Space'/>
        </div>
        <h2>Date:{theDate}</h2>
        <div> By: {copyright}</div>

        <div>
            <p>{theExplanation}</p>
        </div>
        </PhotoBox>
        </div>
   )
}

export default Photo;