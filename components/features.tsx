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
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-4 xs:px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="w-full mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-2">
        <h1
          className="
            text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
            font-thin text-center
            bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600
            bg-clip-text text-transparent
            whitespace-nowrap overflow-x-auto
            tracking-tight
            pb-1
          "
        >
          Currently Learning
        </h1>
      </div>

      <div className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl px-2 sm:px-4">
        <div className="space-y-3 sm:space-y-4">
          {features.map((feature, index) => (
            <div key={feature.title} className="w-full">
              <div
                className="
                flex flex-col sm:flex-row sm:justify-between sm:items-center
                py-6 sm:py-8 md:py-10 lg:py-12
                px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10
                rounded-xl sm:rounded-2xl
                gap-4 sm:gap-0
              "
              >
                <div className="sm:pr-8 md:pr-10 lg:pr-12 order-2 sm:order-1">
                  <h3
                    className="
                    text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl
                    font-semibold
                    bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600
                    bg-clip-text text-transparent
                    mb-2 sm:mb-3 md:mb-4
                  "
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="
                    text-neutral-400
                    text-sm xs:text-base sm:text-lg md:text-xl
                    leading-relaxed
                  "
                  >
                    {feature.description}
                  </p>
                </div>

                <div className="relative order-1 sm:order-2 mb-4 sm:mb-0">
                  <feature.icon
                    className="
                      w-10 h-10 xs:w-12 xs:h-12
                      sm:w-14 sm:h-14
                      md:w-16 md:h-16
                      flex-shrink-0
                    "
                    style={{
                      stroke: "url(#gradient)",
                      strokeWidth: 1.5,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-neutral-200/10 via-neutral-400/10 to-neutral-600/10 blur-xl rounded-full"></div>
                </div>
              </div>

              <svg className="hidden" aria-hidden="true">
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#e5e5e5" /> {/* neutral-200 */}
                    <stop offset="50%" stopColor="#a3a3a3" />{" "}
                    {/* neutral-400 */}
                    <stop offset="100%" stopColor="#525252" />{" "}
                    {/* neutral-600 */}
                  </linearGradient>
                </defs>
              </svg>

              {index < features.length - 1 && (
                <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700/20 to-transparent my-4 sm:my-5 md:my-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
