import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-black max-w-screen-xl py-8  flex items-center justify-end ">
            <div className="text-lime-600 font-bold ">
                Fly High everythings's alright
            </div>
            <div>
                <Link to="https://github.com/Choi-jujuyeon">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/gitimage.png`}
                        alt=""
                        className="w-10 right-0 transform hover:scale-110 transition duration-500"
                    ></img>
                </Link>
            </div>
        </header>
    );
};
export default Header;
