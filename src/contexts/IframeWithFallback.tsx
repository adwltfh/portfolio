import { useState } from "react";

export function IframeWithFallback({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-4">
          This site cannot be embedded due to security restrictions.
        </p>
        <button
          onClick={() => window.open(url, "_blank", "width=1200,height=800")}
          className="px-6 py-3 bg-[#dc2626] text-white rounded-lg hover:bg-red-500"
        >
          Open in New Window
        </button>
      </div>
    );
  }

  return (
    <iframe
      src={`/api/proxy?url=${url}`}
      className="w-full h-[600px] border-0"
      title={title}
      onError={() => setError(true)}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
    />
  );
}
