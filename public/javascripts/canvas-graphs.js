// Canvas
const $ = jQuery;
$(function () {
  // global variables
  let canvasBackground = '';
  let fontColor = '';
  let legendTextColor = '';
  let lineColor = '#0C785B';
  let fontFamily = 'sans-serif';
  let legendFontFamily = 'sans-serif';
  let lineTickness = 2;
  let fontSize = 16;
  let axisX = {
    lineThickness: 0,
    tickThickness: 0,
    valueFormatString: ' '
  };
  let axisY = {
    includeZero: false,
    lineThickness: 0,
    tickThickness: 0,
    valueFormatString: ' ',
    gridThickness: 0
  };
  
  function generateTheme () {
    if($('html').hasClass('theme-dark')) {
      canvasBackground = '#282828';
      legendTextColor = '#ffffff';
      fontColor = '#797974';
    }
    if($('html').hasClass('theme-light')) {
      canvasBackground = '#ffffff';
      legendTextColor = '#000000';
      fontColor = '#000000';
    }
  }

  function generateCanvas () {
    let canvasData = [
      {
        'sessionsLastMonth': {
          'lineGraph': true,
          'id': 'sessions_last_month',
          'url': 'javascripts/json/sessionslastmonth.json',
          'title': 'SESSIONS: LAST MONTH',
          'subTitle': 'last month',
          'axisX': true,
          'axisY': true,
          'dataType': 'spline',
          'legendWidth': 120,
          'legendFontSize': 15,
          'legendText': '84,015 SESSIONS 25.00%'
        }
      },
      {
        'sessionsThisMonth': {
          'lineGraph': true,
          'id': 'sessions_this_month',
          'url': 'javascripts/json/sessionsthismonth.json',
          'title': 'SESSIONS: THIS MONTH',
          'subTitle': 'this month',
          'axisX': true,
          'axisY': true,
          'dataType': 'line',
          'legendWidth': 120,
          'legendFontSize': 15,
          'legendText': '11,461 SESSIONS 3.00%'
        }
      },
      {
        'usersLastMonth': {
          'lineGraph': true,
          'id': 'users_last_month',
          'url': 'javascripts/json/userslastmonth.json',
          'title': 'USERS: LAST MONTH',
          'subTitle': 'last month',
          'axisX': true,
          'axisY': true,
          'dataType': 'spline',
          'legendWidth': 100,
          'legendFontSize': 14,
          'legendText': '74,340 USERS 26.00%'
        }
      },
      {
        'usersThisMonth': {
          'lineGraph': true,
          'id': 'users_this_month',
          'url': 'javascripts/json/usersthismonth.json',
          'title': 'USERS: THIS MONTH',
          'subTitle': 'this month',
          'axisX': true,
          'axisY': true,
          'dataType': 'line',
          'legendWidth': 100,
          'legendFontSize': 14,
          'legendText': '10,108 USERS 4.00%'
        }
      },
      {
        'usersType': {
          'pieGraph': true,
          'id': 'users_type',
          'url': 'javascripts/json/userstype.json',
          'title': 'USER TYPE',
          'subTitle': 'this month',
          'dataType': 'pie',
          'legendWidth': 135,
          'legendFontSize': 11,
          'startAngle': 270
        }
      },
      {
        'socialReferral': {
          'pieGraph': true,
          'id': 'social_referral',
          'url': 'javascripts/json/socialreferral.json',
          'title': 'SOCIAL REFERRAL',
          'subTitle': 'this month',
          'dataType': 'doughnut',
          'legendWidth': 130,
          'legendFontSize': 11,
          'startAngle': 270
        }
      },
      {
        'bounceRate': {
          'pieGraph': true,
          'id': 'bounce_rate',
          'url': 'javascripts/json/bouncerate.json',
          'title': 'BOUNCE RATE',
          'subTitle': 'this month',
          'dataType': 'doughnut',
          'legendWidth': 110,
          'legendFontSize': 14,
          'startAngle': 250
        }
      }
    ];
  
    $.each(canvasData, function (index, object) {
      $.each(object, function (key, value) {
        if (value.lineGraph === true) {
          $.get(value.url, function (data) {
            let dataPoints = data;
            let chart = new CanvasJS.Chart(value.id, {
              animationEnabled: true,
              exportEnabled: true,
              backgroundColor: null,
              title: {
                text: value.title,
                fontFamily: fontFamily,
                fontColor: fontColor,
                fontSize: fontSize
              },
              subtitles: [
                {
                  text: value.subTitle,
                  fontFamily: fontFamily,
                  fontColor: fontColor,
                  horizontalAlign: 'left',
                  verticalAlign: 'bottom'
                }
              ],
              axisX: axisX,
              axisY: axisY,
              legend: {
                fontFamily: legendFontFamily,
                fontSize: value.legendFontSize,
                fontColor: legendTextColor,
                markerMargin: 8,
                itemWidth: value.legendWidth,
                itemWrap: true,
                horizontalAlign: "right",
                verticalAlign: "center"
              },
              data: [
                {
                  type: value.dataType,
                  showInLegend: true,
                  legendText: value.legendText,
                  indexLabelFontColor: lineColor,
                  lineThickness: lineTickness,
                  markerType: 'none',
                  lineColor: lineColor,
                  dataPoints: dataPoints
                }
              ]
            });
            chart.render();
          });
        }
        if (value.pieGraph === true) {
          $.get(value.url, function (data) {
            let dataPoints = data;
            let chart = new CanvasJS.Chart(value.id, {
              animationEnabled: true,
              exportEnabled: true,
              backgroundColor: null,
              title: {
                text: value.title,
                fontFamily: fontFamily,
                fontColor: fontColor,
                fontSize: fontSize
              },
              subtitles: [
                {
                  text: value.subTitle,
                  fontFamily: fontFamily,
                  fontColor: fontColor,
                  horizontalAlign: 'left',
                  verticalAlign: 'bottom'
                }
              ],
              legend: {
                fontSize: value.legendFontSize,
                fontFamily: legendFontFamily,
                fontColor: legendTextColor,
                markerMargin: 4,
                itemWidth: value.legendWidth,
                itemWrap: true,
                horizontalAlign: "right",
                verticalAlign: "center"
              },
              data: [
                {
                  type: value.dataType,
                  showInLegend: true,
                  indexLabelLineColor: canvasBackground,
                  indexLabelFontColor: canvasBackground,
                  indexLabelLineThickness: 0,
                  legendText: '{indexLabel}',
                  startAngle: value.startAngle,
                  dataPoints: dataPoints
                }
              ]
            });
            chart.render();
          });
        }
      });
    });
  }

  // default function calls
  generateTheme();
  generateCanvas();

  $('#theme_switch input[type="radio"]').on('change', function () {
    if ($(this).attr('id') === 'theme_dark') {
      generateTheme();
      generateCanvas();
    }
    if ($(this).attr('id') === 'theme_light') {
      generateTheme();
      generateCanvas();
    }
  });
});
