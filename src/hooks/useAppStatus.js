import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { storagekeys } from '../staticData';

const useAppStatus = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem(storagekeys.isFirstLaunch);
        
        if (value === null) {
        //   await AsyncStorage.setItem(storagekeys.isFirstLaunch, 'true');
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        setIsFirstLaunch(false);
      }
    };

    checkFirstLaunch();
  }, []);

  return { isFirstLaunch, user };
};

export default useAppStatus;
