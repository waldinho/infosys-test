import React from 'react';
import { connect } from 'react-redux';
import { closeLightbox } from '../actions';
let Button=({closeLightbox})=>(
   <button onClick={closeLightbox}>CLOSE</button>
)
const mapDispatchToProps = {
    closeLightbox: closeLightbox,
}

export default connect(null,mapDispatchToProps)(Button)