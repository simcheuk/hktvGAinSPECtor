console.log("hello world i love you too!");

function tooltip_content(category, action, label) {
    tooltip = 'Event Category: ' + category + ' \nEvent Action: ' + action + '\nEvent Label: ' + label;
    return tooltip;
}

function tooltip_content_lite(category, action) {
    tooltip = 'Event Category: ' + category + ' \nEvent Action: ' + action;
    return tooltip;
}

function street_listener() {
    street = document.querySelector('[class$="active"]').getAttribute('data-tag');
    return street;
}

function dash() {
    $('.gaHover').first().hover(function () {
        console.log('hahaha');
    });
}

// Define iframe element to append
var dash = document.createElement('iframe');
dash.id = 'gaTooltip';
// dash.setAttribute('width', '400');
// dash.setAttribute('height', '200');
dash.setAttribute('frameborder', '0');
// dash.setAttribute('style', 'border:0');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, response) {

    if (message.txt === 'run') {
        var delay = 500;
        var timeoutConst;

        // header tab text
        $('#tab > ul > li > a > span').hover( function() {
            tar = this;
            function lab() {
                elab = tar.closest('a');
                tag = elab.getAttribute('data-tag');
                tar.title = tooltip_content('header', 'tab', tag);
                tar.append(dash);
                dash.setAttribute('src', 'https://datastudio.google.com/embed/reporting/3070bc69-39fe-4875-a1af-6fbf2f526761/page/cXDOC');
                $('#gaTooltip').stop().fadeIn();
            }
            timeoutConst = setTimeout(lab, delay)
        }, function() {
            clearTimeout(timeoutConst);
            $('#gaTooltip').stop().fadeOut();
        });


        // Slider A
        // let slider_a = document.getElementsByClassName('rotating-image-slider')[0].querySelectorAll('[class^="image-wrapper"]')
        // for (e of slider_a) {
        //     img = e.getElementsByTagName('img')[0];
        //     img.title = tooltip_content_lite(street_listener(), 'slider_a');
        // }

        // O2O Banner
        // let o2o_banner = document.querySelectorAll('[data-creative]')
        // for (e of o2o_banner) {
        //     img = e.getElementsByTagName('img')[0];
        //     img.title = tooltip_content_lite(street_listener(), 'o2o_banner');
        // }
    }
}
