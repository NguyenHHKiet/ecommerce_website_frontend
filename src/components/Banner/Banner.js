import React from "react";
import { Link } from "react-router-dom";
import Ratio from "react-bootstrap/Ratio";

import image from "../../assets/images/banner1.jpg";
import classes from "./Banner.module.scss";

const Banner = () => {
    return (
        <Ratio
            aspectRatio={"21x9"}
            className={`${classes.showcase} py-3 mb-5`}
            style={{
                background: `url(${image}) no-repeat center center/cover`,
            }}>
            <div className={classes.content}>
                <h6 className="text-uppercase opacity-50 fst-italic">
                    New Inspiration 2020
                </h6>
                <h2 className="text-uppercase fst-italic">
                    20% Off On New Season
                </h2>
                <Link
                    to={"/shop"}
                    className="bg-black text-white py-1 px-3 mt-2 fst-italic">
                    Browse collections
                </Link>
            </div>
        </Ratio>
    );
};

export default Banner;
