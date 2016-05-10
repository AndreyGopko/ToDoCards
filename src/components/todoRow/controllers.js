export default class TodoRowController {
  constructor($http, API_URL) {
    'ngInject';
    this.$http = $http;
    this.API_URL = API_URL;
  }
  $onInit() {
  }
  addCard() {
    this.$http.post(`${this.API_URL}/groups/${this.row.id}/cards`)
    .then(data => {
      this.row.cards = data.data;
    });
  }
}
