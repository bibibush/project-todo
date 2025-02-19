"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { signOut } from "next-auth/react";
import { useState } from "react";

interface LogOutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function LogOutModal({ isOpen, onClose }: LogOutModalProps) {
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSignOut = () => {
    setLoading(true);
    signOut({ redirect: true, redirectTo: "/" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>로그아웃 확인</DialogTitle>
          <DialogDescription>정말 로그아웃 하시겠습니까?</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-3">
          <Button variant="destructive" onClick={onClose} disabled={isLoading}>
            취소
          </Button>
          <Button
            variant="primaryBlue"
            onClick={handleSignOut}
            disabled={isLoading}
          >
            확인
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LogOutModal;
