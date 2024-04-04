import {Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CommonModule} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";

import {ToolbarComponent} from "../shared/toolbar/toolbar.component";
import {MusicService} from "../services/music.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    FlexLayoutModule,
    CommonModule,
    ToolbarComponent,
    MatCardImage,
    MatButton,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    FormsModule,
    MatIconButton
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  gridColumns = 6;
  musics: any = []
  searchTerm: string = '';

  constructor(private readonly musicService: MusicService) {
  }

  ngOnInit(): void {
    this.musicService.getAll().subscribe((data) => {
      this.musics = data;
    })
  }

  searchMusic() {
    if(this.searchTerm === '') return this.ngOnInit();
    this.musicService.search(this.searchTerm).subscribe((data) => {
      this.musics = data;
    })
  }
}
