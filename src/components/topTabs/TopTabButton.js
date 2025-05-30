import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';


const MyTabBar = ({ navigationState, position, jumpTo }) => {
  return (
    <View style={styles.tabBar}>
      {navigationState.routes.map((route, index) => {
        const isActive = navigationState.index === index;

        return (
          <TouchableOpacity key={route.key} onPress={() => jumpTo(route.key)} style={isActive?[styles.tab,{backgroundColor:colors.primary , borderRadius:8}]: [styles.tab]}>
            <Text style={[styles.label, isActive && styles.activeLabel]}>{route.title}</Text>
            {isActive && <View style={styles.indicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function TopTabView({ routes, scenes }) {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={scenes}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => <MyTabBar {...props} />}
    />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    paddingTop:5,
    borderBottomWidth:1,
    borderBottomColor: colors.lightGray,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    paddingVertical:12,
  },
  label: {
    fontSize: RFValue(12),
    fontFamily:fontsFamily.regular,
    fontWeight:'600',
    color: colors.lightBlack,
  },
  activeLabel: {
    color: colors.white,
    fontFamily:fontsFamily.regular,
    fontSize:RFValue(12),
  },
  indicator: {
  
  },
});
