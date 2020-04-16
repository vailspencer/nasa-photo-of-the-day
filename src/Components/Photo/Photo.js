import React from 'react';
import styled from 'styled-components'

const PhotoBox = styled.div `
padding:35px;
background-color:#E9B44C;
box-shadow:
  0 3.2px 2.2px rgba(0, 0, 0, 0.059),
  0 7.6px 5.3px rgba(0, 0, 0, 0.085),
  0 14.4px 10px rgba(0, 0, 0, 0.105),
  0 25.7px 17.9px rgba(0, 0, 0, 0.125),
  0 48px 33.4px rgba(0, 0, 0, 0.151),
  0 115px 80px rgba(0, 0, 0, 0.21);
width:80%;
margin:auto;


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