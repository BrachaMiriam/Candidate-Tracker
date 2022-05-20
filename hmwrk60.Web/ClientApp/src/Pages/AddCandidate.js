import React, {useState} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useCandidateCount } from "../CandidateContext";

const AddCandidate = () => {
    const[candidate, setCandidate] = useState({firstName: '', lastName: '', email: '', phoneNummber: '', notes: ''});
    const history = useHistory();
    const {updatePendingCount} = useCandidateCount();

    const onTextChange = e => {
        setCandidate({
            ...candidate,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitClick = async() => {
        await axios.post('/api/candidate/addcandidate', {...candidate});
        updatePendingCount();
        history.push('/');
    }



    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h3>AddCandidate</h3>
                    <input type="text" name="firstName" placeholder="First Name" className="form-control" onChange={onTextChange}/>
                    <br/>
                    <input type="text" name="lastName" placeholder="Last Name" className="form-control" onChange={onTextChange}/>
                    <br/>
                    <input type="text" name="email" placeholder="Email" className="form-control" onChange={onTextChange}/>
                    <br/>
                    <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-control" onChange={onTextChange}/>
                    <br/><textarea rows="5" className="form-control" name="notes" onChange={onTextChange}></textarea>
                    <br/>
                    <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
            </div>
        </div>
    </div>
    )
}
export default AddCandidate;

