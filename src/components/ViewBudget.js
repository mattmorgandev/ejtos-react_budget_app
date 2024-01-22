import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ViewBudget = (props) => {
    const { currency } = useContext(AppContext);

    return (
        <>
            <span>Budget: {currency}{props.budget}</span>
            <button type='button' class='btn btn-primary' onClick={props.handleEditClick}>Edit</button>
        </>
    );
};

export default ViewBudget;