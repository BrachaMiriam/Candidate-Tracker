import React, {useState, useEffect} from "react";
import axios from 'axios';
import TableRow from "../components/TableRow";

const Pending = () => {
    const [pendingCandidates, setPendingCandidates] = useState([]);

    useEffect(() => {
        const getPendingCandidates = async () => {
            const {data} = await axios.get('/api/candidate/getpendingcandidates');
            setPendingCandidates(data);
        }
        getPendingCandidates();
    }, [])

    return (
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
                    {!!pendingCandidates && pendingCandidates.map(c => 
                        <TableRow candidate={c} key={c.id} isPending={true} />)}
                </tbody>
            </table>
        </div>
    )
}
export default Pending;