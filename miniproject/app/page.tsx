"use client";

import { generateTextAction } from "@/app/actions/aiAction";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSendPrompt = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt.");
      return;
    }

    setLoading(true);
    setError("");
    setOutput("");

    try {
      const response = await generateTextAction(prompt);
      setOutput(response);
    } catch (err) {
      console.error(err);
      setError("Failed to generate a response. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50 px-4 py-8 text-gray-900 sm:px-6">
      {/* Heading */}
      <h1 className="mb-8 text-3xl font-bold tracking-tight">AI Chatbot</h1>

      {/* Response Area */}
      <div className="mb-32 w-full max-w-3xl flex-1">
        {output && (
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold">AI Response</h2>

            <p className="whitespace-pre-wrap break-words text-sm leading-7 text-gray-700">
              {output}
            </p>
          </div>
        )}

        {error && (
          <p className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {error}
          </p>
        )}

        {loading && (
          <p className="mt-4 text-sm text-gray-500">Generating response...</p>
        )}
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-white p-4">
        <div className="mx-auto flex w-full max-w-3xl gap-3">
          <input
            className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            placeholder="Type your message here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !loading) {
                void handleSendPrompt();
              }
            }}
          />

          <button
            onClick={() => void handleSendPrompt()}
            disabled={loading}
            className="shrink-0 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </main>
  );
}
