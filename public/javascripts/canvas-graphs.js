// Canvas
const $ = jQuery;
$(function () {
  // variables
  let canvasBg = '#282828';
  let lineColor = '#0C785B';
  let lineTickness = 2;
  let fontFamily = 'tahoma';
  let fontColor = '#797974';
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
        'dataType': 'spline'
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
        'dataType': 'line'
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
        'dataType': 'spline'
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
        'dataType': 'line'
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
            backgroundColor: canvasBg,
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
            data: [
              {
                type: value.dataType,
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
            backgroundColor: canvasBg,
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
            data: [
              {
                type: value.dataType,
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
});
