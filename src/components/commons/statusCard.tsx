import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function StatusCard() {
    return (
        <div className="flex flex-col">
            <Card>
                <CardHeader>
                    <h1>Total de tarefas</h1>
                </CardHeader>
                <CardContent>
                    <h1>10</h1>
                </CardContent>
            </Card>
        </div>
    )
}