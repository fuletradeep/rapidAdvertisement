import { StyleSheet, Text, View } from 'react-native';
import { enableFreeze } from 'react-native-screens';
import Navigation from './src';
import R from '@app/res/R';

export default function App() {
  enableFreeze(true);
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.color.black2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
