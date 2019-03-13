import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TableComponent';
  table: any = {
    sorting: true,
    toggleColumns: true
  };
  dialog: any = {
    isOpen: false,
    headerText: '',
    cancelButton: true,
    cancel: function() {
      this.isOpen = false;
    }
  };
  columns = [{
    name: 'name',
    header: 'Name',
    visible: true,
    ascending: true
  }, {
    name: 'class',
    header: 'Class',
    visible: true,
    ascending: true
  }, {
    name: 'school',
    header: 'School',
    visible: true,
    ascending: true
  }, {
    name: 'age',
    header: 'Age',
    visible: true,
    ascending: true
  }, {
    name: 'address',
    header: 'Address',
    visible: true,
    ascending: true
  }, {
    name: 'phone',
    header: 'Phone',
    visible: true,
    ascending: true
  }];
  data =  [{
    name: 'Student 1',
    class: 'Class 1',
    school: 'School 1',
    age: 10,
    address: 'Address 1',
    phone: 'Phone 1'
  }, {
    name: 'Student 2',
    class: 'Class 2',
    school: 'School 2',
    age: 10,
    address: 'Address 2',
    phone: 'Phone 2'
  }, {
    name: 'Student 3',
    class: 'Class 3',
    school: 'School 3',
    age: 10,
    address: 'Address 3',
    phone: 'Phone 3'
  }, {
    name: 'Student 4',
    class: 'Class 4',
    school: 'School 4',
    age: 10,
    address: 'Address 4',
    phone: 'Phone 4'
  }];

  hide(column: any) {
    column.visible = false;
  }

  show(column: any) {
    column.visible = true;
  }

  add() {
    this.dialog.isOpen = true;
    this.dialog.headerText = 'Add Item';
  }

  edit(item: any) {
    this.dialog.isOpen = true;
    this.dialog.headerText = 'Edit Item';
  }

  delete(item: any) {
    this.dialog.isOpen = true;
    this.dialog.headerText = 'Delete Item';
  }

  sorting(key, asc) {
    if (!this.table.sorting) {
      return false;
    }

    this.data = this.data.sort(function(a, b) {
        if (asc) {
            return (a[key] > b[key]) ? 1 : ((a[key] < b[key]) ? -1 : 0);
        } else {
            return (b[key] > a[key]) ? 1 : ((b[key] < a[key]) ? -1 : 0);
        }
    });
    this.columns.filter(col => col.name === key)[0].ascending = !asc;
  }
}
