"use server";
import db from "../lib/prisma";

export const sendData = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (title?.length > 0 && description?.length > 0) {
    await db.note.create({
      data: {
        title,
        description,
      },
    });
    return "Sended";
  } else {
    return "Error";
  }
};
