import { privateInstance } from "../axios";

export const getPresignedURL = async (
  fileName,
  fileType,
  category,
  fileSize,
) => {
  try {
    const response = await privateInstance.get(`/files/s3-presigned-url`, {
      params: { fileName, fileType, category, fileSize },
    });
    return response.data.url;
  } catch (error) {
    console.error("Error in getPresignedURL:", error);
    throw error;
  }
};
