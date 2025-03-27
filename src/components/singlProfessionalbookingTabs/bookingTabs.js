import React from 'react';
import TopTabView from '../../components/topTabs/TopTabButton';
import { SceneMap } from 'react-native-tab-view';
import TotalBookings from '../../screens/professionalBookingScreen/totalBookings';
import CompletedBooking from '../../screens/professionalBookingScreen/completedBooking';
import PendingBooking from '../../screens/professionalBookingScreen/pendingBooking';

const scenes = SceneMap({
  totalbookings: () => <TotalBookings/>,
  pending: () => <PendingBooking />,
  completed: () => <CompletedBooking />,
});

const routes = [
  { key: 'totalbookings', title: 'Total Bookings' },
  { key: 'pending', title: 'Pending' },
  { key: 'completed', title: 'Completed' },
];

export default function BookingTabs() {
  return <TopTabView routes={routes} scenes={scenes} />;
}