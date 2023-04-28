import Web3 from "web3";

import { useState, useEffect } from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";

import MainHeader from "../component/MainHeader";
import Intro from "../component/intro";
import Nfts from "../component/Nfts";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
console.log(contract);

function Main({ account, setAccount }) {
    const [totalNft, setTotalNft] = useState(0);
    const [mintedNft, setMintedNft] = useState(0);
    const [myNft, setMyNft] = useState(0);
    const [page, setPage] = useState(1);

    const getTotalNft = async () => {
        try {
            if (!contract) return;

            const response = await contract.methods.totalNft().call();
            // console.log(totalNft);

            setTotalNft(response);
        } catch (error) {
            // console.error(error);
        }
    };

    const getMintedNft = async () => {
        try {
            if (!contract) return;

            const response = await contract.methods.totalSupply().call();

            setMintedNft(response);
            setPage(parseInt((parseInt(response) - 1) / 10) + 1);
        } catch (error) {
            console.error(error);
        }
    };
    const getMyNft = async () => {
        try {
            if (!contract || !account) return;

            const response = await contract.methods.balanceOf(account).call();

            setMyNft(response);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getTotalNft();
        getMintedNft();
    }, []);
    useEffect(() => {
        getMyNft();
    }, [account]);
    return (
        <div className=" min-h-screen ">
            <div className="  min-h-screen justify-center  mx-auto relative bg-black">
                <MainHeader account={account} setAccount={setAccount} />
                <Intro
                    totalNft={totalNft}
                    myNft={myNft}
                    mintedNft={mintedNft}
                />
                <Nfts page={page} mintedNft={mintedNft} />
            </div>
        </div>
    );
}
export default Main;
