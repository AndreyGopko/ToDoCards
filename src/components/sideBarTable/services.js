export default class SideBarTableService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  list(url) {
    return this.$http.get(url)
      .then((response) => response.data);
  }
}
