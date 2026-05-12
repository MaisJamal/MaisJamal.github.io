// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-المنشورات-العلمية",
          title: "المنشورات العلمية",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ar/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "An overview of my GitHub activity, highlighting key repositories, development statistics, and codebases associated with my research and engineering projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-مجلدات-github",
          title: "مجلدات GitHub",
          description: "نظرة عامة على نشاطي على GitHub، تسلّط الضوء على المشاريع الرئيسية وإحصائيات التطوير المرتبطة بمشاريعي البحثية والهندسية.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ar/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-السيرة-الذاتية",
          title: "السيرة الذاتية",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ar/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-defended-my-doctoral-thesis-entitled-development-and-research-of-adaptive-planning-algorithms-and-methods-for-autonomous-vehicle-maneuvers",
          title: 'I defended my doctoral thesis entitled “Development and Research of Adaptive Planning Algorithms...',
          description: "",
          section: "News",},{id: "news-قمتُ-بالدفاع-عن-أطروحة-الدكتوراه-بعنوان-تطوير-وبحث-خوارزميات-وطرق-التخطيط-التكيّفي-لمناروات-السيارة-ذاتية-القيادة",
          title: 'قمتُ بالدفاع عن أطروحة الدكتوراه بعنوان “تطوير وبحث خوارزميات وطرق التخطيط التكيّفي لمناروات...',
          description: "",
          section: "News",},{id: "news-my-paper-принятие-решений-о-проведении-маневра-с-предсказанием-траекторных-потоков-для-беспилотного-транспортного-средства-maneuver-decision-making-with-trajectory-streams-prediction-for-autonomous-vehicles-has-been-published-in-the-proceedings-of-the-xxii-russian-conference-on-artificial-intelligence-rcai-2025-held-on-october-6-10-2025",
          title: 'My paper, “Принятие решений о проведении маневра с предсказанием траекторных потоков для беспилотного...',
          description: "",
          section: "News",},{id: "news-تم-نشر-ورقتي-البحثية-принятие-решений-о-проведении-маневра-с-предсказанием-траекторных-потоков-для-беспилотного-транспортного-средства-maneuver-decision-making-with-trajectory-streams-prediction-for-autonomous-vehicles-في-وقائع-المؤتمر-الروسي-الثاني-والعشرين-للذكاء-الاصطناعي-rcai-2025-المنعقد-في-الفترة-من-6-إلى-10-أكتوبر-2025",
          title: 'تم نشر ورقتي البحثية “Принятие решений о проведении маневра с предсказанием траекторных потоков...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-autonomous-car-deployment",
          title: 'Autonomous Car Deployment',
          description: "Full-stack behavior planning and real-world maneuver execution on a Kia Soul platform — from simulation to road testing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/autonomous_car/";
            },},{id: "projects-carla-apollo-bridge",
          title: 'CARLA-Apollo Bridge',
          description: "Open-source bidirectional interface between the CARLA simulator and Apollo Auto, enabling seamless sim-to-real autonomous driving development.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/carla_apollo_bridge/";
            },},{id: "projects-laptop-keyboard-replacement",
          title: 'Laptop Keyboard Replacement',
          description: "Hands-on hardware repair tutorial — full teardown and keyboard replacement with a step-by-step YouTube guide.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/keyboard_repair/";
            },},{id: "projects-quadcopter",
          title: 'Quadcopter',
          description: "Group project building an autonomous quadcopter from scratch — hardware assembly, flight controller integration, and aerial systems design.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quadcopter/";
            },},{id: "projects-roadrunner-to-lgsvl-via-unity",
          title: 'RoadRunner to LGSVL via Unity',
          description: "End-to-end pipeline for importing MathWorks RoadRunner maps into the LGSVL simulator through Unity, with a step-by-step video tutorial.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/roadrunner_lgsvl/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
