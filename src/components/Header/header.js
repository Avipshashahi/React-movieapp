import { Box, Chip } from "@mui/material";
import React, {useState} from "react";
import MovieDetail from "../movies/movieDetail";
import './navbar.css'

const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%', height: '100vh'}}>
            <nav>
          
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} > </div>
                </div>
                <h2>Movie App</h2>
            </nav>

            <div className={menu_class}>
            <Box
                    display={"flex"}
                    gap={2}
                    flexWrap={"wrap"}
                    alignItems={"center"}
                  >
                    {MovieDetail?.genres?.map((item) => (
                      <Chip
                        key={item}
                        className={"movie-genre-chip"}
                        variant={"outlined"}
                        label={item}
                      />
                    ))}
                  </Box>
               
            </div>
        </div>
    )
}

export default Navbar