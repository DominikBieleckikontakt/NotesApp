import React from "react";
import { NoteType } from "./NotesList";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../UI/card";

const NoteItem = ({ title, description, createdAt }: NoteType) => {
  const month =
    createdAt.getMonth() + 1 < 10
      ? `0${createdAt.getMonth() + 1}`
      : `${createdAt.getMonth() + 1}`;
  const day =
    createdAt.getDate() + 1 < 10
      ? `0${createdAt.getDate() + 1}`
      : `${createdAt.getDate() + 1}`;

  const date = `${createdAt.getFullYear()}-${month}-${day}`;

  return (
    <Card className="shadow-lg h-auto">
      <CardHeader>
        <CardTitle className="text-2xl break-words">{title}</CardTitle>
        <CardDescription className="italic">{date}</CardDescription>
      </CardHeader>
      <CardContent className="break-words">{description}</CardContent>
    </Card>
  );
};

export default NoteItem;
