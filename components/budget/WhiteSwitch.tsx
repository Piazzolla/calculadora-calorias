import { Switch } from "@mui/material";
import { grey } from "@mui/material/colors";
import { alpha, styled } from '@mui/material/styles';

export const WhiteSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: grey[50],
      '&:hover': {
        backgroundColor: alpha(grey[50], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: grey[50],
    },
  }));