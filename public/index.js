window.addEventListener('load', function () {
    //Previsualization image
    var previsualization = document.querySelector('.customizing__previsualization__img');
    var previsualizationActualRing = previsualization.classList[1];
    var previsualizationActualWeddingBand = previsualization.classList[2];
    var previsualizationActualDiamondShape = previsualization.classList[3];

    //Interactive Buttons
    var ringButtons = [];
    for (let i = 1; i < 4; i++) {
        ringButtons[i] = document.querySelector('.customizing__interaction__row-1__harmony-ring__buttons__r' + i);
        ringButtons[i].addEventListener('click', function () {
            updatePrevisualization('r', '' + i);
        });
    }

    var weddingBandButtons = [];
    for (let i = 1; i < 3; i++) {
        weddingBandButtons[i] = document.querySelector('.customizing__interaction__row-1__wedding-band__buttons__wb' + i);
        weddingBandButtons[i].addEventListener('click', function () {
            updatePrevisualization('wb', '' + i);
        });
    }

    var diamondShapeButtons = [];
    for (let i = 1; i < 5; i++) {
        diamondShapeButtons[i] = document.querySelector('.customizing__interaction__row-2__diamond-shape__buttons__s' + i);
        diamondShapeButtons[i].addEventListener('click', function () {
            updatePrevisualization('s', '' + i);
        });
    }

    function updatePrevisualization(type, id) {
        if (type === 'r') {
            previsualization.classList.replace(previsualizationActualRing, 'r' + id);
            previsualizationActualRing = type + id;
            updateActiveButtons(type, id);
        }

        else if (type === 'wb') {
            previsualization.classList.replace(previsualizationActualWeddingBand, type + id);
            previsualizationActualWeddingBand = 'wb' + id;
            updateActiveButtons(type, id);
        }

        else if (type === 's') {
            previsualization.classList.replace(previsualizationActualDiamondShape, type + id);
            previsualizationActualDiamondShape = 's' + id;
            updateActiveButtons(type, id);
        }

        previsualization.src = './resources/customizing/results/' + previsualizationActualRing + previsualizationActualWeddingBand + previsualizationActualDiamondShape + '.png'
    }

    function updateActiveButtons(type, id) {
        if (type === 'r') {
            for (let i = 1; i < 4; i++) {
                ringButtons[i].classList.remove('active');
            }
            ringButtons[id].classList.add('active');
        }

        else if (type === 'wb') {
            for (let i = 1; i < 3; i++) {
                weddingBandButtons[i].classList.remove('active');
            }
            weddingBandButtons[id].classList.add('active');
        }

        else if (type === 's') {
            for (let i = 1; i < 5; i++) {
                diamondShapeButtons[i].classList.remove('active');
            }
            diamondShapeButtons[id].classList.add('active');
        }
    }

    var box = document.querySelector('.banner__card');
    TweenLite.from(box, 1, { x: 500, opacity: 0, ease: Sine.easeIn});

    var cards = document.querySelector('.features__card-container');
    TweenLite.from(cards, 2, { autoAlpha: 0 , delay: 2 });


});


