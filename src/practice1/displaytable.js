import React, { useState, useEffect} from "react";
import { getData } from './data';
import './style.css'; 
import { useEffect, useState } from 'react';

export const displaytable = () => { 

    const [dataList, setDataList] = useState(); 

    return(
        <div>
            <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
        </div>
    )

}