import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Settings2,
    title: "Customizable Layouts",
    description:
      "Design your space with drag-and-drop simplicity—create grids, lists, or galleries in seconds.",
  },
  {
    icon: Blocks,
    title: "Interactive Widgets",
    description:
      "Embed polls, quizzes, or forms to keep your audience engaged.",
  },
  {
    icon: Bot,
    title: "AI-Powered Tools",
    description:
      "Generate summaries, auto-format content, or translate into multiple languages seamlessly.",
  },
  {
    icon: Film,
    title: "Media Integrations",
    description:
      "Connect with Spotify, Instagram, or your own media library for dynamic visuals and sound.",
  },
  {
    icon: ChartPie,
    title: "Advanced Analytics",
    description:
      "Track engagement, clicks, and user activity with intuitive charts and reports.",
  },
  {
    icon: MessageCircle,
    title: "Seamless Collaboration",
    description:
      "Comment, tag, and assign tasks directly within your documents.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 w-full max-w-4xl mx-auto px-6">
      {/* Large h1 with gradient */}
      <div className="mb-20">
        <h1 className="text-7xl md:text-8xl font-thin text-center bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
          Currently Learning
        </h1>
      </div>

      {/* Clean stack with visible icons */}
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={feature.title} className="w-full">
            <div className="flex justify-between items-start py-8">
              <div className="pr-8">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 mt-2">{feature.description}</p>
              </div>
              {/* Visible icon with gradient using SVG props */}
              <feature.icon
                className="w-10 h-10 flex-shrink-0"
                style={{
                  stroke: "url(#gradient)",
                  strokeWidth: 1.5,
                }}
              />
            </div>

            {/* SVG gradient definition for icons */}
            <svg className="hidden" aria-hidden="true">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e5e5e5" /> {/* neutral-200 */}
                  <stop offset="50%" stopColor="#a3a3a3" /> {/* neutral-400 */}
                  <stop offset="100%" stopColor="#525252" /> {/* neutral-600 */}
                </linearGradient>
              </defs>
            </svg>

            {index < features.length - 1 && (
              <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700/50 to-transparent"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
