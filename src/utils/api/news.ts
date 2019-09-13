import { Api } from './Api';

const SearchNews = (params = {}, config = {}) => 
  Api.get({
    endpoint: '/search',
    params,
    config
  });

export {
  SearchNews
};
