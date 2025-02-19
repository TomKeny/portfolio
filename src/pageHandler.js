import Home from "./Pages/Home";
import SoftwareDevelopment from "./Pages/SoftwareDevelopment";
import GameDevelopment from "./Pages/GameDevelopment";
import Art from "./Pages/Art";

function PageHandler({current}) {
    switch (current) {
        case 0:
            return <Home />
        case 1:
            return <SoftwareDevelopment />
        case 2:
            return <GameDevelopment />
        case 3:
            return <Art />
    }
    <p>{current}</p>
}

export default PageHandler