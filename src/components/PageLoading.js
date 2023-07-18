import { ThreeDots } from "react-loader-spinner";

function PageLoading() {
    return (
        <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#636e72"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    );
}

export default PageLoading;