import { Dumbbell, Footprints } from "lucide-react";

export interface StatItem {
  label: string;
  value: string;
  target: string;
  link?: string;
  icon: React.ElementType;
}

export const athleteStats: {
  category: string;
  description: string;
  stats: StatItem[];
}[] = [
  {
    category: "Running",
    description:
      "Passionate about distance running and improving my 5K and 10K PB times.",
    stats: [
      {
        label: "5K PB",
        value: "21:06",
        target: "Sub 20:00",
        link: "https://www.strava.com/activities/8138290131",
        icon: Footprints,
      },
      {
        label: "10K PB",
        value: "49:30",
        target: "Sub 45:00",
        link: "https://www.strava.com/activities/8007364489",
        icon: Footprints,
      },
      {
        label: "15K PB",
        value: "1:21:12",
        target: "Sub 1:10:00",
        link: "https://www.strava.com/activities/7709684019",
        icon: Footprints,
      },
      {
        label: "Half Marathon",
        value: "2:00:23",
        target: "Sub 1:45:00",
        link: "https://www.strava.com/activities/7791468613",
        icon: Footprints,
      },
    ],
  },
  {
    category: "Strength",
    description:
      "Balancing strength training and muscle building alongside running.",
    stats: [
      {
        label: "Bench Press",
        value: "70kg",
        target: "100kg",
        icon: Dumbbell,
      },
      {
        label: "Barbell Squat",
        value: "100kg",
        target: "140kg",
        icon: Dumbbell,
      },
      {
        label: "Pull Ups",
        value: "5 reps",
        target: "10 reps",
        icon: Dumbbell,
      },
    ],
  },
];
