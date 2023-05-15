import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Button, Card, InputAdornment, OutlinedInput, Stack, SvgIcon } from '@mui/material';

export const ContactTopBar = ({setIsOpenModal}) => (
  <Card  sx={{ p: 2, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;" }}>
<Stack  direction="row"  justifyContent="space-between">
<OutlinedInput
      defaultValue=""
      fullWidth
      placeholder="Tìm kiếm liên hệ"
      startAdornment={(
        <InputAdornment position="start">
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <MagnifyingGlassIcon />
          </SvgIcon>
        </InputAdornment>
      )}
      
      sx={{ maxWidth: 300 }}
    />

</Stack>
   
  </Card>
);
