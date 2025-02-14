import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Loader2 } from "lucide-react";
import React from "react";
import { Dialog, DialogContent } from "./dialog";

type LoadingProps = {
  show?: boolean;
};

const Loading: React.FC<LoadingProps> = ({ show }) => {
  return (
    <Dialog open={show}>
      <DialogContent closable={false} className="w-fit border-transparent bg-transparent shadow-none">
        <DialogTitle />
        <DialogDescription />
        <Loader2 size={80} className="animate-spin text-white" />
      </DialogContent>
    </Dialog>
  );
};

export default Loading;
