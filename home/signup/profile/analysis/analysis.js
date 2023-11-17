
var ctx = document.getElementById('myPieChart').getContext('2d');

 
var initialData = {
    labels: ['Accepted', 'Rejected', 'Processing', 'Decline Acceptance'],
    datasets: [{
        data: [13, 6, 4, 7], 
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
    centerTotal.innerText = `${total} Applications`;
    centerTotal.style.fontSize = `${11}` + 'px';
}


updateLegend();

