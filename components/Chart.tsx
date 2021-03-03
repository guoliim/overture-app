import Card from './Card'
import * as echarts from 'echarts'
import EChart from '@guoliim/react-echarts'

const Chart = () => {
    return (
        <Card type="md" className="my-6 h-53.5">
            <EChart
                className="h-full"
                echarts={echarts}
                data={{
                    option: {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'line',
                                label: {
                                    backgroundColor: '#6a7985',
                                },
                            },
                            padding: 20,
                            formatter: (params) => {
                                console.log('params', params)

                                return `
                                    <div>
                                        <div class="mb-2">
                                            <span class="text-title font-bold"> ${params[0].name} </span>
                                        </div>
                                        <div class="my-2">
                                            <span class="text-primary-query font-semibold"> ${params[0].value} </span>
                                            <span class=" text-gray-500"> primary queries </span>
                                        </div>
                                        <div class="mt-2">
                                            <span 
                                                class="
                                                    text-alternative-query 
                                                    font-semibold"
                                            > 
                                                ${params[1].value} 
                                            </span>
                                            <span class=" text-gray-500"> alternative queries </span>
                                        </div>
                                    <div>
                                `
                            },
                            extraCssText: 'border-radius: 4px; box-shadow: none; border: 1px solid #D1D5DB',
                        },
                        grid: {
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            containLabel: false,
                        },
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                                show: false,
                            },
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                show: false,
                            },
                        ],
                        series: [
                            {
                                name: 'Line 1',
                                type: 'line',
                                stack: '总量',
                                symbol: 'none',
                                smooth: true,
                                lineStyle: {
                                    width: 0,
                                },
                                showSymbol: false,
                                areaStyle: {
                                    color: 'rgba(90, 200, 250, 0.4)',
                                    opacity: 1,
                                },
                                data: [140, 232, 101, 264, 90, 340, 250],
                                silent: true,
                                animation: false,
                                emphasis: {
                                    focus: 'none',
                                    lineStyle: {
                                        opacity: 0,
                                    },
                                    areaStyle: {
                                        opacity: 1,
                                    },
                                },
                            },
                            {
                                name: 'Line 2',
                                type: 'line',
                                stack: '总量',
                                smooth: true,
                                lineStyle: {
                                    width: 0,
                                },
                                symbol: 'none',
                                showSymbol: false,
                                areaStyle: {
                                    color: 'rgba(0,122,255,0.25)',
                                    opacity: 1,
                                },
                                data: [120, 282, 111, 234, 220, 340, 310],
                                silent: true,
                                animation: false,
                                emphasis: {
                                    focus: 'none',
                                    lineStyle: {
                                        opacity: 0,
                                    },
                                    areaStyle: {
                                        opacity: 1,
                                    },
                                },
                            },
                        ],
                    },
                }}
            />
        </Card>
    )
}

export default Chart
