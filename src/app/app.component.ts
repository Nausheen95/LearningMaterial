import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DynamicRow';
  name = 'Angular';
  public myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({});
    for(let item of ['item1']) {
      this.myForm.addControl(item,
        new FormGroup({
          name: new FormControl(),
          medicineList: new FormArray([])
        })
      )
    } 
  } 

  onAddMedicine(group:FormGroup) {
    (group.get('medicineList') as FormArray).push(new FormControl())
  }

  medicineArray(group:FormGroup):FormArray
  {
    return group.get('medicineList') as FormArray
  }
  removeMedicine(group:FormGroup,index:number)
  {
    (group.get('medicineList') as FormArray).removeAt(index)
  }


}
