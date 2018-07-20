// Canvas
const $ = jQuery;
$(function () {
  // variables
  // canvasBg = '#1e2a31';
  canvasBg = '#282828';
  borderColor = '#0C785B';
  axisX = {
    lineThickness: 0,
    tickThickness: 0,
    valueFormatString: ' '
  }
  axisY = {
    includeZero: false,
    lineThickness: 0,
    tickThickness: 0,
    valueFormatString: ' ',
    gridThickness: 0
  }
	// chart data
	var sessionsLastMonth = new CanvasJS.Chart('sessions_last_month', {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: canvasBg,
		title: {
			text: 'SESSIONS: LAST MONTH',
			fontFamily: 'tahoma',
			fontColor: '#797974',
			fontSize: 16
		},
		subtitles:[
			{
				text: 'last month',
				fontFamily: "tahoma",
				fontColor: '#797974',
				horizontalAlign: 'left',
				verticalAlign: 'bottom'
			}
		],
		axisX: axisX,
		axisY: axisY,
		data: [
      {
        type: 'spline',
        lineThickness: 2,
        markerType: 'none',
        lineColor: '#0C785B',
        dataPoints: [
          { y: 450 },
          { y: 414 },
          { y: 520 },
          { y: 460 },
          { y: 450 },
          { y: 500 },
          { y: 480 },
          { y: 480 },
          { y: 410 },
          { y: 500 },
          { y: 480 },
          { y: 510 }
        ]
      }
    ]
	});

	var sessionsThisMonth = new CanvasJS.Chart('sessions_this_month', {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: canvasBg,
		title:{
			text: 'SESSIONS: THIS MONTH',
			fontFamily: 'tahoma',
			fontColor: '#797974',
			fontSize: 16
		},
		subtitles:[
			{
				text: 'this month',
				fontFamily: "tahoma",
				fontColor: '#797974',
				horizontalAlign: 'left',
				verticalAlign: 'bottom'
			}
		],
		axisX: axisX,
		axisY: axisY,
		data: [{        
			type: 'line',
			lineThickness: 2,
			markerType: 'none',
			lineColor: '#0C785B',
			dataPoints: [
				{ y: 450 },
				{ y: 414 },
				{ y: 520 },
				{ y: 460 },
				{ y: 450 },
				{ y: 500 }
			]
		}]
	});

	var usersType = new CanvasJS.Chart('users_type', {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: canvasBg,
		title:{
			text: 'USER TYPE',
			fontFamily: 'tahoma',
			fontColor: '#797974',
			fontSize: 16
		},
		subtitles:[
			{
				text: 'this month',
				fontFamily: "tahoma",
				fontColor: '#797974',
				horizontalAlign: 'left',
				verticalAlign: 'bottom'
			}
		],
		data: [
      {
        type: 'pie',
        startAngle: 270,
        dataPoints: [
          { y: 70.9, color: '#0C785B' },
          { y: 29.1, color: '#00A564', exploded: true }
        ]
      }
    ]
	});

	var usersLastMonth = new CanvasJS.Chart('users_last_month', {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: canvasBg,
		title:{
			text: 'USERS: LAST MONTH',
			fontFamily: 'tahoma',
			fontColor: '#797974',
			fontSize: 16
		},
		subtitles:[
			{
				text: 'last month',
				fontFamily: "tahoma",
				fontColor: '#797974',
				horizontalAlign: 'left',
				verticalAlign: 'bottom'
			}
		],
		axisX: axisX,
		axisY: axisY,
		data: [
      {
        type: 'spline',
        lineThickness: 3,
        markerType: 'none',
        lineColor: '#0C785B',
        dataPoints: [
          { y: 450 },
          { y: 414 },
          { y: 520 },
          { y: 460 },
          { y: 450 },
          { y: 500 },
          { y: 480 },
          { y: 480 },
          { y: 410 },
          { y: 500 },
          { y: 480 },
          { y: 510 }
        ]
      }
    ]
	});

	var usersThisMonth = new CanvasJS.Chart('users_this_month', {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: canvasBg,
		title:{
			text: 'USERS: THIS MONTH',
			fontFamily: 'tahoma',
			fontColor: '#797974',
			fontSize: 16
		},
		subtitles:[
			{
				text: 'this month',
				fontFamily: "tahoma",
				fontColor: '#797974',
				horizontalAlign: 'left',
				verticalAlign: 'bottom'
			}
		],
		axisX: axisX,
		axisY: axisY,
		data: [
      {
        type: 'line',
        lineThickness: 3,
        markerType: 'none',
        lineColor: '#0C785B',
        dataPoints: [
          { y: 450 },
          { y: 414 },
          { y: 520 },
          { y: 460 },
          { y: 450 },
          { y: 500 }
        ]
      }
    ]
	});

	var socialReferral = new CanvasJS.Chart('social_referral', {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: canvasBg,
		title:{
			text: 'SOCIAL REFERRAL',
			fontFamily: 'tahoma',
			fontColor: '#797974',
			fontSize: 16
		},
		subtitles: [
			{
				text: 'this month',
				fontFamily: "tahoma",
				fontColor: '#797974',
				horizontalAlign: 'left',
				verticalAlign: 'bottom'
			}
		],
		data: [
      {
			type: 'doughnut',
			startAngle: 270,
        dataPoints: [
          { y: 93.6, color: '#0C785B' },
          { y: 6.4, color: '#00A564', exploded: true }
        ]
      }
    ]
	});

	var bounceRate = new CanvasJS.Chart('bounce_rate', {
		animationEnabled: true,
		exportEnabled: true,
		backgroundColor: canvasBg,
		title:{
			text: 'BOUNCE RATE',
			fontFamily: 'tahoma',
			fontColor: '#797974',
			fontSize: 16
		},
		subtitles: [
			{
				text: 'this month',
				fontFamily: "tahoma",
				fontColor: '#797974',
				horizontalAlign: 'left',
				verticalAlign: 'bottom'
			}
		],
		data: [
      {
			type: 'doughnut',
			startAngle: 250,
        dataPoints: [
          { y: 78.3, color: '#0C785B' },
          { y: 21.7, color: '#343536', exploded: true }
        ]
      }
    ]
	});

	sessionsLastMonth.render();
	sessionsThisMonth.render();
	usersType.render();
	usersLastMonth.render();
	usersThisMonth.render();
	socialReferral.render();
	bounceRate.render();
});