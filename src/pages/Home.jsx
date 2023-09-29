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
            <h2>What is cloud robotics?</h2>
        </div>
    );
}

export default Home;
