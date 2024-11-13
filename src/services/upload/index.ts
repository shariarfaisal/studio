import { API_URLS } from "@/constants";
import { $clientPrivate } from "../client";

interface UploadWorkflowFile {
  session_id: string;
  file: FormData;
}

export const UPLOAD_API = {
  uploadWorkflowFile: async ({
    session_id,
    file,
  }: UploadWorkflowFile): Promise<{ prompt: string }> =>
    await $clientPrivate.post(
      API_URLS.UPLOAD_WORKFLOW_FILE + `/${session_id}`,
      file,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    ),
};
