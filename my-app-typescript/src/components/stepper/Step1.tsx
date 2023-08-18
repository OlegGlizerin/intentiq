import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { stepUpdated } from '../../redux/stepsSlice'
import TextField from '@mui/material/TextField';
function Step1() {
   const dispatch = useDispatch();


   const onChange = (event: any) => {
      dispatch(stepUpdated({ id: 1, data: event.target.value }))
   }

   return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '32px' }}>
         <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue=""
            onChange={onChange}
         />
      </div >
   );
}

export default Step1;




