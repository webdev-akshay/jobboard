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
export class JobboardComponent implements OnInit {
  jobData: any[] = [];
  searchedQuery: string = ''
  constructor(private jobService: JobboardService) { }
  getJob() {
    let url = '/search'
    if (!this.searchedQuery) {
      this.jobService.getJobDetails(url,'software developer').subscribe((data) => {
        this.jobData = data.data
      })
    }
    else {
      this.jobService.getJobDetails(url,this.searchedQuery).subscribe((data) => {
        this.jobData = data.data
        console.log(data);
      })
    }

  }
  getUniqueCities(): string[] {
    return [...new Set(this.jobData.map(job => job.job_city))]
  }
  getUniqueJobType(): string[] {
    return [...new Set(this.jobData.map(job => job.job_employment_type))]
  }

  ngOnInit(): void {
    this.getJob()
  }

}
