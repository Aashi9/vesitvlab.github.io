function myFunction() { 
  var l = document.getElementById("n0").value/10;
  var a = 7.81*Math.pow(10,11)*Math.exp(-48.8/l);
  var a1 = a.toPrecision(3);
  document.getElementById("pulse").innerHTML = a1;

  var x = 0.0175;
  var b = ((154.2*x)/((46.6*x)+60))*Math.pow(10,-2)*Math.exp(4.63/l);
  var b1 = b.toPrecision(3);
  document.getElementById("pulse1").innerHTML= b1;


  var c = 1.7*(0.85/l);
  var c1 = c.toPrecision(4);
  document.getElementById("pulse2").innerHTML= c1;

}

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];

var n = 1;
var x = 0;

function AddRow() {

  var AddRown = document.getElementById('abc');
  var NewRow = AddRown.insertRow(AddRown.rows.length);

  list1[x] = document.getElementById("n0").value/10;
  list2[x] = document.getElementById("pulse").innerHTML;
  list3[x] = document.getElementById("pulse1").innerHTML;
  list4[x] = document.getElementById("pulse2").innerHTML;


  var cel1 = NewRow.insertCell(0);              
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];

  n++;
  x++;
}

//1st chart
Chart.defaults.global.defaultColor = 'rgba(30, 0,50, 0.1)';
        
var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create

type: 'line',
// The data for our dataset
data: 
{

    labels: list1,
    datasets: [
    {
        label: 'Wavelength v/s Infrared Absorption',
        borderColor: 'red',
     data: list2,
    },
        
    ]
},

// Configuration options go here
options: {
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Infrared Absorption(db)'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Wavelength(μm)'
      }
    }],
  }
}
});
function updateChart1()
{
    chart.data.datasets[0].data=list2;
    chart.data.labels = list1; 
    chart.update();
}

//2nd chart
Chart.defaults.global.defaultColor = 'rgba(30, 0,50, 0.1)';
        
var ctx1 = document.getElementById('myChart2').getContext('2d');
var chart1 = new Chart(ctx1, {
// The type of chart we want to create

type: 'line',
// The data for our dataset
data: 
{

    labels: list1,
    datasets: [
    {
        label: 'Wavelength v/s Ultraviolet Absorption',
        borderColor: 'blue',
     data: list3,
    },
        
    ]
},

// Configuration options go here
options: {
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Ultraviolet Absorption(db)'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Wavelength(μm)'
      }
    }],
  }
}
});
function updateChart2()
{
    chart1.data.datasets[0].data=list3;
    chart1.data.labels = list1; 
    chart1.update();
}

//3rd chart
Chart.defaults.global.defaultColor = 'rgba(30, 0,50, 0.1)';
        
var ctx2 = document.getElementById('myChart3').getContext('2d');
var chart2 = new Chart(ctx2, {
// The type of chart we want to create

type: 'line',
// The data for our dataset
data: 
{

    labels: list1,
    datasets: [
    {
        label: 'Wavelength v/s Rayleigh Scattering',
        borderColor: 'green',
     data: list4,
    },
        
    ]
},

// Configuration options go here
options: {
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Rayleigh Scattering(db)'
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Wavelength(μm)'
      }
    }],
  }
}
});
function updateChart3()
{
    chart2.data.datasets[0].data=list4;
    chart2.data.labels = list1; 
    chart2.update();
}


function reset() {
  
  chart.data.datasets[0].data= [];
  chart.data.labels = [];
  chart.update();
  list1 = [];
  list2 = [];


}

function reset1() {
  chart1.data.datasets[0].data= [];
  chart1.data.labels = [];
  chart1.update();
  list1 = [];
  list3 = [];


}

function reset2() {
  chart2.data.datasets[0].data= [];
  chart2.data.labels = [];
  chart2.update();
  list1 = [];
  list4 = [];

}


function ResetRow() {
  var table = document.getElementById("abc");
  for(var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
  x = 0;

  document.getElementById("pulse").innerHTML = "";
  document.getElementById("pulse1").innerHTML = "";
  document.getElementById("pulse2").innerHTML = "";
  
  reset();
  reset1();
  reset2();
}
