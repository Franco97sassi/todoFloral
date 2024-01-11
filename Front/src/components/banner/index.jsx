import { Button, Typography, Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";
import banner from "../../utils/image/banner.png"


export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const is600 = useMediaQuery("(max-width:600px)");

  const handleClick = () => {
    window.location.href = "/productos";
  };


  return (
    <BannerContainer sx={{ justifyContent: "space-evenly" }} >
      <BannerImage src={banner} />
      <BannerContent sx={{width: "100%"}}>
        <BannerTitle variant="h6" sx={{ fontWeight: "500", whiteSpace: 'nowrap'  }}  fontFamily={'TanPearl'}>
          TODO FLORAL
        </BannerTitle>
        <Typography sx={{ fontWeight: "500", fontSize:matches? "1.55rem":"2.2rem" }} variant="h4" fontFamily={'Anaktoria'}>
          Regalar flores es regalar amor
        </Typography>


        <BannerDescription variant="subtitle" sx={{ paddingTop: "1rem", fontSize: "16px", mb: 5 }} fontFamily={''}>
        Sorprende con las flores más frescas para toda ocasión y con los mejores complementos como globos, accesorios y más. Cotiza nuestra barra de snacks y agenda tu fecha. Tenemos envíos a domicilio disponibles todos los días.
        </BannerDescription>
        <Box display={"flex"} justifyContent={"center"}>
          <BannerShopButton onClick={handleClick} color="primary" sx={{ width: "60%" }}>ir a la Tienda</BannerShopButton>
        </Box>
      </BannerContent>
    </BannerContainer>
  );
}
