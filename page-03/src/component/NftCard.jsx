import { GiHeartKey } from "react-icons/gi";
import { Link } from "react-router-dom";

const NftCard = ({ tokenId, metadata, mintedNft }) => {
    return (
        <div className=" relative rounded-2xl text-lime-100  bg-gray-800 pb-4">
            {parseInt(mintedNft) < tokenId && (
                <div className="absolute bg-black w-full h-full bg-opacity-50 rounded-2xl flex justify-center items-center text-4xl font-bold pb-[20px]">
                    Not Minted.
                </div>
            )}
            <img
                className="rounded-t-2xl "
                src={metadata.image}
                alt={metadata.name}
            />
            <div className="mt-4 text-xl font-bold flex items-center px-4 text-gray-300">
                Princess
                <div className="bg-lime-500 w-6 h-6 rounded-full flex justify-center items-center ml-2 text-lime-900">
                    <GiHeartKey size={16} />
                </div>
            </div>
            <div className="mt-4 text-2xl font-bold px-4 "># {tokenId} </div>
            <div className="mt-4 text-xl flex justify-end px-4">
                <Link to={`/${tokenId}`}>
                    <button
                        disabled={parseInt(mintedNft) < tokenId}
                        className="	font-bold transform hover:scale-110 transition duration-500  bg-lime-100 text-gray-950 px-4 py-2 rounded-xl  hover:bg-lime-700"
                    >
                        Detail
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NftCard;
