import React from 'react';
import TopTabView from '../../components/loyaltyTabs/TopTabButton';
import { SceneMap } from 'react-native-tab-view';
import Faq from '../../screens/supportScreen/faq';
import CustomerSupport from '../../screens/supportScreen/customerSupport';

const scenes = SceneMap({
  faq: () => <Faq />,
  contact: () => <CustomerSupport />,
});

const routes = [
  { key: 'faq', title: 'FAQ`s' },
  { key: 'contact', title: 'Contact Us' },
];

export default function SupportTabs() {
  return <TopTabView routes={routes} scenes={scenes} />;
}