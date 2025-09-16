// Sample data for charts
const sampleData = {
    sales: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Monthly Sales ($)',
            data: [65000, 59000, 80000, 81000, 56000, 85000, 90000, 95000, 75000, 88000, 92000, 98000],
            borderColor: 'rgb(102, 126, 234)',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    
    temperature: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Temperature (°C)',
            data: [22, 24, 19, 23, 26, 28, 25],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    
    revenue: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Revenue (millions)',
            data: [12, 19, 15, 21],
            backgroundColor: [
                'rgba(102, 126, 234, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)'
            ],
            borderColor: [
                'rgb(102, 126, 234)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)'
            ],
            borderWidth: 2
        }]
    },
    
    population: {
        labels: ['USA', 'China', 'India', 'Brazil', 'Russia'],
        datasets: [{
            label: 'Population (millions)',
            data: [331, 1439, 1380, 212, 146],
            backgroundColor: 'rgba(118, 75, 162, 0.8)',
            borderColor: 'rgb(118, 75, 162)',
            borderWidth: 2
        }]
    },
    
    marketShare: {
        labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Others'],
        datasets: [{
            data: [65.3, 18.7, 8.4, 4.2, 3.4],
            backgroundColor: [
                'rgba(102, 126, 234, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: [
                'rgb(102, 126, 234)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)'
            ],
            borderWidth: 2
        }]
    },
    
    budget: {
        labels: ['Marketing', 'Development', 'Operations', 'Support', 'Research'],
        datasets: [{
            data: [25, 35, 20, 10, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(102, 126, 234, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(102, 126, 234)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)'
            ],
            borderWidth: 2
        }]
    },
    
    correlation: {
        datasets: [{
            label: 'Height vs Weight',
            data: [
                {x: 150, y: 45}, {x: 155, y: 50}, {x: 160, y: 55}, {x: 165, y: 60},
                {x: 170, y: 65}, {x: 175, y: 70}, {x: 180, y: 75}, {x: 185, y: 80},
                {x: 190, y: 85}, {x: 195, y: 90}, {x: 200, y: 95}, {x: 205, y: 100}
            ],
            backgroundColor: 'rgba(102, 126, 234, 0.6)',
            borderColor: 'rgb(102, 126, 234)',
            pointRadius: 6,
            pointHoverRadius: 8
        }]
    }
};

// Chart configurations
const chartConfigs = {
    sales: {
        type: 'line',
        data: sampleData.sales,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Sales Performance'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            }
        }
    },
    
    temperature: {
        type: 'line',
        data: sampleData.temperature,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Weekly Temperature Trend'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    ticks: {
                        callback: function(value) {
                            return value + '°C';
                        }
                    }
                }
            }
        }
    },
    
    revenue: {
        type: 'bar',
        data: sampleData.revenue,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Quarterly Revenue'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value + 'M';
                        }
                    }
                }
            }
        }
    },
    
    population: {
        type: 'bar',
        data: sampleData.population,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Population by Country'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + 'M';
                        }
                    }
                }
            }
        }
    },
    
    marketShare: {
        type: 'pie',
        data: sampleData.marketShare,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Browser Market Share 2024'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    },
    
    budget: {
        type: 'doughnut',
        data: sampleData.budget,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Company Budget Allocation'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    },
    
    correlation: {
        type: 'scatter',
        data: sampleData.correlation,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Height vs Weight Correlation'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Height (cm)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Weight (kg)'
                    }
                }
            }
        }
    }
};

// Initialize charts
let charts = {};

function initCharts() {
    // Line charts
    charts.sales = new Chart(
        document.getElementById('salesChart'),
        chartConfigs.sales
    );
    
    charts.temperature = new Chart(
        document.getElementById('temperatureChart'),
        chartConfigs.temperature
    );
    
    // Bar charts
    charts.revenue = new Chart(
        document.getElementById('revenueChart'),
        chartConfigs.revenue
    );
    
    charts.population = new Chart(
        document.getElementById('populationChart'),
        chartConfigs.population
    );
    
    // Pie charts
    charts.marketShare = new Chart(
        document.getElementById('marketShareChart'),
        chartConfigs.marketShare
    );
    
    charts.budget = new Chart(
        document.getElementById('budgetChart'),
        chartConfigs.budget
    );
    
    // Scatter plot
    charts.correlation = new Chart(
        document.getElementById('correlationChart'),
        chartConfigs.correlation
    );
}

// Navigation functionality
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');
            
            // Update active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update active section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });
        });
    });
}

// Update statistics
function updateStats() {
    const totalDataPoints = Object.values(sampleData).reduce((total, dataset) => {
        if (dataset.datasets) {
            return total + dataset.datasets.reduce((sum, ds) => sum + ds.data.length, 0);
        }
        return total;
    }, 0);
    
    document.querySelector('.stats-grid .stat-card:nth-child(1) .stat-number').textContent = 
        totalDataPoints.toLocaleString();
}

// Responsive chart resizing
function handleResize() {
    Object.values(charts).forEach(chart => {
        if (chart) {
            chart.resize();
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    setupNavigation();
    updateStats();
    
    // Handle window resize
    window.addEventListener('resize', handleResize);
});

// Export for potential external use
window.GraphDashboard = {
    charts,
    sampleData,
    updateStats
};
