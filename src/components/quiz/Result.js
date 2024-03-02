import React, { useState } from 'react';
import { Tab, Tabs, Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Score from './Score';
import Answers from './Answers';




const Result = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box >
      <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
        <Tab label="Score" sx={{ textAlign: 'left', minWidth: 'unset' }} />
        <Tab label="Answers" sx={{ textAlign: 'left', minWidth: 'unset' }} />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        <Panel1 />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <Panel2 />
      </TabPanel>
    </Box>
  );
};

const Panel1 = () => {
  return (
    <Box sx={{ textAlign: 'center', p:'30px'}}>
      <Score/>
    </Box>
  );
};

const Panel2 = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
     <Answers/>
    </Box>
  );
};

const TabPanel = (props) => {
  const { children, value, index } = props;

  return (
    <Box sx={{ display: value === index ? 'block' : 'none' }}>
      {children}
    </Box>
  );
};

export default Result;
