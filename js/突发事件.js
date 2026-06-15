// 1. 确保DOM完全加载后再初始化图表
document.addEventListener('DOMContentLoaded', function() {
    var myChart = echarts.init(document.getElementById('amiddboxtbott1'));
    
    // 2. 定义数据和对应的颜色（使用更明显的颜色测试）
    var boxplotData = [
        {
            name: '消防',
            value: [15, 30, 45, 60, 85],
            color:'rgb(31, 92, 190)'  // 蓝色
        },
        {
            name: '生产设备',
            value: [20, 35, 50, 65, 75],
            color: 'rgb(35, 163, 114)'  // 绿色
        },
        {
            name: '网络安全',
            value: [25, 40, 55, 70, 80],
            color: 'rgb(215, 201, 38)'  // 橙色
        },
        {
            name: '公共场所',
            value: [5, 20, 35, 50, 60],
            color: 'rgb(94, 96, 225)'  // 红色
        }
    ];

    // 3. 准备ECharts配置
    var option = {
        backgroundColor: 'rgba(1,202,217,.2)',
        grid: {
            left: 40,
            right: 50,
            top: 30,
            bottom: 25,
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                var data = boxplotData[params.dataIndex];
                return `${data.name}<br/>
                        最小值: ${data.value[0]}分钟<br/>
                        下四分位(Q1): ${data.value[1]}分钟<br/>
                        中位数: ${data.value[2]}分钟<br/>
                        上四分位(Q3): ${data.value[3]}分钟<br/>
                        最大值: ${data.value[4]}分钟`;
            }
        },
        xAxis: {
            type: 'category',
            data: boxplotData.map(item => item.name),
            name: '类型',
            nameLocation: 'end',
            nameTextStyle: {
                color: 'rgba(255,255,255,.7)',
                padding: [5, 0, 0, 0]
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(77, 40, 226, 0.2)'
                }
            },
            axisLabel: {
                color: "rgba(255,255,255,.7)",
                interval: 0
            }
        },
        yAxis: {
            type: 'value',
            name: '处理时间 (分钟)',
            min: 0,
            max: 90,
            interval: 15,
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.17)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(37, 175, 210, 0.1)'
                }
            },
            axisLabel: {
                color: "rgba(255,255,255,.7)",
                formatter: '{value}'
            }
        },
        series: [{
            name: '处理时间',
            type: 'boxplot',
            data: boxplotData.map(item => ({
                value: item.value,
                itemStyle: {
                    color: item.color,
                    borderColor: '#333',
                    borderWidth: 1
                }
            })),
            boxWidth: [20, 50]
        }]
    };

    // 4. 应用配置
    myChart.setOption(option);

    // 5. 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
});