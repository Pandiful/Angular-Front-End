import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  portfolioData:any;
  constructor(private PortfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.PortfolioService.obtainData().subscribe((data) => {
      this.portfolioData = data;
    });
  }
}
