// toggle class scroll
$(window).scroll(function() {
    if($(this).scrollTop() > 100)
    {
        $('.navbar-trans').addClass('afterscroll');


    } else
    {
        $('.navbar-trans').removeClass('afterscroll');
    }

});






$(document).ready(function() {
    var projects = $('.card');
    var filteredProjects = [];
    var selection = "all";
    var running = false;
    window.setTimeout(function() {
        $('.all').trigger('click');
    }, 150);

    $(window).resize(function() {
        buildGrid(filteredProjects);
    });

    $('.category-buttons a').on('click', function(e) {
        e.preventDefault();
        if (!running) {
            running = true;
            selection = $(this).data('group');
            $('.category-buttons a').removeClass('active');
            $(this).addClass('active');
            filteredProjects = [];
            for (i = 0; i < projects.length; i++) {
                var project = projects[i];
                var dataString = $(project).data('groups');
                var dataArray = dataString.split(',');
                dataArray.pop();
                if (selection === 'all') {
                    $('#work').height(800);
                    $(project).addClass('setScale').queue(function(next) {
                        filteredProjects.push(project);
                        next();
                    }).queue(function(next) {
                        $(this).removeClass('setScale');
                        next();
                    }).queue(function(next) {
                        $(this).addClass('animating show')
                        next();
                    }).delay(750).queue(function() {
                        running = false;
                        $(this).removeClass('animating').dequeue();
                    });

                } else {
                    $('#work').height(400);
                    if ($.inArray(selection, dataArray) > -1) {
                        $(project).addClass('setScale').queue(function(next) {
                            filteredProjects.push(project);
                            next();
                        }).queue(function(next) {
                            $(this).removeClass('setScale');
                            next();
                        }).queue(function(next) {
                            $(this).addClass('animating show')
                            next();
                        }).delay(750).queue(function() {
                            running = false;
                            $(this).removeClass('animating').dequeue();
                        });
                        /*$(project).css({
                          '-webkit-transition': 'all 750ms cubic-bezier(0.175, 0.885, 0.32, 1.1)',
                          'transition': 'all 750ms cubic-bezier(0.175, 0.885, 0.32, 1.1);',
                          '-webkit-transform': 'scale(' + 1 + ')',
                          '-ms-transform': 'scale(' + 1 + ')',
                          'transform': 'scale(' + 1 + ')',
                          'opacity': 1
                        });*/
                    } else {
                        $(project).queue(function(next) {
                            $(this).addClass('animating');
                            next();
                        }).queue(function(next) {
                            $(this).removeClass('show');
                            next();
                        }).delay(750).queue(function() {
                            $(this).removeClass('animating').dequeue();
                        });

                        /*$(project).css({
                          '-webkit-transition': 'all 750ms cubic-bezier(0.175, 0.885, 0.32, 1.1)',
                          'transition': 'all 750ms cubic-bezier(0.175, 0.885, 0.32, 1.1);',
                          '-webkit-transform': 'scale(' + 0 + ')',
                          '-webkit-transform': 'scale(' + 0 + ')',
                          '-ms-transform': 'scale(' + 0 + ')',
                          'transform': 'scale(' + 0 + ')',
                          'opacity': 0
                        });*/
                    }
                }
            }
            buildGrid(filteredProjects);
        }
    })

    function buildGrid(projects) {
        var left = 0;
        var top = 0;
        var totalHeight = 0;
        var largest = 0;
        var heights = [];
        for (i = 0; i < projects.length; i++) {
            $(projects[i]).css({
                height: 'auto'
            });
            heights.push($(projects[i]).height());
        }
        var maxIndex = 0;
        var maxHeight = 0;

        for (i = 0; i <= heights.length; i++) {
            if (heights[i] > maxHeight) {
                maxHeight = heights[i];
                maxIndex = i;
                $('.guide').height(maxHeight);
            }
            if (i === heights.length) {
                for (i = 0; i < projects.length; i++) {
                    $(projects[i]).css({
                        position: 'absolute',
                        left: left + '%',
                        top: top
                    });
                    left = left + ($('.guide').width() / $('#grid').width() * 100) + 2;

                    if (i === maxIndex) {
                        $(projects[i]).css({
                            height: 'auto'
                        });
                    } else {
                        $(projects[i]).css({
                            height: maxHeight
                        });
                    }
                    if ((i + 1) % 3 === 0 && projects.length > 3 && $(window).width() >= 700) {
                        top = top + $('.guide').height() + 20;
                        left = 0;
                        totalHeight = totalHeight + $('.guide').height() + 20;

                    } else if ((i + 1) % 2 === 0 && projects.length > 2 && $(window).width() < 700 && $(window).width() >= 480) {
                        top = top + $('.guide').height() + 20;
                        left = 0;
                        totalHeight = totalHeight + $('.guide').height() + 20;

                    } else if ((i + 1) % 1 === 0 && projects.length > 1 && $(window).width() < 480) {
                        top = top + $('.guide').height() + 20;
                        left = 0;
                        totalHeight = totalHeight + $('.guide').height() + 20;
                    }
                    $('#grid').height(totalHeight + $('.guide').height());
                }
            }
        }
    }
})




$(function(){
    var prev;

    $('#brand').hover(function(){
        prev = $(this).text();
        $(this).text("Seaside Aluminum");
    });
    
    $('.txt').textillate({
  loop: true,
  in: { 
    effect: 'rollIn',    
    delayScale: 1,
    delay: 150,
    shuffle: true
  }, 
  out: { 
    effect: 'fadeOut',
    reverse: true
  } 
});
})

$('#brand').on({ 'touchstart' : function(){ prev = $(this).text();
        $(this).text("Seaside Aluminum");} });




$(".growImg").click(function(){
    alert("The paragraph was clicked.");
    $('.growImg').height(400);
    $('.growImg').width(400);
});




