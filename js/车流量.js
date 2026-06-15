var myChart = echarts.init(document.getElementById('amiddboxtbott2'));

// X-axis time slots (7:30 to 19:30 every 2 hours)
var timeSlots = ['7:30', '9:30', '11:30', '13:30', '15:30', '17:30', '19:30'];

// Customizable data points - format: [xIndex, yValue]
var scatterData = [
    [0, 200], [1, 150], [2, 250], [3, 100], 
    [4, 200], [5, 150], [6, 250],]

option = {
    backgroundColor: 'rgba(1,202,217,.2)',
    grid: {
        left: 60,
        right: 50,
        top: 60,
        bottom: 25
    },

    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            return `时间: ${timeSlots[params.value[0]]}<br/>
                    车流量: ${params.value[1]}人`;
        }
    },
    xAxis: {
        type: 'category',
        name: '时间段',
        data: timeSlots,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.2)'
            }
        },
        axisLabel: {
            color: "rgba(255,255,255,.7)"
        }
    },
    yAxis: {
        type: 'value',
        name: '车流量 (辆)',
        min: 0,
        max: 300,
        interval: 50,
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.3)'
            }
        },
        axisLabel: {
            color: "rgba(255,255,255,.7)"
        }
    },
    series: [
        {
            // Connecting lines
            name: '趋势线',
            type: 'line',
            data: scatterData,
            symbol: 'none',
            lineStyle: {
                color: '#58D9F9',
                width: 2,
                type: 'solid'
            },
            emphasis: {
                disabled: true
            }
        },
        {
            // Scatter points
            name: '车流量',
            type: 'scatter',
            data: scatterData,
            symbolSize: 10,
            itemStyle: {
                color: function(params) {
                    // Color gradient based on customer count
                    var colors = ['#FFB6C1', '#FFA07A', '#FF8C69', '#FF7256', '#FF6347'];
                    var index = Math.min(Math.floor(params.value[1]/50) - 1, 4);
                    return colors[index] || '#FF6347';
                },
                opacity: 0.8,
                borderColor: '#fff',
                borderWidth: 1
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

myChart.setOption(option);

// Helper functions for data manipulation
function addDataPoint(timeIndex, customerCount) {
    scatterData.push([timeIndex, customerCount]);
    myChart.setOption(option);
}

function updateAllData(newData) {
    scatterData = newData;
    myChart.setOption(option);
}