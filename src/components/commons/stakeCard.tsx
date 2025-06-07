import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function StakeCard() {
  return (
    <Card className="w-full">
        <CardHeader>
            <CardTitle>Stake Card</CardTitle>
            <CardDescription>1000</CardDescription>
        </CardHeader>
    </Card>
  );
}