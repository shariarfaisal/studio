"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import {
  ArrowLeft,
  ClipboardType,
  FileText,
  LayoutIcon,
  Link,
  PlusSquare,
  UploadIcon,
  Youtube,
} from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNotebook } from "../provider";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import { useProjectStore } from "@/store";
import { UPLOAD_API } from "@/services";
import { nanoid } from "nanoid";
import { parseFileResponse } from "@/utils";
import { Source } from "@/types";

type IAddFileProps = {
  handleModalClose: () => void;
};
const AddFile = ({ handleModalClose }: IAddFileProps) => {
  const { id } = useParams();
  const { setProjectStore } = useProjectStore();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const files = await Promise.all(
        acceptedFiles.map((file) => {
          const session_id = nanoid();
          const formData = new FormData();
          formData.append("file", file);
          return UPLOAD_API.uploadWorkflowFile({
            session_id,
            file: formData,
          });
        })
      );

      setProjectStore(({ projects }) => {
        const sources: Source[] = files.map(
          (f) =>
            ({
              id: nanoid(),
              file: parseFileResponse(f.prompt),
            } as Source)
        );

        const project = projects.find((p) => p.id === id);
        if (!project) return { projects };

        return {
          projects: projects.map((p) =>
            p.id === id
              ? {
                  ...p,
                  sources: [...p.sources, ...sources],
                }
              : p
          ),
        };
      });
      handleModalClose();
    },
    [handleModalClose, id, setProjectStore]
  );

  const {
    getRootProps,
    getInputProps,
    open: fileOpen,
  } = useDropzone({ onDrop });

  return (
    <div
      className="w-full min-h-[200px] border-dashed border-2 border-gray-200 flex flex-col gap-3 justify-center items-center rounded-xl"
      {...getRootProps()}
    >
      <input {...getInputProps()} accept=".pdf, .xls, .xlsx, .csv" />

      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
        <UploadIcon />
      </div>
      <h2 className="text-2xl font-medium">Upload Sources</h2>
      <p className="text-xl text-gray-500">
        <span>Drag & drop or</span>
        <strong
          className="cursor-pointer px-2 text-center"
          onClick={() => fileOpen()}
        >
          choose file
        </strong>
        <span>to upload</span>
      </p>
      <p className="text-sm text-gray-500">
        Supported file types: PDF, XLS, XLSX, CSV
      </p>
    </div>
  );
};

const PasteText = ({ backHandler }: { backHandler: () => void }) => {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <button
            onClick={backHandler}
            className="w-8 h-8 flex items-center bg-slate-100 rounded-full hover:bg-slate-200 transition-all duration-150 justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h3 className="text-lg font-medium">Paste copied text</h3>
        </div>
        <p className="text-sm text-gray-500">
          Paste your copied text below to upload as a source
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <textarea
          id="paste_text"
          placeholder="text"
          className="w-full p-3 border border-gray-300 rounded-lg"
          rows={10}
        />
        <div className="flex items-center justify-end">
          <Button>Upload</Button>
        </div>
      </div>
    </div>
  );
};

function WebLink({ backHandler }: { backHandler: () => void }) {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <button
            onClick={backHandler}
            className="w-8 h-8 flex items-center bg-slate-100 rounded-full hover:bg-slate-200 transition-all duration-150 justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h3 className="text-lg font-medium">Website URL</h3>
        </div>
        <p className="text-sm text-gray-500">
          Paste in a Web URL below to upload as a source.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="url">Paste URL</label>
        <Input
          id="url"
          placeholder="https://example.com"
          className="w-full h-12"
        />
        <div className="flex items-center justify-end">
          <Button>Upload</Button>
        </div>
      </div>
      <div>
        <div className="font-medium">Notes</div>
        <ul className="pl-7 list-inside list-disc">
          <li>
            Only the visible text on the website will be imported at this moment
          </li>
          <li>Paid articles are not supported</li>
        </ul>
      </div>
    </div>
  );
}

export const AddSource = () => {
  const { sources } = useNotebook();
  const [open, setOpen] = useState(false);

  const [tool, setTool] = useState<"file" | "link" | "text">("file");
  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="w-8 h-8 [&>svg]:!size-6">
            <PlusSquare />
          </Button>
        </DialogTrigger>
        <DialogContent className="md:min-w-[800px] max-h-[90vh] scroll-y">
          <DialogHeader>
            <DialogTitle className="font-medium text-2xl">
              Add Source
            </DialogTitle>
          </DialogHeader>
          <div className="w-full flex flex-col gap-3">
            {tool === "link" && (
              <WebLink
                backHandler={() => {
                  setTool("file");
                }}
              />
            )}
            {tool === "text" && (
              <PasteText
                backHandler={() => {
                  setTool("file");
                }}
              />
            )}
            {tool === "file" && (
              <>
                <AddFile {...{ handleModalClose }} />
                <div className="w-full flex flex-col sm:flex-row gap-3">
                  <div className="border p-3 rounded-xl min-h-[150px] min-w-[200px] flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <Link className="w-4 h-4" />
                      <h3 className="font-medium">Link</h3>
                    </div>
                    <div className="w-full flex items-center gap-4">
                      <div
                        onClick={() => setTool("link")}
                        className="bg-blue-50 text-blue-500 text-sm flex gap-3 items-center py-1 px-3 cursor-pointer hover:bg-blue-100 transition-all duration-150 ease-in-out rounded-full"
                      >
                        <LayoutIcon className="w-4 h-4" />
                        <span>Website</span>
                      </div>
                      <div
                        onClick={() => setTool("link")}
                        className="bg-blue-50 text-blue-500 text-sm flex gap-3 items-center py-1 px-3 cursor-pointer hover:bg-blue-100 transition-all duration-150 ease-in-out rounded-full"
                      >
                        <Youtube className="w-4 h-4" />
                        <span>Youtube</span>
                      </div>
                    </div>
                  </div>
                  <div className="border  p-3 rounded-xl min-h-[150px] min-w-[200px] flex flex-col gap-3">
                    <div className="flex gap-3 items-center">
                      <ClipboardType className="w-4 h-4" />
                      <h3 className="font-medium">Paste Text</h3>
                    </div>
                    <div className="w-full flex items-center gap-4">
                      <div
                        onClick={() => setTool("text")}
                        className="bg-blue-50 text-blue-500 text-sm flex gap-3 items-center py-1 px-3 cursor-pointer hover:bg-blue-100 transition-all duration-150 ease-in-out rounded-full"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Copied Text</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full p-3 flex gap-3 items-center h-16 rounded-xl bg-gray-100 border">
                  <p className="text-sm text-gray-500 whitespace-nowrap">
                    Source Limit
                  </p>
                  <Progress
                    className="w-full h-3"
                    value={(100 * sources.data.length) / 50}
                  />
                  <span className="text-sm ">{sources.data.length}/50</span>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
