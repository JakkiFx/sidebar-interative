import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Select } from '../../Select';

@Component({
  selector: 'app-form-name-items',
  templateUrl: './form-name-items.component.html',
  styleUrls: ['./form-name-items.component.scss'],
})
export class FormNameItemsComponent implements OnInit {
  items = [
    { icon: 'home', value: 'home', viewValue: 'Início' },
    { icon: 'contacts', value: 'contacts', viewValue: 'Contatos' },
    { icon: 'home', value: 'login', viewValue: 'Logar' },
    { icon: 'home', value: 'register', viewValue: 'Cadastrar' },
    { icon: 'account_circle', value: 'myprofile', viewValue: 'Meu perfil' },
    { icon: 'exit_to_app', value: 'exitaccount', viewValue: 'Sair da conta' },
    { icon: 'settings', value: 'settings', viewValue: 'Configurações' },
    { icon: 'shopping_basket', value: 'shop', viewValue: 'Shop' },
    { icon: 'contact_support', value: 'support', viewValue: 'Suporte' },
    { icon: 'person', value: 'user', viewValue: 'Usuário' },
    {
      icon: 'open_in_new',
      value: 'redirectto',
      viewValue: 'Redirecionar para...',
    },
    { icon: 'beenhere', value: 'saved', viewValue: 'Salvo' },
    { icon: 'error', value: 'aboutus', viewValue: 'Sobre nós' },
    { icon: 'mail', value: 'myemail', viewValue: 'Meu e-mail' },
    { icon: 'sms', value: 'chat', viewValue: 'Chat' },
    { icon: 'create_new_folder', value: 'newfolder', viewValue: 'Nova pasta' },
    { icon: 'image', value: 'gallery', viewValue: 'Galeria' },
    {
      icon: 'add_photo_alternate',
      value: 'addimg',
      viewValue: 'Adicionar imagem',
    },
    { icon: 'check', value: 'products', viewValue: 'Produtos' },
    { icon: 'forum', value: 'forum', viewValue: 'Fórum' },
    { icon: 'thumb_down', value: 'like', viewValue: 'Marcados com gostei' },
    { icon: 'thumb_up', value: 'nolike', viewValue: 'Marcados com não gostei' },
    { icon: 'map', value: 'location', viewValue: 'Localização' },
    {
      icon: 'supervisor_account',
      value: 'myfriends',
      viewValue: 'Meus amigos',
    },
    { icon: 'local_atm', value: 'services', viewValue: 'Serviços' },
    { icon: 'local_mall', value: 'buy', viewValue: 'Comprar' },
    { icon: 'payment', value: 'payment', viewValue: 'Pagamento' },
    { icon: 'search', value: 'search', viewValue: 'Pesquisar' },
    {
      icon: 'add_shopping_cart',
      value: 'addcart',
      viewValue: 'Adicionar ao carrinho',
    },
    { icon: 'help', value: 'help', viewValue: 'Ajuda' },
    { icon: 'brightness_6', value: 'brightness', viewValue: 'Brilho' },
    { icon: 'chat', value: 'comments', viewValue: 'Comentários' },
    { icon: 'brightness_3', value: 'darkmode', viewValue: 'Modo escuro' },
  ];

  numberItems: number;
  validation = false;

  navbarData: Select = {
    slt1: '',
    slt2: '',
    slt3: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.numberItems = Number(this.route.snapshot.paramMap.get('number'));
  }

  saveSidenav(): void {
    // while (this.numberItems > 0) {
    //   let select = document.getElementById('1');
    //   console.log(select.textContent);
    //   this.numberItems--;
    // }

    this.navbarData.slt1 =
      document.getElementsByClassName('select')[0].textContent;
    this.navbarData.slt2 =
      document.getElementsByClassName('select')[1].textContent;
    this.navbarData.slt3 =
      document.getElementsByClassName('select')[2].textContent;
  }
}
