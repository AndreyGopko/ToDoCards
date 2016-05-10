export default class ToDoService {
  constructor($http, API_URL) {
    'ngInject';
    this.$http = $http;
    this.API_URL = API_URL;
    this.rows = [];
  }
  getRows() {
    return this.$http.get(`${this.API_URL}/groups`)
    .then((response) => (this.rows = response.data));
  }
  addRow() {
    this.$http.post(`${this.API_URL}/groups`)
    .then((data) => {
      this.rows.push(data.data);
    });
  }
  removeRow(row) {
    this.$http.delete(`${this.API_URL}/groups/${row.id}`);
    this.rows.splice(this.rows.indexOf(row), 1);
  }
}
