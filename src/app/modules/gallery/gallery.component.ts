import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../../service/image.service'
import { Observable } from 'rxjs';
import { GalleryImage } from '../../models/galleryImage.model';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  imagesList = []
  images: Observable<GalleryImage[]>
  breakpoint: number;
  constructor(
    private imageService: ImageService
  ) { }

  ngOnInit() {
    this.onResize(window);
    this.images = this.imageService.getImages();


  }

  onResize(event) {
    ((event.innerWidth <= 420)) ? this.breakpoint = 3
    : ((event.innerWidth > 420) && (event.innerWidth <= 700)) ? this.breakpoint = 1
      : ((event.innerWidth > 700) && (event.innerWidth <= 1000)) ? this.breakpoint = 2
        : ((event.innerWidth > 1000) && (event.innerWidth <= 1200)) ? this.breakpoint = 3
          : this.breakpoint = 4;
  }

  // unfinished
  flexView() {
    var elements = document.getElementsByClassName("image") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.flex = "50%";
      console.log("flex", elements[i])
    }
  }

  tileClicked(event){
    console.log("clicked", event);
  }

  closeModel() {
    
  }

  ngOnChanges() {
    this.images = this.imageService.getImages();
  }

}
