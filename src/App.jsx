import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login/index.jsx";
import Feed from "./pages/feed/index.jsx";
import Protected from "./components/protected/index.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />

            <Route element={<Protected/>} >
                <Route path="/feed" element={<Feed/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
