export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStepData[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, audience and goals before any design or code begins.",
  },
  {
    number: "02",
    title: "Strategize",
    description:
      "We map the right approach — structure, technology and priorities — based on what you actually need.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We design clear, considered interfaces focused on usability as much as visual quality.",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We build with modern, maintainable code so your product performs well and scales cleanly.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We test thoroughly and ship carefully, making sure everything works before it goes live.",
  },
  {
    number: "06",
    title: "Grow",
    description:
      "We stay involved after launch, supporting updates, marketing and continued improvement.",
  },
];
