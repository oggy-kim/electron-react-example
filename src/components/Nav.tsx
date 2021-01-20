import React from 'react';

import {
  createStyles,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import PhotoIcon from '@material-ui/icons/Photo';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

const listItem = [
  { name: '메인 페이지', linkTo: '/', icon: <HomeIcon /> },
  { name: '로또 생성기', linkTo: '/lotto', icon: <ScatterPlotIcon /> },
  { name: '사진첩', linkTo: '/photo', icon: <PhotoIcon /> },
  { name: 'webGL', linkTo: '/webgl', icon: <PhotoIcon /> },
];

function Nav(): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {listItem.map(({ name, linkTo, icon }) => (
            <Link to={linkTo} key={name}>
              <ListItem button>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Nav;
