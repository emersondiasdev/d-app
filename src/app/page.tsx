import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { StatusCard } from "@/components/commons/statusCard";
import { PlusIcon, Wallet2Icon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-7xl pr-4 pl-4">
      <div className="flex justify-between items-center p-4"></div>
        <h1 className="text-2xl font-bold">Web3 Todo List</h1>
        <h2>Gerencie suas tarefas com segurança e confiança</h2>
        <div className="flex flex-col">
          <input type="text" placeholder="Add a new task" />
          <Button> 
            <Wallet2Icon />
              <span>Connect Wallet</span>
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatusCard />
            <StatusCard />
            <StatusCard />
            <StatusCard />
          </div>
          <div className="flex justify-between items-center mt-10">
           <div className="text-2xl font-bold">Tarefas</div>
          </div>
          <div>
            <Dialog>
              <Button>
                <PlusIcon />
                <span>Nova tarefa</span>
              </Button>

            </Dialog>
          </div>
        </div>
        <div className="flex flex-col"></div>
    </div>
  );
}
