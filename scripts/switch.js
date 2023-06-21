let moon_svg = '<svg version="1.1" viewBox="0 0 508.184 508.184"><path d="M363.07,28.504c-2.422-1.353-5.372-1.354-7.796-0.003c-3.859,2.151-5.244,7.024-3.092,10.883c40.311,72.537,40.311,160.746,0,233.283c-64.419,115.917-210.611,157.665-326.528,93.245c-2.441-1.38-5.426-1.381-7.869-0.003c-3.848,2.171-5.207,7.051-3.035,10.899c45.292,81.055,130.853,131.304,223.704,131.376c92.816-0.029,178.349-50.286,223.551-131.351C530.874,253.324,486.579,97.372,363.07,28.504z M378.667,446.661c-107.506,77.534-257.51,53.237-335.045-54.269c63.171,26.39,134.279,26.389,197.45-0.002c130.515-54.526,192.116-204.531,137.59-335.046c20.885,15.062,39.211,33.387,54.273,54.272C510.47,219.122,486.173,369.126,378.667,446.661z"/><path d="M206.59,173.632l7.864,42.736l7.848-42.72c8.224-44.552,13.056-49.4,57.6-57.6l42.736-7.864l-42.72-7.848c-44.56-8.216-49.392-13.064-57.6-57.6L214.454,0l-7.848,42.72c-8.224,44.552-13.056,49.4-57.6,57.6l-42.736,7.864l42.72,7.848C193.55,124.248,198.382,129.096,206.59,173.632z M214.454,77.112c4.611,14.841,16.231,26.461,31.072,31.072c-14.841,4.61-26.461,16.231-31.072,31.072c-4.61-14.841-16.231-26.462-31.072-31.072C198.223,103.573,209.844,91.953,214.454,77.112z"/><path d="M118.59,333.632l7.864,42.736l7.848-42.72c8.224-44.552,13.056-49.4,57.6-57.6l42.736-7.864l-42.72-7.848c-44.56-8.216-49.392-13.064-57.6-57.6L126.454,160l-7.848,42.72c-8.224,44.552-13.056,49.4-57.6,57.6l-42.736,7.864l42.72,7.848C105.55,284.248,110.382,289.096,118.59,333.632z M126.454,237.112c4.611,14.841,16.231,26.461,31.072,31.072c-14.841,4.61-26.461,16.231-31.072,31.072c-4.611-14.841-16.231-26.461-31.072-31.072C110.223,263.573,121.844,251.953,126.454,237.112z"/></svg>';

let sun_svg = '<svg viewBox="0 0 512.045 512.045"> <path d="m256.023 104.57c-83.511 0-151.452 67.941-151.452 151.452s67.941 151.452 151.452 151.452 151.452-67.941 151.452-151.452-67.942-151.452-151.452-151.452zm0 272.905c-66.969 0-121.452-54.483-121.452-121.452s54.483-121.453 121.452-121.453 121.452 54.483 121.452 121.452-54.484 121.453-121.452 121.453z"/><path d="m327.927 86.971c1.916.815 3.906 1.201 5.864 1.201 5.835 0 11.383-3.425 13.811-9.133l16.561-38.939c3.242-7.624-.31-16.432-7.933-19.674-7.626-3.244-16.433.309-19.675 7.932l-16.561 38.939c-3.242 7.623.31 16.432 7.933 19.674z"/><path d="m184.119 425.074c-7.623-3.243-16.432.309-19.674 7.932l-16.562 38.939c-3.243 7.624.309 16.432 7.932 19.674 1.915.815 3.906 1.201 5.864 1.201 5.834 0 11.382-3.425 13.81-9.133l16.562-38.938c3.243-7.624-.309-16.433-7.932-19.675z"/><path d="m28.358 175.489 38.939 16.562c1.916.815 3.906 1.201 5.864 1.201 5.834 0 11.383-3.426 13.81-9.133 3.243-7.624-.309-16.432-7.932-19.674l-38.939-16.563c-7.624-3.242-16.432.309-19.674 7.932-3.243 7.624.308 16.433 7.932 19.675z"/><path d="m483.688 336.556-38.938-16.562c-7.621-3.24-16.432.309-19.675 7.932-3.242 7.624.31 16.432 7.933 19.674l38.938 16.562c1.916.815 3.905 1.201 5.864 1.201 5.834 0 11.383-3.426 13.811-9.133 3.241-7.623-.31-16.432-7.933-19.674z"/><path d="m167.808 77.338c2.357 5.846 7.978 9.395 13.917 9.395 1.867 0 3.766-.351 5.604-1.092 7.684-3.098 11.401-11.837 8.303-19.521l-15.823-39.245c-3.098-7.684-11.837-11.403-19.52-8.303-7.684 3.098-11.401 11.837-8.303 19.521z"/><path d="m344.237 434.707c-3.099-7.683-11.839-11.402-19.521-8.302-7.683 3.098-11.4 11.837-8.303 19.521l15.823 39.245c2.357 5.845 7.978 9.395 13.917 9.395 1.867 0 3.767-.351 5.604-1.092 7.683-3.098 11.4-11.837 8.303-19.521z"/><path d="m85.641 324.716c-3.097-7.684-11.837-11.401-19.521-8.303l-39.245 15.823c-7.684 3.098-11.401 11.837-8.303 19.521 2.356 5.846 7.978 9.395 13.917 9.395 1.867 0 3.766-.351 5.604-1.092l39.245-15.823c7.684-3.098 11.401-11.837 8.303-19.521z"/><path d="m426.403 187.329c2.357 5.846 7.979 9.395 13.917 9.395 1.867 0 3.767-.351 5.604-1.092l39.245-15.823c7.683-3.098 11.4-11.838 8.303-19.521-3.099-7.684-11.838-11.402-19.521-8.303l-39.245 15.823c-7.682 3.098-11.4 11.838-8.303 19.521z"/><path d="m256.023 72.314c8.284 0 15-6.716 15-15v-42.314c0-8.284-6.716-15-15-15s-15 6.716-15 15v42.314c0 8.285 6.715 15 15 15z"/><path d="m256.023 439.73c-8.284 0-15 6.716-15 15v42.315c0 8.284 6.716 15 15 15s15-6.716 15-15v-42.315c0-8.284-6.716-15-15-15z"/><path d="m72.315 256.022c0-8.284-6.716-15-15-15h-42.315c-8.284 0-15 6.716-15 15s6.716 15 15 15h42.315c8.284 0 15-6.715 15-15z"/><path d="m497.045 241.023h-42.314c-8.284 0-15 6.716-15 15s6.716 15 15 15h42.314c8.284 0 15-6.716 15-15 0-8.285-6.716-15-15-15z"/><path d="m104.908 126.121c2.929 2.929 6.768 4.394 10.606 4.394 3.839 0 7.678-1.464 10.606-4.394 5.858-5.858 5.858-15.355 0-21.213l-29.92-29.921c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213z"/><path d="m407.137 385.924c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213l29.921 29.921c2.929 2.929 6.767 4.393 10.606 4.393s7.678-1.464 10.606-4.393c5.858-5.858 5.858-15.355 0-21.213z"/><path d="m104.908 385.924-29.921 29.921c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.393 10.606 4.393 3.839 0 7.678-1.464 10.606-4.393l29.921-29.921c5.858-5.858 5.858-15.355 0-21.213-5.856-5.859-15.354-5.859-21.212 0z"/><path d="m396.53 130.515c3.839 0 7.678-1.464 10.607-4.394l29.921-29.921c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-29.921 29.921c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.767 4.394 10.606 4.394z"/> </svg>';

// set dark-light theme switch
$('.label').click( function() {
   if ( $('.toggle-state').prop('checked') ) {
      darkmode();
   } else {
      lightMode();
   }
});

function darkmode() {
   $('body').attr('data-theme', 'dark');
   $('#editor-theme').attr('href', '../styles/darcula.css');
   $('.indicator').html(moon_svg);
   $('.indicator svg').css('left', '5px');
   $('.separator').css('height', '0.1em');
}

function lightMode() {
   $('body').attr('data-theme', 'light');
   $('#editor-theme').attr('href', '../styles/idea.css');
   $('.indicator').html(sun_svg);
   $('.indicator svg').css('left', '95px');
   $('.separator').css('height', '0.15em');
}