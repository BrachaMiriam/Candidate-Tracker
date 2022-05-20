import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CandidateContext = createContext();
const CandidateContextComponent = ({children}) => {
    const[pendingCount, setPendingCount] = useState(0);
    const[confirmedCount, setConfirmedCount] = useState(0);
    const[refusedCount, setRefusedCount] = useState(0);

    const updatePendingCount = async () => {
        const {data} = await axios.get('/api/candidate/getpendingcount');
        setPendingCount(data.count);
    }

    const updateConfirmedCount = async () => {
        const {data} = await axios.get('/api/candidate/getconfirmedcount');
        setConfirmedCount(data.count);
    }

    const updateRefusedCount = async () => {
        const {data} = await axios.get('/api/candidate/getrefusedcount');
        setRefusedCount(data.count);
    }

    useEffect(() => {
        updatePendingCount();
        updateConfirmedCount();
        updateRefusedCount();
    }, [])
    return(
        <CandidateContext.Provider value={{ pendingCount, updatePendingCount,
                                            confirmedCount, updateConfirmedCount,
                                            refusedCount, updateRefusedCount }}>
            {children}
        </CandidateContext.Provider>
    )
}

const useCandidateCount = () => {
    return useContext(CandidateContext);
}

export {CandidateContextComponent, useCandidateCount};