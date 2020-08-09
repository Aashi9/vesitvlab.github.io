function myFunction() {
    var l = document.getElementById("n0").value/1000;
    var alpha = Math.pow(10,(0.01));
    var b1 = Math.log(0.001);
    var a1 = (alpha * l)/10;
    var c1 = b1 - a1;
    var a =  Math.pow(10,c1);
    var out = a.toPrecision(3);
    document.getElementById("pulse").innerHTML = out;
}

var list1 = [];
var list2 = [];


var n = 1;
var x = 0;

function AddRow()
{
    var AddRown = document.getElementById('abc');
    var NewRow = AddRown.insertRow(AddRown.rows.length);

    list1[x] = document.getElementById("n0").value/1000;
    list2[x] = document.getElementById("pulse").innerHTML;
    

    var cel1 = NewRow.insertCell(0);              
    var cel2 = NewRow.insertCell(1);
    

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    

    n++;
    x++;
}


Chart.defaults.global.defaultColor = 'rgba(30, 0,50, 0.1)';
        
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

data: {
    labels: list1,
    datasets: [{ 
        label: 'Lenght vs Pout',
        //backgroundColor: 'green',
        borderColor: 'red',
    data: list2,
        },
        ]
},

// Configuration options go here
options: {
    scales: {
        xAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'Length(km)'
            }
        }],
        yAxes : [{
            scaleLabel: {
                display: true,
                labelString: 'Pout(W)'
            }
        }],
    }
}
}); 

function updateChart() {
    chart.data.datasets[0].data=list2;
    chart.data.labels = list1;  
    
    chart.update();
}

function reset() {
  //const mtra = [];
  
  chart.data.datasets[0].data= [];
  chart.data.labels = [];  
  chart.update();
  list1 = [];
  list2 = [];

}


function ResetRow() {
  var table = document.getElementById("abc");
  for(var i = table.rows.length - 1; i > 0; i--) {
    table.deleteRow(i);
  }
  x = 0;

  document.getElementById("pulse").innerHTML = "";
  
  reset();
}

