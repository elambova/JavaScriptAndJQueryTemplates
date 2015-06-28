(function ($) {
    $.fn.dropdown = function () {
        var $this = $(this);
        var $options = $this.children();
        var $container = $('<div/>').addClass('dropdown-list-container');
        var $dropdownMenu = $('<ul/>').addClass('dropdown-list-options');
        var $items = $('<li/>').addClass('dropdown-list-options');

        $items.on('click', function () {
            var $this = $(this),
                $options = $('#dropdown'),
                $currentOption = $($options[0][$this.attr('data-value')]);

            $this.addClass('selected');
            $this.removeClass('selected');

            $options.children().attr('selected', false);
            $currentOption.attr('selected', true);
        });

        for (var i = 0, len = $options.length; i < len; i += 1) {
            var $newItem = $items.clone(true);
            var content = $($options[i]).html();

            $newItem.text(content);
            $newItem.attr('data-value', i);
            $dropdownMenu.append($newItem);
        }

        $container.append($dropdownMenu);
        $this.after($container);
    };
    $('#dropdown').dropdown();
}(jQuery));