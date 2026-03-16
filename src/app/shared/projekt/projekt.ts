import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface GithubProjekt {
  namn: string;
  beskrivning: string;
  githubUrl: string;
  sprak: string;
}

@Component({
  selector: 'app-projekt',
  imports: [RouterModule],
  templateUrl: './projekt.html',
  styleUrl: './projekt.css'
})
export class Projekt {
  githubProjekter: GithubProjekt[] = [
    {
      namn: 'E-commerce Project',
      beskrivning: 'En e-handelssida byggd med TypeScript och React.',
      githubUrl: 'https://github.com/rikard95/ecommerce-project',
      sprak: 'TypeScript',
    },
    {
      namn: 'Stor och Liten',
      beskrivning: 'En interaktiv React-applikation byggd med TypeScript.',
      githubUrl: 'https://github.com/rikard95/stor-och-liten',
      sprak: 'TypeScript',
    },
    {
      namn: 'CoachCal',
      beskrivning: 'En kalenderapp för coacher byggd med React och TypeScript.',
      githubUrl: 'https://github.com/rikard95/CoachCal',
      sprak: 'TypeScript',
    },
    {
      namn: 'Konditori – Kunskapskontroll',
      beskrivning: 'En konditorisida byggd med HTML och CSS.',
      githubUrl: 'https://github.com/rikard95/kunskapskontroll-1',
      sprak: 'HTML',
    },
    {
      namn: 'Social Shopping – Tema',
      beskrivning: 'WordPress-tema för social shopping byggt med PHP.',
      githubUrl: 'https://github.com/rikard95/https---github.com-Medieinstitutet-fsu24d-social-shopping-tema-rikard95',
      sprak: 'PHP',
    },
    {
      namn: 'Social Shopping – Plugin',
      beskrivning: 'WordPress-plugin för social shopping byggt med PHP.',
      githubUrl: 'https://github.com/rikard95/https---github.com-Medieinstitutet-fsu24d-social-shopping-plugin-rikard95',
      sprak: 'PHP',
    },
  ];
}
