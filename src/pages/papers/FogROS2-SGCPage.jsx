import React from "react";
import { Link } from "react-router-dom/dist";
import paperPageStyles from "../../styles/paperPage.module.css"

const FogROS2SGCPage = () => {
    var paperTitle = "FogROS2-SGC"
    var authors = "Kaiyuan Chen, Ryan Hoque, Karthik Dharmarajan, Edith LLontop, Simeon Adebola, Jeffrey Ichnowski, John Kubiatowicz, Ken Goldberg"

    var paperLink = "https://arxiv.org/abs/2306.17157"
    var codeLink = "https://github.com/data-capsule/fogros2-sgc-lite"
    
    var summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    var abstract = "The Robot Operating System (ROS2) is the most widely used software platform for building robotics applications. However, ROS2 is designed for robots that operate in a single local area network. With applications like fog robotics, distributed multi-robot systems, remote robot control, and mobile robots, modern robotics increasingly involves the global Internet. Existing solutions for connecting disjoint ROS2 networks lack key features such as security, compatibility, efficiency, and ease of use. To this end, we introduce FogROS2-SGC, a cloud robotics platform for connecting robot systems across different physical locations, networks, and Data Distribution Services (DDS). With globally unique and location-independent identifiers, FogROS2-SGC securely and efficiently routes data between robotics components around the globe that may dynamically move between different networks. The platform is agnostic to the ROS2 distribution and configuration and compatible with non-ROS2 software, and it seamlessly extends existing ROS2 applications without any code modification. Experiments suggest FogROS2-SGC is 19× faster than rosbridge (a ROS2 package with comparable features, but lacking security) with 8- kilobyte images and can be applied to a distributed fleet learning system with image data and components that are 3600 km apart. "
   
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

export default FogROS2SGCPage;
