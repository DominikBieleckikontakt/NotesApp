"use client";
import React, { useState, useEffect } from "react";
import { getNotes } from "@/actions/actions";
import NoteItem from "./NoteItem";

export type NoteType = {
  id?: string;
  title: string;
  description: string;
  createdAt: Date;
};

const NotesList = () => {
  const [data, setData] = useState<NoteType[]>([]);

  useEffect(() => {
    const getData = async () => {
      return await getNotes();
    };
    getData().then((fetchedData) => {
      if (fetchedData && fetchedData?.length > 0) {
        setData(fetchedData);
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full">
      {data?.length > 0 &&
        data.map((item) => (
          <NoteItem
            title={item.title}
            description={item.description}
            createdAt={item.createdAt}
          />
        ))}
    </div>
  );
};

export default NotesList;
