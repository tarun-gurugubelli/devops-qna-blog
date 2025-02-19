import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {
  private _jsonURL = 'assets/data.json';
  module: string = '';
  questions: { question: string, answer: string, showAnswer: boolean }[] = [];
  k8questions:any=[]
  jsonData:any=[]

  constructor(private route: ActivatedRoute,private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.jsonData=[]
      console.log(data);
      this.jsonData=data
      this.route.params.subscribe(params => {
        this.module = params['name'];
        // this.loadQuestions();
        this.loadQuestionsFromJson(this.module)
      });
    });
  }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.module = params['name'];
    //   // this.loadQuestions();
    //   this.loadQuestionsFromJson(this.module)
    // });
  }

  getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  loadQuestionsFromJson(module:any){
    console.log("module",module);
    console.log("jsondata",this.jsonData);
    
    this.questions = this.jsonData[module]
  }

  loadQuestions() {
    // Mock data for questions and answers
    this.questions = [
      { question: 'What is ' + this.module + '?', answer: 'It is a tool for...', showAnswer: false },
      { question: 'How to install ' + this.module + '?', answer: 'Follow these steps...', showAnswer: false },
      { question: 'Common issues in ' + this.module + '?', answer: 'Here are some common issues...', showAnswer: false }
    ];
  }

  toggleAnswer(qa: { question: string, answer: string, showAnswer: boolean }) {
    qa.showAnswer = !qa.showAnswer;
  }


}

