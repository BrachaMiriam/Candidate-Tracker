import React, {useState, useEffect} from "react";
import axios from 'axios';
import TableRow from "../components/TableRow";

const Refused =() => {

    const [refusedCandidates, setRefusedCandidates] = useState([]);

    useEffect(() => {
        const getRefusedCandidates = async () => {
            const {data} = await axios.get('/api/candidate/getrefusedcandidates');
            setRefusedCandidates(data);
        }
        getRefusedCandidates();
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
                    {!!refusedCandidates && refusedCandidates.map(c => 
                        <TableRow candidate={c} key={c.id} isPending={false} />)}
                </tbody>
            </table>
        </div>
    )
}
export default Refused;