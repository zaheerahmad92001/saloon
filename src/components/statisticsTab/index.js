import React from 'react';
import TopTabView from '../topTabs/TopTabButton';
import { SceneMap } from 'react-native-tab-view';
import ServicesScreen from '../../screens/serviceScreen/servicesScreen';
import ProfessionalScreen from '../../screens/professionalsTab/professionalsTab';

const scenes = SceneMap({
  service: () => <ServicesScreen />,
  professional: () => <ProfessionalScreen />,
  
});

const routes = [
  { key: 'service', title: 'Services' },
  { key: 'professional', title: 'Professionals' },
  
];

export default function StatisticsTabs() {
  return <TopTabView routes={routes} scenes={scenes} />;
}