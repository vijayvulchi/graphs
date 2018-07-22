// map codes
$(function () {
  let mapBackground = '#0C785B';
  let mapBackgrounds = '#00A564';
  let gray = '#686868';

  colorsST = {};
  $('#jvmap_world').vectorMap(
    {
      map: 'world_en',
      backgroundColor: null,
      borderColor: colorsST,
      borderOpacity: 0.25,
      borderWidth: 2,
      color: mapBackground,
      colors: {
        'in': mapBackgrounds,
        'us': mapBackgrounds,
        'gl': gray
      },
      enableZoom: true,
      hoverColor: '#c9dfaf',
      hoverOpacity: null,
      normalizeFunction: 'linear',
      scaleColors: ['#b6d6ff', '#005ace'],
      selectedColor: '#c9dfaf',
      selectedRegions: null,
      showTooltip: true,
      onRegionClick: function(element, code, region) {
        var message = 'You clicked "'
          + region
          + '" which has the code: '
          + code.toUpperCase();
      }
    }
  );
});