"use client";
import React from "react";
import { Card, CardContent, CardTitle, CardHeader } from "../UI/card";
import Form from "./Form";

const AddNoteCard = () => {
  return (
    <Card className="w-[300px] sm:w-[420px] md:w-[600px] mt-24 mx-auto shadow-md">
      <CardHeader>
        <CardTitle>Create new note</CardTitle>
      </CardHeader>
      <CardContent>
        <Form />
      </CardContent>
    </Card>
  );
};

export default AddNoteCard;
