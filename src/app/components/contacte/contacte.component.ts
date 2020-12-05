import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTripadvisor } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contacte',
  templateUrl: './contacte.component.html',
  styleUrls: ['./contacte.component.css']
})
export class ContacteComponent implements OnInit {
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faTripadvisor = faTripadvisor;

  constructor() { }

  ngOnInit(): void {
  }

}
