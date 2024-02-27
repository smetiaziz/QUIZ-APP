export interface Question{
    id: number;
    questionText: string;
    options: string[];
    correctOptionIndex: number;
}
export interface Quiz{
    id: number;
    name: string;
    questions: Question[];
   
}