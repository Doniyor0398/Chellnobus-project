import React, { useEffect, useState } from 'react';
import {
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
} from '@mui/material';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../features/auth/hooks/useAuth';
import {
  Home,
  Schedule,
  Route,
  DirectionsCar,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp,
} from '@mui/icons-material';

const drawerWidth = 256;

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuth } = useAuth();

  const [open, setOpen] = useState(true);

  const handleLogout = () => {
    navigate('/login');
  };

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Главная';
      case '/change':
        return 'Смена';
      case '/drivers':
        return 'Водители';
      case '/orders':
        return 'Заказы';
      case '/users':
        return 'Пользователи';
      default:
        return 'Главная';
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
          ml: open ? `${drawerWidth}px` : 0,
          transition: 'width 0.3s ease',
          backgroundColor: '#424242',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{ mr: 2 }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap>
            {getTitle()}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#424242',
            color: '#ffff',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <Home sx={{ mr: 2 }} />
              <ListItemText primary="Главная" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/change">
              <Schedule sx={{ mr: 2 }} />
              <ListItemText primary="Смена" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/drivers">
              <Route sx={{ mr: 2 }} />
              <ListItemText primary="Водители" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/orders">
              <DirectionsCar sx={{ mr: 2 }} />
              <ListItemText primary="Заказы" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/users">
              <AccountCircleIcon sx={{ mr: 2 }} />
              <ListItemText primary="Пользователи" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ExitToApp sx={{ mr: 2 }} />
              <ListItemText primary="Выйти" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          transition: 'margin 0.3s ease',
          marginLeft: open ? 0 : `${-drawerWidth}px`,
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
