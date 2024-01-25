import { toast } from "react-toastify";

import axios from "axios";

import { getPresignedDeleteURL } from "@/api/aws/getPresignedDeleteUrl";

export const deleteFile = async (fileName, category) => {
  if (!fileName) return;

  try {
    const presignedUrl = await getPresignedDeleteURL(fileName, category);

    await axios.delete(presignedUrl);

    console.log("File deleted successfully");

    // toast.success('File deleted successfully');
  } catch (error) {
    console.error("Error deleting file:", error);

    toast.error("Error deleting file");

    throw error;
  }
};
