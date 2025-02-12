import { Component, OnInit } from '@angular/core';
import { JobboardService } from '../../services/jobboard.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-jobboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './jobboard.component.html',
  styleUrl: './jobboard.component.scss'
})
export class JobboardComponent implements OnInit{
  jobData:any[]=[];
  filteredJobs:any[]=[];
  searchedQuery:string=''
  constructor(private jobService:JobboardService){}
  getJob(){
    this.jobService.getJobDetails(this.searchedQuery).subscribe((data)=>{
      this.jobData=data.data
      console.log(data);
    })
  }
  filterJobs(jobType:string){
    this.jobService.getJobDetails(jobType).subscribe((data)=>{
      this.filteredJobs=data.data.fil  
    })
  }
  ngOnInit(): void {
  }

}
