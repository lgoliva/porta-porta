import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'
import { HomeComponent } from './views/home/home.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ProdutoCreateComponent } from './components/produto/produto-create/produto-create.component';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';
import { LoginFormComponent } from './components/usuario/login-form/login-form.component';
import { RegistroFormComponent } from './components/usuario/registro-form/registro-form.component';
import { RevistaListComponent } from './components/revista/revista-list/revista-list.component';
import { RevistaCreateComponent } from './components/revista/revista-create/revista-create.component';
import { ProdutoShowComponent } from './components/produto/produto-show/produto-show.component';
import { ClienteShowComponent } from './components/cliente/cliente-show/cliente-show.component';
import { PedidoListComponent } from './components/pedido/pedido-list/pedido-list.component';
import { PedidoFormComponent } from './components/pedido/pedido-form/pedido-form.component';
import { PedidoListClienteComponent } from './components/pedido/pedido-list-cliente/pedido-list-cliente.component';
import { PedidoCreateClienteComponent } from './components/pedido/pedido-create-cliente/pedido-create-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ClienteListComponent,
    ClienteCreateComponent,
    ProdutoCreateComponent,
    ProdutoListComponent,
    LoginFormComponent,
    RegistroFormComponent,
    RevistaListComponent,
    RevistaCreateComponent,
    ProdutoShowComponent,
    ClienteShowComponent,
    PedidoListComponent,
    PedidoFormComponent,
    PedidoListClienteComponent,
    PedidoCreateClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
