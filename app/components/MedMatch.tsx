"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PAIRS = [
  { term: "Tachycardia", definition: "Heart rate > 100 bpm" },
  { term: "Bradycardia", definition: "Heart rate < 60 bpm" },
  { term: "Dyspnea", definition: "Difficulty breathing" },
  { term: "Edema", definition: "Swelling from fluid" },
  { term: "Hematoma", definition: "Localized blood collection" },
  { term: "Syncope", definition: "Fainting / loss of consciousness" },
  { term: "Cyanosis", definition: "Bluish skin discoloration" },
  { term: "Embolism", definition: "Blocked blood vessel" },
];

type Card = {
  id: number;
  text: string;
  pairId: number;
  type: "term" | "definition";
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildDeck(): Card[] {
  const cards: Card[] = [];
  PAIRS.forEach((pair, i) => {
    cards.push({ id: i * 2, text: pair.term, pairId: i, type: "term" });
    cards.push({
      id: i * 2 + 1,
      text: pair.definition,
      pairId: i,
      type: "definition",
    });
  });
  return shuffle(cards);
}

export default function MedMatch() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [moves, setMoves] = useState(0);
  const [gameState, setGameState] = useState<"idle" | "playing" | "won">(
    "idle"
  );
  const lockRef = useRef(false);

  const startGame = useCallback(() => {
    setCards(buildDeck());
    setFlipped([]);
    setMatched(new Set());
    setMoves(0);
    setGameState("playing");
  }, []);

  useEffect(() => {
    setCards(buildDeck());
  }, []);

  const handleFlip = (id: number) => {
    if (lockRef.current) return;
    if (flipped.includes(id) || matched.has(id)) return;
    if (gameState !== "playing") return;

    const next = [...flipped, id];
    setFlipped(next);

    if (next.length === 2) {
      setMoves((m) => m + 1);
      const [first, second] = next;
      const c1 = cards.find((c) => c.id === first)!;
      const c2 = cards.find((c) => c.id === second)!;

      if (c1.pairId === c2.pairId && c1.type !== c2.type) {
        const newMatched = new Set(matched);
        newMatched.add(first);
        newMatched.add(second);
        setMatched(newMatched);
        setFlipped([]);
        if (newMatched.size === cards.length) {
          setGameState("won");
        }
      } else {
        lockRef.current = true;
        setTimeout(() => {
          setFlipped([]);
          lockRef.current = false;
        }, 800);
      }
    }
  };

  return (
    <section id="play" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">Med Match</h2>
        <div className="mt-2 w-12 h-1 bg-primary rounded-full" />
        <p className="mt-4 text-gray-500">
          Match medical terms with their definitions. Flip two cards at a time.
        </p>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-400">
            Moves: <span className="text-gray-700 font-semibold">{moves}</span>
          </p>
          <button
            onClick={startGame}
            className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors"
          >
            {gameState === "idle" ? "Start Game" : "New Game"}
          </button>
        </div>

        {gameState === "won" && (
          <div className="mt-4 rounded-lg bg-teal/10 border border-teal/20 p-4 text-center">
            <p className="text-teal font-semibold">
              All matched in {moves} moves!
            </p>
          </div>
        )}

        <div className="mt-6 grid grid-cols-4 gap-3">
          {cards.map((card) => {
            const isFlipped = flipped.includes(card.id);
            const isMatched = matched.has(card.id);
            const showFace = isFlipped || isMatched;

            return (
              <button
                key={card.id}
                onClick={() => handleFlip(card.id)}
                disabled={gameState !== "playing"}
                className={`
                  relative aspect-[3/4] rounded-xl border-2 text-sm font-medium
                  transition-all duration-300 cursor-pointer p-2
                  flex items-center justify-center text-center
                  ${
                    isMatched
                      ? "bg-teal/10 border-teal/30 text-teal"
                      : showFace
                        ? card.type === "term"
                          ? "bg-primary/10 border-primary/30 text-primary-dark"
                          : "bg-amber-50 border-amber-200 text-amber-800"
                        : "bg-white border-surface-border hover:border-primary/30 hover:shadow-sm text-gray-300"
                  }
                `}
              >
                {showFace ? (
                  <span className="text-xs sm:text-sm leading-tight">
                    {card.text}
                  </span>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
