"use server";
import db from "../lib/prisma";

export const sendData = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  await db.note.create({
    data: {
      title,
      description,
    },
  });
};

export const getNotes = () => {
  const posts = db.note.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return posts;
};
