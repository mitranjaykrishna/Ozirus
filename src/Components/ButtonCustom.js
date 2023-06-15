import React from "react";
import Button from "@mui/material/Button";

export default function ButtonCustom(props) {
  return (
    <Button
      variant={props.varients}
      sx={{
        background: "linear-gradient(95.33deg, #FE45FE 4.16%, #5F00FF 99.77%)",
        color: "white",
        borderRadius: "32px",
        height: "45px",
        width: "180px",
      }}
    >
      <p className="font-medium  text-[15px]">{props.name}</p>
    </Button>
  );
}
