import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Send } from "lucide-react";

import { Card } from "../ui/card";

export default function Game() {
  return (
    <Card className="flex flex-col items-center gap-4 p-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <InputOTP maxLength={5} key={`input-${i}`}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
          </InputOTPGroup>
        </InputOTP>
      ))}
      <Button variant="default" size="lg" className="text-lg">
        Send <Send className="h-4 w-4" />
      </Button>
    </Card>
  );
}
