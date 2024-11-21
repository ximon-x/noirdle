import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

import { Card } from "../ui/card";

export default function Proof() {
  return (
    <Card className="h-48 w-48">
      <Button variant="default" size="lg" className="text-lg">
        Place Guess <Send className="h-4 w-4" />
      </Button>
    </Card>
  );
}
