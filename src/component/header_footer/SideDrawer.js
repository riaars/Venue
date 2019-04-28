import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';

const SideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
    props.onClose(false);
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}>
      <List component="nav" />
      <ListItem button onClick={() => scrollToElement('features')}>
        Event Starts in
      </ListItem>
      <ListItem button onClick={() => scrollToElement('venueInfo')}>
        Venue Info
      </ListItem>
      <ListItem button onClick={() => scrollToElement('highlights')}>
        Highlights
      </ListItem>
      <ListItem button onClick={() => scrollToElement('pricing')}>
        Pricing
      </ListItem>
      <ListItem button onClick={() => scrollToElement('location')}>
        Location
      </ListItem>
    </Drawer>
  );
};

export default SideDrawer;
