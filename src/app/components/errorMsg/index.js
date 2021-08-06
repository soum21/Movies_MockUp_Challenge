import React,{useContext} from 'react'
import { Context } from '../../config/context';
import PropTypes from 'prop-types';

function ErrorMsg({errCode,errMsg}) {
    const [state, dispatch] = useContext(Context);
    const {errorMsg, errorCode} = state.error ;
    return (
        <div>
            {
                errorCode || errCode ?
                    <div className='alert alert-danger' role='alert' style={{ textAlign: 'center' }}>
                        {errorMsg || errMsg}
                    </div> : null
            }
        </div>
    );
}

ErrorMsg.poptypes ={
    errCode: PropTypes.number,
    errMsg: PropTypes.string
}

export default ErrorMsg;
