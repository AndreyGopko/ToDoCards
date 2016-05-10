export default class SideBarController {
  $onInit() {
    this.classes = [{
      name: 'default',
      active: true
    }, {
      name: 'success',
      active: false
    }, {
      name: 'primary',
      active: false
    }, {
      name: 'info',
      active: false
    }, {
      name: 'warning',
      active: false
    }, {
      name: 'danger',
      active: false
    }];
  }
  changeClass(index) {
    this.HomeController.class = index;
    this.classes.forEach((elem) => {
      elem.active = false;
    });
    this.classes[index].active = true;
  }
}
