var myChart = echarts.init(document.getElementById('aleftboxtmidd'));

var option = {
    color: [
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2C8179' },
            { offset: 1, color: '#18C4B9' }
        ]),
        new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#ACBF95' },
            { offset: 1, color: '#7CBF2B' }
        ])
    ],
    backgroundColor: 'transparent',
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',  // 垂直排列
        right: '5%',         // 靠右
        top: 'center',       // 垂直居中
        textStyle: {
            color: '#a0b3c7',
            fontSize: 12
        },
        data: ['违规警告/年', '违规警告/月']
    },
    series: [{
        name: '违规警告统计',
        type: 'pie',
        radius: ['40%', '70%'],  // 环形图（内半径40%，外半径70%）
        center: ['40%', '50%'],   // 调整饼图位置（水平40%，垂直50%）
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 5,      // 圆角
            borderColor: '#1e2a3a',
            borderWidth: 2
        },
        label: {
            show: true,
            formatter: '{b}: {c} ({d}%)',
            color: '#fff'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '14',
                fontWeight: 'bold'
            }
        },
        data: [
            { value: 38, name: '违规警告/年' },
            { value: 3, name: '违规警告/月' }
        ]
    }]
};

myChart.setOption(option);