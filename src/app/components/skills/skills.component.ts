import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  portfolioSkills:any;
  constructor(private PortfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.PortfolioService.obtainData().subscribe((data) => {
      this.portfolioSkills = data.skills;
    });
  }
}
