import {
  GitPullRequest,
  MessageSquare,
  Plus,
} from "lucide-react";

const activities = [
  {
    name: "Sarah",
    action: "updated",
    target: "'Auth Middleware' status to",
    status: "Done",
    time: "2 hours ago",
    type: "status",
  },
  {
    name: "John",
    action: "commented on",
    target: "'Schema Design'",
    comment:
      "We should consider paginating the queries earlier rather than later.",
    time: "5 hours ago",
    type: "comment",
  },
  {
    name: "System",
    action: "merged PR",
    target: "#402 into main branch.",
    time: "Yesterday",
    type: "merge",
  },
  {
    name: "Elena",
    action: "created task",
    target: "'Database Migration Scripts'",
    time: "Yesterday",
    type: "task",
  },
];

export default function ProjectActivity() {
  return (
    <section className="rounded-xl border border-[#c7c4d8] bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-lg font-semibold text-[#191c1d]">
        Recent Activity
      </h3>

      <div className="ml-3 space-y-6 border-l border-[#c7c4d8]">
        {activities.map((activity, index) => (
          <div
            key={`${activity.name}-${index}`}
            className="relative pl-6"
          >
            <div className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-[#c7c4d8] bg-white">
              {activity.type === "merge" ? (
                <GitPullRequest
                  size={14}
                  className="text-[#3525cd]"
                />
              ) : activity.type === "comment" ? (
                <MessageSquare
                  size={13}
                  className="text-[#3525cd]"
                />
              ) : (
                <Plus
                  size={14}
                  className="text-[#3525cd]"
                />
              )}
            </div>

            <p className="text-sm leading-5 text-[#191c1d]">
              <span className="font-semibold">
                {activity.name}
              </span>{" "}
              {activity.action}{" "}
              <span className="font-medium">
                {activity.target}
              </span>

              {activity.status && (
                <span className="ml-1 rounded bg-[#e7e8e9] px-1.5 py-0.5 text-xs">
                  {activity.status}
                </span>
              )}
            </p>

            {activity.comment && (
              <div className="mt-2 rounded-lg border border-[#c7c4d8]/60 bg-[#f3f4f5] p-3 text-sm italic text-[#464555]">
                &quot;{activity.comment}&quot;
              </div>
            )}

            <span className="mt-1 block text-xs text-[#777587]">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}