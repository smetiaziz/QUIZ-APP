import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../../services/quizz.service';
import { Question, Quiz } from '../../models/Quiz';

@Component({
  selector: 'app-main-quiz',
  templateUrl: './main-quiz.component.html',
  styleUrl: './main-quiz.component.css'
})
export class MainQuizComponent implements OnInit{
  quiz!: Quiz ;
  currentQuestionIndex: number = 0;
  currentQuestion!: Question ;
  userAnswers: string[] = [];
  correctAnswersCount: number = 0;
  quizEnded: boolean = false;

  constructor(public quizService:QuizzService){

  }
  ngOnInit(): void {
    this.quizService.getQuizById(1).subscribe(quiz => {
      if (quiz) {
        this.quiz = quiz;
        if (this.quiz.questions.length > 0) {
          this.currentQuestion = this.quiz.questions[0];
        }
      } else {
        console.error("Failed to fetch quiz data."); 
      }
    });
    }
  onNextQuestion(): void {
    if (this.quiz && this.currentQuestionIndex < this.quiz.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
      }
    }
  onPreviousQuestion(): void {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.currentQuestion = this.quiz.questions[this.currentQuestionIndex];
      }
    }
      
    onOptionSelected(option: string): void {
      this.userAnswers[this.currentQuestionIndex] = option;
    }
    calculateScore(): void {
      if (this.quiz) {
        for (let i = 0; i < this.quiz.questions.length; i++) {
          const question = this.quiz.questions[i];
          if (this.userAnswers[i] === question.options[question.correctOptionIndex]) {
            this.correctAnswersCount++;
          }
        }
      }
    }
    onQuizEnd(): void {
      this.calculateScore();
      this.quizEnded = true;
    }
}
