import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../App.css";
const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  return (
   
      <Box sx={{mt:5}}>
        <Masonry columns={5} spacing={3}>
          {itemData.map((item, index) => (
            <div key={index} className="masonry-item">
              <img
                src={`${item.img}?w=162&auto=format`}
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: "block",
                  width: "100%",
                }}
              />
              <div className="masonry-overlay">
                <Typography variant="h5" color="white">
                  {item.title}
                </Typography>
                <div className="overlay-icons">
                  <IconButton color="white">
                    <SearchIcon sx={{ color: "white", fontSize: "50px" }} />
                  </IconButton>
                  <IconButton color="white">
                    <FavoriteIcon sx={{ color: "white", fontSize: "50px" }} />
                  </IconButton>
                  <IconButton color="white">
                    <ShoppingCartIcon sx={{ color: "white", fontSize: "50px" }} />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </Box>
  
  );
}

const itemData = [
  {
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    title: "Fern",
  },
  {
    img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    title: "Snacks",
  },
  {
    img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    title: "Mushrooms",
  },
  {
    img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    title: "Tower",
  },
  {
    img: "https://revivalvintage.co.uk/cdn/shop/files/f22f8ccc-c006-412c-bcc3-131de7f64737_600x.jpg?v=1684402252",
    title: "Sea star",
  },
  {
    img: "https://m.media-amazon.com/images/I/41fNFKwHqFL.jpg",
    title: "Honey",
  },
  {
    img: "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg",
    title: "Basketball",
  },
  {
    img: "https://m.media-amazon.com/images/I/61lCeBk42+L._AC_UL320_.jpg",
    title: "Breakfast",
  },
  {
    img: "https://m.media-amazon.com/images/I/51zi-+aRReL._AC_UL320_.jpg",
    title: "Tree",
  },
  {
    img: "https://m.media-amazon.com/images/I/71Ideg0BlDL._AC_UL320_.jpg",
    title: "Burger",
  },
  {
    img: "https://m.media-amazon.com/images/I/51YtNYA0fSL._AC_UL320_.jpg",
    title: "Camera",
  },
  {
    img: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/HB.jpg",
    title: "Coffee",
  },
  {
    img: "https://m.media-amazon.com/images/I/71PgXiVK43L._AC_UL320_.jpg",
    title: "Camping Car",
  },
  {
    img: "https://m.media-amazon.com/images/I/81YozxxzwXL._AC_UL320_.jpg",
    title: "Hats",
  },
  {
    img: "https://m.media-amazon.com/images/I/51N-VNX7ncL._AC_UL320_.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://m.media-amazon.com/images/I/71rY6R-Wi1L._AC_UL320_.jpg",
    title: "Mountain",
  },
  {
    img: "https://m.media-amazon.com/images/I/41eq+aPIACL._AC_UL320_.jpg",
    title: "Bike",
  },
];
