import { useSelector } from "react-redux";

import { ChartSection, NewRelease, Section, Slider, WeekChart } from "../../components";
import { Link } from "react-router-dom";

function Home() {
    const { hEditorTheme, hEditorTheme2,  weekChart} = useSelector(state => state.app)

    return (
        <div className="max-w-full">
            <Slider />
            <Section data={hEditorTheme} />
            <Section data={hEditorTheme2} />
            <NewRelease />
            <ChartSection/>
            <section className="mt-12 flex ml-[-14px] mr-[-14px]">
                {weekChart?.items?.map((item) => (
                    <div
                        key={item.cover}
                        className="w-1/3 px-[14px]"
                    >
                        <Link to={item.link.split('.')[0]}>
                            <div className="rounded-md overflow-hidden">
                                <img
                                    className="object-contain transition-all duration-700 hover:scale-105 hover:cursor-pointer"
                                    src={item.cover}
                                    alt={item.cover}
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
            <div className="pb-20"></div>
        </div>
    );
}

export default Home;