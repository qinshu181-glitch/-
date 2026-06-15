var myChart = echarts.init(document.getElementById('arightboxbott'));

option = {
    color: [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#2C8179'
        }, {
            offset: 1,
            color: '#18C4B9'
        }],
        global: false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#ACBF95'
        }, {
            offset: 1,
            color: '#7CBF2B'
        }],
        global: false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#508097'
        }, {
            offset: 1,
            color: '#1C3979'
        }],
        global: false
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#4d72d9'
        }, {
            offset: 1,
            color: '#75489F'
        }],
        global: false
    }],
    title: [{
        top: 125,
        left: 80,
        textStyle: {
            fontSize: 18,
            color: 'rgba(255,255,255,.6)'
        },
        text: '园区\n覆盖率'
    },{
        top: 125,
        right: 80,
        textStyle: {
            fontSize: 18,
            color: 'rgba(255,255,255,.6)'
        },
        text: '车间\n覆盖率'
    }],
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%'
    },
    legend: [
        {
            orient: 'vertical',
            right: '10%',
            textStyle: {
                fontSize: 12,
                color: 'rgba(255,255,255,.7)'
            },
            data: ['车间已覆盖区域', '车间未覆盖区域']
        },
        {
            orient: 'vertical',
            left: '10%',
            textStyle: {
                fontSize: 12,
                color: 'rgba(255,255,255,.7)'
            },
            data: ['园区已覆盖区域', '园区未覆盖区域']
        }
    ],
    grid: {
        containLabel: true
    },
    series: [
        {
            name: '业主信息',
            type: 'pie',
            radius: ['45%', '65%'],
            center: ['75%', '55%'],
            avoidLabelOverlap: false,
            label: {
                position: 'inner',
                formatter: '{d}%',
                color: '#fff'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold',
                    color: '#fff'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 4, name: '车间已覆盖区域' },
                { value: 96, name: '车间未覆盖区域' },
            ]
        }, 
        {
            name: '楼栋信息',
            type: 'pie',
            radius: ['45%', '65%'],
            center: ['25%', '55%'],
            avoidLabelOverlap: false,
            label: {
                position: 'inner',
                formatter: '{d}%',
                color: '#fff'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold',
                    color: '#fff'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 15, name: '园区已覆盖区域' },
                { value: 75, name: '园区未覆盖区域' }
            ]
        }
    ]
};

myChart.setOption(option);