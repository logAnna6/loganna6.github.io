$(document).ready(function() {

$('button').on('click', function(){
    $('body').toggleClass('open');
  });

  $('#verger').on('click', function(e) { 
    $('#grand').attr('src', '/img/SDC12025-1.jpg'); 
    $('#small1').attr('src', '/img/SDC12030-1.jpg');
    $('#small2').attr('src', '/img/Cerises-de-montmorency-1.jpg');
    $('#small3').attr('src', '/img/Quetsches-1.jpg');
    $('#small4').attr('src', '/img/DSC_3701-1.jpg');
});
$('#saisons').on('click', function(e) { 
  $('#grand').attr('src', '/img/La-neige-au-gîte-1-1.jpg'); 
  $('#small1').attr('src', '/img/DSC_9136-1.jpg');
  $('#small2').attr('src', '/img/Cerisiers-en-fleurs-au-gîte-1.jpg');
  $('#small3').attr('src', '/img/DSC_8164-1.jpg');
  $('#small4').attr('src', '/img/abris-de-jardin-1024x682.jpg');
});
  console.clear();

  class Slider {
    
    constructor($el) {
      this.$el = $el;
      this.$refs = {
        items: [... document.querySelectorAll('[data-slider]', this.$el)],
      };
      this.length = this.$refs.items.length-1;
    }

    
    next() {
      this.slide('next');
    }
    
    prev() {
      this.slide('prev');
    }
    
    slide(direction){
      this.$refs.items.map(el => {
        const pos = Number(el.getAttribute('data-position'));
        const next = (pos+1) > this.length ? 0 : pos+1;
        const prev = (pos-1) < 0 ? this.length : pos-1;
        const go = direction == "next" ? next : prev;
        
        el.setAttribute('data-position', go)
      })
    }
    
    jump(pos){
      for(let i = 0; i < pos; i++) {
        const timeout = setTimeout(()=>{
          this.slide('prev')
        }, 100)
      }
    }
    
  };
  
  const slider = new Slider(document.querySelector('[data-component="slider"]'));
  
  document.querySelector('.arrow--prev').addEventListener('click', ()=>{
    slider.next()
  })
  document.querySelector('.arrow--next').addEventListener('click', ()=>{
    slider.prev()
  })
  document.querySelectorAll('.slider__item').forEach(sliderItem => {
    sliderItem.addEventListener('click', ()=>{
      const pos = Number(sliderItem.getAttribute("data-position"));
      
      slider.jump(pos)
    })
  })

});
