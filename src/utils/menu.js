import icons from "./icons"

const { HiOutlineChartPie, LiaChartPieSolid, MdOutlineFeed } = icons

export const sidebarMenu = [
    {
        path: '',
        text: 'Khám phá',
        icon: <HiOutlineChartPie size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icon: <LiaChartPieSolid size={24} />
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icon: <MdOutlineFeed size={24} />
    }
]
