import React from 'react';

const Status = ( { charStatus } ) => {

    if (charStatus === "Alive"){
        return (
            <div style={{backgroundColor: "green", width: 10, height: 10, borderRadius: 10}}></div>
        )
    } else if (charStatus === "Dead"){
        return (
            <div style={{backgroundColor: "red", width: 10, height: 10, borderRadius: 10}}></div>
        )
    } else if (charStatus === "unknown"){
        return (
            <div style={{backgroundColor: "gray", width: 10, height: 10, borderRadius: 10}}></div>
        )
    }

};

export default Status;