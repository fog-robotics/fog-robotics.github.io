import React from "react";
import { Link } from "react-router-dom/dist";
import paperPageStyles from "../../styles/paperPage.module.css"

const FogROS2Page = () => {
    var paperTitle = "FogROS2"
    var authors = "Jeffrey Ichnowski, Kaiyuan Chen, Karthik Dharmarajan, Simeon Adebola, Michael Danielczuk, Vıctor Mayoral-Vilches, Nikhil Jha, Hugo Zhan, Edith LLontop, Derek Xu, Camilo Buscaron, John Kubiatowicz, Ion Stoica, Joseph Gonzalez, Ken Goldberg"

    var paperLink = "https://arxiv.org/pdf/2205.09778.pdf"
    var codeLink = "https://github.com/BerkeleyAutomation/FogROS2"
    
    var summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    var abstract = "Mobility, power, and price points often dictate that robots do not have sufficient computing power on board to run contemporary robot algorithms at desired rates. Cloud computing providers such as AWS, GCP, and Azure offer immense computing power and increasingly low latency on demand, but tapping into that power from a robot is nontrivial. We present FogROS2, an open-source platform to facilitate cloud and fog robotics that is included in the Robot Operating System 2 (ROS 2) distribution. FogROS2 is distinct from its predecessor FogROS1 in 9 ways, including lower latency, overhead, and startup times; improved usability, and additional automation, such as region and computer type selection. Additionally, FogROS2 gains performance, timing, and additional improvements associated with ROS 2. In common robot applications, FogROS2 reduces SLAM latency by 50 %, reduces grasp planning time from 14 s to 1.2 s, and speeds up motion planning 45x. When compared to FogROS1, FogROS2 reduces network utilization by up to 3.8x, improves startup time by 63 %, and network round-trip latency by 97% for images using video compression."
   
    return (
        <div>
            <h1>{paperTitle}</h1>
            <p>{authors}</p>
            <div className={paperPageStyles.linkRow}>
                <Link to={paperLink} className={paperPageStyles.link}>PDF</Link>
                <Link to={codeLink} className={paperPageStyles.link}>Code</Link>
            </div>
            <div>
                <h3>Summary</h3>
                <p>{summary}</p>
            </div>
            <div>
                <h3>Abstract</h3>
                <p>{abstract}</p>
            </div>
        </div>
    );
}

export default FogROS2Page;
