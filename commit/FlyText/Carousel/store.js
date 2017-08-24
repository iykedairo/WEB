



function slideShow ( id, context )  {
  this.slides = this.slides && this.slides.length ? this.slides : pt( id, context );
  this.length = this.slides.length -1;
  this.count = ( typeof this.count === "number" && this.count % 1 == 0 ) ? this.count : 0;
  this.current = ( typeof this.current === "number" && this.current % 1 == 0 ) ? 
    this.current : 0;
    this.slides[this.count].style.display = "block";  
}

slideShow.prototype.slide = function (  ) {
 this.slides.each(function(){this.style.display = "none";}); 
    this.count += 1;
    if (this.count > this.length) { this.count = 1; }
    this.slides[this.count].style.display = "block";

    setTimeout(this.slide.bind(this), 2000);
};
