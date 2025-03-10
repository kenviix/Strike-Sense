const { useState } = require("react");
const { default: ReactApexChart } = require("react-apexcharts");

const ApexCharts = (props) => {
    const power = props.punch[0]
    const speed = props.punch[1]
    const reflex = props.punch[2]
    const [state, setState] = useState({

        series: [{
            name: 'Series 1',
            data: [power, speed, reflex],
        }],
        options: {
            chart: {
                height: 5000,
                type: 'radar',
            },
            title: {
                text: 'Basic Radar Chart'
            },
            yaxis: {
                stepSize: 100
            },
            xaxis: {
                categories: ['Power(N)', 'Speed(Km/h)', 'Reflex']
            }
        },


    });



    return (
        <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="radar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}


export default ApexCharts;