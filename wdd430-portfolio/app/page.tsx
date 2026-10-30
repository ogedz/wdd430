import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'EduTrack CBT',
    description: 'A multi-tenant school management and computer-based testing platform with exam proctoring and Paystack fee payments.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript'],
    link: 'https://github.com/ogedz'
  },
  {
    title: 'Lifox Shield',
    description: 'A multi-layer antivirus SaaS featuring six scan engines and desktop agents for Windows, macOS, Linux, and Android.',
    technologies: ['Python', 'React', 'Node.js', 'Security Tooling'],
    link: 'https://github.com/ogedz'
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