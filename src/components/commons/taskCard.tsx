import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";

export function TaskCard() {
  return (
    <Card>
        <CardHeader className="flex">
            <div className="flex flex-col">
                <h1 className="text-lg font-bold">Tarefa</h1>
            </div>
            <Badge variant="default">
                <p>Pendente</p>
            </Badge>
            <CardContent>
                <p className="text-sm text-muted-foreground">Descrição</p>
            </CardContent>
            <CardFooter className="flex justify-between">
                <div className="flex gap-2">
                    <p>Data criada</p>
                    <p>Data de vencimento</p>
                </div>
                <span>100 wei</span>
            </CardFooter>
        </CardHeader>
    </Card>
  );
}