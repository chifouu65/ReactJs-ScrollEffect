import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import './index.css';
import First from "./First";
import Second from "./Second";

const anchors = ["firstPage", "secondPage", "thirdPage"];

const App = () => (
    <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        navigat
        sectionsColor={["#7fff00", "#00ffff", "#29ab87"]}
        onLeave={(origin, destination, direction) => {
            console.log("onLeave event", {origin, destination, direction});
        }}
        render={({state, fullpageApi}) => {
            console.log("render prop change", state, fullpageApi);

            return (
                <>
                    <First/>
                    <Second/>
                </>
            );
        }}
    />
);
export default App;