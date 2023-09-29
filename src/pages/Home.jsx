import React from "react";
import "../styles/treeStyles.css"
import TreeNode from "../components/TreeNode";
import homeStyles from "../styles/home.module.css"

import berkeleyLogo from "../images/berkeleyLogo.png"
import autoLabLogo from "../images/autoLabLogo.png"
import boschLogo from "../images/boschLogo.png"
import cmuLogo from "../images/cmuLogo.png"

/* Credit to https://www.cssscript.com/clean-tree-diagram/ for tree code */
const Home = () => {
    return (
        <div className={homeStyles.homeWrapper}>
            <div>
                <h1 className={homeStyles.homeTitle}>FogROS</h1>
                <div className={homeStyles.logoRow}>
                    <img src={autoLabLogo} className={homeStyles.logo} />
                    <img src={boschLogo} className={homeStyles.logo} />
                    <img src={berkeleyLogo} className={homeStyles.logo} />
                    <img src={cmuLogo} className={homeStyles.logo} />
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <ul class="tree">
                <li>
                    <li> <span><TreeNode name="FogROS2-Sky" path="/fogros-sky" description="Optmizing time and Cost for Cloud Robotics" /></span></li>
                    <li> <span><TreeNode name="FogROS-SGC" path="/fogros-sgc" description="FogROS2 for secure global connectivity" /></span></li>
                    <li> <span><TreeNode name="FogROS-LS" path="/fogros-ls" description=" Location-Independent framework for  Latency Sensitive Robotics" /></span></li>
                    <ul>
                        <li> 
                            <span><TreeNode name="FogROS2" path="/fogros2" description="An upgraded version of FogROS2 for ROS2" /></span>
                            <ul>
                                <li><span><TreeNode name="FogROS" path="/fogros" description="The original  FogROS" /></span></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className={homeStyles.cloudRoboticsWrapper}>
                <h1>What is cloud robotics?</h1>
                <p>Cloud robotics encompasses many relations between the cloud and robotics. Here we focus on what the cloud offers, explicitly focusing on the capabilities FogROS 2 can give robots by using the cloud.</p>
                
                <h3>What is the cloud?</h3>
                <p>
                    The cloud, in short, offers pay-per-use networked access to computing resources. Cloud service providers, such as Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure, set up and maintain computing hardware, such as multi-core servers, graphics processing units (GPUs), tensor processing units (TPUs), field-programmable gate arrays (FPGAs), and more. To use the computing hardware, one signs up for the service using a credit card, then uses either a browser-based or program-based interface to turn on and off, configure, and access these computers.

                    Cloud service providers house their computers in different data centers in different regions around the world. The reason for this will be explained next.
                </p>

                <h3>Cloud computing latency</h3>
                <p>
                    Latency of computation is often critical in robot applications. Whether computing a new path, reconstructing an environment, or planning a manipulation, it is desirable to do it fast. Robots may find that computations are too slow when using their onboard computing capabilities alone. Using high-end or hardware-accelerated computing in the cloud can speed up the computation but at the cost of the network round-trip time between robot and cloud. Using the cloud thus only gains an advantage over robot-only computation when the combined cloud computing time and the network round-trip time is faster than robot-only.

                    For example, robots often do not have onboard GPUs, but many modern robot algorithms benefit significantly from GPU processing. When a forward pass on a deep neural network takes 14 seconds on a robot’s CPU and requires only 0.6 seconds on a GPU, the potential speedup using the cloud is significant.
                </p>

                <h3>Network latency to the cloud?</h3>
                <p>
                    The network latency to the cloud can be surprisingly short. The most crucial factor is the distance between the robot and the cloud. The farther away, the longer the latency (this is due to the speed of light). A secondary factor is the bandwidth or bitrate of the network connection between the robot and the cloud.

                    To understand bandwidth or bitrate, try out an internet speed test tool.

                    To understand the latency to the cloud, try out <a href="https://cloudping.info/">cloudping.info</a>. This tool sends a small packet to the different data centers and measures the time before the response comes back. You can expect response times in the 10 to 40 ms range for nearby data centers.

                    With <a href="https://cloudping.info/">cloudping.info</a>, you can quickly understand which data center you should use for your cloud robotics applications.
                </p>

                <h3>What is the edge?</h3>
                <p>The edge refers to computing resources as close as possible to the robot. As latency is often a critical factor in many applications, having computers closer to the robot is often desirable.</p>
        
                <h3>What is the fog?</h3>
                <p>The fog encompasses everything between and including the cloud and the edge computing resources.</p>
            
                <h3>FogROS(2) and Cloud Robotics</h3>
                <p>FogROS 2 integrates ROS 2 applications with the cloud by streamlining the process of running ROS 2 nodes in the cloud and having them communicate with the robot. FogROS 2 takes care of setting up cloud computers, installing ROS and dependencies, securing network communications, starting remote nodes, and more. As a user, you will need only to configure which nodes get deployed to which region and computer type.</p>
            </div>
        </div>
    );
}

export default Home;
