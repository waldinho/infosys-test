import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

const Header = ({ company }) => {
    return (
        company ? 
        <Wrapper>
            <header className='App-header'>
                <div className='left'>
                    <h4 aria-label={company.companyName}>{company.companyName}</h4>
                    <p aria-label={company.companyMotto}>{company.companyMotto}</p>
                </div>
                <div className='right'>
                    <p aria-label={company.companyEst.slice(0,10)}>Since {company.companyEst.slice(0,10)}</p>
                </div>
            </header>
        </Wrapper>
        : null
    )
}

const mapStateToProps = (state) => ({
    company: state.company,
})

const Wrapper = styled.div`
.App-header {
    background-color: #333;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    font-size: calc(10px + 2vmin);
    color: white;
    min-width: 335px;
    position: fixed;
    top: 0;
    width: -webkit-fill-available;
    z-index: 2;
    width: 100%
    padding: 2.5% 2.5% 0 2.5%;
    .left {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 45%
    }
    .right {
        display: flex;
        justify-content: flex-end;
        width: 45%;
        @media screen and (min-width: 321px) {
            width: 50%
        }
    }
}
`
export default connect(mapStateToProps,null)(Header)