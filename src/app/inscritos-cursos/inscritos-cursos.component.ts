import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inscritos-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inscritos-cursos.component.html',
  styleUrl: './inscritos-cursos.component.css'
})
export class CourseListComponent {
  isExpanded = false;
  students = [
    { name: 'Carina da Silva' },
    { name: 'Gustavo Andrade' },
    { name: 'Jorge Pinheiros Santos' },
    { name: 'Eduardo Silva Pereira' }
  ];

  toggleCourse() {
    this.isExpanded = !this.isExpanded;
  }
}