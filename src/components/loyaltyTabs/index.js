import React from 'react';
import TopTabView from './TopTabButton';
import AllPoints from '../../screens/loyaltyPointsScreen/allPoints';
import EarnedPoints from '../../screens/loyaltyPointsScreen/earnedPoints';
import UsedPoints from '../../screens/loyaltyPointsScreen/usedPoints';
import { SceneMap } from 'react-native-tab-view';

const scenes = SceneMap({
  all: () => <AllPoints />,
  earned: () => <EarnedPoints />,
  used: () => <UsedPoints />,
});

const routes = [
  { key: 'all', title: 'All' },
  { key: 'earned', title: 'Earned Points' },
  { key: 'used', title: 'Used Points' },
];

export default function LoyaltyPointTabs() {
  return <TopTabView routes={routes} scenes={scenes} />;
}