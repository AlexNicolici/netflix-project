import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const dropdownButtons = [
  { url: "action", name: "Actiune" },
  { url: "drama", name: "Drama" },
  { url: "comedy", name: "Comedie" },
];

export default function ButtonDropdown({
  dropdownText,
  pageType,
}: {
  pageType?: string;
  dropdownText: string;
}) {
  const navigate = useNavigate();

  const [activeBtn, setActiveBtn] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActiveBtn((prev) => !prev);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setActiveBtn(false);
    setAnchorEl(null);
  };

  const handleGetPageType = (genre: string) => {
    if (pageType === "movies") {
      navigate(`/movies/${genre}`);
    }
    if (pageType === "serials") {
      navigate(`/serials/${genre}`);
    }
  };

  return (
    <div className={`${activeBtn ? "gender-active-btn" : "gender-btn"}  `}>
      <Button
        id="basic-button"
        className="text-white w-[100px]"
        style={{ color: "white" }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {dropdownText}

        {activeBtn ? (
          <IoMdArrowDropup className="text-white ml-5" />
        ) : (
          <IoMdArrowDropdown className="text-white ml-5" />
        )}
      </Button>
      <Menu
        disableScrollLock={true}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {dropdownButtons.map((dropdownButton) => {
          return (
            <MenuItem onClick={() => handleGetPageType(dropdownButton.url)}>
              {dropdownButton.name}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
