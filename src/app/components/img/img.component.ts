
// import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {

  img:string = '';

  @Input()
  set changeImg(newImg: string){
    this.img = newImg
    console.log('chage only image', this.img)

  }

  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';
  counter = 0;
  counterFn: number | undefined;

  constructor() {
    // before render
    // NO async -- once time
    // console.log('constructor', 'imgValue =>', this.img);
  }



  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
