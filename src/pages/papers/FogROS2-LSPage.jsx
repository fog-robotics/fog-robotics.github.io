import React from "react";
import { Link } from "react-router-dom/dist";
import paperPageStyles from "../../styles/paperPage.module.css"

const FogROS2LSPage = () => {
    var paperTitle = "FogROS2-LS"
    var authors = "Authors"

    var paperLink = "Link"
    var codeLink = "Link"
    
    var summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    var abstract = "Ensuring reliable latency for Cloud or Fog robotics applications is challenging in the presence of network congestion and failures. We introduce FogROS2-LS, a Fog Robotics framework that offers secure, location-independent connections between robots and latency-sensitive distributed robotic services. FogROS2-LS offloads conventional on-board state estimators and feedback controllers to Cloud and Edge without modifying the existing application in ROS2. In presence of multiple identical services, it dynamically identifies and transitions to the optimal service deployment that fulfills the application’s latency requirement, thereby empowering robots with restricted on-board computing capacity to safely and efficiently navigate dynamic, human-dense environments. We evaluate FogROS2- LS with two latency sensitive scenarios: (1) The robot arm decelerates safely, guided by visual feedback from consistent distance estimation and collision checking on Cloud and Edge. FogROS2-LS reduces collision failures by up to 8.5 times by selecting the best available machine, and even achieves a failure rate up to 1.5 times lower than relying on the best single machine alone. (2) FogROS2-LS also enables robust and continuous target following and can recover from network failures."
    
    return (
        <div>
            <Link to="/" className={paperPageStyles.fogrosHome}>FogROS Home</Link>
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

export default FogROS2LSPage;
