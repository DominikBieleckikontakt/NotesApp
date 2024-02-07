"use client";
import React, { useRef, useState } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "../UI/button";
import { Input } from "../UI/input";
import { Label } from "../UI/label";
import { Textarea } from "../UI/textarea";
import { sendData } from "@/actions/actions";
import { Loader2 } from "lucide-react";

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");
  const { pending } = useFormStatus();

  return (
    <form
      className="flex flex-col"
      ref={ref}
      action={async (formData) => {
        const title = formData.get("title") as string;
        const desc = formData.get("description") as string;
        if (title?.length > 0 && desc?.length > 0) {
          ref.current?.reset();
          setMessage("");
          await sendData(formData);
        } else {
          setMessage("Fields can't be empty");
        }
      }}
    >
      <div className="mb-3">
        <Label htmlFor="title" className="pl-1 mb-2">
          Note title
        </Label>
        <Input type="text" id="title" name="title" placeholder="Note title" />
      </div>
      <div className="mb-3">
        <Label htmlFor="description" className="pl-1 mb-2">
          Note description
        </Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Note description"
        />
      </div>
      <p className="text-red-500 ml-1 font-bold">
        {message.length > 0 && message}
      </p>
      <div className="flex justify-end">
        {pending && (
          <Button disabled variant="default" size="default">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        )}
        {!pending && (
          <Button variant="default" size="default">
            Add new note
          </Button>
        )}
      </div>
    </form>
  );
};

export default Form;
