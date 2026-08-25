"use client";

import {
  AtSign,
  Bold,
  Code2,
  Paperclip,
  Send,
} from "lucide-react";

import { useState } from "react";

export default function CommentInput() {
  const [comment, setComment] = useState("");

  const hasComment = comment.trim().length > 0;

  return (
    <section className="flex gap-4 pb-10">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dbe2fa] text-xs font-semibold text-[#3525cd]">
        ME
      </div>

      <div className="flex-1 overflow-hidden rounded-xl border border-[#c7c4d8]/60 bg-white shadow-sm focus-within:border-[#3525cd]">
        <textarea
          rows={3}
          value={comment}
          onChange={(event) =>
            setComment(event.target.value)
          }
          placeholder="Write a comment..."
          className="w-full resize-none border-none bg-transparent p-4 text-sm outline-none placeholder:text-[#464555]/60"
        />

        <div className="flex items-center justify-between border-t border-[#c7c4d8]/30 bg-[#f3f4f5] px-3 py-2">
          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled
              title="Attachments are not available yet"
              className="rounded p-1.5 text-[#9ca3af]"
            >
              <Paperclip size={18} />
            </button>

            <button
              type="button"
              disabled
              title="Formatting is not available yet"
              className="hidden rounded p-1.5 text-[#9ca3af] sm:block"
            >
              <Bold size={18} />
            </button>

            <button
              type="button"
              disabled
              title="Code formatting is not available yet"
              className="hidden rounded p-1.5 text-[#9ca3af] sm:block"
            >
              <Code2 size={18} />
            </button>

            <button
              type="button"
              disabled
              title="Mentions are not available yet"
              className="hidden rounded p-1.5 text-[#9ca3af] sm:block"
            >
              <AtSign size={18} />
            </button>
          </div>

          <button
            type="button"
            disabled={!hasComment}
            onClick={() => {
              console.log(
                "Comments API is not implemented yet.",
              );
            }}
            className="flex items-center gap-2 rounded-md bg-[#3525cd] px-4 py-1.5 text-sm font-medium text-white transition hover:bg-[#1e00a9] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
            <Send size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}