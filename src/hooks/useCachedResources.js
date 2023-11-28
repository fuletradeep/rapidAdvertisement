import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'Manrope-Regular': require('../../assets/fonts/Manrope-Regular.ttf'),
          'Manrope-Bold': require('../../assets/fonts/Manrope-Bold.ttf'),
          'Manrope-Medium': require('../../assets/fonts/Manrope-Medium.ttf'),
          'Manrope-SemiBold': require('../../assets/fonts/Manrope-SemiBold.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        setTimeout(async () => {
          await SplashScreen.hideAsync();
        }, 2000);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
