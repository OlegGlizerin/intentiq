import React from 'react';
import { Button, withStyles, styled } from '@mui/material';
interface ButtonProps {
   variant?: 'text' | 'contained' | 'outlined';
   customColor: string;
   backgroundColor: string;
   children?: React.ReactNode;
   leftBorder?: boolean;
   rightBorder?: boolean;
   onClick?: any;
   disabled?: boolean;
}
const CustomStyledButton = styled(Button)<{ customColor: string, backgroundColor: string, leftBorder?: boolean, rightBorder?: boolean }>((props: ButtonProps) => ({
   backgroundColor: props.backgroundColor || 'purple',
   color: props.customColor,
   borderColor: 'lightgray',
   '&:hover': {
      backgroundColor: 'lightgray',
      borderColor: 'lightgray'
   },
   borderRadius: props.leftBorder ? '4px 0px 0px 4px' : props.rightBorder ? '0px 4px 4px 0px' : '4px 4px 4px 4px',
   fontSize: '9px'
}));

function CustomButton({
   customColor,
   variant,
   backgroundColor,
   leftBorder,
   rightBorder,
   onClick,
   disabled,
   children
}: ButtonProps) {
   return (
      <CustomStyledButton customColor={customColor} variant={variant} backgroundColor={backgroundColor} leftBorder={leftBorder} rightBorder={rightBorder} onClick={onClick} disabled={disabled} size="small">
         {children}
      </CustomStyledButton>
   );
}

function StyledButton(props: ButtonProps) {
   return (
      <div>
         <CustomButton
            customColor={props.customColor}
            variant={props.variant}
            backgroundColor={props.backgroundColor}
            leftBorder={props.leftBorder}
            rightBorder={props.rightBorder}
            onClick={props.onClick}
            disabled={props.disabled}
         >
            {props.children}
         </CustomButton>
      </div >
   );
}

export default StyledButton;




