export default class SideBarTableController {
  constructor(SideBarTableService) {
    'ngInject';
    this.SideBarTableService = SideBarTableService;
  }

  $onInit() {
    this.setDisabled(false);
    this.itemsBody = [];
    this.itemsHead = [{
      title: 'Name',
      col1: 'Id',
      col2: 'Phone'
    }];
    this.loader(true);
    this.progress = 0;
  }
  loader(flag, progress) {
    this.flag = flag;
    this.progress = progress;
  }
  getUsers() {
    this.loader(false, 90);
    this.SideBarTableService.list('http://jsonplaceholder.typicode.com/users').then((data) => {
      this.loader(true, 100);
      this.data = data;
      this.setDisabled(true);
      this.itemsBody = this.data.map(item => ({
        title: item.name,
        col1: item.id,
        col2: item.phone
      }));
    });
  }
  setDisabled(status) {
    this.disabled = status;
  }
}
