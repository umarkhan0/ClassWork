import React, { useEffect } from "react";
// import DrawerAppBar from "../components/header";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
function YourProfilePage() {
  const [image, setImage] = React.useState("https://demotix.com/wp-content/uploads/2019/07/web-design5-1170x658.jpg");


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
}
  return(
    <>
    <div className=" flex justify-center items-center">
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
      }}
    >
      <input
        style={{ display: "none" }}
        type="file"
        name=""
        id="get-img"
        onChange={handleImageChange}
      />

      <img
        src={image}
        alt=""
        style={{ width: "90px", height: "90px", borderRadius: "50%" }}
        className="absolute"
      />

      <label
        className="absolute mt-1"
        htmlFor="get-img"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          cursor: "pointer",
        }}
      >
        <div>
          <CameraAltIcon />
        </div>
      </label>
    </div>

    </div>
    </>
  )
}

export default YourProfilePage;
