interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
      <h3 className="text-xl font-bold mb-3 text-blue-600">{title}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}