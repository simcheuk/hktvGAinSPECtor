console.log("hello world i love you!");

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

// Header Tab
let header_tab = document.getElementById('tab').getElementsByTagName('a');
for (e of header_tab) {
    tag = e.getAttribute('data-tag');
    e.title = tooltip_content('header', 'tab', tag);
}

// Slider A
let slider_a = document.getElementsByClassName('rotating-image-slider')[0].querySelectorAll('[class^="image-wrapper"]')
for (e of slider_a) {
    img = e.getElementsByTagName('img')[0];
    // console.log(img.alt);
    img.title = tooltip_content_lite(street_listener(), 'slider_a');
}

// O2O Banner
let o2o_banner = document.querySelectorAll('[data-creative]')
for (e of o2o_banner) {
    img = e.getElementsByTagName('img')[0];
    // console.log(img.alt);
    img.title = tooltip_content_lite(street_listener(), 'o2o_banner');
}
