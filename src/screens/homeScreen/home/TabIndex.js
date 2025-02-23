import React from 'react';
import TopTabView from '../../../components/loyaltyTabs/TopTabButton';
import BezierGraphView from '../../../components/graphView/BezierGraphView';

import CustomersScene from './customersScene';

import { SceneMap } from 'react-native-tab-view';

const scenes = SceneMap({
    sales: () => <BezierGraphView />,
    customers: () => <CustomersScene />,
  });
  
  const routes = [
    { key: 'sales', title: 'Sales' },
    { key: 'customers', title: 'Customers' },
  ];
  
  export default function SaleCustomersTabs() {
    return <TopTabView routes={routes} scenes={scenes} />;
  }