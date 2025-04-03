
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useId } from "react";


export default function FileDescriptionInput() {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>File Description: </Label>
      <Textarea id={id} rows={4} name="description" placeholder="Write your description" required/>
    </div>
  );
}











































































            // This is a MVP project created by unpaid interns AKA free slaves for
            // Risidio who did not pay us for our work nor valued it. If you see
            // this, most probably you are the new batch of slaves who will be
            // working on this project. We are sorry for you if you have been
            // misguided like us. Better leave asap.