import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { displayEmployee } from '../actions';

let Employee = ({ employee, displayEmployee }) => (


  
employee ?
  employee.map((profile, i)=>{
    return (
      <Wrapper key={i}>
        <div className='profile'>
          <div className='avatar'>
            <img src={profile.avatar} alt={profile.avatar} title={profile.avatar} />
          </div>
          <div className='details'>
            <h4>{profile.firstName} {profile.lastName}</h4>
            <p>{profile.bio}</p>
            <button onClick={() => displayEmployee(profile)}>DETAILS</button>
          </div>
        </div>
      </Wrapper>
    )
  })
  : 
  null
);

const mapStateToProps = (state) => ({
  employee: state.employee,
})
const mapDispatchToProps = {
  displayEmployee: displayEmployee,
}

const Wrapper = styled.div`
.profile {
    display: flex;
    flex-direction: row;
    width: 97.5%;
    min-height: 270px;
    max-width: 600px;
    @media screen and (min-width: 769px) {
        max-width: 380px;
    }
    border: 1px solid #000;
    line-height: 1rem;
    margin: 0 1% 1% 1%;
    .details {
      margin: 0 3% 0 8%;
      @media screen and (min-width: 321px) {
        margin: 0 1rem;
      }
      @media screen and (min-width: 789px) {
        margin: 0 1.5rem;
      }
      p {
        font-size: 0.95rem;
      }
    }
    img {
      padding: 10% 0 0 10%;
    }
}`

export default connect(mapStateToProps,mapDispatchToProps)(Employee)