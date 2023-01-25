import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {
  portfolioData:any;
  constructor(private PortfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.PortfolioService.obtainData().subscribe((data) => {
      this.portfolioData = data;
    });
  }
}
