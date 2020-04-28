import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RevistaService } from '../../revista/revista.service';

@Component({
  selector: 'app-revista-list',
  templateUrl: './revista-list.component.html',
  styleUrls: ['./revista-list.component.css']
})
export class RevistaListComponent implements OnInit {

  constructor(private router: Router, private revistaService: RevistaService) { }

  revistas = new MatTableDataSource();
  
  displayedColumns: string[] = ['nome', 'descricao', 'action'];
  
  ngOnInit(): void {
    this.revistaService.listar().subscribe(actions => {
      this.revistas = new MatTableDataSource(actions);
    });
  }

  createRevista() {
    this.router.navigate(["/revistas/create"])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.revistas.filter = filterValue.trim().toLowerCase();
  }

}
