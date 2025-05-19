const ctx = document.getElementById('graphCanvas').getContext('2d');
const resultsDiv = document.getElementById('results');


function solveDifferentialEquation() {

    const referencePoints = [
        { x: 0, y: 0.4826 },
        { x: 0.2, y: 0.9002 },
        { x: 0.4, y: 1.1441 },
        { x: 0.6, y: 1.2871 },
        { x: 0.8, y: 1.3761 },
        { x: 1, y: 1.445 }
    ];


    const chartData = {
        labels: referencePoints.map(p => p.x),
        datasets: [
            {
                label: ' Значення',
                data: referencePoints.map(p => p.y),
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                fill: false,
                tension: 0.4, // Плавність лінії
                pointRadius: 5,
                pointBackgroundColor: 'red',
                showLine: true // З'єднуємо точки лінією
            }
        ]
    };

    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'x'
                    },
                    min: 0,
                    max: 1
                },
                y: {
                    title: {
                        display: true,
                        text: 'y'
                    },
                    min: 0.4,
                    max: 1.5
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });


    resultsDiv.innerHTML = `
        <h3> Значення:</h3>
        ${referencePoints.map(p => `x = ${p.x.toFixed(1)}, y = ${p.y.toFixed(4)}`).join('<br>')}
    `;
}