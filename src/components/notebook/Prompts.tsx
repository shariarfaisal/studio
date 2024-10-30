"use client";

export default function Prompts() {
  const prompts = [
    {
      id: "1",
      title: "Summarize",
    },
    {
      id: "2",
      title: "Suggest related ideas",
    },
    {
      id: "3",
      title: "Create Study Guide",
    },
    {
      id: "4",
      title: "Suggest next steps",
    },
    {
      id: "5",
      title: "Ask a question",
    },
    {
      id: "6",
      title: "Create a list",
    },
    {
      id: "7",
      title: "Create a checklist",
    },
    {
      id: "8",
      title: "Create a checklist",
    },
  ];

  return (
    <div className="flex gap-2 items-center p-3 flex-row overflow-x-auto no-scrollbar">
      {prompts.map((prompt) => {
        return (
          <div key={prompt.id}>
            <p className="whitespace-nowrap text-sm px-3 py-2 rounded-2xl bg-zinc-200 hover:bg-zinc-300 transition-all duration-200 ease-in-out cursor-pointer">
              {prompt.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
