import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import deleteTask from "@/serverActions/deleteTask";

interface DeleteTaskModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  refetch: () => void;
}

function DeleteTaskModal({
  id,
  isOpen,
  onClose,
  refetch,
}: DeleteTaskModalProps) {
  const handleSubmitToDelete = async () => {
    try {
      await deleteTask(id);
      await refetch();
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="min-h-[200px]"
        onClick={(e) => e.stopPropagation()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>프로젝트 삭제</DialogTitle>
          <DialogDescription />
        </DialogHeader>

        <div className="flex flex-col gap-5">
          <p>정말 삭제하시겠습니까?</p>
          <div className="flex items-center justify-end w-full gap-3">
            <Button onClick={onClose}>취소</Button>
            <Button variant="destructive" onClick={handleSubmitToDelete}>
              확인
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteTaskModal;
