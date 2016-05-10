import modalTemplate from './modalTemplate.html';

export default class ToDoController {
  constructor($uibModal, ToDoService, $http, API_URL) {
    'ngInject';
    this.$http = $http;
    this.$uibModal = $uibModal;
    this.ToDoService = ToDoService;
    this.API_URL = API_URL;
  }
  $onInit() {
    this.classes = ['panel-default',
    'panel-success', 'panel-primary',
    'panel-info', 'panel-warning',
    'panel-danger'];
    this.options = [{
      id: 0,
      label: 'In progress'
    }, {
      id: 1,
      label: 'Done'
    }, {
      id: 2,
      label: 'To do'
    }];
    this.text = this.card.text;
  }
  open() {
    return this.$uibModal.open({
      animation: true,
      template: modalTemplate,
      size: 'sm'
    }).result;
  }
  removeCard(card, row) {
    this.open().then(() => {
      if (row.cards.length === 1) {
        this.removeRow(row);
        return;
      }
      const cardId = card.id;
      const groupId = row.id;
      this.$http.delete(`${this.API_URL}/groups/${groupId}/cards/${cardId}`);
      const index = row.cards.indexOf(card);
      row.cards.splice(index, 1);
      this.saveText(card, null);
    });
  }
  removeRow(row) {
    this.ToDoService.removeRow(row);
  }
  saveCard(row, card, text) {
    if (!text) {
      return;
    }
    const cardId = card.id;
    const groupId = row.id;
    this.$http.put(`${this.API_URL}/groups/${groupId}/cards/${cardId}/${text}`);
    this.saveText(card, text);
    card.visible = true;
  }
  saveText(card, text) {
    card.text = text;
  }
}
