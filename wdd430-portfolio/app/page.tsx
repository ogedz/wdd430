import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'Your Project 1',
    description: 'Accurate one-sentence description of what it does.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/your-username/project1'
  },
  {
    title: 'Your Project 2',
    description: 'Accurate one-sentence description of what it does.',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/your-username/project2'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}