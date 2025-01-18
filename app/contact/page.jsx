"use client";

import React from "react";
import ContactForm from "../component/ContactForm/ContactForm";
import { Box, Container } from "@mui/system";
import { AddressContainer } from "./styles";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function contact() {
  return (
    <Container className="my-20 mb-10">
      <h1 className="sm:text-4xl text-3xl">Contact Us</h1>

      <AddressContainer>
        <div className=" sm:py-5 py-0 px-10 sm:mb-0 mb-2">
          <div className="flex gap-2 items-center pb-3">
            <Box sx={{ color: "#057538" }}>
              <PhoneIphoneOutlinedIcon />
            </Box>
            <p className="text-lg">281-408-9704</p>
          </div>

          <div className="flex gap-2 items-center">
            <Box sx={{ color: "#057538" }}>
              <MailOutlineOutlinedIcon />
            </Box>

            <p className="text-lg">info@anikusllc.org</p>
          </div>
        </div>
        <div className=" py-5 px-10">
          <div className="flex gap-2 items-center">
            <Box sx={{ color: "#057538" }}>
              <LocationOnOutlinedIcon />
            </Box>
            <div className="flex flex-col">
              <p className="text-lg">14001 Frondren Road,</p>
              <p className="text-lg ">Missouri City, TX 77489</p>
            </div>
          </div>
        </div>
      </AddressContainer>
      <ContactForm />
    </Container>
  );
}
