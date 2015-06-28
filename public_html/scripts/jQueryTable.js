$(document).ready(function () {
    function createStudentTable() {
        var arrayName = [{
                firstName: 'Peter',
                lastName: 'Ivanov',
                grade: 3
            }, {
                firstName: 'Milena',
                lastName: 'Grigorova',
                grade: 6
            }, {
                firstName: 'Gergana',
                lastName: 'Borisova',
                grade: 12
            }, {
                firstName: 'Boyko',
                lastName: 'Petrov',
                grade: 7
            }];

        var $tableBody = $('#students tbody');

        for (var i = 0; i < arrayName.length; i += 1) {
            var $tableRow = $('<tr />');
            $tableRow.html('<td>' + arrayName[i].firstName + '</td>' +
                    '<td>' + arrayName[i].lastName + '</td>' +
                    '<td>' + arrayName[i].grade + '</td>');
            $tableRow.appendTo($tableBody);
        }
    }
    createStudentTable();

    var $arrayImage = [];

    function createImage(src, alt, id) {
        var image = new Image();
        image.src = src;
        image.alt = alt;
        image.id = id;
        image.className = 'slider-image';
        return image;
    }
    for (var i = 1; i <= 11; i += 1) {
        $arrayImage.push(createImage('./images/image' + i + '.jpg', 'image' + i, i));
    }
    var $container = $('#image-container');
    var $rightButton = $('#right-btn');
    var $leftButton = $('#left-btn');
    $container.html($arrayImage[0]);

    function onRightButtonClick() {
        var currentImageId = parseInt($('#image-container img.slider-image').attr('id')) - 1;
        currentImageId += 1;
        if (currentImageId >= $arrayImage.length) {
            alert('No more pictures!');
        }

        $container.html($arrayImage[currentImageId]);
    }

    function onLeftButtonClick() {
        var currentImageId = parseInt($('#image-container img.slider-image').attr('id')) - 1;
        currentImageId -= 1;
        if (currentImageId < 0) {
            alert('No more pictures!');
        }

        $container.html($arrayImage[currentImageId]);
    }

    $rightButton.click(onRightButtonClick);
    $leftButton.click(onLeftButtonClick);

});