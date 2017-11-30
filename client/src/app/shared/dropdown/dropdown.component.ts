import { Component, OnInit } from '@angular/core';
import { LangService } from '../../core/services/lang-service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  langs: Array<string>;
  currentLang: string = 'Russian';

  constructor(private langService: LangService) {
    this.langService.getLanguages()
      .subscribe(langs => {
        this.langs = langs;
        console.log(langs);
      });
  }

  ngOnInit() {
  }

  public selectLanguage(item) {
    this.currentLang = item.language;
  }

}
