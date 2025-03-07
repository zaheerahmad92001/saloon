import React from 'react';
import TopTabView from './TopTabButton';
import { SceneMap } from 'react-native-tab-view';
import ServicesScreen from '../../screens/statisticsScreen/serviceScreen/servicesScreen';
import ProfessionalScreen from '../../screens/statisticsScreen/professionalsScreen/professionals';

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