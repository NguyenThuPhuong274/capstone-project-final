import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import ArrowTopRightOnSquareIcon from '@heroicons/react/24/solid/ArrowTopRightOnSquareIcon';
import ChevronUpDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery
} from '@mui/material';
import { Logo } from 'components/logo';
import { Scrollbar } from 'components/scrollbar';
import { items } from './config';
import { SideNavItem } from './side-nav-item';

export const SideNav = () => {
  const pathname = usePathname();

  const content = (
    <Scrollbar 
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
          background: '#6C737F'
        },
       overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: 'inline-flex',
              height: 32,
              width: 32
            }}
          >
            <Logo />
          </Box>
         
        </Box>
        <Divider sx={{ borderColor: '#2F3746' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0
            }}
          >
            {items.map((item) => {
              const active = item.path ? (pathname === item.path) : false;

              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
          </Stack>
        </Box>
        <Divider sx={{ borderColor: '#2F3746' }} />
        <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
        
         
        
        </Box>
      </Box>
    </Scrollbar>
  );

 

  return (
    <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#1C2536",
            color: "#ffffff",
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
  );
};
