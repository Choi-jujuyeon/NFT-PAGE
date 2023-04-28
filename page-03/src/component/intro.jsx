import { GiSharpCrown } from "react-icons/gi";
import { CONTRACT_ADDRESS } from "../web3.config";
const ranNum = Math.floor(Math.random() * 100) + 1;
// const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const imgSrc = `https://olbm.mypinata.cloud/ipfs/QmaHqh8ERAekGsZENes6weNQSaRA6Y4mPiowHBAuMEiCo1/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft }) => {
    return (
        <div className="bg-gradient-to-t from-transparent to-lime-950		 pt-20 ">
            <div className=" max-w-screen-xl  mx-auto  relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lime-50 text-9xl truncate opacity-40">
                    RoRA
                </div>
                <div className="flex items-center">
                    {/* 이미지 나타나게 하기 ~!~ */}
                    <div className="relative ">
                        <img
                            className="absolute w-60 h-60 rounded-full z-10"
                            src={imgSrc}
                            alt="NFT"
                        />
                        <div className=" top-0 w-60 h-60 rounded-full bg-white text-gray-950 flex justify-center items-center">
                            Loading...
                        </div>
                    </div>
                    <div className="ml-20 pt-5">
                        {/* 여기서부터는 텍스트 가져오기  */}
                        <div className=" mt-4 text-4xl text-white font-bold flex items-center">
                            RoRA
                            <div className="bg-lime-900 text-lime-300  w-10 h-10 rounded-full flex justify-center items-center ml-4 ">
                                <GiSharpCrown size={20} />
                            </div>
                        </div>
                        <div className="mt-2 flex  items-center text-gray-300 pb-8">
                            by
                            <div className="text-lime-100 ml-2 ">
                                {CONTRACT_ADDRESS}
                            </div>
                        </div>
                        <div className="mt-2 text-gray-300 w-1/2">
                            디즈니 프린세스 또는 프린세스 라인은 월트 디즈니
                            컴퍼니가 소유한 미디어 프랜차이즈이자 장난감
                            캐릭터명이다. 디즈니 프린세스는 총 14명으로,
                            백설공주, 신데렐라, 오로라, 에리얼, 벨, 자스민 공주,
                            포카혼타스, 뮬란, 티아나, 라푼젤, 메리다, 모아나,
                            엘사, 안나가 디즈니 프린세스이다.
                        </div>

                        <div className="py-4  text-center text-white flex">
                            <div>
                                <div className="text-gray-300">총 NFT</div>
                                <div className="font-bold ">{totalNft}</div>
                            </div>
                            <div className="ml-4">
                                <div className="text-gray-300">발행된 NFT</div>
                                <div className="font-bold">{mintedNft}</div>
                            </div>
                            <div className="ml-4">
                                <div className="text-gray-300">내 NFT</div>
                                <div className="font-bold">{myNft}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
