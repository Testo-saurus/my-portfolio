type Project = {
  techStack: string[];
  year: number | string;
  duration: string;
  aiPercentage: number;
  whyBuilt: string;
  howBuilt: string;
  otherInfo: string;
  githubLink: string;
  websiteLink: string;
};

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="border-t border-gray-100 pt-6 mt-6 space-y-6">
      {/* Tech Stack */}
      <div>
        <h4 className="font-semibold mb-3 text-sm text-gray-500 uppercase tracking-wide">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Year & Duration */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide">
            Year & Duration
          </h4>
          <p className="text-gray-700">
            {project.year} • {project.duration}
          </p>
        </div>

        {/* AI Percentage Bar */}
        <div>
          <h4 className="font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide">
            AI Generated Code
          </h4>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${project.aiPercentage}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {project.aiPercentage}%
            </span>
          </div>
        </div>
      </div>

      {/* Why & How */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide">
            Why I Built This
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.whyBuilt}
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide">
            How I Built This
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.howBuilt}
          </p>
        </div>
      </div>

      {/* Other Info */}
      <div>
        <h4 className="font-semibold mb-2 text-sm text-gray-500 uppercase tracking-wide">
          Other Information
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          {project.otherInfo}
        </p>
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
        >
          📱 GitHub
        </a>
        <a
          href={project.websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          🌐 Website
        </a>
      </div>
    </div>
  );
}
