import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCandidateCount } from '../CandidateContext';

const Details = () => {
    const {updateRefusedCount, updateConfirmedCount, updatePendingCount } = useCandidateCount();
    const {id} = useParams();
    const[candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        notes: '',
        registrationStatus:''
    });

    useEffect(() => {
        const getCandidate = async () => {
            const {data} = await axios.get(`/api/candidate/getcandidate?id=${id}`);
            setCandidate(data);
        }
        getCandidate();
    },[]);

    const onRefuseClick = async () => {
        await axios.post('/api/candidate/refusecandidate', candidate);
        updateRefusedCount();
        updatePendingCount();
        candidate.registrationStatus = 'refused';
    }

    const onConfirmClick = async () => {
        await axios.post('/api/candidate/confirmcandidate', candidate);
        updateConfirmedCount();
        updatePendingCount();
        candidate.registrationStatus = 'confirmed';
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card card-body bg-light'>
                        <h4>Name: {`${candidate.firstName} ${candidate.lastName}`}</h4>
                        <h4>Email: {candidate.email}</h4>
                        <h4>Phone: {candidate.phoneNumber}</h4>
                        <h6>Notes: {candidate.notes}</h6> 
                        {candidate.registrationStatus == 'Pending' &&      
                        <div>
                            <button className='btn btn-primary' onClick={onConfirmClick}>Confirm</button>
                            <button className='btn btn-danger' onClick={onRefuseClick}>Refuse</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details;