import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Github, Linkedin } from "lucide-react";
import ProjectCarousel from "./components/ui/ProjectCarousel";
import Footer from "./components/ui/Footer";

const projects = [
  {
    title: "Newsly",
    images: [
      "images/newsly/1.jpg",
      "images/newsly/2.jpg",
      "images/newsly/3.jpg",
      "images/newsly/4.jpg",
      "images/newsly/5.jpg",
    ],
    description:
      "A personalized news app with category-based browsing, search, and Firebase Auth. Built using Flutter and BLoC with clean architecture.",
    technologies:
      "Flutter, Dart, Firebase Auth, NewsAPI, Bloc, REST API, Clean Architecture",
    role: "Solo Developer",
    link: "https://github.com/abodikheder11/newsApp",
  },
  {
    title: "SwiftCart",
    images: [
      "images/swiftCart/1.jpg",
      "images/swiftCart/1bb.jpg",
      "images/swiftCart/3a.jpg",
      "images/swiftCart/3b.jpg",
      "images/swiftCart/5.jpg",
      "images/swiftCart/5a.jpg",
      "images/swiftCart/6.jpg",
      "images/swiftCart/8.jpg",
      "images/swiftCart/9.jpg",
      "images/swiftCart/11.jpg",
    ],
    description:
      "A fashion-focused e-commerce app with responsive UI/UX and scalable architecture.",
    technologies: "Flutter, BLoC, Clean Architecture",
    role: "Intern Developer",
    link: "#",
  },
  {
    title: "SkyCast",
    images: [
      "images/skyCast/1.png",
      "images/skyCast/2.jpg",
      "images/skyCast/3.jpg",
    ],
    description:
      "A dynamic weather app with real-time updates and delightful UI. Built in React Native.",
    technologies:
      "React Native, Expo, WeatherAPI, React Navigation, React Hooks",
    role: "Solo Developer",
    link: "https://github.com/abodikheder11/ReactNativeWeatherApp",
  },
  {
    title: "Mr. Taxi",
    images: [
      "images/mrTaxi/1.jpg",
      "images/mrTaxi/2.jpg",
      "images/mrTaxi/3.jpg",
      "images/mrTaxi/4.jpg",
      "images/mrTaxi/5.jpg",
      "images/mrTaxi/6.jpg",
    ],
    description:
      "A Flutter-based ride-hailing app with real-time tracking, dynamic pricing, and Firebase Auth.",
    technologies: "Flutter, Firebase Auth, Geolocator, Google Maps, Polyline",
    role: "Solo Developer",
    link: "https://github.com/abodikheder11/mr.taxi",
  },
  {
    title: "Wave",
    description:
      "A real-time cross-platform chat app with Socket.io and JWT-based auth.",
    technologies: "Flutter, Socket.io, BLoC, JWT, Material Design",
    role: "Frontend Developer",
    link: "#",
  },
];

export default function Portfolio() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold">Abdullah Kheder</h1>
        <p className="text-lg text-gray-600 mt-2">Flutter Developer</p>
        <p className="mt-4 max-w-xl mx-auto">
          I&apos;m a Flutter developer from Syria, currently based in Lebanon,
          with a passion for mobile development using Flutter and React Native.
          I love turning ideas into functional experiences through code.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Button asChild variant="outline">
            <a href="https://github.com/abodikheder11" target="_blank">
              <Github className="mr-2" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://www.linkedin.com/in/abdullah-kheder-8497822a6/"
              target="_blank"
            >
              <Linkedin className="mr-2" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-2 text-sm text-gray-700">
                  {project.description}
                </p>
                <p className="mb-2 text-xs text-gray-500">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                <p className="mb-2 text-xs text-gray-500">
                  <strong>Role:</strong> {project.role}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-blue-500 text-sm"
                  >
                    View Project
                  </a>
                )}
                <ProjectCarousel images={project.images} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="flex flex-wrap gap-3 text-sm text-gray-700">
          {[
            "Flutter",
            "React Native",
            "RESTful APIs",
            "Bloc",
            "Clean Architecture",
            "Firebase",
            "Google Cloud",
            "Injection",
          ].map((skill) => (
            <li key={skill} className="bg-gray-100 px-3 py-1 rounded-full">
              {skill}
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
