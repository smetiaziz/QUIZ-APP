import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {
  @Input() options: string[] = [];
  @Output() optionSelected = new EventEmitter<string>();
  selectedOption: string = '';
  selectOption(option: string): void {
    this.optionSelected.emit(option);
    this.selectedOption = option;
  }
}
