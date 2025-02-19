import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  modules: string[] = ['Linux', 'Git', 'Docker', 'Ansible', 'Kubernetes'];

  getModuleIcon(module: string): string {
    const icons: { [key: string]: string } = {
      Linux: 'fab fa-linux',
      Git: 'fab fa-git-alt',
      Docker: 'fab fa-docker',
      Ansible: 'fas fa-cogs',
      Kubernetes: 'fas fa-ship'
    };
    return icons[module] || 'fas fa-question-circle';
  }
}