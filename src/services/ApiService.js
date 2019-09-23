/* eslint-disable camelcase */
import ajax from './AxiosService';
const API_URL = 'https://uinames.com';
const ApiService = function() {
  const getUser = () => {
    return ajax.get(API_URL + '/api/?amount=25');
  };

  return {
    getUser,
  };
};

export default ApiService();
