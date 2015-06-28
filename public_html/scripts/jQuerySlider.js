$(document).ready(function () {
    "use strict";
    function slider() {
        var $rightButton = $('#right-btn');
        var $leftButton = $('#left-btn');

        $('#stop-slide').on('click', function () {
            clearInterval(pid);
            pid = -1;
        });
        
        $leftButton.hide();
        $('div.slider div.slide').hide();
        $('div.slider div#slide-1.slide').show();
        
        function onRightButtonClick() {
            var $currentSlide = $('div.slider div.slide:visible');
            if(!$currentSlide.hasClass('end-slide')) {
                $currentSlide.hide().next().show();
                $leftButton.show();
            }
            if($currentSlide.next().hasClass('end-slide')) {
                $rightButton.hide();
            }
            restoreCycle();
        }

        function onLeftButtonClick() {
            var $currentSlide = $('div.slider div.slide:visible');
            if($currentSlide.attr('id') !== 'slide-1') {
                $currentSlide.hide().prev().show();
                $rightButton.show();
            }
            if($currentSlide.prev().attr('id') === 'slide-1') {
                $leftButton.hide();
            }
            restoreCycle();
        }

        $rightButton.on('click', onRightButtonClick);
        $leftButton.on('click', onLeftButtonClick);

        var pid = setInterval(onRightButtonClick, 5000);
        
        function restoreCycle() {
            if(-1 === pid) {
                pid = setInterval(onRightButtonClick, 5000);
            }
        }
        
        $('#submit').click(function (e) {
//            e.preventDefault();
            var text; 
            text = $.trim($('#write-text').val());
            if(text.length) {
                
                $('#text-container').val(text);
            }
        });
        
        $('#background-color, #font-color').change(function (e) {
            var backgroundColor, fontColor;
            
            backgroundColor = $('#background-color').val();
            fontColor = $('#font-color').val();
            $('#text-container').css({'background': backgroundColor, 'color': fontColor});
        });
    }
    slider();

});