"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MdLogout } from "react-icons/md";
import LogOutModal from "../modals/LogOutModal";

interface HeaderProps {
  userName: string;
}

function Header({ userName }: HeaderProps) {
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsLogOutModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsLogOutModalOpen(true);
  };

  return (
    <header className="w-full flex justify-end rounded-xl">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="rounded-xl py-3 px-5 font-bold bg-blue-100">
            {userName.length > 5 ? `${userName.slice(0, 5)}...` : userName}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            className="text-gray-500 flex items-center cursor-pointer"
            onClick={handleOpenModal}
          >
            <MdLogout />
            로그아웃
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isLogOutModalOpen && (
        <LogOutModal isOpen={isLogOutModalOpen} onClose={handleCloseModal} />
      )}
    </header>
  );
}

export default Header;
