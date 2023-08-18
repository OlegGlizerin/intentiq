import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@mui/material/TextField';
function Step4() {




   return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
         <div style={{ fontSize: '36px', fontWeight: 300, color: 'deeppink', padding: '12px' }}>
            Yey finished all steps, to Finish please click create.
         </div >
         <div style={{ fontSize: '16px', fontWeight: 200, color: 'gray', padding: '12px' }}>
            * It will trigger redux update
         </div >
      </div>
   );
}

export default Step4;




