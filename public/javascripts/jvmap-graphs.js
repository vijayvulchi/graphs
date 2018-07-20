// map codes
$(function () {
  canvasBg = '#282828';
  highlitedColor = '#0C785B'
  $('#jvmap_world').vectorMap(
    {
        map: 'world_en',
        backgroundColor: canvasBg,
        borderColor: '#ffffff',
        borderOpacity: 0.25,
        borderWidth: 1,
        color: '#f4f3f0',
        enableZoom: true,
        hoverColor: '#c9dfaf',
        hoverOpacity: null,
        normalizeFunction: 'linear',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegions: null,
        showTooltip: true,
        onRegionClick: function(element, code, region)
        {
            var message = 'You clicked "'
                + region
                + '" which has the code: '
                + code.toUpperCase();
    
            alert(message);
        }
    });
});