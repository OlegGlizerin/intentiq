import { styled } from '@mui/material/styles';
import Button from "@mui/material/Button";
 
const ButtonStyled = styled(Button)<{ theColor: string, backgroundColor: string}>`
	color: red,
   backgroundColor: red,
   borderColor: '#ffe9ec',
   '&:hover': {
      backgroundColor: '#ffe9ec',
      borderColor: '#ffe9ec'
   },
`;


export default ButtonStyled;