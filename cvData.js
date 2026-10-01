// cvData.js - Archivo de datos de tu CV
export const cvData = {
  personalInfo: {
    name: "Sthiven García",
    title: "Tech Leader & Sr Software Engineer",
    summary: "Tech Leader en Solventa Fintech con más de 20 años de experiencia en desarrollo de software, especializándome en frameworks PHP (Laravel, CodeIgniter), API REST, Seguridad Informática y DevOps.",
    location: "Buenos Aires, Argentina",
    email: "esthiven.garcia2@gmail.com",
    phone: "+5491170366167",
    linkedin: "https://www.linkedin.com/in/plutarco-garcia-87102b122",
    github: "https://github.com/tu-usuario",
    languages: ["Español (Nativo)", "Inglés", "Portugués"]
  },

  skills: {
    backend: ["PHP", "Laravel", "CodeIgniter", "API REST", "Microservicios", "Kotlin Android"],
    frontend: ["HTML5", "CSS3", "JavaScript", "jQuery", "AJAX", "Bootstrap"],
    devopsCloud: ["Docker", "AWS", "Git / GitHub", "Linux (Debian/Ubuntu)", "Cisco Networks"],
    databases: ["MySQL", "PostgreSQL", "SQL Server"],
    methodologies: ["Scrum Ágil", "Jira", "Code Review", "Liderazgo de Equipos"]
  },

  experience: [
    {
      role: "Tech Leader",
      company: "Solventa Fintech",
      location: "Buenos Aires, Argentina",
      period: "Ene. 2022 - Presente",
      highlights: [
        "Identificación y evaluación de deficiencias en integración de proyectos.",
        "Gestión de procesos y asignación equitativa mediante Jira.",
        "Supervisión continua, revisión de Pull Requests y entornos de testing.",
        "Garantía de seguridad y mejores prácticas antes de despliegue en nube (AWS/Docker).",
        "Mentoría técnica y desarrollo de habilidades del equipo."
      ]
    },
    {
      role: "IT Developer Sr.",
      company: "Solventa Fintech",
      location: "Buenos Aires, Argentina",
      period: "Dic. 2019 - Dic. 2022",
      highlights: [
        "Desarrollo e integración de microservicios en Laravel para recaudo y moras.",
        "Integración de APIs de Contact Center (Neotell, Wolkvox, Genesis) y envío masivo (SMS, IVR, Email).",
        "Integración con buró crediticio, biometría e identidades (QR/Documento).",
        "Implementación de pasarelas de pago y desembolsos bancarios (Payvalida, Bancolombia).",
        "Integración con Twilio para soporte multicanal de WhatsApp y Slack Webhooks."
      ]
    },
    {
      role: "Developer Senior",
      company: "CRIJOS Sistemas de Seguridad SAC",
      location: "Lima, Perú",
      period: "Jul. 2018 - Sep. 2019",
      highlights: [
        "Liderazgo en el desarrollo de un ERP desde cero utilizando CodeIgniter.",
        "Integración con facturación electrónica SUNAT y app móvil en Kotlin mediante WebHooks.",
        "Instalación y mantenimiento de redes P2P y videovigilancia."
      ]
    },
    {
      role: "Gerente de Sistemas / Tech Leader",
      company: "Ministerio del Poder Popular para las Comunas",
      location: "Caracas, Venezuela",
      period: "Ene. 2012 - Ago. 2017",
      highlights: [
        "Dirección del área de sistemas e implementación de intranet en CodeIgniter.",
        "Migración masiva de 300 estaciones a Linux y reestructuración de Data Center.",
        "Gestión de bases de datos PostgreSQL y servidores de infraestructura."
      ]
    }
  ],

  education: [
    {
      degree: "Ingeniero en Sistemas",
      institution: "Universidad Alejandro de Humboldt",
      period: "2005 - 2009"
    },
    {
      degree: "Diplomado en Administración Avanzada Gerencial",
      institution: "IEAEG",
      period: "2011 - 2013"
    },
    {
      degree: "TSU en Informática",
      institution: "IUTA",
      period: "2007 - 2010"
    }
  ],

  courses: [
    { title: "API REST con Laravel", platform: "Platzi", date: "2023", status: "Completado" },
    { title: "Manejo de datos con Eloquent Laravel", platform: "Platzi", date: "2023", status: "Completado" },
    { title: "Git y GitHub", platform: "Platzi", date: "2023", status: "Completado" }
  ]
};
