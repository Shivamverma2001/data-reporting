import * as React from "react";
import { useRouter } from "next/router";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CardWithForm = () => {
  const [selectedCustomer, setSelectedCustomer] = React.useState(null);
  const router = useRouter();

  const handleCreate = () => {
    if (!selectedCustomer) {
      alert("Please select a customer before proceeding!");
      return;
    }
    router.push(`/portfolio/${selectedCustomer}`);
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Portfolio Editor</CardTitle>
        <CardDescription>Create your new dynamic report.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Statement Name</Label>
              <Input id="name" placeholder="Name of your statement" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="customer">Customer</Label>
              <Select onValueChange={(value) => setSelectedCustomer(value)}>
                <SelectTrigger id="customer">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="1">Shivam</SelectItem>
                  <SelectItem value="2">Ritik</SelectItem>
                  <SelectItem value="3">Yogendra</SelectItem>
                  <SelectItem value="4">Samuel</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleCreate}>Create</Button>
      </CardFooter>
    </Card>
  );
};

export default CardWithForm;
