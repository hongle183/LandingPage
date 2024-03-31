$(document).ready(
    function(){
        
        //sticly nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky')
                }else{
                    $('nav').removeClass('sticky')
                }
            }, {
                offset: '600px'
            }
        )

        //scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 700);
            event.preventDefault();
        });

        //mobile navigation
        $('.menu-icon').click(
            function(){
                $('.main-nav').slideToggle(200);

                if($('.menu-icon').hasClass('fa-bars')){
                    $('.menu-icon').addClass('fa-times');
                    $('.menu-icon').removeClass('fa-bars')
                }else{
                    $('.menu-icon').addClass('fa-bars');
                    $('.menu-icon').removeClass('fa-times')
                }
            }
        )
    }
)