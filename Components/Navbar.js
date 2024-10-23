import React, { useState } from "react"
import Logo from "../assets/Logo(1).svg"
import {BsCart2} from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />
        },
        {
            text: "About Us",
            icon: <InfoIcon />
        },
        {
            text: "Services",
            icon: <HomeWorkIcon />
        },
        {
            text: "Avaliation",
            icon: <CommentRoundedIcon />
        },
        {
            text: "Contact Us",
            icon: <PhoneRoundedIcon />
        },
        {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />
        }
    ];

    return(
        <nav>
            <div className="nav-logo-container">
            <img src={Logo} alt="logo donnuts" />
            </div>

            <div className="navbar-links-container">
                <a href="/Components/Home">Home</a>
                <a href="/Components/About">About Us</a>
                <a href="./Components/Services">Services</a>
                <a href="./Components/Avaliation">Avaliation</a>
                <a href="./Components/Contact">Contact Us</a>
                <a href="">
                    <BsCart2 className="navbar-cart-icon" />
                </a>
                <button className="primary-button">Order Now</button>
            </div>

            <div className="nav-bar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box sx={{width: 250}} 
                role="presentation" 
                onClick={() => setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)}
                >
                   <List>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List> 
                </Box>
            </Drawer>
        </nav>
    )

}

export default Navbar