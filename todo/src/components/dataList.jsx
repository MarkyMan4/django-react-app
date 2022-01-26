import React, { useState, useEffect } from 'react';
import { getData } from '../api/requests';

function DataList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData()
            .then(res => setData(res))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {data.map((d, i) => <h4 key={i}>{d.task}</h4>)}
        </div>
    );
}

export default DataList;