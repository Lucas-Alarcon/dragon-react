import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetLog } from '../actions/actions-types';

const Log = () => {

    const { logs } = useSelector(state => state.log);
    const dispatch = useDispatch()

    return (
        <>
            {logs.length > 0 &&
                <div>
                    <h4>Logs :</h4>
                    <ul className="list-group">
                        {logs.map((log, i) => { return <li className="list-group-item" key={i}>{log}</li> })}
                    </ul>
                    <button className="btn btn-secondary" onClick={() => dispatch(resetLog())}>Reset logs</button>
                </div>
            }
        </>
    );
}

export default Log;
