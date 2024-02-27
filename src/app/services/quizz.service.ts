import { Injectable } from '@angular/core';
import { Quiz ,Question} from '../models/Quiz';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  private quizzes: Quiz[] = [
    {
      id: 1,
      name: 'General Knowledge Quiz',
      questions: [
        {
          id: 1,
          questionText: 'What is the capital of France?',
          options: ['Paris', 'London', 'Berlin', 'Madrid'],
          correctOptionIndex: 0
        },
        {
          id: 2,
          questionText: 'Who wrote "Romeo and Juliet"?',
          options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
          correctOptionIndex: 1
        },
        {
          id: 3,
          questionText: 'What is the chemical symbol for water?',
          options: ['H2O', 'CO2', 'O2', 'N2'],
          correctOptionIndex: 0
        },
        {
          id: 4,
          questionText: 'What is the tallest mountain in the world?',
          options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
          correctOptionIndex: 0
        },
        {
          id: 5,
          questionText: 'Which planet is known as the Red Planet?',
          options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
          correctOptionIndex: 1
        },
        {
          id: 6,
          questionText: 'Who painted the Mona Lisa?',
          options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Michelangelo'],
          correctOptionIndex: 0
        },
        {
          id: 7,
          questionText: 'What is the largest mammal?',
          options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
          correctOptionIndex: 1
        },
        {
          id: 8,
          questionText: 'Which country is known as the Land of the Rising Sun?',
          options: ['China', 'Japan', 'South Korea', 'Vietnam'],
          correctOptionIndex: 1
        }
      ]
    }
    // 
  ];
  constructor() { }
  getAllQuizzes(): Observable<Quiz[]>{
    return of(this.quizzes);
  }
  getQuizById(id: number): Observable<Quiz | undefined> {
    const quiz = this.quizzes.find(q => q.id === id);
    return of(quiz);
  }

  getQuestionById(quizId: number, questionId: number): Observable<Question | undefined> {
    const quiz = this.quizzes.find(q => q.id === quizId);
    if (quiz) {
      const question = quiz.questions.find(q => q.id === questionId);
      return of(question);
    }
    return of(undefined);
  }
  
}
