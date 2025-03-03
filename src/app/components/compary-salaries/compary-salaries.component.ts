import { Component, OnInit } from '@angular/core';
import { JobboardService } from '../../services/jobboard.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-compary-salaries',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './compary-salaries.component.html',
  styleUrl: './compary-salaries.component.scss'
})
export class ComparySalariesComponent  implements OnInit{
  jobForm:FormGroup;
  jobData:any
  query:string=''

  
  constructor (private fb:FormBuilder ,private companySalaryService:JobboardService){
    this.jobForm=this.fb.group({
      company:[''],
      job_title:[''],
      location_type:[''],
      years_of_experience:['']
    })
  }

  getCompanySalaryData(){
    const formValues=this.jobForm.value
    this.companySalaryService.getsalaryDetails(
      formValues.company,
      formValues.job_title,
      formValues.location_type,
      formValues.years_of_experience
    ).subscribe((data)=>{
      this.jobData=data.data
      console.log(this.jobData)
    })
  }
  ngOnInit(): void {
    
  }

}
