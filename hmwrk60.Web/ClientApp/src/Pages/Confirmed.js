import React, {useState, useEffect} from "react";
import axios from 'axios';
import TableRow from "../components/TableRow";

const Confirmed =() => {

    const [confirmedCandidates, setConfirmedCandidates] = useState([]);

    useEffect(() => {
        const getConfirmedCandidates = async () => {
            const {data} = await axios.get('/api/candidate/getconfirmedcandidates');
            setConfirmedCandidates(data);
        }
        getConfirmedCandidates();
    }, []);

    return(
        <div className="container">
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {!!confirmedCandidates && confirmedCandidates.map(c => 
                        <TableRow candidate={c} key={c.id} isPending={false} />)}
                </tbody>
            </table>
        </div>
    )
}
export default Confirmed;