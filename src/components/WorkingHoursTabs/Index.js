import React from 'react';
import TopTabView from './TopTabButton';
import { SceneMap } from 'react-native-tab-view';
import SlotsScreen from '../../screens/WorkingHours/SlotsScreen';
import SeatsScreen from '../../screens/WorkingHours/SeatsScreen';

const scenes = SceneMap({
  slots: () => <SlotsScreen />,
  seats: () => <SeatsScreen />,
  
});

const routes = [
  { key: 'slots', title: 'Slots' },
  { key: 'seats', title: 'Seats' },
  
];

export default function WorkingHoursTabs() {
  return <TopTabView routes={routes} scenes={scenes} />;
}