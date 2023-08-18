import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import StyledButton from '../buttons/Button';
import { useDispatch, useSelector } from 'react-redux'
import { userAdded } from '../../redux/userSlice';
import useId from '@mui/material/utils/useId';
import { nanoid } from '@reduxjs/toolkit'
import DoneIcon from '@mui/icons-material/Done';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
   [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
   },
   [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         borderColor: 'deeppink',
      },
   },
   [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         borderColor: 'deeppink',
      },
   },
   [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
   },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
   ({ theme, ownerState }) => ({
      color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
      ...(ownerState.active && {
         color: 'deeppink',
      }),
      '& .QontoStepIcon-completedIcon': {
         color: 'deeppink',
         zIndex: 1,
         fontSize: 18,
      },
      '& .QontoStepIcon-circle': {
         width: 8,
         height: 8,
         borderRadius: '50%',
         backgroundColor: 'currentColor',
      },
   }),
);

function QontoStepIcon(props: StepIconProps) {
   const { active, completed, className } = props;

   return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
         {completed ? (
            <Check className="QontoStepIcon-completedIcon" />
         ) : (
            <div className="QontoStepIcon-circle" />
         )}
      </QontoStepIconRoot>
   );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
   [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
   },
   [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         backgroundImage:
            'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
   },
   [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
         backgroundImage:
            'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      },
   },
   [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
         theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
   },
}));

const ColorlibStepIconRoot = styled('div')<{
   ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
   zIndex: 1,
   color: '#fff',
   width: 50,
   height: 50,
   display: 'flex',
   borderRadius: '50%',
   justifyContent: 'center',
   alignItems: 'center',
   ...(ownerState.active && {
      backgroundImage:
         'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
   }),
   ...(ownerState.completed && {
      backgroundImage:
         'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
   }),
}));

function ColorlibStepIcon(props: StepIconProps) {
   const { active, completed, className } = props;

   const icons: { [index: string]: React.ReactElement } = {
      1: <SettingsIcon />,
      2: <GroupAddIcon />,
      3: <VideoLabelIcon />,
   };

   return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
         {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
   );
}

const steps = ['Details', 'Configuration', 'Tags', 'Alerts'];

const stepNames = ['first', 'second', 'third', 'fourth']

interface MyObject {
   [key: string]: JSX.Element;
}

const stepList: MyObject = {
   first: <Step1 />,
   second: <Step2 />,
   third: <Step3 />,
   fourth: <Step4 />,
}

export default function CustomizedSteppers() {
   const [step, setStep] = React.useState(0);
   const str = stepNames[step];

   let CurrentStepComponent = stepList[stepNames[step]];

   const [width, setWidth] = useState<number>(window.innerWidth);

   const dispatch = useDispatch();

   const steps = useSelector((state: any) => state.steps)

   const onClick = (event: any) => {
      setStep(step + 1)
      dispatch(userAdded({ id: 1, data: steps[0].data }, { id: 2, data: steps[1].data }, { id: 3, data: steps[2].data }))
   }

   function handleWindowSizeChange() {
      setWidth(window.innerWidth);
   }
   useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
         window.removeEventListener('resize', handleWindowSizeChange);
      }
   }, []);



   const isMobile = width <= 768;

   return (
      <Stack sx={{ width: '100%', margin: '26px' }} spacing={4}>
         <div style={{ margin: '46px', fontSize: '26px', color: 'gray', fontWeight: 600 }}>Create New Customer</div>
         <Stepper alternativeLabel activeStep={step} connector={<QontoConnector />}>
            {steps.map((theStep: any) => (
               <Step key={nanoid()} sx={{
                  '& .MuiStepLabel-root .Mui-completed': {
                     color: 'red', // circle color (COMPLETED)
                  },
                  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                  {
                     color: 'black', // Just text label (COMPLETED)
                     fontWeight: '600'
                  },
                  '& .MuiStepLabel-root .Mui-active': {
                     color: 'green', // circle color (ACTIVE)
                  },
                  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                  {
                     color: 'gray', // Just text label (ACTIVE)
                     fontWeight: '600'
                  },
                  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                     fill: 'pink', // circle's number (ACTIVE)
                  },
               }}>
                  <StepLabel key={nanoid()} StepIconComponent={QontoStepIcon}>{theStep.id}</StepLabel>

               </Step>

            ))}
         </Stepper>
         {CurrentStepComponent}
         <div className='buttonArea' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <StyledButton disabled={step === 0 || step === 4} variant="contained" customColor="black" backgroundColor="lightgray" onClick={() => setStep(step === 0 ? step : step - 1)}>
               Back
            </StyledButton>
            <StyledButton disabled={step === 4} variant="contained" customColor="white" backgroundColor="deeppink" onClick={step === 3 ? (e: any) => onClick(e) : () => setStep(step + 1)}>
               {step === 4 ? "Finished" : step === 3 ? "Create" : "Next"}
            </StyledButton>

         </div>
         <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '64px', color: 'deeppink' }}>

            {step === 4 ? <div>User created successfully </div> : ''}
            {step === 4 ? <div><DoneIcon fontSize="large" sx={{ paddingLeft: '8px' }} /> </div> : ''}
            
         </div>

      </Stack>
   );
}