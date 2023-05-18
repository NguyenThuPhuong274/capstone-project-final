
import { useCallback } from 'react';
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material';

import BookmarkIcon from '@heroicons/react/24/solid/BookmarkIcon';
import PowerIcon from '@heroicons/react/24/solid/PowerIcon';

import UserIcon from '@heroicons/react/24/solid/UserCircleIcon';

import { SvgIcon } from '@mui/material';
import { useDispatch } from 'react-redux';
import authenSlice from '../../redux/authenSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '../../constants/route.constants';

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open, account } = props;
  const { name, role } = account;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signOut } = authenSlice.actions;

const redirectToPage = useCallback((path) => {
  onClose?.();
  navigate(path);
});


  const handleSignOut = useCallback(
    () => {
      onClose?.();
      navigate('/');
      dispatch(signOut());
    },
    [onClose]
  );

  return (
    <Popover
    sx={{ mt: 3, mr: 2}}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
         
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Tài khoản
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {name}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      >


        {role == "admin" ? <></> : <>

          <MenuItem onClick={() => redirectToPage(ROUTE_CONSTANTS.MY_COURSE_PAGE)} >
            <SvgIcon fontSize="small" color='primary' className='mr-3'>
              <BookmarkIcon />
            </SvgIcon>
            Khóa học của tôi
          </MenuItem>
          <MenuItem onClick={() => redirectToPage(ROUTE_CONSTANTS.ACCOUNT_PAGE)}>
            <SvgIcon color='primary' fontSize="small" className='mr-3'>
              <UserIcon />
            </SvgIcon>
            Thông tin cá nhân
          </MenuItem>
        </>}
        <MenuItem onClick={handleSignOut}>
          <SvgIcon  color='primary' fontSize="small" className='mr-3'>
            <PowerIcon />
          </SvgIcon>
          Đăng xuất
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

