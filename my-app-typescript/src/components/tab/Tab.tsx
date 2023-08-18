import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import StyledButton from '../buttons/Button';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import CustomizedSteppers from '../stepper/Stepper'

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface ButtonProps {
   anchor: Anchor
}

function StyledTab(props: ButtonProps) {

   const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
   });

   const toggleDrawer =
      (anchor: Anchor, open: boolean) =>
         (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
               event &&
               event.type === 'keydown' &&
               ((event as React.KeyboardEvent).key === 'Tab' ||
                  (event as React.KeyboardEvent).key === 'Shift')
            ) {
               return;
            }

            setState({ ...state, [anchor]: open });
         };

   const list = (anchor: Anchor) => (
      <ClickAwayListener onClickAway={() => toggleDrawer(anchor, false)}>
         <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '50vw' }}
            role="presentation"
         // onClick={toggleDrawer(anchor, false)}
         // onKeyDown={toggleDrawer(anchor, false)}
         >
            <CustomizedSteppers></CustomizedSteppers>
         </Box>
      </ClickAwayListener>

   );

   const anchor = 'right';

   return (
      <div>
         <React.Fragment key={anchor}>
            <StyledButton variant="contained" customColor="white" backgroundColor="deeppink" onClick={toggleDrawer(anchor, true)}>
               + Create
            </StyledButton>
            {/* <Button >{anchor}</Button> */}
            <SwipeableDrawer
               anchor={anchor}
               open={state[anchor]}
               onClose={toggleDrawer(anchor, false)}
               onOpen={toggleDrawer(anchor, true)}
            >
               {list(anchor)}
            </SwipeableDrawer>
         </React.Fragment>
      </div>
   );
}

export default StyledTab;




