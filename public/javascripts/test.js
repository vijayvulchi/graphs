let canvasBg = '#282828';
let fontFamily = 'tahoma';
let fontColor = '#797974';
let fontSize = 16;

let json = {
  type: 'doughnut',
  startAngle: 250,
  dataPoints: [
    {
      y: 78.3,
      color: '#0C785B'
    },
    {
      y: 21.7,
      color: '#343536',
      exploded: true
    }
  ]
};

let bounceRate = new CanvasJS.Chart('bounce_rate', {
  animationEnabled: true,
  exportEnabled: true,
  backgroundColor: canvasBg,
  title: {
    text: 'BOUNCE RATE',
    fontFamily: fontFamily,
    fontColor: fontColor,
    fontSize: fontSize
  },
  subtitles: [
    {
      text: 'this month',
      fontFamily: fontFamily,
      fontColor: fontColor,
      horizontalAlign: 'left',
      verticalAlign: 'bottom'
    }
  ],
  data: [json]
});

bounceRate.render();

function generateCanvas( ) {

}
