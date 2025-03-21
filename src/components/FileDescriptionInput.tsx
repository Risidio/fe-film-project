
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useId } from "react";


export default function FileDescriptionInput() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>File Description: </Label>
      <Textarea id={id} rows={4} placeholder="Write your description" required/>
    </div>
  );
}
