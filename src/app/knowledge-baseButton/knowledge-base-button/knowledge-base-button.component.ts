import { Component, OnInit } from '@angular/core';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-knowledge-base-button',
  templateUrl: './knowledge-base-button.component.html',
  styleUrls: ['./knowledge-base-button.component.css']
})
export class KnowledgeBaseButtonComponent implements OnInit {

  constructor() { }
  faChalkboardUser =faChalkboardUser
  ngOnInit(): void {
  }

}
