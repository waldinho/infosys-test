import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Button from './Button'
import { closeLightbox } from '../actions'

let Lightbox = ({lightbox}) => {  
  return (
    <>
    <Wrapper>
      <div className='details'>
        <div className='left'>
          <Button />  
          <img src={lightbox.avatar} alt={lightbox.avatar} title={lightbox.avatar} />
          <p>Age {lightbox.age}</p>
          <p>{lightbox.jobTitle}</p>
          <p>Started {lightbox.dateJoined.slice(0,10)}</p>
        </div>
        <div className='right'>
          <h2>{lightbox.firstName} {lightbox.lastName}</h2>
          <p>{lightbox.bio}</p>
        </div>
      </div>
      
    </Wrapper>
    </>
  )
}

const mapStateToProps = (state) => ({
  lightbox: state.lightbox,
})
const mapDispatchToProps = {
  closeLightbox: closeLightbox,
}

const Wrapper = styled.div`
position: fixed; 
z-index: 1; 
left: 0;
top: 0;
width: 100%; 
height: 100%; 
overflow: auto; 
background-color: rgb(0,0,0); 
background-color: rgba(0,0,0,0.4);
  .details {
    background-color: #fefefe;
    margin: 20vh auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    @media screen and (min-width: 426px) {
      width: 50%;
      margin: 25vh auto;
    }
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 321px) {
      flex-direction: row;
    }
    line-height: 1rem;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      @media screen and (min-width: 321px) {
        width: 35%
      }
    }
    .right {
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        width: 100%;
        padding: 0 2.5%;
        @media screen and (min-width: 321px) {
            position: relative;
            top: -10vh;
            width: 65%;
        }
    }
  }
`

export default connect(mapStateToProps,mapDispatchToProps)(Lightbox)