import {AsyncStorage} from 'react-native';
import ajax from './AxiosService';

export async function example(name) {
  return await AsyncStorage.getItem(name);
}
