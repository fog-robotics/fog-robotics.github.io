import React from "react";
import treeNodeStyles from "../styles/treeNode.module.css"
import { Link, useNavigate } from "react-router-dom/dist";

const TreeNode = (props) => {
    const name = props.name;
    const description = props.description;
    const path = props.path;

    const navigate = useNavigate();
    const navigateToPage = () => {
        navigate(path);
      };


    return (
        <div className={treeNodeStyles.treeNodeWrapper}  onClick={navigateToPage}>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default TreeNode;
