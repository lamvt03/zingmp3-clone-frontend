import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import _ from 'lodash'

import SongInfo from './SongInfo';
import { Link } from 'react-router-dom';
import path from '../utils/path'

function ChartSection() {
    const { rank, chart } = useSelector(state => state.app)

    const [data, setData] = useState()
    const [hoverSongId, setHoverSongId] = useState()
    const [tooltipState, setTooltipState] = useState({
        opacity: 0,
        top: 0,
        left: 0
    })
    const chartRef = useRef()
    const options = {
        responsive: true,
        pointRadius: 0,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: { color: 'white' },
                grid: { color: 'transparent' }
            },
            y: {
                ticks: { display: false },
                grid: { color: 'rgba(255,255,255,0.1)', drawTicks: false },
                min: chart?.minScore,
                max: chart?.maxScore,
                border: { dash: [3, 4] }
            }
        },
        plugins: {
            legend: false,
            tooltip: {
                enabled: false,
                external: ({ tooltip }) => {
                    if(!chartRef || !chartRef.current) return
                    if(tooltip.opacity === 0){
                        if(tooltipState.opacity === 0) setTooltipState(prev => ({...prev, opacity: 0}))
                        return
                    }
                    const counters = []
                    if(chart)
                        for(let i = 0; i < 3; i++){
                            counters.push({
                                data: chart.items[Object.keys(chart.items)[i]].filter(time => time.hour % 2 === 1).map(time => time.counter),
                                encodeId: Object.keys(chart.items)[i]
                            })
                        }      

                    setHoverSongId(counters.filter(counter => counter.data.some(item => item === +tooltip.body[0].lines[0].replace('.', '')))[0].encodeId)

                    // console.log(rank?.[counters.filter(counter => counter.data.some(item => item === +tooltip.body[0].lines[0].replace('.', '')))[0].encodeId]);
                    // console.log(counters.filter(counter => counter.data.some(item => item === +tooltip.body[0].lines[0].replace('.', '')))[0].encodeId);

                    const newTooltipData = {
                        opacity: 1,
                        left: tooltip.caretX,
                        top: tooltip.caretY
                    }
                    if(!_.isEqual(tooltipState, newTooltipData)) setTooltipState(newTooltipData)
                }
            } 
        },
        hover: {
            mode: 'dataset',
            intersect: false
        }
    }
    
    // console.log(tooltipState);
    // console.log({rank, chart});

    useEffect(() => {
        const labels = chart?.times?.filter(time => time.hour % 2 === 1).map(time => `${time.hour}:00`)
        const datasets = []
        if(chart.items){
            for(let i = 0; i < 3; i++){
                datasets.push({
                    data: chart.items[Object.keys(chart.items )[i]].filter(time => time.hour % 2 === 1).map(time => time.counter),
                    tension: 0.2,
                    borderColor: i === 0 ? '#4a90e2' : i === 1 ? '#50e3c2' : '#e35050',
                    borderWidth: 2,
                    pointBackgroundColor: 'white',
                    pointBorderColor: i === 0 ? '#4a90e2' : i === 1 ? '#50e3c2' : '#e35050',
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 3,
                }) 
            }
            setData({labels, datasets})
        }
    }, [chart])
    return (  
        <section className="mt-12 p-5 pb-8 bg-[#33104cf2] rounded-md">
            <div className="">
                <Link to={path.ZINGCHART}>
                    <h3 className="mb-5 text-3xl text-white font-bold">
                        #zingchart
                    </h3>
                </Link>
                <div className="flex gap-7">
                    <div className="flex-4">
                        <div className='flex flex-col gap-2'>
                            {rank?.map((song, index) => (
                                index < 3 && <div key={song.encodeId} className={`py-2 px-3 ${index === 0 && 'bg-[hsla(0,0%,100%,.07)]'} hover:bg-[hsla(0,0%,100%,.07)] rounded-md`}>
                                    <div className='flex items-center'>
                                        <span className='mr-[15px]'>{index + 1}</span>
                                        <div className='flex-auto'>
                                            <SongInfo
                                                thumbnail={song.thumbnail}
                                                thumbnailWidth={16}
                                                title={song.title}
                                                artistsNames={song.artistsNames}  
                                                textColor={'light'}  
                                            />
                                        </div>
                                        <span className='ml-[15px] text-white font-bold'>{`${Math.round(+song.score*100/chart?.totalScore)}%`}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center py-3'>
                            <Link to={path.ZINGCHART}>
                                <span className='py-1 px-8 border border-white text-white text-sm rounded-xl'>Xem thêm</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-6 relative">
                        {data && <Line ref={chartRef} data={data} options={options}/>}
                        <div className='tooltip' style={{position: 'absolute', top: tooltipState.top, left: tooltipState.left, opacity: tooltipState.opacity}}>
                            {hoverSongId && <div className='bg-white px-3 py-2 rounded-md'>
                                <SongInfo
                                                thumbnail={rank?.find(item => item.encodeId === hoverSongId).thumbnail}
                                                thumbnailWidth={16}
                                                title={rank?.find(item => item.encodeId === hoverSongId).title}
                                                artistsNames={rank?.find(item => item.encodeId === hoverSongId).artistsNames}  
                                                textColor={'dark'}  
                                            />
                            </div> }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChartSection;