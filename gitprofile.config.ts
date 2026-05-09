// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'LehmannFabianarifszn', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['jmontoyaz/hslu_weakly_segmentation_lehmann_2025', 'LehmannFabian/belka_prediction_challenge'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Democracy in the 21st Century',
          description:
            'Democracy in the 21st Century ist ein datenjournalistisches Webprojekt, das die Entwicklung demokratischer Systeme weltweit visualisiert und analysiert. Mithilfe interaktiver Grafiken und statistischer Auswertungen werden historische Trends, globale Unterschiede sowie der Zusammenhang zwischen Demokratie und gesellschaftlichem Wohlstand dargestellt. Das Projekt kombiniert modernes Webdesign mit Datenvisualisierung, um komplexe politische Entwicklungen verständlich und ansprechend aufzubereiten.',
          imageUrl:
            'https://lehmannfabian.github.io/democracy_21st/grafiken/change_over_last_years_improved.png',
          link: 'https://lehmannfabian.github.io/democracy_21st/',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Fabian Lehmann', description: 'JR. AI & Machine Learning Engineer | MDeep Learning & Computer Vision Enthusiast', imageURL: '' },
  social: {
    linkedin: 'www.linkedin.com/in/fabian-lehmann-6440b3252',
    behance: '',
    phone: '',
    email: 'fabianlehmann01@bluewin.ch',
  },
  resume: {
    fileUrl:AI & Machine Learning Engineer | Medical Imaging Researcher | Deep Learning & Computer Vision Enthusiast
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
skills: [
  'Python',
  'C',
  'C++',
  'R',
  'PyTorch',
  'TensorFlow',
  'Scikit-learn',
  'XGBoost',
  'Transformers',
  'Time-Series Analysis',
  'NLP',
  'Computer Vision',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'Jupyter',
  'Git',
  'Docker',
  'Weights & Biases',
  'Linux',
],
  experiences: [
    {
      company: 'Code Camp Switzerland',
      position: 'Head Teacher',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://en.codecampworld.ch/',
    },

  ],
  certifications: [
    {

    },
  ],
  educations: [
      {
      institution: 'University of Bern',
      degree: 'MSc Artificial Intelligence in Medicine',
      from: '2025',
      to: '2027',
    },
    
    {
      institution: 'University of Applied Science Lucerne (HSLU)',
      degree: 'BSc Artificial Intelligence and Machine Learning',
      from: '2022',
      to: '2025',
    },

    {
      institution: 'Login in cooperation with RhB (Rhatian Railway)',
      degree: 'Automatiker (Automation Technician) EFZ',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [

  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/LehmannFabian/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
