import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent  implements OnInit{

 constructor (private router:Router){}
 navigateToHome(){
  this.router.navigate(['/'])
 }
  navigateToCompaySalaries(){
    this.router.navigate(['/company-salaries'])
  }
  ngOnInit(): void {
    
  }
}
