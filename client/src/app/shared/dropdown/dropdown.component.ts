import { Component, OnInit } from '@angular/core';
import { LangService } from '../../core/services/lang-service';

import { Languages as Lang } from '../../core/interfaces/languages';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  langs: Lang[];

  constructor(private langService: LangService) {
    this.langService.getLanguages()
      .subscribe(langs => {
        this.langs = langs;
        console.log(this.langs);
      });
  }

  ngOnInit() {
  }

}
