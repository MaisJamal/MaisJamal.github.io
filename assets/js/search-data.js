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
        },{id: "nav-المنشورات",
          title: "المنشورات",
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
          section: "News",},{
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
