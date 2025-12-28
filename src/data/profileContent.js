// src/data/profileContent.js
const profileContent = {
  name: 'CAI, YAO-TING',
  title: 'Software Engineer',
  bio:
    "I graduated with a Master’s degree in Computer Science and Engineering from National Kaohsiung University of Science and Technology. Through my academic and research experience, I gradually built a solid foundation in programming and various technological applications, especially in artificial intelligence and web development. In my future career, I hope to apply what I have learned to real-world projects, continue improving my skills, and become a reliable engineer who contributes to the team and grows together with others.",
  skills: ['Python', 'Power BI', 'R', 'PostgreSQL', 'React', 'Redux', 'HTML', 'CSS'],

  // Projects
  projects: [
    {
      id: 1,
      title:
        'Project One : [MIMIC IV 2.1 Specific Disease & Medication SQL Example Webpage]',
      desc:
        'This webpage provides the necessary MIMIC IV 2.1 data tables related to specific diseases and medications. It is designed to help you better understand the column information in these medical datasets for similar academic research. You can use the menu to switch to SQL examples for querying the medical data. Please note that these examples are for reference and academic research purposes only.',
      homeUrl: 'https://mimic-iv-disease-medication-sql-ting-uwu.streamlit.app/',
      projectUrl:
        'https://github.com/yaoting0116/MIMIC-IV-Disease-Medication-SQL',
      featured: true
    },
    {
      id: 2,
      title: 'Project Two : [MIMIC IV Data Analysis]',
      desc:
        '\nThis page showcases my analysis results based on data filtered using SQL queries. It provides insights drawn from the filtered MIMIC IV 2.1 dataset to support academic research in the fields of diseases and medications. For more detailed information, please visit the GitHub repository.\n\n\n',
      homeUrl:
        'https://mimic-iv-disease-medication-sql-ting-uwu.streamlit.app/Study_of_Disease_&_Drug',
      projectUrl: 'https://github.com/yaoting0116/mimic-iv-drug-data-analysis',
      featured: true
    },
    {
      id: 3,
      title: 'Project Three : [TING AI Website]',
      desc:
        '\nI built TING-AI as my personal portfolio and playground for AI-related works. The site stores and showcases outputs, experiments, and demos including AI-generated images, audio, model demos, prompts, notebooks, and small interactive demos. The site is generated from a small Flask app and static assets, then exported into a build/ folder so it can be deployed as a static site (Cloudflare Pages is recommended).',
      homeUrl:
        'https://ting-ai-website-v2.pages.dev/',
      projectUrl: 'https://github.com/yaoting0116/TING_AI_Website_V2',
      featured: false
    },
    {
      id: 4,
      title: 'Project Four : [Ting Personal Site]',
      desc:
        '\nThis is a scaffolded personal website template using React + Redux Toolkit + Vite, designed to showcase projects, skills, and academic work. It integrates EmailJS for the contact form, can link to external Streamlit apps for project demos, and is ready to deploy to Cloudflare Pages.\n\n\n',
      homeUrl:
        'https://my-index-full.pages.dev/',
      projectUrl: 'https://github.com/yaoting0116/my_index_full',
      featured: false
    },
  ],

  // 論文/專題欄位
  thesisTitle:
    'Exploring the Impact of Cardiovascular Disease-Related Medications on Severe Mental Illness Using an Open-Source Medical Database',
  thesisUrl:
    '/papers/Exploring the Impact of Cardiovascular Disease-Related Medications on Severe Mental Illness Using an Open-Source Medical Database.pdf',
  thesisAbstract: 
    `Background: Integrating medical data with information engineering offers important opportunities to improve clinical understanding and decision-making. This study originates from clinical observations of patients with severe mental illnesses (SMI) who commonly receive medications for symptom management. We investigate whether cardiovascular disease–related medications influence prognosis in patients with SMI—focusing on ischemic and hemorrhagic stroke outcomes.

    Methods: We used the publicly available MIMIC-IV 2.1 database to identify adult patients diagnosed with schizophrenia or bipolar disorder and categorized them into ischemic and hemorrhagic stroke cohorts based on hospitalization cause. Medication exposures considered included Aspirin, Warfarin, Clopidogrel, Apixaban, Rivaroxaban, Dabigatran etexilate, Cilostazol, and Enoxaparin. Statistical analyses comprised descriptive comparisons (t-test, Mann–Whitney U, Kolmogorov–Smirnov for age distributions; chi-square and Fisher’s exact tests for categorical variables), and time-to-event analyses using Kaplan–Meier curves, log-rank tests, and Cox proportional hazards models with different covariate encodings (binary usage indicator and numerical measures such as frequency, dose, and duration). ANOVA was used to assess explanatory contributions of dosage-related variables.

    Results: Case and control groups differed significantly in age distribution, sex ratio, event incidence, and comorbidity burden. In proportional hazards models using a binary medication-usage covariate, medication use did not show a protective effect for ischemic stroke patients. For hemorrhagic stroke patients, several medications exhibited a protective trend when analyzed with the binary indicator. Numerical covariates (usage frequency, dose, duration) were positively correlated with stroke risk, and although they reached statistical significance in ANOVA, their additional explanatory power was limited compared with the binary usage indicator—particularly in the hemorrhagic stroke context, where the binary indicator explained a substantial portion of survival differences.

    Conclusions: Cardiovascular medications exert complex and clinically significant effects on stroke outcomes among patients with SMI. The binary medication-usage indicator was more explanatory for hemorrhagic stroke survival differences, whereas dosage-related variables, despite statistical significance, contributed less to overall risk modeling. These results support careful consideration of cardiovascular pharmacotherapy in psychiatric populations and provide an empirical basis for optimizing medication selection and risk assessment. The study also offers a reproducible statistical framework and a web-based resource with SQL query examples to facilitate interdisciplinary research using public medical databases.`,

  
  // UI content（文案、圖片）— 放在 profile 內較方便共用
  introDialogues: [
    'Hello, {name}, I\'m Zoe.',
    'Welcome! I’ve carefully organized this website to introduce the developer’s background and projects.',
    'Feel free to explore the content at your own pace, just like leisurely adventuring in an RPG world!',
    'When you’re ready, I can guide you to the full collection of the developer’s works.'
  ],
  guideImage: '/images/guide-girl.jpg',
  siteRoleTitle: 'Site Administrator'
}

export default profileContent
