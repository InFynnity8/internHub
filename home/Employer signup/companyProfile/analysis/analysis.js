
 var ctx = document.getElementById('myPieChart').getContext('2d');

 
 var initialData = {
     labels: ['Accepted', 'Rejected', 'Processing', 'Decline Acceptance'],
     datasets: [{
         data: [123, 36, 50, 97], 
         backgroundColor: ['rgb(12, 198, 210)', 'rgb(124, 200, 219)', 'rgb(74, 115, 126)', 'rgb(1, 51, 65)'], 
     }]
 };

 
 var myPieChart = new Chart(ctx, {
     type: 'pie',
     data: initialData,
     options: {
         plugins: {
             legend: {
                 display: false,
             },
             tooltip: {
                 callbacks: {
                     label: function (context) {
                         var label = context.label || '';
                         var value = context.parsed || 0;
                         return label + ': ' + Math.round((value / context.dataset.data.reduce((a, b) => a + b, 0)) * 100) + '%';
                     },
                 },
             },
             
         },
         elements: {
             arc: {
                 borderWidth: 0, 
             },
         },
         
     },
 });

 
 function updateLegend() {
     var legend = document.getElementById('legend');
     var centerTotal = document.getElementById('centerTotal');
     legend.innerHTML = '';

     var total = initialData.datasets[0].data.reduce((a, b) => a + b, 0);

     initialData.labels.forEach((label, index) => {
         var legendItem = document.createElement('div');
         legendItem.classList.add('legend-item');

         var legendColor = document.createElement('div');
         legendColor.classList.add('legend-color');
         legendColor.style.backgroundColor = initialData.datasets[0].backgroundColor[index];

         var legendText = document.createElement('div');
         legendText.innerText = `${initialData.datasets[0].data[index]} ${label}`;

         legendItem.appendChild(legendColor);
         legendItem.appendChild(legendText);
         legend.appendChild(legendItem);
     });
     centerTotal.innerText = `${total} Applicants`;
 }


 updateLegend();







// graph


var ctx = document.getElementById('myGraph').getContext('2d');

        
var data = {
    labels: ['2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', ''],
    datasets: [{
        label: 'My Data',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [31, 33, 40, 31, 26, 30, 43, 31],
        fill: {
            target: 'origin',
            above: getGradient(ctx)
        },  
        tension: 0.4 
   
        
    }]
};


var options = {
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
              
                stepSize: 10, 
                min: 0,      
                max: 100,
            }            
        },
      
    },
    plugins: {
        legend: {
            display: false 
        }
    }
    
};


var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
    
});

function getGradient(context) {
    var gradient = context.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, 'rgba(0, 100, 200, 0.5)');
    gradient.addColorStop(1, 'rgba(228, 0, 111, 0.7)');
    return gradient;
}
