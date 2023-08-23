import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-queues-on-board',
  templateUrl: './queues-on-board.component.html',
  styleUrls: ['./queues-on-board.component.css']
})
export class QueuesOnBoardComponent {
  @Output() queueData = new EventEmitter<any[]>(); // Output property to emit selected items
  mainForm: FormGroup;
  conditionGroups: any;
  finalResult: string | undefined;

  conditionOptions = [
    { value: 'item1', label: 'Page 1' },
    { value: 'item2', label: 'Page 2' },
    { value: 'item3', label: 'Page 3' },
    { value: 'item4', label: 'Page 4' },
    // Add more items
  ];
  
  conditionTypeOptions = [
    { value: 'beginsWith', label: 'Begins With' },
    { value: 'contains', label: 'Contains' },
    { value: 'equals', label: 'Equals' },
    { value: 'less', label: 'Less <' },
    { value: 'lessOrEqual', label: 'Less Or Equal <=' },
    { value: 'greater', label: 'Greater Or Equal >=' },
    { value: 'notEquals', label: 'Not Equals !=' },
  ];

  logicalOperatorOptions = [
    { value: 'and', label: 'AND' },
    { value: 'or', label: 'OR' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.conditionGroups = this.formBuilder.array([]);
    this.mainForm = this.formBuilder.group({
      conditions: this.conditionGroups,
      finalAction: ['']
    });
  }

  ngOnInit() {
    this.addCondition();
  }

  addCondition() {
    const newConditionGroup = this.formBuilder.group({
      logicalOperator: ['and', Validators.required],
      selectedItem: ['', Validators.required],
      selectedCondition: ['beginsWith', Validators.required],
      beginsWithValue: [''], // Default value for beginsWith textbox
    });

    this.conditionGroups.push(newConditionGroup);
  }

  removeCondition(index: number) {
    this.conditionGroups.removeAt(index);
  }

  // conditionChanged(index: number) {
  //   const conditionGroup = this.conditionGroups.at(index) as FormGroup;
  //   const selectedCondition = conditionGroup.get('selectedCondition')?.value;
    
  //   // Clear the beginsWithValue field when condition type changes
  //   if (selectedCondition !== 'beginsWith') {
  //     conditionGroup.get('beginsWithValue')?.setValue('');
  //   }
  // }

  selectedCondition(index: number) {
    const conditionGroup = this.conditionGroups.at(index) as FormGroup;
    return conditionGroup.get('selectedCondition')?.value;
  }

  // performAction() {
  //   const conditions = this.conditionGroups.controls.map((group:any) => group.value);
  //   this.finalResult = JSON.stringify(conditions);
  // }
  performAction() {
    const conditions = this.conditionGroups.controls.map((group:any, index:any) => {
      const condition = group.value;
      if (index === 0) {
        condition.logicalOperator = ''; // Set empty logical operator for the first condition
      }
      return condition;
    });
    this.finalResult = JSON.stringify(conditions);
  }

  saveRule() {
    const rule:any = {
      conditions: this.conditionGroups.controls.map((group:any) => group.value),
      finalAction: this.mainForm.get('finalAction')?.value
    };

    // Here you can perform actions to save the rule, such as sending it to a server
    // For now, let's just log the rule
    this.queueData.emit(rule);
    console.log('Saved Rule:', rule);
  }
}
