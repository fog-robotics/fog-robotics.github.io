import React from "react";
import { Link } from "react-router-dom/dist";
import paperPageStyles from "../../styles/paperPage.module.css"

const FogROS2SkyPage = () => {
    var paperTitle = "FogROS2-Sky"
    var authors = "Authors"

    var paperLink = "Link"
    var codeLink = "Link"
    
    var summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    var abstract = "This paper studies the cost-performance tradeoffs in cloud robotics with heterogeneous cloud service providers, such as AWS, GCP, and Azure, which have complex pricing models and varying application requirements. We present FogROS2-Sky, a cost-efficient open source robotics platform that offloads unmodified ROS2 applications to multiple cloud providers. It enables fine-grained cost analysis for ROS2 applications to multiple cloud providers. As each provider offers different CPU, memory, GPU, and latency options, it is very difficult for users to decide which options to choose. FogROS2- Sky includes an optimization algorithm, which either finds the best available hardware specification that fulfills the constraint or reports that the specification does not exist. We use FogROS2- Sky to perform cost analysis on three robotics applications: visual SLAM, grasp planning. and motion planning. We show that, with running a small set of the hardware configurations, the optimizer is able to reach the pareto frontier of cost and application latency of running the full benchmark on available hardware specifications."
   
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

export default FogROS2SkyPage;
