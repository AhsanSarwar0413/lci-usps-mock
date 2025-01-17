import { useEffect, useState } from "react";
import { getFormatTime } from "./utils";
import './styles.css';

const Adhoc = () => {
    const [adhocData, setAdhocData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchDatafromTextFile = async () => {
            setLoading(true);
            const responseInText = await fetch(`${import.meta.env.VITE_HOST}/data/ad-hoc.txt`);
            let responseData = await responseInText.text();
            responseData = responseData.replace('Ad-hoc Data:-', '').trim();
            responseData = JSON.parse(responseData);
            setAdhocData(responseData);
            setLoading(false);
        }
        fetchDatafromTextFile();

    }, []);
    return (
        <div className="adhoc-table">
            {(adhocData !== null && loading === false) ? (
                <table>
                    <thead>
                        <tr>
                            <th>Bucket</th>
                            <th>Op-Code</th>
                            <th>Hours Used</th>
                            <th>Total Hours</th>
                            <th>Graphs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adhocData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.taskDesc}</td>
                                <td>{data.opCode === null && data.opCodeDesc == null ? '---' : `${data.opCode} - ${data.opCodeDesc}`}</td>
                                <td>{data.usedTime > 0 ? getFormatTime(data.usedTime) : '---'}</td>
                                <td>{data.yearlyMinsSetAside > 0 ? getFormatTime(data.yearlyMinsSetAside) : '---'}</td>
                                <td>
                                    <div className="graph-bar">
                                        <div className="graph-fill" style={{ width: `${Math.random() * 101}%` }}></div>
                                    </div>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            ) : (loading === true ? (
                <p>Loading...</p>
                ) : (
                    <p>No Data Found.</p>
                    )
            )}

        </div>
    );
};

export default Adhoc;
