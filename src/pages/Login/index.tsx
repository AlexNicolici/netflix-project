import { TextField } from "@mui/material";
import React from "react";

function Login() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-netflix-login">
      <div className="min-h-screen bg-[hsla(0,0%,0%,0.6)] flex justify-center items-center">
        <div className="bg-black py-[48px] px-[68px] bg-opacity-65 rounded-md  text-white">
          <h3 className="mb-[28px] text-3xl font-semibold">Conectare</h3>
          <form className="flex flex-col w-[100%]">
            <TextField
              className="w-[350px] customTextField"
              id="login-email-or-phone"
              type="email"
              label="Email sau numar de telefon"
              variant="outlined"
              InputProps={{
                style: {
                  backgroundColor: "rgba(70, 90, 126, 0.4)",
                  opacity: 0.7,
                  marginBottom: 15,
                },
              }}
              // InputLabelProps={{
              //   style: {
              //     color: "white",
              //   },
              // }}
            />
            <TextField
              className="w-[350px] customTextField"
              id="login-password"
              type="password"
              label="Parola"
              variant="outlined"
              InputProps={{
                style: {
                  backgroundColor: "rgba(70, 90, 126, 0.4)",
                  opacity: 0.7,
                },
              }}
              // InputLabelProps={{
              //   style: {
              //     color: "white",
              //   },
              // }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
