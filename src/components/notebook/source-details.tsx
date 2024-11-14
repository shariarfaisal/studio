"use client";

import { Button } from "../ui";
import { useNotebook } from "./provider";
import { FileText, WandSparkles, X } from "lucide-react";

const SourceDetails = () => {
  const {
    sources: { openSourceDetails: data },
    closeSourceDetails,
  } = useNotebook();

  if (!data) {
    return null;
  }
  return (
    <div className="p-4 min-h-[calc(100vh-210px)]">
      <div className="flex items-center justify-between sticky top-16 left-0 z-10 px-4 py-2 bg-background max-w-full overflow-x-auto no-scrollbar shadow-sm lg:shadow-none">
        <h1 className="text-2xl font-medium">{data.file.filename}</h1>
        <Button
          size="sm"
          variant="destructive"
          className="w-8 h-8 rounded-full"
          onClick={closeSourceDetails}
        >
          <X />
        </Button>
      </div>
      <div className="p-4 space-y-7">
        {/* <div className='space-y-3'>
          <h3 className='text-lg font-medium flex items-center gap-2'>
            <WandSparkles className='w-5 h-5' />
            <span>Summary</span>
          </h3>
          <p className='whitespace-pre-wrap text-sm bg-slate-100 rounded-lg p-3'>
            {data.data}
          </p>
        </div> */}

        <div className="space-y-3">
          <h3 className="text-lg font-medium flex items-center gap-2">
            <FileText className="w-5 h-5" />
            <span>Transcript</span>
          </h3>
          <p className="whitespace-pre-wrap text-sm bg-slate-100 rounded-lg p-3">
            {data.data}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SourceDetails;
