import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Start from "./pages/Start";
import Main from "./pages/main";
import Detail from "./pages/detail";

function App() {
    const [account, setAccount] = useState("");
    return (
        <BrowserRouter>
            <div className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route
                        path="/Main"
                        element={
                            <Main account={account} setAccount={setAccount} />
                        }
                    />
                    <Route path="/:tokenId" element={<Detail />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
