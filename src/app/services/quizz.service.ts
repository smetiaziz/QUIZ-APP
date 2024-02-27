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
    },
    {
      id: 2,
      name: 'Football Quiz',
      questions: [
        {
          id: 1,
          questionText: 'Which country won the first ever FIFA World Cup in 1930?',
          options: ['Brazil', 'Germany', 'Uruguay', 'Argentina'],
          correctOptionIndex: 2
        },
        {
          id: 2,
          questionText: 'Who is the all-time leading goal scorer in FIFA World Cup history?',
          options: ['Lionel Messi', 'Cristiano Ronaldo', 'Pele', 'Miroslav Klose'],
          correctOptionIndex: 3
        },
        {
          id: 3,
          questionText: 'Which player has won the most FIFA Ballon d\'Or awards?',
          options: ['Lionel Messi', 'Cristiano Ronaldo', 'Diego Maradona', 'Zinedine Zidane'],
          correctOptionIndex: 0
        },
        {
          id: 4,
          questionText: 'Which team has won the most UEFA Champions League titles?',
          options: ['Real Madrid', 'Barcelona', 'Bayern Munich', 'Liverpool'],
          correctOptionIndex: 0
        },
        {
          id: 5,
          questionText: 'Who is the manager of Manchester City FC?',
          options: ['Jurgen Klopp', 'Pep Guardiola', 'Jose Mourinho', 'Carlo Ancelotti'],
          correctOptionIndex: 1
        },
        {
          id: 6,
          questionText: 'Who is the current coach of the Argentina national football team?',
          options: ['Lionel Messi', 'Diego Maradona', 'Jorge Sampaoli', 'Lionel Scaloni'],
          correctOptionIndex: 3
        },
        {
          id: 7,
          questionText: 'Which player has won the most UEFA Champions League titles?',
          options: ['Lionel Messi', 'Cristiano Ronaldo', 'Andres Iniesta', 'Xavi Hernandez'],
          correctOptionIndex: 1
        },
        {
          id: 8,
          questionText: 'Who is known as "The King of Rome" in football?',
          options: ['Alessandro Del Piero', 'Paolo Maldini', 'Francesco Totti', 'Roberto Baggio'],
          correctOptionIndex: 2
        },
        {
          id: 9,
          questionText: 'Which club won the first edition of the UEFA Champions League in 1955-56?',
          options: ['Real Madrid', 'AC Milan', 'Manchester United', 'Bayern Munich'],
          correctOptionIndex: 0
        },
        {
          id: 10,
          questionText: 'Which country has won the most Copa America titles?',
          options: ['Argentina', 'Brazil', 'Uruguay', 'Chile'],
          correctOptionIndex: 2
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
