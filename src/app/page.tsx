import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { StatusCard } from "@/components/commons/statusCard";
import { PlusIcon, Wallet2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StakeCard } from "@/components/commons/stakeCard";
import { TaskCard } from "@/components/commons/taskCard";

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
           <h1 className="text-2xl font-bold">Tarefas</h1>
            <div>
              <Dialog>
                <DialogTrigger>
                  <Button>
                    <PlusIcon />
                    <span>Nova tarefa</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Nova tarefa</DialogTitle>
                  </DialogHeader>
                  <DialogDescription className="flex flex-col gap-4">
                    <Label>Título</Label>
                    <Input type="text" placeholder="Nova tarefa" />
                    <Label>Descrição</Label>
                    <Textarea placeholder="Descrição Tarefa"/>
                    <Input type="datetime-local" placeholder="Data de vencimento"></Input>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <StakeCard />
                      <StakeCard />
                      <StakeCard />
                      <StakeCard />
                    </div>
                    <Button>
                      <PlusIcon />
                      <span>Criar tarefa</span>
                    </Button>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="flex flex-col gap-4">
              <TaskCard />
              <TaskCard />
              <TaskCard />
              <TaskCard />
            </div>
          </div>
        </div>
    </div>
  );
}
