import { ResumeData } from "@/pages/ResumeBuilder";

interface ResumePreviewProps {
  data: ResumeData;
  template: string;
}

const ResumePreview = ({ data, template }: ResumePreviewProps) => {
  // Choose layout based on template
  let TemplateComponent;
  
  switch (template) {
    case "professional":
      TemplateComponent = ProfessionalTemplate;
      break;
    case "modern":
      TemplateComponent = ModernTemplate;
      break;
    case "creative":
      TemplateComponent = CreativeTemplate;
      break;
    case "executive":
      TemplateComponent = ExecutiveTemplate;
      break;
    case "simple":
      TemplateComponent = SimpleTemplate;
      break;
    case "technical":
      TemplateComponent = TechnicalTemplate;
      break;
    default:
      TemplateComponent = ProfessionalTemplate;
  }

  return (
    <div className="resume-preview">
      <TemplateComponent data={data} />
    </div>
  );
};

const ProfessionalTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="font-sans text-left text-sm leading-snug">
      {/* Header */}
      <div className="mb-6 text-center">
        {data.personal.name && (
          <h1 className="text-2xl font-bold text-resume-primary mb-1">{data.personal.name}</h1>
        )}
        {data.personal.title && (
          <p className="text-lg text-gray-700 mb-2">{data.personal.title}</p>
        )}
        <div className="flex flex-wrap justify-center gap-x-4 text-sm text-gray-600">
          {data.personal.email && <p>{data.personal.email}</p>}
          {data.personal.phone && <p>{data.personal.phone}</p>}
          {data.personal.location && <p>{data.personal.location}</p>}
          {data.personal.website && <p>{data.personal.website}</p>}
          {data.personal.linkedin && <p>{data.personal.linkedin}</p>}
        </div>
      </div>

      {/* Summary */}
      {data.personal.summary && (
        <div className="resume-preview-section">
          <h2 className="text-lg font-semibold text-resume-primary mb-2">Professional Summary</h2>
          <p className="text-gray-700">{data.personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.some(exp => exp.company || exp.position) && (
        <div className="resume-preview-section">
          <h2 className="text-lg font-semibold text-resume-primary mb-3">Experience</h2>
          {data.experience.map((exp, index) => (
            (exp.company || exp.position) && (
              <div key={exp.id} className={index < data.experience.length - 1 ? "mb-4" : ""}>
                <div className="flex justify-between items-start">
                  <div>
                    {exp.position && <h3 className="font-medium">{exp.position}</h3>}
                    {exp.company && <p className="text-gray-700">{exp.company}</p>}
                  </div>
                  <div className="text-right text-gray-600 text-sm">
                    {(exp.startDate || exp.endDate) && (
                      <p>{exp.startDate} {exp.startDate && exp.endDate && "–"} {exp.endDate}</p>
                    )}
                    {exp.location && <p>{exp.location}</p>}
                  </div>
                </div>
                {exp.description && <p className="mt-1 text-gray-700">{exp.description}</p>}
                {exp.highlights.some(h => h) && (
                  <ul className="mt-1 ml-4 list-disc text-gray-700">
                    {exp.highlights.map((highlight, idx) => 
                      highlight && <li key={idx}>{highlight}</li>
                    )}
                  </ul>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.some(edu => edu.institution || edu.degree) && (
        <div className="resume-preview-section">
          <h2 className="text-lg font-semibold text-resume-primary mb-3">Education</h2>
          {data.education.map((edu, index) => (
            (edu.institution || edu.degree) && (
              <div key={edu.id} className={index < data.education.length - 1 ? "mb-3" : ""}>
                <div className="flex justify-between items-start">
                  <div>
                    {edu.institution && <h3 className="font-medium">{edu.institution}</h3>}
                    {(edu.degree || edu.fieldOfStudy) && (
                      <p className="text-gray-700">
                        {edu.degree}{edu.degree && edu.fieldOfStudy && ","} {edu.fieldOfStudy}
                      </p>
                    )}
                  </div>
                  <div className="text-right text-gray-600 text-sm">
                    {(edu.startDate || edu.endDate) && (
                      <p>{edu.startDate} {edu.startDate && edu.endDate && "–"} {edu.endDate}</p>
                    )}
                    {edu.location && <p>{edu.location}</p>}
                  </div>
                </div>
                {edu.description && <p className="mt-1 text-gray-700">{edu.description}</p>}
              </div>
            )
          ))}
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || 
       data.skills.soft.length > 0 || 
       data.skills.languages.length > 0 || 
       data.skills.certifications.length > 0) && (
        <div className="resume-preview-section">
          <h2 className="text-lg font-semibold text-resume-primary mb-2">Skills & Qualifications</h2>
          
          {data.skills.technical.length > 0 && (
            <div className="mb-2">
              <h3 className="font-medium">Technical Skills</h3>
              <p className="text-gray-700">{data.skills.technical.join(", ")}</p>
            </div>
          )}
          
          {data.skills.soft.length > 0 && (
            <div className="mb-2">
              <h3 className="font-medium">Soft Skills</h3>
              <p className="text-gray-700">{data.skills.soft.join(", ")}</p>
            </div>
          )}
          
          {data.skills.languages.length > 0 && (
            <div className="mb-2">
              <h3 className="font-medium">Languages</h3>
              <p className="text-gray-700">{data.skills.languages.join(", ")}</p>
            </div>
          )}
          
          {data.skills.certifications.length > 0 && (
            <div>
              <h3 className="font-medium">Certifications</h3>
              <p className="text-gray-700">{data.skills.certifications.join(", ")}</p>
            </div>
          )}
        </div>
      )}

      {/* Projects */}
      {data.projects.some(proj => proj.name) && (
        <div className="resume-preview-section">
          <h2 className="text-lg font-semibold text-resume-primary mb-3">Projects</h2>
          {data.projects.map((proj, index) => (
            proj.name && (
              <div key={proj.id} className={index < data.projects.length - 1 ? "mb-4" : ""}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">
                      {proj.name}
                      {proj.url && (
                        <span className="font-normal text-sm text-resume-primary ml-2">
                          ({proj.url})
                        </span>
                      )}
                    </h3>
                  </div>
                  {(proj.startDate || proj.endDate) && (
                    <p className="text-right text-gray-600 text-sm">
                      {proj.startDate} {proj.startDate && proj.endDate && "–"} {proj.endDate}
                    </p>
                  )}
                </div>
                {proj.description && <p className="mt-1 text-gray-700">{proj.description}</p>}
                {proj.highlights.some(h => h) && (
                  <ul className="mt-1 ml-4 list-disc text-gray-700">
                    {proj.highlights.map((highlight, idx) => 
                      highlight && <li key={idx}>{highlight}</li>
                    )}
                  </ul>
                )}
              </div>
            )
          ))}
        </div>
      )}

      <div className="mt-6 text-xs text-center text-gray-400">
        Created with ResumeAI
      </div>
    </div>
  );
};

const ModernTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="font-sans text-left text-sm leading-snug">
      {/* Header - Modern style with colored background */}
      <div className="bg-resume-primary text-white p-6 rounded-t-lg mb-6">
        {data.personal.name && (
          <h1 className="text-2xl font-bold mb-1">{data.personal.name}</h1>
        )}
        {data.personal.title && (
          <p className="text-lg opacity-90 mb-3">{data.personal.title}</p>
        )}
        <div className="flex flex-wrap gap-y-1 gap-x-4 text-sm opacity-80">
          {data.personal.email && <p>{data.personal.email}</p>}
          {data.personal.phone && <p>{data.personal.phone}</p>}
          {data.personal.location && <p>{data.personal.location}</p>}
          {data.personal.website && <p>{data.personal.website}</p>}
          {data.personal.linkedin && <p>{data.personal.linkedin}</p>}
        </div>
      </div>

      <div className="px-6">
        {/* Summary */}
        {data.personal.summary && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-resume-primary border-b border-resume-primary pb-1 mb-3">
              About Me
            </h2>
            <p className="text-gray-700">{data.personal.summary}</p>
          </div>
        )}

        {/* Two column layout for skills and experience/education */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left column - Skills */}
          <div className="md:w-1/3 space-y-6">
            {/* Skills */}
            {(data.skills.technical.length > 0 || 
            data.skills.soft.length > 0 || 
            data.skills.languages.length > 0 || 
            data.skills.certifications.length > 0) && (
              <div>
                <h2 className="text-lg font-bold text-resume-primary border-b border-resume-primary pb-1 mb-3">
                  Skills & Qualifications
                </h2>
                
                {data.skills.technical.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-medium text-resume-primary">Technical Skills</h3>
                    <ul className="mt-1 list-none">
                      {data.skills.technical.map((skill, i) => (
                        <li key={i} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700 mr-2 mb-2">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {data.skills.soft.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-medium text-resume-primary">Soft Skills</h3>
                    <ul className="mt-1 list-none">
                      {data.skills.soft.map((skill, i) => (
                        <li key={i} className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700 mr-2 mb-2">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {data.skills.languages.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-medium text-resume-primary">Languages</h3>
                    <ul className="mt-1">
                      {data.skills.languages.map((lang, i) => (
                        <li key={i} className="text-gray-700">{lang}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {data.skills.certifications.length > 0 && (
                  <div>
                    <h3 className="font-medium text-resume-primary">Certifications</h3>
                    <ul className="mt-1">
                      {data.skills.certifications.map((cert, i) => (
                        <li key={i} className="text-gray-700">{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Education */}
            {data.education.some(edu => edu.institution || edu.degree) && (
              <div>
                <h2 className="text-lg font-bold text-resume-primary border-b border-resume-primary pb-1 mb-3">
                  Education
                </h2>
                {data.education.map((edu, index) => (
                  (edu.institution || edu.degree) && (
                    <div key={edu.id} className={index < data.education.length - 1 ? "mb-4" : ""}>
                      {edu.institution && <h3 className="font-medium">{edu.institution}</h3>}
                      {(edu.degree || edu.fieldOfStudy) && (
                        <p className="text-gray-700">
                          {edu.degree}{edu.degree && edu.fieldOfStudy && ","} {edu.fieldOfStudy}
                        </p>
                      )}
                      {(edu.startDate || edu.endDate) && (
                        <p className="text-gray-600 text-sm">
                          {edu.startDate} {edu.startDate && edu.endDate && "–"} {edu.endDate}
                        </p>
                      )}
                      {edu.location && <p className="text-gray-600 text-sm">{edu.location}</p>}
                      {edu.description && <p className="mt-1 text-gray-700 text-sm">{edu.description}</p>}
                    </div>
                  )
                ))}
              </div>
            )}
          </div>

          {/* Right column - Experience and Projects */}
          <div className="md:w-2/3 space-y-6">
            {/* Experience */}
            {data.experience.some(exp => exp.company || exp.position) && (
              <div>
                <h2 className="text-lg font-bold text-resume-primary border-b border-resume-primary pb-1 mb-3">
                  Experience
                </h2>
                {data.experience.map((exp, index) => (
                  (exp.company || exp.position) && (
                    <div key={exp.id} className={index < data.experience.length - 1 ? "mb-5" : ""}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          {exp.position && <h3 className="font-semibold">{exp.position}</h3>}
                          {exp.company && <p className="text-resume-primary font-medium">{exp.company}</p>}
                        </div>
                        <div className="text-gray-600 text-sm md:text-right">
                          {(exp.startDate || exp.endDate) && (
                            <p>{exp.startDate} {exp.startDate && exp.endDate && "–"} {exp.endDate}</p>
                          )}
                          {exp.location && <p>{exp.location}</p>}
                        </div>
                      </div>
                      {exp.description && <p className="mt-1 text-gray-700">{exp.description}</p>}
                      {exp.highlights.some(h => h) && (
                        <ul className="mt-2 ml-4 list-disc text-gray-700">
                          {exp.highlights.map((highlight, idx) => 
                            highlight && <li key={idx} className="mb-1">{highlight}</li>
                          )}
                        </ul>
                      )}
                    </div>
                  )
                ))}
              </div>
            )}

            {/* Projects */}
            {data.projects.some(proj => proj.name) && (
              <div>
                <h2 className="text-lg font-bold text-resume-primary border-b border-resume-primary pb-1 mb-3">
                  Projects
                </h2>
                {data.projects.map((proj, index) => (
                  proj.name && (
                    <div key={proj.id} className={index < data.projects.length - 1 ? "mb-5" : ""}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                        <div>
                          <h3 className="font-semibold">
                            {proj.name}
                            {proj.url && (
                              <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-sm text-resume-primary ml-2 hover:underline">
                                (View Project)
                              </a>
                            )}
                          </h3>
                        </div>
                        {(proj.startDate || proj.endDate) && (
                          <p className="text-gray-600 text-sm md:text-right">
                            {proj.startDate} {proj.startDate && proj.endDate && "–"} {proj.endDate}
                          </p>
                        )}
                      </div>
                      {proj.description && <p className="mt-1 text-gray-700">{proj.description}</p>}
                      {proj.highlights.some(h => h) && (
                        <ul className="mt-2 ml-4 list-disc text-gray-700">
                          {proj.highlights.map((highlight, idx) => 
                            highlight && <li key={idx} className="mb-1">{highlight}</li>
                          )}
                        </ul>
                      )}
                    </div>
                  )
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 text-xs text-center text-gray-400">
        Created with ResumeAI
      </div>
    </div>
  );
};

// New Creative Template
const CreativeTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="font-sans text-left text-sm leading-snug">
      {/* Sidebar with personal info and skills */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 bg-resume-primary/10 p-6 rounded-l-lg">
          {/* Header */}
          <div className="mb-6 text-center">
            {data.personal.name && (
              <h1 className="text-2xl font-bold text-resume-primary mb-1">{data.personal.name}</h1>
            )}
            {data.personal.title && (
              <p className="text-lg text-gray-700 mb-2">{data.personal.title}</p>
            )}
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-resume-primary mb-3 border-b border-resume-primary/30 pb-1">Contact</h2>
            <div className="space-y-2 text-sm">
              {data.personal.email && <p className="flex items-center"><span className="mr-2 font-medium">Email:</span> {data.personal.email}</p>}
              {data.personal.phone && <p className="flex items-center"><span className="mr-2 font-medium">Phone:</span> {data.personal.phone}</p>}
              {data.personal.location && <p className="flex items-center"><span className="mr-2 font-medium">Location:</span> {data.personal.location}</p>}
              {data.personal.website && <p className="flex items-center"><span className="mr-2 font-medium">Website:</span> {data.personal.website}</p>}
              {data.personal.linkedin && <p className="flex items-center"><span className="mr-2 font-medium">LinkedIn:</span> {data.personal.linkedin}</p>}
            </div>
          </div>

          {/* Skills */}
          {(data.skills.technical.length > 0 || 
            data.skills.soft.length > 0 || 
            data.skills.languages.length > 0 || 
            data.skills.certifications.length > 0) && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-resume-primary mb-3 border-b border-resume-primary/30 pb-1">Skills</h2>
              
              {data.skills.technical.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-medium text-gray-700">Technical</h3>
                  <div className="flex flex-wrap mt-1 gap-2">
                    {data.skills.technical.map((skill, i) => (
                      <span key={i} className="inline-block bg-resume-primary/20 rounded-full px-3 py-1 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {data.skills.soft.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-medium text-gray-700">Soft Skills</h3>
                  <div className="flex flex-wrap mt-1 gap-2">
                    {data.skills.soft.map((skill, i) => (
                      <span key={i} className="inline-block bg-resume-primary/20 rounded-full px-3 py-1 text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {data.skills.languages.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-medium text-gray-700">Languages</h3>
                  <ul className="mt-1">
                    {data.skills.languages.map((lang, i) => (
                      <li key={i} className="text-gray-700">{lang}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {data.skills.certifications.length > 0 && (
                <div>
                  <h3 className="font-medium text-gray-700">Certifications</h3>
                  <ul className="mt-1">
                    {data.skills.certifications.map((cert, i) => (
                      <li key={i} className="text-gray-700">{cert}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Education */}
          {data.education.some(edu => edu.institution || edu.degree) && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-resume-primary mb-3 border-b border-resume-primary/30 pb-1">Education</h2>
              {data.education.map((edu, index) => (
                (edu.institution || edu.degree) && (
                  <div key={edu.id} className={index < data.education.length - 1 ? "mb-3" : ""}>
                    {edu.institution && <h3 className="font-medium">{edu.institution}</h3>}
                    {(edu.degree || edu.fieldOfStudy) && (
                      <p className="text-gray-700">
                        {edu.degree}{edu.degree && edu.fieldOfStudy && ","} {edu.fieldOfStudy}
                      </p>
                    )}
                    {(edu.startDate || edu.endDate) && (
                      <p className="text-gray-600 text-sm">
                        {edu.startDate} {edu.startDate && edu.endDate && "–"} {edu.endDate}
                      </p>
                    )}
                    {edu.location && <p className="text-gray-600 text-sm">{edu.location}</p>}
                    {edu.description && <p className="mt-1 text-gray-700 text-sm">{edu.description}</p>}
                  </div>
                )
              ))}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="md:w-3/5 p-6">
          {/* Summary */}
          {data.personal.summary && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-resume-primary mb-2 border-b border-resume-primary/30 pb-1">Profile</h2>
              <p className="text-gray-700">{data.personal.summary}</p>
            </div>
          )}

          {/* Experience */}
          {data.experience.some(exp => exp.company || exp.position) && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-resume-primary mb-3 border-b border-resume-primary/30 pb-1">Experience</h2>
              {data.experience.map((exp, index) => (
                (exp.company || exp.position) && (
                  <div key={exp.id} className={index < data.experience.length - 1 ? "mb-4" : ""}>
                    <div>
                      {exp.position && <h3 className="font-semibold">{exp.position}</h3>}
                      {exp.company && <p className="text-resume-primary font-medium">{exp.company}</p>}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {(exp.startDate || exp.endDate) && (
                        <p>{exp.startDate} {exp.startDate && exp.endDate && "–"} {exp.endDate}</p>
                      )}
                      {exp.location && <p>{exp.location}</p>}
                    </div>
                    {exp.description && <p className="mt-1 text-gray-700">{exp.description}</p>}
                    {exp.highlights.some(h => h) && (
                      <ul className="mt-2 ml-4 list-disc text-gray-700">
                        {exp.highlights.map((highlight, idx) => 
                          highlight && <li key={idx} className="mb-1">{highlight}</li>
                        )}
                      </ul>
                    )}
                  </div>
                )
              ))}
            </div>
          )}

          {/* Projects */}
          {data.projects.some(proj => proj.name) && (
            <div>
              <h2 className="text-lg font-semibold text-resume-primary mb-3 border-b border-resume-primary/30 pb-1">Projects</h2>
              {data.projects.map((proj, index) => (
                proj.name && (
                  <div key={proj.id} className={index < data.projects.length - 1 ? "mb-4" : ""}>
                    <div>
                      <h3 className="font-semibold">
                        {proj.name}
                        {proj.url && (
                          <a href={proj.url} target="_blank" rel="noopener noreferrer" className="text-sm text-resume-primary ml-2 hover:underline">
                            (View Project)
                          </a>
                        )}
                      </h3>
                    </div>
                    {(proj.startDate || proj.endDate) && (
                      <p className="text-gray-600 text-sm">
                        {proj.startDate} {proj.startDate && proj.endDate && "–"} {proj.endDate}
                      </p>
                    )}
                    {proj.description && <p className="mt-1 text-gray-700">{proj.description}</p>}
                    {proj.highlights.some(h => h) && (
                      <ul className="mt-2 ml-4 list-disc text-gray-700">
                        {proj.highlights.map((highlight, idx) => 
                          highlight && <li key={idx} className="mb-1">{highlight}</li>
                        )}
                      </ul>
                    )}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 text-xs text-center text-gray-400">
        Created with ProFile AI
      </div>
    </div>
  );
};

// New Executive Template
const ExecutiveTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="font-serif text-left text-sm leading-snug">
      {/* Header with elegant styling */}
      <div className="text-center mb-8 pt-6 border-t-4 border-resume-primary">
        {data.personal.name && (
          <h1 className="text-3xl font-bold text-gray-800 mb-1 tracking-wide uppercase">{data.personal.name}</h1>
        )}
        {data.personal.title && (
          <p className="text-lg text-resume-primary mb-2">{data.personal.title}</p>
        )}
        <div className="flex flex-wrap justify-center gap-x-4 text-sm text-gray-600">
          {data.personal.email && <p>{data.personal.email}</p>}
          {data.personal.phone && <p>{data.personal.phone}</p>}
          {data.personal.location && <p>{data.personal.location}</p>}
          {data.personal.website && <p>{data.personal.website}</p>}
          {data.personal.linkedin && <p>{data.personal.linkedin}</p>}
        </div>
      </div>

      {/* Summary */}
      {data.personal.summary && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 uppercase tracking-wider border-b border-gray-300 pb-1">Executive Summary</h2>
          <p className="text-gray-700">{data.personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.some(exp => exp.company || exp.position) && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 uppercase tracking-wider border-b border-gray-300 pb-1">Professional Experience</h2>
          {data.experience.map((exp, index) => (
            (exp.company || exp.position) && (
              <div key={exp.id} className={index < data.experience.length - 1 ? "mb-6" : ""}>
                <div className="flex justify-between items-start">
                  <div>
                    {exp.position && <h3 className="font-semibold text-resume-primary">{exp.position}</h3>}
                    {exp.company && <p className="font-medium text-gray-800">{exp.company}</p>}
                  </div>
                  <div className="text-right text-gray-600 text-sm">
                    {(exp.startDate || exp.endDate) && (
                      <p>{exp.startDate} {exp.startDate && exp.endDate && "–"} {exp.endDate}</p>
                    )}
                    {exp.location && <p>{exp.location}</p>}
                  </div>
                </div>
                {exp.description && <p className="mt-2 text-gray-700">{exp.description}</p>}
                {exp.highlights.some(h => h) && (
                  <ul className="mt-2 space-y-2 text-gray-700">
                    {exp.highlights.map((highlight, idx) => 
                      highlight && (
                        <li key={idx} className="flex items-start">
                          <span className="text-resume-primary mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.some(edu => edu.institution || edu.degree) && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 uppercase tracking-wider border-b border-gray-300 pb-1">Education</h2>
          {data.education.map((edu, index) => (
            (edu.institution || edu.degree) && (
              <div key={edu.id} className={index < data.education.length - 1 ? "mb-3" : ""}>
                <div className="flex justify-between items-start">
                  <div>
                    {edu.institution && <h3 className="font-medium">{edu.institution}</h3>}
                    {(edu.degree || edu.fieldOfStudy) && (
                      <p className="text-gray-700">
                        {edu.degree}{edu.degree && edu.fieldOfStudy && ","} {edu.fieldOfStudy}
                      </p>
                    )}
                  </div>
                  <div className="text-right text-gray-600 text-sm">
                    {(edu.startDate || edu.endDate) && (
                      <p>{edu.startDate} {edu.startDate && edu.endDate && "–"} {edu.endDate}</p>
                    )}
                    {edu.location && <p>{edu.location}</p>}
                  </div>
                </div>
                {edu.description && <p className="mt-1 text-gray-700">{edu.description}</p>}
              </div>
            )
          ))}
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || 
       data.skills.soft.length > 0 || 
       data.skills.languages.length > 0 || 
       data.skills.certifications.length > 0) && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-2 uppercase tracking-wider border-b border-gray-300 pb-1">Core Competencies</h2>
          <div className="grid grid-cols-2 gap-4 mt-3">
            {data.skills.technical.length > 0 && (
              <div>
                <h3 className="font-medium text-resume-primary mb-1">Technical Expertise</h3>
                <p className="text-gray-700">{data.skills.technical.join(" • ")}</p>
              </div>
            )}
            
            {data.skills.soft.length > 0 && (
              <div>
                <h3 className="font-medium text-resume-primary mb-1">Leadership Skills</h3>
                <p className="text-gray-700">{data.skills.soft.join(" • ")}</p>
              </div>
            )}
            
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="font-medium text-resume-primary mb-1">Languages</h3>
                <p className="text-gray-700">{data.skills.languages.join(" • ")}</p>
              </div>
            )}
            
            {data.skills.certifications.length > 0 && (
              <div>
                <h3 className="font-medium text-resume-primary mb-1">Certifications</h3>
                <p className="text-gray-700">{data.skills.certifications.join(" • ")}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Projects */}
      {data.projects.some(proj => proj.name) && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 uppercase tracking-wider border-b border-gray-300 pb-1">Key Projects</h2>
          {data.projects.map((proj, index) => (
            proj.name && (
              <div key={proj.id} className={index < data.projects.length - 1 ? "mb-4" : ""}>
                <div>
                  <h3 className="font-semibold text-resume-primary">
                    {proj.name}
                    {proj.url && (
                      <span className="font-normal text-sm ml-2">
                        ({proj.url})
                      </span>
                    )}
                  </h3>
                </div>
                {(proj.startDate || proj.endDate) && (
                  <p className="text-gray-600 text-sm">
                    {proj.startDate} {proj.startDate && proj.endDate && "–"} {proj.endDate}
                  </p>
                )}
                {proj.description && <p className="mt-1 text-gray-700">{proj.description}</p>}
                {proj.highlights.some(h => h) && (
                  <ul className="mt-2 space-y-1 text-gray-700">
                    {proj.highlights.map((highlight, idx) => 
                      highlight && (
                        <li key={idx} className="flex items-start">
                          <span className="text-resume-primary mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            )
          ))}
        </div>
      )}

      <div className="mt-6 text-xs text-center text-gray-400">
        Created with ProFile AI
      </div>
    </div>
  );
};

// New Simple Template
const SimpleTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="font-sans text-left text-sm leading-snug">
      {/* Header - Minimal */}
      <div className="mb-6">
        {data.personal.name && (
          <h1 className="text-xl font-bold text-gray-900 mb-1">{data.personal.name}</h1>
        )}
        {data.personal.title && (
          <p className="text-gray-700 mb-2">{data.personal.title}</p>
        )}
        <div className="flex flex-wrap gap-x-4 text-sm text-gray-600">
          {data.personal.email && <p>{data.personal.email}</p>}
          {data.personal.phone && <p>{data.personal.phone}</p>}
          {data.personal.location && <p>{data.personal.location}</p>}
          {data.personal.website && <p>{data.personal.website}</p>}
          {data.personal.linkedin && <p>{data.personal.linkedin}</p>}
        </div>
      </div>

      {/* Summary */}
      {data.personal.summary && (
        <div className="mb-5">
          <h2 className="text-md font-bold text-gray-900 mb-2 uppercase">Summary</h2>
          <p className="text-gray-700">{data.personal.summary}</p>
        </div>
      )}

      {/* Experience */}
      {data.experience.some(exp => exp.company || exp.position) && (
        <div className="mb-5">
          <h2 className="text-md font-bold text-gray-900 mb-2 uppercase">Experience</h2>
          {data.experience.map((exp, index) => (
            (exp.company || exp.position) && (
              <div key={exp.id} className={index < data.experience.length - 1 ? "mb-4" : ""}>
                <div className="flex justify-between items-start">
                  <div>
                    {exp.position && <h3 className="font-semibold">{exp.position}</h3>}
                    {exp.company && <p className="text-gray-700">{exp.company}</p>}
                  </div>
                  <div className="text-right text-gray-600 text-sm">
                    {(exp.startDate || exp.endDate) && (
                      <p>{exp.startDate} {exp.startDate && exp.endDate && "–"} {exp.endDate}</p>
                    )}
                    {exp.location && <p>{exp.location}</p>}
                  </div>
                </div>
                {exp.description && <p className="mt-1 text-gray-700">{exp.description}</p>}
                {exp.highlights.some(h => h) && (
                  <ul className="mt-1 ml-4 list-disc text-gray-700">
                    {exp.highlights.map((highlight, idx) => 
                      highlight && <li key={idx}>{highlight}</li>
                    )}
                  </ul>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Education */}
      {data.education.some(edu => edu.institution || edu.degree) && (
        <div className="mb-5">
          <h2 className="text-md font-bold text-gray-900 mb-2 uppercase">Education</h2>
          {data.education.map((edu, index) => (
            (edu.institution || edu.degree) && (
              <div key={edu.id} className={index < data.education.length - 1 ? "mb-3" : ""}>
                <div className="flex justify-between items-start">
                  <div>
                    {edu.institution && <h3 className="font-semibold">{edu.institution}</h3>}
                    {(edu.degree || edu.fieldOfStudy) && (
                      <p className="text-gray-700">
                        {edu.degree}{edu.degree && edu.fieldOfStudy && ","} {edu.fieldOfStudy}
                      </p>
                    )}
                  </div>
                  <div className="text-right text-gray-600 text-sm">
                    {(edu.startDate || edu.endDate) && (
                      <p>{edu.startDate} {edu.startDate && edu.endDate && "–"} {edu.endDate}</p>
                    )}
                    {edu.location && <p>{edu.location}</p>}
                  </div>
                </div>
                {edu.description && <p className="mt-1 text-gray-700">{edu.description}</p>}
              </div>
            )
          ))}
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || 
       data.skills.soft.length > 0 || 
       data.skills.languages.length > 0 || 
       data.skills.certifications.length > 0) && (
        <div className="mb-5">
          <h2 className="text-md font-bold text-gray-900 mb-2 uppercase">Skills</h2>
          
          {data.skills.technical.length > 0 && (
            <div className="mb-2">
              <h3 className="font-semibold text-gray-700">Technical Skills</h3>
              <p className="text-gray-700">{data.skills.technical.join(", ")}</p>
            </div>
          )}
          
          {data.skills.soft.length > 0 && (
            <div className="mb-2">
              <h3 className="font-semibold text-gray-700">Soft Skills</h3>
              <p className="text-gray-700">{data.skills.soft.join(", ")}</p>
            </div>
          )}
          
          {data.skills.languages.length > 0 && (
            <div className="mb-2">
              <h3 className="font-semibold text-gray-700">Languages</h3>
              <p className="text-gray-700">{data.skills.languages.join(", ")}</p>
            </div>
          )}
          
          {data.skills.certifications.length > 0 && (
            <div>
              <h3 className="font-semibold text-gray-700">Certifications</h3>
              <p className="text-gray-700">{data.skills.certifications.join(", ")}</p>
            </div>
          )}
        </div>
      )}

      {/* Projects */}
      {data.projects.some(proj => proj.name) && (
        <div className="mb-5">
          <h2 className="text-md font-bold text-gray-900 mb-2 uppercase">Projects</h2>
          {data.projects.map((proj, index) => (
            proj.name && (
              <div key={proj.id} className={index < data.projects.length - 1 ? "mb-4" : ""}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">
                      {proj.name}
                      {proj.url && (
                        <span className="font-normal text-sm text-gray-600 ml-2">
                          ({proj.url})
                        </span>
                      )}
                    </h3>
                  </div>
                  {(proj.startDate || proj.endDate) && (
                    <p className="text-right text-gray-600 text-sm">
                      {proj.startDate} {proj.startDate && proj.endDate && "–"} {proj.endDate}
                    </p>
                  )}
                </div>
                {proj.description && <p className="mt-1 text-gray-700">{proj.description}</p>}
                {proj.highlights.some(h => h) && (
                  <ul className="mt-1 ml-4 list-disc text-gray-700">
                    {proj.highlights.map((highlight, idx) => 
                      highlight && <li key={idx}>{highlight}</li>
                    )}
                  </ul>
                )}
              </div>
            )
          ))}
        </div>
      )}

      <div className="mt-6 text-xs text-center text-gray-400">
        Created with ProFile AI
      </div>
    </div>
  );
};

// New Technical Template
const TechnicalTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="font-mono text-left text-sm leading-snug">
      {/* Header with tech-inspired styling */}
      <div className="mb-6 border-b-2 border-gray-300 pb-4">
        {data.personal.name && (
          <h1 className="text-xl font-bold text-resume-primary mb-1">{data.personal.name}</h1>
        )}
        {data.personal.title && (
          <p className="text-gray-700 mb-2">{data.personal.title}</p>
        )}
        <div className="flex flex-wrap gap-y-1 gap-x-4 text-sm text-gray-600">
          {data.personal.email && <p><span className="text-resume-primary">{'>>'}</span> {data.personal.email}</p>}
          {data.personal.phone && <p><span className="text-resume-primary">{'>>'}</span> {data.personal.phone}</p>}
          {data.personal.location && <p><span className="text-resume-primary">{'>>'}</span> {data.personal.location}</p>}
          {data.personal.website && <p><span className="text-resume-primary">{'>>'}</span> {data.personal.website}</p>}
          {data.personal.linkedin && <p><span className="text-resume-primary">{'>>'}</span> {data.personal.linkedin}</p>}
        </div>
      </div>

      {/* Summary */}
      {data.personal.summary && (
        <div className="mb-6">
          <h2 className="text-md font-bold text-resume-primary mb-2 flex items-center">
            <span className="mr-2">/**</span> ABOUT <span className="ml-2">*/</span>
          </h2>
          <p className="text-gray-700 pl-2 border-l-2 border-gray-300">{data.personal.summary}</p>
        </div>
      )}

      {/* Technical Skills prominent display */}
      {data.skills.technical.length > 0 && (
        <div className="mb-6">
          <h2 className="text-md font-bold text-resume-primary mb-2 flex items-center">
            <span className="mr-2">/**</span> TECHNICAL SKILLS <span className="ml-2">*/</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.technical.map((skill, i) => (
              <span key={i} className="bg-gray-100 border border-gray-300 rounded px-2 py-1 text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Experience */}
      {data.experience.some(exp => exp.company || exp.position) && (
        <div className="mb-6">
          <h2 className="text-md font-bold text-resume-primary mb-2 flex items-center">
            <span className="mr-2">/**</span> EXPERIENCE <span className="ml-2">*/</span>
          </h2>
          {data.experience.map((exp, index) => (
            (exp.company || exp.position) && (
              <div key={exp.id} className={`pl-2 border-l-2 border-gray-300 ${index < data.experience.length - 1 ? "mb-4" : ""}`}>
                <div>
                  {exp.position && <h3 className="font-bold">{exp.position}</h3>}
                  <div className="flex justify-between">
                    {exp.company && <p className="text-resume-primary">{exp.company}</p>}
                    <div className="text-gray-600 text-sm">
                      {(exp.startDate || exp.endDate) && (
                        <p>{exp.startDate} {exp.startDate && exp.endDate && "–"} {exp.endDate}</p>
                      )}
                    </div>
                  </div>
                  {exp.location && <p className="text-gray-600 text-sm">{exp.location}</p>}
                </div>
                {exp.description && <p className="mt-1 text-gray-700">{exp.description}</p>}
                {exp.highlights.some(h => h) && (
                  <ul className="mt-1 list-none text-gray-700">
                    {exp.highlights.map((highlight, idx) => 
                      highlight && <li key={idx} className="ml-2 pl-2 border-l border-resume-primary/30">
                        <span className="text-resume-primary">{'>'}</span> {highlight}
                      </li>
                    )}
                  </ul>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Projects */}
      {data.projects.some(proj => proj.name) && (
        <div className="mb-6">
          <h2 className="text-md font-bold text-resume-primary mb-2 flex items-center">
            <span className="mr-2">/**</span> PROJECTS <span className="ml-2">*/</span>
          </h2>
          {data.projects.map((proj, index) => (
            proj.name && (
              <div key={proj.id} className={`pl-2 border-l-2 border-gray-300 ${index < data.projects.length - 1 ? "mb-4" : ""}`}>
                <div>
                  <h3 className="font-bold">
                    {proj.name}
                    {proj.url && (
                      <span className="font-normal text-sm text-resume-primary ml-2">
                        ({proj.url})
                      </span>
                    )}
                  </h3>
                  {(proj.startDate || proj.endDate) && (
                    <p className="text-gray-600 text-sm">
                      {proj.startDate} {proj.startDate && proj.endDate && "–"} {proj.endDate}
                    </p>
                  )}
                </div>
                {proj.description && <p className="mt-1 text-gray-700">{proj.description}</p>}
                {proj.highlights.some(h => h) && (
                  <ul className="mt-1 list-none text-gray-700">
                    {proj.highlights.map((highlight, idx) => 
                      highlight && <li key={idx} className="ml-2 pl-2 border-l border-resume-primary/30">
                        <span className="text-resume-primary">{'>'}</span> {highlight}
                      </li>
                    )}
                  </ul>
                )}
              </div>
            )
          ))}
        </div>
      )}

      {/* Other Skills */}
      {(data.skills.soft.length > 0 || 
       data.skills.languages.length > 0 || 
       data.skills.certifications.length > 0) && (
        <div className="mb-6">
          <h2 className="text-md font-bold text-resume-primary mb-2 flex items-center">
            <span className="mr-2">/**</span> ADDITIONAL SKILLS <span className="ml-2">*/</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.skills.soft.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-700">Soft Skills</h3>
                <p className="text-gray-700">{data.skills.soft.join(", ")}</p>
              </div>
            )}
            
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-700">Languages</h3>
                <p className="text-gray-700">{data.skills.languages.join(", ")}</p>
              </div>
            )}
            
            {data.skills.certifications.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-700">Certifications</h3>
                <p className="text-gray-700">{data.skills.certifications.join(", ")}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.some(edu => edu.institution || edu.degree) && (
        <div className="mb-6">
          <h2 className="text-md font-bold text-resume-primary mb-2 flex items-center">
            <span className="mr-2">/**</span> EDUCATION <span className="ml-2">*/</span>
          </h2>
          {data.education.map((edu, index) => (
            (edu.institution || edu.degree) && (
              <div key={edu.id} className={`pl-2 border-l-2 border-gray-300 ${index < data.education.length - 1 ? "mb-3" : ""}`}>
                {edu.institution && <h3 className="font-bold">{edu.institution}</h3>}
                {(edu.degree || edu.fieldOfStudy) && (
                  <p className="text-resume-primary">
                    {edu.degree}{edu.degree && edu.fieldOfStudy && ","} {edu.fieldOfStudy}
                  </p>
                )}
                {(edu.startDate || edu.endDate) && (
                  <p className="text-gray-600 text-sm">
                    {edu.startDate} {edu.startDate && edu.endDate && "–"} {edu.endDate}
                  </p>
                )}
                {edu.location && <p className="text-gray-600 text-sm">{edu.location}</p>}
                {edu.description && <p className="mt-1 text-gray-700">{edu.description}</p>}
              </div>
            )
          ))}
        </div>
      )}

      <div className="mt-6 text-xs text-center text-gray-400 border-t border-gray-300 pt-4">
        $ Created with ProFile AI // Built with &lt;/&gt;
      </div>
    </div>
  );
};

export default ResumePreview;
