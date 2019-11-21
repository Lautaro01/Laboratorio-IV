import { Component, OnInit} from '@angular/core';
import { AdminMenuService } from '../admin-menu.service';
import { Usuario } from '../../../modals/usuario';


@Component({
  selector: 'app-admin-filtro',
  templateUrl: './admin-filtro.component.html',
  styleUrls: ['./admin-filtro.component.css']
})
export class AdminFiltroComponent implements OnInit {
  
  usuariosTabla : Usuario[];

  constructor(private admin : AdminMenuService) { }


  ngOnInit() {
  }

  traerPorTipoHTML(e)
  {
    this.admin.TraerPorTipo(e.path[0].value).subscribe(
      usuarios =>
      {
        this.usuariosTabla = usuarios;
      }
    )
  }

}
