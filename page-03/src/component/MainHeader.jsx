import { GiSharpCrown } from "react-icons/gi";
import { Link } from "react-router-dom";
import { GrGoogleWallet } from "react-icons/gr";
import { BsChatHeart } from "react-icons/bs";

const MainHeader = ({ account, setAccount }) => {
    const onClickAccount = async () => {
        try {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            setAccount(accounts[0]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex py-4 text-xl font-bold bg-black text-slate-300	 justify-between items-center">
            <Link to="/">
                <div>
                    <GiSharpCrown size={40} className="text-lime-300 ml-10" />
                </div>
            </Link>

            <div className="flex ">
                <div className="pr-10">Intro</div>
                <div>Comment </div>
            </div>

            <div className="flex items-center ">
                <div className="pr-20">Language(🇰🇷) </div>
                {account ? (
                    <div className="mr-10 flex items-center p-2 bg-gray-700 rounded-full ">
                        <div className="text-lime-300 bg-black w-6 h-6 rounded-full flex justify-center items-center">
                            <GrGoogleWallet />
                        </div>
                        <div className="ml-1">
                            {account.substring(0, 4)}...
                            {account.substring(account.length - 4)}
                        </div>
                    </div>
                ) : (
                    <button
                        className="flex items-center p-2 bg-slate-700	 rounded-full mr-10 "
                        onClick={onClickAccount}
                    >
                        <div className="text-lime-500 bg-black	 w-6 h-6 rounded-full flex justify-center items-center">
                            <GrGoogleWallet />
                        </div>
                        <div className="ml-1">Connect</div>
                    </button>
                )}
            </div>
        </div>
    );
};
export default MainHeader;
