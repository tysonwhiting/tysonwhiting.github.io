$( document ).ready(function() {
    console.log( "ready!" );


var amplitude   = 100;
var timeout     = 500;

function birth(x, y) {
    if(!x && !y) {
      var x = Math.random()*$(document).width();
      var y = Math.random()*$(document).height();
    }
    $(document.body)
    .append('<div class="animal" style="left:' + x + 'px; top:' + y + 'px;">' +
            '</div>');
    live($('.animal').last());
}

function live(animal) {
    var current_x = $(animal).offset().left;
    var current_y = $(animal).offset().top;
    
    var x = -1;
    var y = -1;
    
    while((x < 0 || x > $(document).width() && 
          y < 0 || y > $(document).height()))
    {
        
        x = current_x + (-amplitude + Math.random()*(amplitude*2));
        y = current_y + (-amplitude + Math.random()*(amplitude*2));
        
        // Débordement au resize        
        if(x < 0) {
            x = amplitude;
        }
        else if(x > $(document).width()) {
            x = $(document).width() - amplitude;
        }
        if(y < 0) {
            y = amplitude;
        }
        else if(y > $(document).height()) {
            y = $(document).height() - amplitude;
        }
    }
    
    $(animal).css({
        left: x + 'px',
        top: y + 'px',
        '-webkit-transform':'rotate(' + Math.random()*270 + 'deg)'
    });
    
    setTimeout(function(){
        live(animal);
    }, Math.random()*timeout);
}

for(i = 0; i < 40; i++) {
    birth();
}

$(document).click(function(e){
    birth(e.pageX, e.pageY);
});

})
