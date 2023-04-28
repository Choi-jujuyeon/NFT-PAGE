import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

const Start = () => {
    return (
        <div className=" min-h-screen  bg-black">
            <div className="  min-h-screen justify-center max-w-screen-xl mx-auto relative">
                <Header className="" />
                <body>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/princesslogo.png`}
                        className=" mx-auto absolute top-12 left-0 right-0 w-64"
                        alt=""
                    ></img>
                    <img
                        src={`${process.env.PUBLIC_URL}/images/mainimage.png`}
                        className="w-screen  "
                        alt=""
                    ></img>
                    <div className="mx-auto px-20 pt-10 absolute bottom-0 p-5  bg-slate-900	 left-0">
                        <div className="italic  text-white border-solid	pb-10 font-bold text-4xl	 ">
                            <h1> WELCOME TO</h1>
                            <h1 className="pb-4">MY CLUB</h1>
                        </div>
                        <Link to="/Main">
                            <button
                                className="bg-lime-500	px-10 p-4 mb-10  text-2xl
                   hover:bg-lime-700	tracking-widest		 text-black font-bold rounded-full
                        transform hover:scale-110 transition duration-500"
                            >
                                ENTER
                            </button>
                        </Link>
                    </div>
                </body>
                <div className="mt-16 border-t-4 border-lime-200"></div>
            </div>
        </div>
    );
};
export default Start;
