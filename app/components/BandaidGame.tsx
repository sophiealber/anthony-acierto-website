"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Phase = "waiting" | "ready" | "go" | "result" | "too-early";

export default function BandaidGame() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("waiting");
  const [reactionTime, setReactionTime] = useState(0);
  const [bestTime, setBestTime] = useState(0);
  const [attempts, setAttempts] = useState<number[]>([]);
  const timerRef = useRef<number>(0);
  const startRef = useRef(0);

  const startRound = useCallback(() => {
    setPhase("ready");
    const delay = 1500 + Math.random() * 3000;
    timerRef.current = window.setTimeout(() => {
      startRef.current = performance.now();
      setPhase("go");
    }, delay);
  }, []);

  const handleClick = () => {
    if (phase === "waiting") {
      startRound();
    } else if (phase === "ready") {
      clearTimeout(timerRef.current);
      setPhase("too-early");
    } else if (phase === "go") {
      const time = Math.round(performance.now() - startRef.current);
      setReactionTime(time);
      setAttempts((prev) => [...prev, time]);
      setBestTime((prev) => (prev === 0 ? time : Math.min(prev, time)));
      setPhase("result");
    } else if (phase === "result" || phase === "too-early") {
      startRound();
    }
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const avg =
    attempts.length > 0
      ? Math.round(attempts.reduce((a, b) => a + b, 0) / attempts.length)
      : 0;

  const getMessage = () => {
    if (reactionTime < 200) return "Incredible reflexes!";
    if (reactionTime < 300) return "Great reaction time!";
    if (reactionTime < 400) return "Solid reflexes!";
    return "Keep practicing!";
  };

  return (
    <>
      {/* Bandaid button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-rose-50 border-2 border-rose-200 shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center group"
        aria-label="Play a game"
        title="Play a game"
      >
        <svg
          className="w-7 h-7 text-rose-400 group-hover:text-rose-500 transition-colors"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.5 6.5L17.5 4.5C16.7 3.7 15.3 3.7 14.5 4.5L4.5 14.5C3.7 15.3 3.7 16.7 4.5 17.5L6.5 19.5C7.3 20.3 8.7 20.3 9.5 19.5L19.5 9.5C20.3 8.7 20.3 7.3 19.5 6.5ZM10 13C9.45 13 9 12.55 9 12C9 11.45 9.45 11 10 11C10.55 11 11 11.45 11 12C11 12.55 10.55 13 10 13ZM12 15C11.45 15 11 14.55 11 14C11 13.45 11.45 13 12 13C12.55 13 13 13.45 13 14C13 14.55 12.55 15 12 15ZM12 11C11.45 11 11 10.55 11 10C11 9.45 11.45 9 12 9C12.55 9 13 9.45 13 10C13 10.55 12.55 11 12 11ZM14 13C13.45 13 13 12.55 13 12C13 11.45 13.45 11 14 11C14.55 11 15 11.45 15 12C15 12.55 14.55 13 14 13Z" />
        </svg>
      </button>

      {/* Game modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Reflex Test
                </h3>
                <p className="text-xs text-slate-400">
                  How fast are your clinical reflexes?
                </p>
              </div>
              <button
                onClick={() => {
                  setOpen(false);
                  setPhase("waiting");
                  clearTimeout(timerRef.current);
                }}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Game area */}
            <button
              onClick={handleClick}
              className={`w-full h-64 flex flex-col items-center justify-center transition-colors cursor-pointer ${
                phase === "waiting"
                  ? "bg-brand-50"
                  : phase === "ready"
                    ? "bg-red-500"
                    : phase === "go"
                      ? "bg-emerald-500"
                      : phase === "too-early"
                        ? "bg-amber-500"
                        : "bg-brand-50"
              }`}
            >
              {phase === "waiting" && (
                <>
                  <svg className="w-12 h-12 text-brand/40 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  <p className="text-brand font-semibold">Click to start</p>
                  <p className="text-sm text-brand/60 mt-1">
                    Wait for green, then click!
                  </p>
                </>
              )}
              {phase === "ready" && (
                <>
                  <p className="text-white text-2xl font-bold">Wait...</p>
                  <p className="text-white/70 text-sm mt-1">
                    Click when it turns green
                  </p>
                </>
              )}
              {phase === "go" && (
                <>
                  <p className="text-white text-3xl font-bold">GO!</p>
                  <p className="text-white/80 text-sm mt-1">Click now!</p>
                </>
              )}
              {phase === "too-early" && (
                <>
                  <p className="text-white text-2xl font-bold">Too early!</p>
                  <p className="text-white/80 text-sm mt-1">
                    Click to try again
                  </p>
                </>
              )}
              {phase === "result" && (
                <>
                  <p className="text-4xl font-bold text-brand">
                    {reactionTime}
                    <span className="text-lg text-brand/60 ml-1">ms</span>
                  </p>
                  <p className="text-brand/80 font-medium mt-1">
                    {getMessage()}
                  </p>
                  <p className="text-sm text-brand/50 mt-3">
                    Click to try again
                  </p>
                </>
              )}
            </button>

            {/* Stats */}
            {attempts.length > 0 && (
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-around text-center">
                <div>
                  <p className="text-xs text-slate-400">Best</p>
                  <p className="text-lg font-bold text-emerald-600">
                    {bestTime}
                    <span className="text-xs text-slate-400 ml-0.5">ms</span>
                  </p>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <p className="text-xs text-slate-400">Average</p>
                  <p className="text-lg font-bold text-slate-700">
                    {avg}
                    <span className="text-xs text-slate-400 ml-0.5">ms</span>
                  </p>
                </div>
                <div className="w-px h-8 bg-slate-200" />
                <div>
                  <p className="text-xs text-slate-400">Attempts</p>
                  <p className="text-lg font-bold text-slate-700">
                    {attempts.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
