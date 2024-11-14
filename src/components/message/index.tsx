import { Chart } from "@/components";
import { Conversation, TASK_TYPE_ROLE } from "@/types";
import { extractJson, extractUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import "highlight.js/styles/github.css"; // Import a highlight.js style
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeMinifyWhitespace from "rehype-minify-whitespace";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface Props {
  conversation: Conversation;
}

export const RenderMessageContent = ({ conversation }: Props) => {
  switch (conversation.role as TASK_TYPE_ROLE) {
    case TASK_TYPE_ROLE.TASK_CHART_QUERY_JSON:
      return <Chart content={extractJson(conversation.content)} />;
    case TASK_TYPE_ROLE.TASK_COMPOSE_IMAGE:
      return (
        <div className="relative aspect-square">
          <Image
            src={conversation.content}
            fill
            alt="image"
            // className="absolute"
          />
        </div>
      );
    case TASK_TYPE_ROLE.TASK_COMPOSE_AUDIO:
      return <audio src={conversation.content} controls />;
    default:
      return conversation?.content?.includes("<file ") ? (
        <Link
          href={{ pathname: extractUrl(conversation.content) }}
          target="_blank"
        >
          <object
            data={extractUrl(conversation.content)}
            className="w-full h-full"
          >
            <p>Trình duyệt của bạn không hỗ trợ hiển thị nội dung này.</p>
          </object>
        </Link>
      ) : (
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeMinifyWhitespace, rehypeHighlight]}
        >
          {conversation.content}
        </Markdown>
      );
  }
};
