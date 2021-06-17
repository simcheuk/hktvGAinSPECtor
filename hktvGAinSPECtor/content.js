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

function dash() {
    $('.gaHover').first().hover(function () {
        console.log('hahaha');
    });
}

// function parents_id(id) {

// }

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, response) {
    // var link = document.createElement('link');
    // link.rel = 'stylesheet';
    // link.type = 'text/css';
    // link.href = 'chrome-extension://plmehncddppdlomgnpkdcoklbpeacpjh/tooltipster/dist/css/tooltipster.bundle.min.css';
    // document.getElementsByTagName('head')[0].appendChild(link);

    // var jq = document.createElement('script');
    // jq.type = 'text/javascript';
    // jq.src = 'https://code.jquery.com/jquery-1.10.0.min.js';
    // document.getElementsByTagName('head')[0].appendChild(jq);

    // var js = document.createElement('script');
    // js.type = 'text/javascript';
    // js.src = 'chrome-extension://plmehncddppdlomgnpkdcoklbpeacpjh/tooltipster/dist/js/tooltipster.bundle.min.js';
    // document.getElementsByTagName('head')[0].appendChild(js);

    // var func = document.createElement('script');
    // func.textContent = "$(document).ready(function() { $('.tooltip').tooltipster({theme: 'tooltipster-noir'});});"
    // document.getElementsByTagName('head')[0].appendChild(func);

    // Define iframe element to append
    // var dash = document.createElement('iframe');
    // dash.id = 'gaTooltip';
    // dash.setAttribute('width', '600');
    // dash.setAttribute('height', '450');
    // dash.setAttribute('frameborder', '0');
    // dash.setAttribute('style', 'border:0');


    if (message.txt === 'run') {
        document.body.onmouseover = function(e) {
            // Attributes listener
            var tar = e.target;

            // Mouse Out Timeout
            var delay = setTimeout(function() {
                // Criteria and Action by module

                // Header Tab - text
                if (tar.closest('div#tab') !== null && tar.closest('div#tab') !== undefined && tar.tagName === 'SPAN') {
                    // console.log(tar);
                    elab = tar.closest('a');
                    tag = elab.getAttribute('data-tag');

                    // if (tar.className === 'gaHover' || tar.className === '' || tar.className === undefined) {
                    //     tar.className = 'gaHover';
                    // } else if (tar.className.includes(' gaHover')) {
                    //     tar.className = tar.className
                    // } else {
                    //     tar.className += ' gaHover';
                    // }

                    tar.title = tooltip_content('header', 'tab', tag);

                    console.log($(tar));
                    $(tar).hover(function () {
                        console.log('mouse in');
                    }, function () {
                        console.log('mouse out');
                    });
                }   else {
                    return true;
                }
            }, 500);
            tar.onmouseout = function(){clearTimeout(delay);};

    
            // create a closure
            // var executed = false;
            // if (!executed) {
            //     executed = true;
            //     dash();
            // }

        }

        // Header Tab
        // let header_tab = document.getElementById('tab').getElementsByTagName('a')
        // if (header_tab !== undefined) {
        //     for (ele of header_tab) {
        //         tag = e.getAttribute('data-tag');
        //         ele.className += ' tooltipstered';
        //         ele.title = tooltip_content('header', 'tab', tag);
        //     }
        // }


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
