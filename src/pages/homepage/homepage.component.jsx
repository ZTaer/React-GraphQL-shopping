import React from 'react';
import "./homepage.styles.scss";
import { default as DirectoryMenu } from "../../components/directory-menu/directory-menu.container";

const HomePage = () => (
    <div className="homepage">
        <DirectoryMenu></DirectoryMenu>
    </div>
);

export default HomePage;