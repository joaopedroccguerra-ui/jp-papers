/* =========================================================
   JP Papers — DADOS DO SITE
   As disciplinas e os testes vêm da pasta do Google Drive.
   Para adicionar um teste novo: copia o link do documento
   no Drive (Partilhar -> Copiar link), troca o /edit final
   por /preview, e acrescenta uma linha na disciplina certa.
   ========================================================= */

/* Início da época de exames (contador da página inicial) */
const EXAM_DATE = "2027-05-01T09:00:00";

/* Grupos usados nos filtros */
const GROUPS = {
  all: "All subjects",
  sciences: "Sciences",
  maths: "Maths & Computing",
  humanities: "Humanities",
  languages: "Languages"
};

/* Disciplinas e ficheiros */
const SUBJECTS = [
  {
    slug: "biology",
    name: "Biology",
    group: "sciences",
    blurb: "Cycle tests, PSA practice and end-of-year revision for triple science Biology.",
    files: [
      { name: "Biology EoY G9 revision", type: "EoY", term: "Term 3", url: "https://docs.google.com/document/d/14l8zWOoHxZc6bArwHRg4r7ybvxcffmuLu39MDYSetiY/preview" },
      { name: "Biology PSA Term 3 IGCSE Revision", type: "PSA", term: "Term 3", url: "https://docs.google.com/document/d/1Y_kPdnFn_lQAK9jtM-MCP9Ni7cdoraiPfHT9aiU6E7A/preview" },
      { name: "Biology PSA T2 revision", type: "PSA", term: "Term 2", url: "https://docs.google.com/document/d/1P7BTz2qnzR3cEtk2-CJTcswZHqlLnB43fyhbLGWPclM/preview" },
      { name: "Biology Cycle Test T2 revision", type: "Cycle test", term: "Term 2", url: "https://docs.google.com/document/d/16DoBaFVl5UVIUXR6wPepo7W3Ww7iwUHRF4BuY4kNHlA/preview" },
      { name: "Biology cycle test 1 revision", type: "Cycle test", term: "Term 1", url: "https://docs.google.com/document/d/1oI_bjuNiAW7aDVTcXB53gFdPtU4iNg9EcIOrGJj5GZ8/preview" }
    ]
  },
  {
    slug: "chemistry",
    name: "Chemistry",
    group: "sciences",
    blurb: "PSA practice and cycle test revision. Double award content sits in the same documents \u2014 check the tabs.",
    files: [
      { name: "Chemistry Grade 9 EoY Revision", type: "EoY", term: "Term 3", url: "https://docs.google.com/document/d/1JYnk6ShiyqxMQxKRy__mjxDwQcGvmML9RONG6c9XhAQ/preview" },
      { name: "Chemistry PSA IGCSE Term 3 Revision", type: "PSA", term: "Term 3", url: "https://docs.google.com/document/d/1Lgugxuve4QkwhC-LMD4xaV070C7Jn2jWD3Mqig6MG9w/preview" },
      { name: "Chemistry Cycle Test IGCSE Term 2 Revision", type: "Cycle test", term: "Term 2", url: "https://docs.google.com/document/d/1FdMReFAUVX6v67Y3Ilo_E4IIJMonxu8TS4VWFGvmEdk/preview" },
      { name: "Chemistry PSA IGCSE Term 2 Revision", type: "PSA", term: "Term 2", url: "https://docs.google.com/document/d/1JwZDFU84YAB6thvYOZnpql1Ko70ox_9LQQOqgEtIPyA/preview" },
      { name: "Chemistry Cycle Test 1 Revision", type: "Cycle test", term: "Term 1", url: "https://docs.google.com/document/d/1xTwmWe8dpMDSUq-98JAXR6Phkeqh6xg84xv8n3foZ34/preview" }
    ]
  },
  {
    slug: "physics",
    name: "Physics",
    group: "sciences",
    blurb: "PSA practice, cycle tests and the full end-of-year review for Physics.",
    files: [
      { name: "Physics G9 EOY Revision", type: "EoY", term: "Term 3", url: "https://docs.google.com/document/d/15erLcYXh_zhsjQFArDZhVVkQ_oZYdczALPRgD8iv_4U/preview" },
      { name: "Physics PSA Term 3 Revision", type: "PSA", term: "Term 3", url: "https://docs.google.com/document/d/1fQEtM01x-VRJ6sZjd39FVqFmqVNpLmD1I_JcIyxJERk/preview" },
      { name: "Physics CT Term 2 Revision", type: "Cycle test", term: "Term 2", url: "https://docs.google.com/document/d/1NV4iNKp58q3wYZU_KD9RptjKUMvjX57JETvAohr08pI/preview" },
      { name: "Physics PSA Term 2 Revision", type: "PSA", term: "Term 2", url: "https://docs.google.com/document/d/1CjYzapKZ6YWz7ec_rCuV-glVmxzfmSm42oWRlvBbiNY/preview" },
      { name: "Physics Cycle Test 1 Revision", type: "Cycle test", term: "Term 1", url: "https://docs.google.com/document/d/10J24b8FR8F40kfm3Gm4W6I0zCbCpIfTADjliwOWZovE/preview" }
    ]
  },
  {
    slug: "maths",
    name: "Maths",
    group: "maths",
    blurb: "Cycle test reviews term by term, plus the end-of-year paper.",
    files: [
      { name: "Maths EOY G9 Review", type: "EoY", term: "Term 3", url: "https://docs.google.com/document/d/1mgb6igKkjW20O8VZj_oFoGdYgE3LTyPMZ7o6jhyqTio/preview" },
      { name: "Maths CT Term 3 Review", type: "Cycle test", term: "Term 3", url: "https://docs.google.com/document/d/1ugak55Gsqnx7p9KOW8KldGMRe-Rlo-4pnWyEWEVDoNY/preview" },
      { name: "Maths CT2 Term 2 Review", type: "Cycle test", term: "Term 2", url: "https://docs.google.com/document/d/1_naPT94n9f-hpQtc2oqinyLve-VsxqU_C6A7OYPZKrI/preview" },
      { name: "Maths CT1 Term 2 Review", type: "Cycle test", term: "Term 2", url: "https://docs.google.com/document/d/12x4LslirjsDUHCrRahhfrtX4twvWjUsPavU4dcLZNsA/preview" },
      { name: "Maths CT1 Term 2 Review Part 2", type: "Cycle test", term: "Term 2", url: "https://docs.google.com/document/d/1PyemPiGtHpQ_UzimDlLaRqYy-_yiAR8GZ7ibvHRkFuo/preview" },
      { name: "Maths revision test", type: "Practice", term: "Term 1", url: "https://docs.google.com/document/d/1FmRbZ4FC6azGcJe3Fg2zSPTHNh5eE-oHKCP1mHJnFaA/preview" }
    ]
  },
  {
    slug: "computer-science",
    name: "Computer Science",
    group: "maths",
    blurb: "Theory revision for the term test and the end-of-year paper.",
    files: [
      { name: "Computer Science G9 EoY IGCSE Revision", type: "EoY", term: "Term 3", url: "https://docs.google.com/document/d/1ohWYyc801-eUsfRvC6hv-y1Rw9Nk_Ibq1ZAdmqveZJ4/preview" },
      { name: "Computer Science Test Revision", type: "Practice", term: "Term 2", url: "https://docs.google.com/document/d/1qc8ZrTJK9oo-hqVeOlIA2ylDisgma7iKAjmZs7tR1o4/preview" }
    ]
  },
  {
    slug: "geography",
    name: "Geography",
    group: "humanities",
    blurb: "Skills papers, the rivers topic test and the end-of-year review.",
    files: [
      { name: "Geography EoY G9 Review", type: "EoY", term: "Term 3", url: "https://docs.google.com/document/d/1vFJ8GA3UBmCRskR7XNK8PjYvWeQYIMr1825VHEz58X4/preview" },
      { name: "Geography Skills Term 3 Revision", type: "Skills", term: "Term 3", url: "https://docs.google.com/document/d/1EaG8EH6Puw27MtKO5c7dM7KfFprJIZznthy007ZCp6g/preview" },
      { name: "Geography Skills Test T2 Revision", type: "Skills", term: "Term 2", url: "https://docs.google.com/document/d/1fyFUIB9OpYl9BecITsmFJJ6KmGTUZ-23EqI-O8xoLL4/preview" },
      { name: "Geography Rivers Test Revision", type: "Practice", term: "Term 2", url: "https://docs.google.com/document/d/1PqVsB4k3YwkuHflWmGXMRLFXwx_KapiNEHjg3LxSpjk/preview" },
      { name: "Geography Skills Assessment 1 Revision", type: "Skills", term: "Term 1", url: "https://docs.google.com/document/d/1jF6T4JOsWLFlVgImkAaEUroG4HtZfamqkZXTq6F_hnM/preview" },
      { name: "Geography Cycle Test 1 Revision", type: "Cycle test", term: "Term 1", url: "https://docs.google.com/document/d/1FiDZB3IaE9hTh1tAb2ZT7QOoak4c-pm7_uEx-wdMAQA/preview" }
    ]
  },
  {
    slug: "history",
    name: "History",
    group: "humanities",
    blurb: "Term test and end-of-year revision.",
    files: [
      { name: "History EoY Revision", type: "EoY", term: "Term 3", url: "https://docs.google.com/document/d/1PY-hL3v_-m1up9UXs5RC0_2b0aCHV9BtR1NU72ZuhWE/preview" },
      { name: "History Test Term 2 IGCSE Revision", type: "Practice", term: "Term 2", url: "https://docs.google.com/document/d/1JTKZ3_YIUIg2ZKG398Ld24_bD-IpMpY3w457Eb2Uhc8/preview" }
    ]
  },
  {
    slug: "business",
    name: "Business",
    group: "humanities",
    blurb: "Test revision across terms 2 and 3, plus the end-of-year paper.",
    files: [
      { name: "Business EoY Revision", type: "EoY", term: "Term 3", url: "https://docs.google.com/document/d/1QV1jaA8Oz73FBe_-eanpErxzpfAzKM0j02oZFwUkjzg/preview" },
      { name: "Business Test T3 Revision", type: "Practice", term: "Term 3", url: "https://docs.google.com/document/d/1jiF5Mg7TFlI-klCm56igbUIp7Jh7PSvy69wOZp1Jvhg/preview" },
      { name: "Business Test Revision", type: "Practice", term: "Term 2", url: "https://docs.google.com/document/d/1t3BSmK6xr3IcIxWO3S_x4RUBGFquXzWxxa85bHEeQvM/preview" }
    ]
  },
  {
    slug: "pe",
    name: "PE",
    group: "sciences",
    blurb: "IGCSE PE theory revision for the term test and the end-of-year paper.",
    files: [
      { name: "IGCSE PE EoY Revision", type: "EoY", term: "Term 3", url: "https://docs.google.com/document/d/1Y_XfDqCrvr0ii2OH3OWiF9R7qr1E_1U0n9HZCdEr_G8/preview" },
      { name: "IGCSE PE T2 Test Revision", type: "Practice", term: "Term 2", url: "https://docs.google.com/document/d/1SesmAjTUTh6uoHsNrJ24jiXZLEnpshWMov9xxVvsbsk/preview" }
    ]
  },
  {
    slug: "english",
    name: "English",
    group: "languages",
    blurb: "Cycle tests, the multiple choice paper and end-of-year revision.",
    files: [
      { name: "English EoY G9 revision", type: "EoY", term: "Term 3", url: "https://docs.google.com/document/d/141Jjwq460GIK4wwlXRVoSbbAZ_3IYNUZsrsC-bI9fz0/preview" },
      { name: "English MCQ T2 revision", type: "MCQ", term: "Term 2", url: "https://docs.google.com/document/d/1eEeY40V_EPc9Rmxpwk-GOh-LppTL7O2hKitNJesEJ3w/preview" },
      { name: "English CT T2 revision", type: "Cycle test", term: "Term 2", url: "https://docs.google.com/document/d/1OBha3Ry9v6_I90ruRF46z1bZSQ38mQX8wp42-FfFK6A/preview" },
      { name: "English CT1 revision", type: "Cycle test", term: "Term 1", url: "https://docs.google.com/document/d/1mHURvBSAK0ddz7wu4L7q9Wb2o5jL2KxOlguFa5Kjvqs/preview" }
    ]
  },
  {
    slug: "portugues",
    name: "Portugu\u00eas",
    group: "languages",
    blurb: "Revis\u00e3o de fim de ano, teste de texto descritivo e um exemplo de teste em aula.",
    files: [
      { name: "Portugu\u00eas EoY Review", type: "EoY", term: "Term 3", url: "https://docs.google.com/document/d/1RCctiQsUH0mHOHYys7cgNwgXB-14BvZxr3GWSy1RoEQ/preview" },
      { name: "Teste de Texto Descritivo T2 Revis\u00e3o", type: "Practice", term: "Term 2", url: "https://docs.google.com/document/d/1HlHj4665kHsEfqqvb5l-7bl7wxoM06zUKbvavEj_YPA/preview" },
      { name: "Exemplo de teste em aula: Hist\u00f3ria Comum + Quarto Anjo", type: "Practice", term: "Term 1", url: "https://docs.google.com/document/d/1xK4a8I9Q4YZbTFuY2NKeZD_7lTWJkzsS4XmKpxsndXE/preview" }
    ]
  }
];

/* Atualizações (o "blog") — a mais recente em primeiro */
const UPDATES = [
  {
    date: "2026-08-15",
    title: "Every test is now on the site",
    body: "All 43 revision documents from Grade 9 are linked here, sorted by subject and term. Nothing has to be hunted for in Drive any more."
  },
  {
    date: "2026-04-27",
    title: "Double award tests",
    body: "The double award tests are inside the same documents as the triple science tests. Check the tabs at the bottom of each document."
  },
  {
    date: "2026-04-14",
    title: "Resources moved to their own page",
    body: "Revision notes and practice papers now live on the Resources page. You can reach it from the top bar or from any Browse resources button."
  },
  {
    date: "2026-04-13",
    title: "New PSA practice tests",
    body: "Practice papers for the Triple Science Biology, Chemistry and Physics PSAs have been uploaded to their subject folders."
  }
];
