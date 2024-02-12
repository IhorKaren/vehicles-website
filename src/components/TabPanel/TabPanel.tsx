import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { SearchFormadv } from "../Hero/SearchFormadv";

type TabPanelProps = {
  children: React.ReactNode;
  value: number;
  index: number;
} & React.HTMLAttributes<HTMLDivElement>;

export function TabPanel(props: TabPanelProps): React.ReactElement {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number): { id: string; "aria-controls": string } {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

interface FieldItem {
  label: string;
  placeholder: string;
  items: string[];
}

interface DataItem {
  label: string;
  heading: string;
  fields: FieldItem[];
}

interface MyTabsProps {
  items: DataItem[];
  defaultActive: number;
}

export const MyTabs: React.FC<MyTabsProps> = ({ items, defaultActive }) => {
  const [value, setValue] = useState(defaultActive);

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: React.SetStateAction<number>,
  ): void => {
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
          <SearchFormadv item={item} />
        </TabPanel>
      ))}
    </Box>
  );
};
