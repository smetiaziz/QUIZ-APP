import { Component, Input } from '@angular/core';
import { Question } from '../../models/Quiz';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  @Input() question: Question | undefined; 
}
