import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarOpen: boolean = false;
  modules: string[] = ['Linux', 'Git', 'Docker', 'Ansible', 'Kubernetes'];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  
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