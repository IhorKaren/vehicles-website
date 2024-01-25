import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { SearchFormadv } from '../Hero/SearchFormadv';

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export function MyTabs({ items, defaultActive }) {
  const [value, setValue] = useState(defaultActive);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="my tabs">
        {items.map((item, index) => (
          <Tab label={item.label} {...a11yProps(index)} key={index} />
        ))}
      </Tabs>
      {items.map((item, index) => (
        <TabPanel value={value} index={index} key={index}>
          {item.heading}
          <SearchFormadv item={item}/>
        </TabPanel>
      ))}
    </Box>
  );
}

MyTabs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      heading: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultActive: PropTypes.number,
};

MyTabs.defaultProps = {
  defaultActive: 0,
};