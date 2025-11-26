<template>
    <div class="container-fluid">
        <div class="container text-center">
            <Navbar colored="true"/>
        </div>
        <div class="header-bg container-fluid mt-4">
            <div class="container py-3">
                <div class="row">
                    <div class="col-12 col-md-8 py-lg-4 py-3">
                        <p class="header-title">{{ data.header?.title }}<span class="header-title-1"> &nbsp;&nbsp;{{ data.header?.year }}</span></p>
                        <p class="header-sub-title">{{ data.header?.description }}</p>
                        <div class="row pt-4 g-2">
                            <div class="col-6 col-md-2  ">
                                <div class="header-content-box btn btn-lg rounded-2 w-100">
                                    <div class="label">Total Hours</div>
                                    <div class="value">{{ data.header?.totalHours }}</div>
                                </div>
                            </div>
                            <div class="col-6 col-md-3">
                                 <div class="header-content-box btn btn-lg rounded-2 w-100">
                                    <div class="label">Duration</div>
                                    <div class="value">{{ data.header?.duration }}</div>
                                </div>
                            </div>
                            <div class="col-6 col-md-4">
                                 <div class="header-content-box btn btn-lg rounded-2 w-100">
                                    <div class="label">Timings</div>
                                    <div class="value">{{ data.header?.timings }}</div>
                                </div>
                            </div>
                            <div class="col-6 col-md">
                                 <div class="header-content-box btn btn-lg rounded-2 w-100">
                                    <div class="label">Mode of Delivery</div>
                                    <div class="value">{{ data.header?.modeOfDelivery }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4">
                        <ul class="list-group rounded-5 ">
                            <li class="border-0 list-group-item"></li>
                            <li class="border-0 list-group-item" v-for="point in data.header?.keyPoints">
                                <i class="fa fa-check pe-1" style="color: #00D6CF"></i>
                                {{ point }}
                            </li>
                            <li class="border-0 list-group-item"></li>
                        </ul>
                        <a class="btn rounded-pill text-white w-100 mt-4" style="background: #2528CB">
                            REGISTER NOW <i class="fa-solid fa-circle-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container py-4">
            <div class="exposer-title">Explore courses</div>
            <div class="custom-grid">
                <div v-for="item in data.exploreCourses">
                    <Card :item="item"/>
                </div>
            </div>
        </div>

        <div class="container py-lg-5 py-4 yearAtAGlance">
            <div class="exposer-title">Year at a Glance – <i style="color: #0F268E">Learning Highlights</i></div>
            <div class="row g-4">
                <div class="col-12 col-lg-5">
                    <ul class="list-group border-0 shadow-sm rounded-3">
                        <li class="list-group-item header border-none">
                            <div class="row ">
                                <div class="col-6">Engagement Type</div>
                                <div class="col-6 text-center">Total Planned</div>
                            </div>
                        </li>
                        <li class="list-group-item" v-for="item in data.yearAtAGlance">
                            <div class="row body">
                                <div class="col-6">{{ item.type }}</div>
                                <div class="col-6 text-center">{{ item.planned }}</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-lg-4 d-none d-lg-block">
                    <div class="card rounded-3 border-0  shadow-sm">
                        <div class="card-body p-2">
                            <img :src="data.yearAtAGlanceImages?.masterClass?.image" class="w-100"/>
                        </div>
                    </div>
                    <div style="color: #676767; font-size: 14px" class="mt-2 d-flex justify-content-between align-items-center p-1 shadow-sm rounded-2">
                        Masterclasses
                        <span style="font-size: 14px"><i class="fa fa-circle text-danger fa-1x"></i>&nbsp;{{ data.yearAtAGlanceImages?.masterClass?.time }}</span>
                    </div>
                </div>
                <div class="col-12 col-lg-3">
                    <div class="row g-3">
                        <div class="col-6" v-for="image in data.yearAtAGlanceImages?.experts?.images || []">
                            <img :src="image" class="w-100 h-100" style="aspect-ratio: 1/0.6"/>
                        </div>
                        <div class="col-12 text-center">
                            <div class="btn text-white fw-bold" style="background: #2528CB">
                                {{ data.yearAtAGlanceImages?.experts?.text }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container py-4 py-md-5">
            <div class="row justify-content-center text-center">
                <div class="col-12 exposer-title">Sample Monthly <i style="color: #0F268E">Structure</i></div>
                <div class="col-12 col-7 exposer-description">Each week is designed to balance learning, discussion, exposure, and problem-solving.</div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-6" v-for="structure in data.monthlyStructure">
                    <div class="text-center structureMonthTitle py-4">{{ structure.month }} Month</div>
                    <div class="card rounded-4 p-2 border-0" style="box-shadow: 0px 0px 14px 2px #0000000F;">
                        <div
                            v-for="(card, index) in structure.cards"
                            class="card my-2 p-3 rounded-4 border-0 w-100 position-relative overflow-hidden"
                            :style="{ background: card.backgroundColor }"
                        >
                                <div class="monthCardTitle" :style="{ color: card.titleColor }">{{ card.title }}</div>
                                <div class="monthCardText text-white fw-bold">{{ card.text }}</div>
                                <div class="month-card-number">{{ index + 1 }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row g-2">
                <div class="col-12 text-center">
                    <div class="exposer-title">Your First Year LeveledUp  <i style="color: #0F268E">Curriculum</i></div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button
                            v-for="(item, index) in data.curriculum?.keys || []"
                            class="nav-link curriculumTabs"
                            :class="currentTab == item.value ? 'active': ''"
                            @click="() => {currentTab = item.value}"
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                        >
                            {{ item.label }}
                        </button>
                    </div>
                </div>
                <div class="col-12 col-lg-8">
                    <div class="card curriculumTabContent">
                        <div class="card-body">
                            <div class="title">{{ data.curriculum[currentTab]?.title }}</div>
                            <div class="description">{{ data.curriculum[currentTab]?.description }}</div>
                            <div class="tableBox">
                                <table class="table table-sm table-borderless">
                                    <thead>
                                        <tr class="tableHeader">
                                            <th v-for="head in data.curriculum[currentTab]?.tableHeader || []">{{ head.label }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="body in data.curriculum[currentTab]?.tableBody || []" class="tableBody">
                                            <td v-for="head in data.curriculum[currentTab]?.tableHeader || []">
                                                {{ body[head.value] }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>
<script>
import Navbar from "../../components/Navbar.vue"
import Card from "@/components/Card.vue";
import courseImage from "../../assets/2ndYear.svg"
import Footer from "../Footer.vue";

import glance1 from "../../assets/glance1.svg";
import glance2 from "../../assets/glance2.svg";
import glance3 from "../../assets/glance3.svg";
import glance4 from "../../assets/glance4.svg";
import glance5 from "../../assets/glance5.svg";
export default {
    components: {
        Navbar,
        Card,
        Footer
    },
    data() {
        return {
            currentTab: 'bootcampTopics',
            module: {
                1: {
                    header: {
                        title: 'Core',
                        year: '1st Year',
                        description: 'Advanced full-stack development with hands-on projects in front-end, back-end.',
                        totalHours: '180 Hours',
                        duration: '1 Year',
                        timings: '10:00 AM – 1:00 PM IST',
                        modeOfDelivery: 'Online classes',
                        keyPoints: [
                            '2h 30m on-demand video',
                            '22 coding exercises',
                            '15 articles',
                            'Certificate of completion',
                            'Full lifetime access'
                        ]
                    },
                    exploreCourses: [
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        }
                    ],
                    monthlyStructure: [
                        {
                            month: 1,
                            cards: [
                                {
                                    title: 'Bootcamps',
                                    text: 'Every 2 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1-2 Group Discussions',
                                    text: 'Evevy week',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1 Seminar every',
                                    text: '3 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Masterclass',
                                    text: 'Every 10 days',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1–2 Engineering Connects',
                                    text: 'Per week',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Jirathon',
                                    text: 'Every 2–3 weeks',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                }
                            ]
                        },
                        {
                            month: 2,
                            cards: [
                                {
                                    title: 'Bootcamps',
                                    text: 'Every 2 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1-2 Group Discussions',
                                    text: 'Evevy week',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1 Seminar every',
                                    text: '3 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Masterclass',
                                    text: 'Every 10 days',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1–2 Engineering Connects',
                                    text: 'Per week',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Jirathon',
                                    text: 'Every 2–3 weeks',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                }
                            ]
                        }
                    ],
                    yearAtAGlance: [
                        { type: 'Bootcamps', planned: '20 Sessions' },
                        { type: 'Group Discussions', planned: '60 Sessions' },
                        { type: 'Seminars', planned: '15 Sessions' },
                        { type: 'Masterclasses', planned: '30 Sessions' },
                        { type: 'Engineering Connects', planned: '60 Sessions' },
                        { type: 'Jirathons', planned: '15 Sessions' }
                    ],
                    yearAtAGlanceImages: {
                        masterClass: {
                            image: glance1,
                            time: '5:36'
                        },
                        experts: {
                            images: [
                                glance2,
                                glance3,
                                glance4,
                                glance5
                            ],
                            text: 'Mentored by Top Industry Experts'
                        }
                    },
                  curriculum: {
  keys: [
    { label: 'Bootcamp Topics', value: 'bootcampTopics' },
    { label: 'Bug-Based ScaleGrad Jirathon', value: 'bugBasedScaleGradJirathon' },
    { label: 'ScaleGrad Masterclass Plan', value: 'scaleGradMasterclassPlan' },
    { label: 'ScaleGrad Industry Seminar Plan', value: 'scaleGradIndustrySeminarPlan' }
  ],

  /* ----------------------------- */
  /*          BOOTCAMP            */
  /* ----------------------------- */
  bootcampTopics: {
    title: 'Bootcamp Topics',
    description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
    tableHeader: [
      { label: 'Topic', value: 'topic' },
      { label: 'Allocated Hours', value: 'hours' }
    ],
    tableBody: [
      { topic: "Python Basics", hours: "4 hrs" },
      { topic: "Git Basics", hours: "3 hrs" },
      { topic: "Java Basics", hours: "4 hrs" },
      { topic: "Git Workflow", hours: "3 hrs" },
      { topic: "Deep Python", hours: "5 hrs" },
      { topic: "VS Code Setup", hours: "3 hrs" },
      { topic: "Deep Java", hours: "5 hrs" },
      { topic: "Debugging", hours: "3 hrs" },
      { topic: "DSA Intro", hours: "4 hrs" },
      { topic: "Mini Web Project", hours: "5 hrs" },
      { topic: "OOPs in Java", hours: "4 hrs" },
      { topic: "HTML + CSS Basics", hours: "3 hrs" },
      { topic: "Loops & Patterns", hours: "3 hrs" },
      { topic: "JavaScript Intro", hours: "3 hrs" },
      { topic: "APIs Basics", hours: "4 hrs" },
      { topic: "Postman Usage", hours: "2 hrs" },
      { topic: "MySQL Basics", hours: "4 hrs" },
      { topic: "CRUD Operations", hours: "3 hrs" },
      { topic: "Final Bootcamp Sprint", hours: "5 hrs" },
      { topic: "Deployment Basics", hours: "3 hrs" }
    ]
  },

  /* ----------------------------- */
  /*          JIRATHON            */
  /* ----------------------------- */
  bugBasedScaleGradJirathon: {
    title: 'Bug-Based ScaleGrad Jirathon',
    description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
    tableHeader: [
      { label: 'Topic', value: 'topic' },
      { label: 'Allocated Hours', value: 'hours' }
    ],
    tableBody: [
      { topic: "Bug Ticket Creation", hours: "3 hrs" },
      { topic: "Jira Workflow", hours: "3 hrs" },
      { topic: "Bug Reproduction", hours: "4 hrs" },
      { topic: "Commit Fixes", hours: "4 hrs" },
      { topic: "Pull Requests", hours: "3 hrs" },
      { topic: "Sprint Testing", hours: "3 hrs" },
      { topic: "Merge & Deploy", hours: "4 hrs" },
      { topic: "Bug Review", hours: "2 hrs" },
      { topic: "Jira Labels & Filters", hours: "3 hrs" },
      { topic: "Story Points", hours: "2 hrs" },
      { topic: "Branching Strategy", hours: "3 hrs" },
      { topic: "Conflict Resolution", hours: "3 hrs" },
      { topic: "Hotfix Workflows", hours: "4 hrs" },
      { topic: "Release Notes", hours: "2 hrs" },
      { topic: "QA Bug Verification", hours: "4 hrs" },
      { topic: "Regression Testing", hours: "3 hrs" },
      { topic: "Scrum Cycle", hours: "3 hrs" },
      { topic: "Stand-up Reporting", hours: "2 hrs" },
      { topic: "Final Jira Challenge", hours: "5 hrs" },
      { topic: "Bug Showdown", hours: "2 hrs" }
    ]
  },

  /* ----------------------------- */
  /*         MASTERCLASS          */
  /* ----------------------------- */
  scaleGradMasterclassPlan: {
    title: 'ScaleGrad Masterclass Plan',
    description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
    tableHeader: [
      { label: 'Topic', value: 'topic' },
      { label: 'Allocated Hours', value: 'hours' }
    ],
    tableBody: [
      { topic: "Industry-Level Web Dev", hours: "5 hrs" },
      { topic: "API Integration", hours: "4 hrs" },
      { topic: "Node.js Advanced", hours: "5 hrs" },
      { topic: "Authentication", hours: "4 hrs" },
      { topic: "UI/UX Deep Dive", hours: "4 hrs" },
      { topic: "Performance Optimization", hours: "3 hrs" },
      { topic: "Cloud Basics", hours: "4 hrs" },
      { topic: "Docker Essentials", hours: "4 hrs" },
      { topic: "MongoDB Advanced", hours: "4 hrs" },
      { topic: "Database Indexing", hours: "3 hrs" },
      { topic: "React Advanced", hours: "5 hrs" },
      { topic: "State Management", hours: "3 hrs" },
      { topic: "API Security", hours: "4 hrs" },
      { topic: "JWT Flow", hours: "3 hrs" },
      { topic: "CI/CD Basics", hours: "4 hrs" },
      { topic: "GitHub Actions", hours: "4 hrs" },
      { topic: "Linux Commands", hours: "3 hrs" },
      { topic: "Server Monitoring", hours: "3 hrs" },
      { topic: "Masterclass Final Project", hours: "6 hrs" },
      { topic: "Project Demo", hours: "2 hrs" }
    ]
  },

  /* ----------------------------- */
  /*           SEMINAR            */
  /* ----------------------------- */
  scaleGradIndustrySeminarPlan: {
    title: 'ScaleGrad Industry Seminar Plan',
    description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
    tableHeader: [
      { label: 'Topic', value: 'topic' },
      { label: 'Allocated Hours', value: 'hours' }
    ],
    tableBody: [
      { topic: "LinkedIn Profile Building", hours: "2 hrs" },
      { topic: "Resume Mastery", hours: "2 hrs" },
      { topic: "Industry Insights", hours: "3 hrs" },
      { topic: "Corporate Culture", hours: "2 hrs" },
      { topic: "Interview Training", hours: "4 hrs" },
      { topic: "Mock Interviews", hours: "3 hrs" },
      { topic: "Communication Skills", hours: "2 hrs" },
      { topic: "Email Etiquette", hours: "1 hr" },
      { topic: "Career Guidance", hours: "3 hrs" },
      { topic: "Tech Roles Overview", hours: "2 hrs" },
      { topic: "Problem Solving", hours: "3 hrs" },
      { topic: "Group Discussion", hours: "2 hrs" },
      { topic: "Behavioral Interviews", hours: "3 hrs" },
      { topic: "Body Language", hours: "1 hr" },
      { topic: "Time Management", hours: "2 hrs" },
      { topic: "Task Prioritization", hours: "1 hr" },
      { topic: "Corporate Tools", hours: "3 hrs" },
      { topic: "Slack + Jira Basics", hours: "2 hrs" },
      { topic: "Final Seminar Q&A", hours: "2 hrs" },
      { topic: "Panel Interaction", hours: "1 hr" }
    ]
  }
}

                },
                2: {
                    header: {
                        title: 'PreEdge',
                        year: '2nd Year',
                        description: 'Professional-grade development with DevOps and cloud technologies',
                        totalHours: '180 Hours',
                        duration: '1 Year',
                        timings: '10:00 AM – 1:00 PM IST',
                        modeOfDelivery: 'Online classes',
                        keyPoints: [
                            '2h 30m on-demand video',
                            '22 coding exercises',
                            '15 articles',
                            'Certificate of completion',
                            'Full lifetime access'
                        ]
                    },
                    exploreCourses: [
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        }
                    ],
                    monthlyStructure: [
                        {
                            month: 1,
                            cards: [
                                {
                                    title: 'Bootcamps',
                                    text: 'Every 2 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1-2 Group Discussions',
                                    text: 'Evevy week',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1 Seminar every',
                                    text: '3 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Masterclass',
                                    text: 'Every 10 days',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1–2 Engineering Connects',
                                    text: 'Per week',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Jirathon',
                                    text: 'Every 2–3 weeks',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                }
                            ]
                        },
                        {
                            month: 2,
                            cards: [
                                {
                                    title: 'Bootcamps',
                                    text: 'Every 2 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1-2 Group Discussions',
                                    text: 'Evevy week',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1 Seminar every',
                                    text: '3 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Masterclass',
                                    text: 'Every 10 days',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1–2 Engineering Connects',
                                    text: 'Per week',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Jirathon',
                                    text: 'Every 2–3 weeks',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                }
                            ]
                        }
                    ],
                    yearAtAGlance: [
                        { type: 'Bootcamps', planned: '20 Sessions' },
                        { type: 'Group Discussions', planned: '60 Sessions' },
                        { type: 'Seminars', planned: '15 Sessions' },
                        { type: 'Masterclasses', planned: '30 Sessions' },
                        { type: 'Engineering Connects', planned: '60 Sessions' },
                        { type: 'Jirathons', planned: '15 Sessions' }
                    ],
                    yearAtAGlanceImages: {
                        masterClass: {
                            image: glance1,
                            time: '5:36'
                        },
                        experts: {
                            images: [
                                glance2,
                                glance3,
                                glance4,
                                glance5
                            ],
                            text: 'Mentored by Top Industry Experts'
                        }
                    },
    curriculum: {
keys: [
{ label: 'Bootcamp Topics', value: 'bootcampTopics' },
{ label: 'Bug-Based ScaleGrad Jirathon', value: 'bugBasedScaleGradJirathon' },
{ label: 'ScaleGrad Masterclass Plan', value: 'scaleGradMasterclassPlan' },
{ label: 'ScaleGrad Industry Seminar Plan', value: 'scaleGradIndustrySeminarPlan' }
],

/* ----------------------------- */
/*          BOOTCAMP            */
/* ----------------------------- */
bootcampTopics: {
title: 'Bootcamp Topics',
description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
tableHeader: [
{ label: 'Topic', value: 'topic' },
{ label: 'Allocated Hours', value: 'hours' }
],
tableBody: [
{ topic: "GitHub Branching & Collaboration", hours: "3 hrs" },
{ topic: "Python Basics Recap + Functions & Modules", hours: "3 hrs" },
{ topic: "Java Basics Recap + Loops & Methods", hours: "3 hrs" },
{ topic: "Python OOPs & File Handling", hours: "4 hrs" },
{ topic: "Java OOPs & Exception Handling", hours: "4 hrs" },
{ topic: "Advanced Data Structures", hours: "5 hrs" },
{ topic: "SQL Joins, Subqueries & Optimization", hours: "4 hrs" },
{ topic: "Responsive Design with Bootstrap & Flexbox", hours: "3 hrs" },
{ topic: "JavaScript ES6+ & DOM Manipulation", hours: "4 hrs" },
{ topic: "Jupyter Notebooks: Data Analysis with Pandas", hours: "4 hrs" },
{ topic: "Prompt Engineering", hours: "3 hrs" },
{ topic: "Excel Advanced Functions & Dashboards", hours: "3 hrs" },
{ topic: "REST APIs with Python Flask", hours: "4 hrs" },
{ topic: "Java JDBC & CRUD Project", hours: "4 hrs" },
{ topic: "Mini Full-Stack Web App", hours: "5 hrs" },
{ topic: "LinkedIn Profile Building", hours: "2 hrs" },
{ topic: "Open Slot", hours: "" },
{ topic: "Open Slot", hours: "" }
]
},

/* ----------------------------- */
/*          JIRATHON            */
/* ----------------------------- */
bugBasedScaleGradJirathon: {
title: 'Bug-Based ScaleGrad Jirathon',
description: 'Hands-on debugging challenges to strengthen real-world problem solving and code quality.',
tableHeader: [
{ label: 'Topic', value: 'topic' },
{ label: 'Allocated Hours', value: 'hours' }
],
tableBody: [
{ topic: "API Contract Chaos (Flask)", hours: "4" },
{ topic: "CORS, wrong status codes, schema mismatch", hours: "5" },
{ topic: "Transaction Tangle (Java + JDBC)", hours: "6" },
{ topic: "Missing rollbacks, dirty reads, connection leaks", hours: "4" },
{ topic: "Index or Indigestion? (SQL)", hours: "5" },
{ topic: "Wrong JOINs, missing composite indexes", hours: "3" },
{ topic: "Responsive Storefront v2", hours: "3" },
{ topic: "Fixed widths, layout issues, grid/flex errors", hours: "4" },
{ topic: "Async Bazaar (ES6+)", hours: "6" },
{ topic: "Race conditions, stale closures, broken promises", hours: "5" },
{ topic: "Data Clean Room (Pandas)", hours: "4" },
{ topic: "Mixed dtypes, SettingWithCopy, timezone issues", hours: "3" },
{ topic: "Excel → Python Pipeline", hours: "5" },
{ topic: "Formula errors, date serial issues, CSV dialect bugs", hours: "4" },
{ topic: "GitOps Rescue", hours: "3" },
{ topic: "Bad rebase, missing .gitignore, CI-only failures", hours: "5" },
{ topic: "OOP & Files 2.0 (Python)", hours: "6" },
{ topic: "Leaky file handles, bad subclassing, slow I/O", hours: "4" },
{ topic: "Logging & Observability Drill", hours: "4" },
{ topic: "Missing context, PII in logs, silent failures", hours: "6" },
{ topic: "JDBC Pagination & Search", hours: "5" },
{ topic: "Offset/limit bugs, SQL injection risks", hours: "3" },
{ topic: "Access Control 101", hours: "3" },
{ topic: "Auth check inconsistency, CSRF issues", hours: "6" },
{ topic: "Caching the Feed", hours: "4" },
{ topic: "Stale cache, no invalidation, JSON parse errors", hours: "3" },
{ topic: "ETL to Mini-Dashboard", hours: "6" },
{ topic: "Schema drift, timezone offsets, formatting issues", hours: "5" },
{ topic: "Capstone BugFest 2.0 (Full-Stack)", hours: "6" },
{ topic: "API drift, SQL errors, layout breaks, async races", hours: "5" }
]
},

/* ----------------------------- */
/*         MASTERCLASS          */
/* ----------------------------- */
scaleGradMasterclassPlan: {
title: 'ScaleGrad Masterclass Plan',
description: 'Expert-led deep-dive sessions focusing on advanced technical concepts and hands-on mastery.',
tableHeader: [
{ label: 'Topic', value: 'topic' },
{ label: 'Allocated Hours', value: 'hours' }
],
tableBody: [
{ topic: "Python Best Practices", hours: "2.5 hrs" },
{ topic: "Deep-dive session", hours: "2 hrs" },
{ topic: "Java Code Crafting", hours: "3 hrs" },
{ topic: "Hands-on coding", hours: "2.5 hrs" },
{ topic: "SQL Query Optimization", hours: "2 hrs" },
{ topic: "Query performance", hours: "2.5 hrs" },
{ topic: "Git & GitHub Deep Dive", hours: "2.5 hrs" },
{ topic: "Team collaboration", hours: "3 hrs" },
{ topic: "Responsive Design in HTML/CSS", hours: "3 hrs" },
{ topic: "UI responsiveness", hours: "2 hrs" },
{ topic: "Advanced JavaScript DOM", hours: "2 hrs" },
{ topic: "JS interaction", hours: "3 hrs" },
{ topic: "Debugging with VS Code", hours: "2.5 hrs" },
{ topic: "IDE mastery", hours: "2 hrs" },
{ topic: "OOP Concepts in Python", hours: "3 hrs" },
{ topic: "OOP fundamentals", hours: "2.5 hrs" },
{ topic: "Collections in Java", hours: "2 hrs" },
{ topic: "Java fundamentals", hours: "2.5 hrs" },
{ topic: "Frontend Performance Tips", hours: "3 hrs" },
{ topic: "Web performance", hours: "2 hrs" },
{ topic: "Data Cleaning with SQL", hours: "2.5 hrs" },
{ topic: "Data quality", hours: "3 hrs" },
{ topic: "GitHub Project Excellence", hours: "2 hrs" },
{ topic: "Project polishing", hours: "2.5 hrs" },
{ topic: "Python Data Handling", hours: "3 hrs" },
{ topic: "Data workflows", hours: "2 hrs" },
{ topic: "Testing & QA Essentials", hours: "2.5 hrs" },
{ topic: "Quality assurance", hours: "2 hrs" },
{ topic: "Debugging Enterprise-Scale Projects", hours: "3 hrs" },
{ topic: "Enterprise debugging", hours: "2.5 hrs" }
]
},

/* ----------------------------- */
/*           SEMINAR            */
/* ----------------------------- */
scaleGradIndustrySeminarPlan: {
title: 'ScaleGrad Industry Seminar Plan',
description: 'Interactive seminars featuring industry experts, future trends, and real-world insights.',
tableHeader: [
{ label: 'Topic', value: 'topic' },
{ label: 'Allocated Hours', value: 'hours' }
],
tableBody: [
{ topic: "AI Evolutions & Future Skills", hours: "2" },
{ topic: "Seminar Session", hours: "2" },
{ topic: "Cloud Computing for Engineers", hours: "1.5" },
{ topic: "Seminar Session", hours: "1.5" },
{ topic: "FinTech Disruption", hours: "2.5" },
{ topic: "Seminar Session", hours: "2.5" },
{ topic: "Cybersecurity Awareness", hours: "1" },
{ topic: "Seminar Session", hours: "1" },
{ topic: "DevOps in Real World", hours: "3" },
{ topic: "Seminar Session", hours: "3" },
{ topic: "Data Privacy & Compliance", hours: "1.5" },
{ topic: "Seminar Session", hours: "1.5" },
{ topic: "UI/UX Design Thinking", hours: "2" },
{ topic: "Seminar Session", hours: "2" },
{ topic: "Open Source Contribution", hours: "" },
{ topic: "Seminar Session", hours: "" }
]
}
}



                },
                3: {
                    header: {
                        title: 'MasterTrack',
                        year: '3rd Year',
                        description: 'Cloud-native applications and FinTech specialization',
                        totalHours: '180 Hours',
                        duration: '1 Year',
                        timings: '10:00 AM – 1:00 PM IST',
                        modeOfDelivery: 'Online classes',
                        keyPoints: [
                            '2h 30m on-demand video',
                            '22 coding exercises',
                            '15 articles',
                            'Certificate of completion',
                            'Full lifetime access'
                        ]
                    },
                    exploreCourses: [
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        }
                    ],
                    monthlyStructure: [
                        {
                            month: 1,
                            cards: [
                                {
                                    title: 'Bootcamps',
                                    text: 'Every 2 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1-2 Group Discussions',
                                    text: 'Evevy week',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1 Seminar every',
                                    text: '3 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Masterclass',
                                    text: 'Every 10 days',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1–2 Engineering Connects',
                                    text: 'Per week',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Jirathon',
                                    text: 'Every 2–3 weeks',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                }
                            ]
                        },
                        {
                            month: 2,
                            cards: [
                                {
                                    title: 'Bootcamps',
                                    text: 'Every 2 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1-2 Group Discussions',
                                    text: 'Evevy week',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1 Seminar every',
                                    text: '3 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Masterclass',
                                    text: 'Every 10 days',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1–2 Engineering Connects',
                                    text: 'Per week',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Jirathon',
                                    text: 'Every 2–3 weeks',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                }
                            ]
                        }
                    ],
                    yearAtAGlance: [
                        { type: 'Bootcamps', planned: '20 Sessions' },
                        { type: 'Group Discussions', planned: '60 Sessions' },
                        { type: 'Seminars', planned: '15 Sessions' },
                        { type: 'Masterclasses', planned: '30 Sessions' },
                        { type: 'Engineering Connects', planned: '60 Sessions' },
                        { type: 'Jirathons', planned: '15 Sessions' }
                    ],
                    yearAtAGlanceImages: {
                        masterClass: {
                            image: glance1,
                            time: '5:36'
                        },
                        experts: {
                            images: [
                                glance2,
                                glance3,
                                glance4,
                                glance5
                            ],
                            text: 'Mentored by Top Industry Experts'
                        }
                    },
              curriculum: {
keys: [
{ label: 'Bootcamp Topics', value: 'bootcampTopics' },
{ label: 'Bug-Based ScaleGrad Jirathon', value: 'bugBasedScaleGradJirathon' },
{ label: 'ScaleGrad Masterclass Plan', value: 'scaleGradMasterclassPlan' },
{ label: 'ScaleGrad Industry Seminar Plan', value: 'scaleGradIndustrySeminarPlan' }
],

/* ----------------------------- */
/*          BOOTCAMP            */
/* ----------------------------- */
bootcampTopics: {
title: 'Bootcamp Topics',
description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
tableHeader: [
{ label: 'Topic', value: 'topic' },
{ label: 'Allocated Hours', value: 'hours' }
],
tableBody: [
{ topic: "GitHub Actions & DevOps Fundamentals", hours: "4 hrs" },
{ topic: "Python Advanced: Generators, Decorators, Async", hours: "4 hrs" },
{ topic: "Java Advanced: Streams, Lambda, Concurrency", hours: "4 hrs" },
{ topic: "Redis for High-Speed Caching", hours: "4 hrs" },
{ topic: "Kafka for Real-Time Data Streaming", hours: "4 hrs" },
{ topic: "MongoDB CRUD + Indexing + Aggregation", hours: "4 hrs" },
{ topic: "CI/CD Pipelines with Jenkins & GitHub Actions", hours: "4 hrs" },
{ topic: "Microservices with Spring Boot", hours: "4 hrs" },
{ topic: "12-Factor App Design", hours: "4 hrs" },
{ topic: "React Fundamentals + Hooks + State Mgmt", hours: "4 hrs" },
{ topic: "Cloud Computing: AWS, Azure, GCP", hours: "3 hrs" },
{ topic: "Docker Deep Dive", hours: "3 hrs" },
{ topic: "Distributed Systems Concepts", hours: "4 hrs" },
{ topic: "API Gateways & Load Balancers", hours: "4 hrs" },
{ topic: "Observability Tools", hours: "3 hrs" },
{ topic: "Mini Full-Stack Web App", hours: "5 hrs" },
{ topic: "Open Slot", hours: "" },
{ topic: "Open Slot", hours: "" },
{ topic: "Open Slot", hours: "" },
{ topic: "Open Slot", hours: "" }
]
},

/* ----------------------------- */
/*          JIRATHON            */
/* ----------------------------- */
bugBasedScaleGradJirathon: {
title: 'Bug-Based ScaleGrad Jirathon',
description: 'Hands-on debugging challenges to strengthen real-world problem solving and code quality.',
tableHeader: [
{ label: 'Topic', value: 'topic' },
{ label: 'Allocated Hours', value: 'hours' }
],
tableBody: [
{ topic: "Pipeline Panic", hours: "3 hrs" },
{ topic: "Broken matrix jobs, wrong cache keys, leaked secrets, env mismatch, flaky tests", hours: "4 hrs" },
{ topic: "Async Safari (Python)", hours: "3 hrs" },
{ topic: "Blocking I/O, event-loop misuse, decorator side-effects, context-vars issues", hours: "4 hrs" },
{ topic: "Stream Team Nightmare (Java)", hours: "3 hrs" },
{ topic: "Race conditions, deadlocks, parallel stream misuse, hidden NPEs", hours: "4 hrs" },
{ topic: "Cache Crash (Redis)", hours: "2 hrs" },
{ topic: "Cache stampede, stale reads, wrong TTL, hot-key issues", hours: "4 hrs" },
{ topic: "Kafka Chaos Quest", hours: "3 hrs" },
{ topic: "Wrong acks, auto-commit traps, rebalance storms, schema evolution", hours: "4 hrs" },
{ topic: "Mongo Mayday", hours: "2 hrs" },
{ topic: "Missing indexes, slow aggregations, schema drift, write concern issues", hours: "4 hrs" },
{ topic: "Microservices on the Rocks", hours: "4 hrs" },
{ topic: "Service discovery errors, breaker defaults, config issues, LB loops", hours: "5 hrs" },
{ topic: "React Race & State Bugs", hours: "2 hrs" },
{ topic: "Stale closures, missing deps, memory leaks", hours: "4 hrs" },
{ topic: "Cloudy with a Chance of 500s", hours: "3 hrs" },
{ topic: "Bad routing, health checks, IAM perm issues, sticky sessions", hours: "4 hrs" },
{ topic: "Docker Doldrums & Distributed Drills", hours: "3 hrs" },
{ topic: "Wrong network aliases, log loss, no resource limits, clock skew", hours: "4 hrs" }
]
},

/* ----------------------------- */
/*         MASTERCLASS          */
/* ----------------------------- */
scaleGradMasterclassPlan: {
title: 'ScaleGrad Masterclass Plan',
description: 'Expert-led deep-dive sessions focusing on advanced technical concepts and hands-on mastery.',
tableHeader: [
{ label: 'Topic', value: 'topic' },
{ label: 'Allocated Hours', value: 'hours' }
],
tableBody: [
{ topic: "DevOps with GitHub Actions + Jenkins", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "Python Async Patterns for Data APIs", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "Java Streams & Concurrency", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "Redis Caching Strategies", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "Kafka Event-Driven Design", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "MongoDB Aggregations at Scale", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "Spring Boot Microservices + 12-Factor", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "React State & Data Fetching", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "Cloud Deploys behind API GW/LB", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "Docker Hardening & Supply Chain", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "Distributed Systems Essentials", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "API Gateway Patterns", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "Observability with OpenTelemetry", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "Progressive Delivery", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" },
{ topic: "Capstone Readiness", hours: "1 hr" },
{ topic: "Industry Use Case", hours: "1 hr" }
]
},

/* ----------------------------- */
/*           SEMINAR            */
/* ----------------------------- */
scaleGradIndustrySeminarPlan: {
title: 'ScaleGrad Industry Seminar Plan',
description: 'Interactive seminars featuring industry experts, future trends, and real-world insights.',
tableHeader: [
{ label: 'Topic', value: 'topic' },
{ label: 'Allocated Hours', value: 'hours' }
],
tableBody: [
{ topic: "India-Scale Payments (UPI/BBPS)", hours: "2 hrs" },
{ topic: "Real-Time Payment Systems", hours: "2 hrs" },
{ topic: "Event-Driven Apps with Kafka", hours: "2 hrs" },
{ topic: "Streaming & Message Pipelines", hours: "2 hrs" },
{ topic: "AI for KYC & Fraud Checks", hours: "2 hrs" },
{ topic: "Risk Intelligence Systems", hours: "2 hrs" },
{ topic: "Smart Contracts for Trade Finance", hours: "1.5 hrs" },
{ topic: "Blockchain Business Workflows", hours: "1.5 hrs" },
{ topic: "DevSecOps in BFSI", hours: "2 hrs" },
{ topic: "Security Automation", hours: "2 hrs" },
{ topic: "Business Communication for Engineers", hours: "1 hr" },
{ topic: "Professional Writing & Speaking", hours: "1 hr" },
{ topic: "Problem-Solving & Ownership Mindset", hours: "1.5 hrs" },
{ topic: "Decision-Making Frameworks", hours: "1.5 hrs" },
{ topic: "Teamwork, Meetings & Conflict Handling", hours: "2 hrs" },
{ topic: "Leadership & Collaboration", hours: "2 hrs" },
{ topic: "Time & Focus Management", hours: "1 hr" },
{ topic: "Productivity Skills", hours: "1 hr" },
{ topic: "Professional Ethics & Digital Etiquette", hours: "1 hr" },
{ topic: "Responsible Workplace Behavior", hours: "1 hr" }
]
}
}

                },
                4: {
                    header: {
                        title: 'Summit',
                        year: 'Final Year',
                        description: 'Advanced systems mastery with leadership focus',
                        totalHours: '180 Hours',
                        duration: '1 Year',
                        timings: '10:00 AM – 1:00 PM IST',
                        modeOfDelivery: 'Online classes',
                        keyPoints: [
                            '2h 30m on-demand video',
                            '22 coding exercises',
                            '15 articles',
                            'Certificate of completion',
                            'Full lifetime access'
                        ]
                    },
                    exploreCourses: [
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        },
                        {
                            image: courseImage,
                            title: 'Core',
                            hours: '120 Hours',
                            description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                            keys: ['Full-stack Apps', 'Advanced level'],
                        }
                    ],
                    monthlyStructure: [
                        {
                            month: 1,
                            cards: [
                                {
                                    title: 'Bootcamps',
                                    text: 'Every 2 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1-2 Group Discussions',
                                    text: 'Evevy week',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1 Seminar every',
                                    text: '3 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Masterclass',
                                    text: 'Every 10 days',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1–2 Engineering Connects',
                                    text: 'Per week',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Jirathon',
                                    text: 'Every 2–3 weeks',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                }
                            ]
                        },
                        {
                            month: 2,
                            cards: [
                                {
                                    title: 'Bootcamps',
                                    text: 'Every 2 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1-2 Group Discussions',
                                    text: 'Evevy week',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1 Seminar every',
                                    text: '3 weeks',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Masterclass',
                                    text: 'Every 10 days',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                },
                                {
                                    title: '1–2 Engineering Connects',
                                    text: 'Per week',
                                    backgroundColor: '#14CEC3',
                                    titleColor: '#2528CB'
                                },
                                {
                                    title: '1 Jirathon',
                                    text: 'Every 2–3 weeks',
                                    backgroundColor: '#2528CB',
                                    titleColor: '#FFCA00'
                                }
                            ]
                        }
                    ],
                    yearAtAGlance: [
                        { type: 'Bootcamps', planned: '20 Sessions' },
                        { type: 'Group Discussions', planned: '60 Sessions' },
                        { type: 'Seminars', planned: '15 Sessions' },
                        { type: 'Masterclasses', planned: '30 Sessions' },
                        { type: 'Engineering Connects', planned: '60 Sessions' },
                        { type: 'Jirathons', planned: '15 Sessions' }
                    ],
                    yearAtAGlanceImages: {
                        masterClass: {
                            image: glance1,
                            time: '5:36'
                        },
                        experts: {
                            images: [
                                glance2,
                                glance3,
                                glance4,
                                glance5
                            ],
                            text: 'Mentored by Top Industry Experts'
                        }
                    },
                 curriculum: {
keys: [
{ label: 'Bootcamp Topics', value: 'bootcampTopics' },
{ label: 'Bug-Based ScaleGrad Jirathon', value: 'bugBasedScaleGradJirathon' },
{ label: 'ScaleGrad Masterclass Plan', value: 'scaleGradMasterclassPlan' },
{ label: 'ScaleGrad Industry Seminar Plan', value: 'scaleGradIndustrySeminarPlan' }
],

/* ----------------------------- */
/*          BOOTCAMP            */
/* ----------------------------- */
bootcampTopics: {
title: 'Bootcamp Topics',
description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
tableHeader: [
{ label: 'Topic', value: 'topic' },
{ label: 'Allocated Hours', value: 'hours' }
],
tableBody: [
{ topic: "CodeOps: GitHub & Actions Bootcamp", hours: "4 hrs" },
{ topic: "Microservices Engineering with Spring Boot", hours: "5 hrs" },
{ topic: "Lightning Fast Caching with Redis", hours: "4 hrs" },
{ topic: "KafkaStorm: Real-Time Data Streaming Bootcamp", hours: "5 hrs" },
{ topic: "NoSQL Mastery: MongoDB for Modern Apps", hours: "4 hrs" },
{ topic: "15-Factor App Design: Cloud-Native Resilience", hours: "4 hrs" },
{ topic: "ReactVerse: Building Interactive UIs", hours: "4 hrs" },
{ topic: "Agentic AI & GenAI Mastery with Python", hours: "5 hrs" },
{ topic: "DevFlow: CI/CD Pipeline & Automation", hours: "4 hrs" },
{ topic: "CloudCraft: AWS, Azure & Beyond", hours: "4 hrs" },
{ topic: "Containers in Action: Docker & Kubernetes Essentials", hours: "4 hrs" },
{ topic: "DSystems 101: Distributed Architecture", hours: "4 hrs" },
{ topic: "FinTech Unboxed: Decode the Future of Finance", hours: "4 hrs" },
{ topic: "AlphaTrack: Equity Trading Strategies Bootcamp", hours: "4 hrs" },
{ topic: "TradeTech: Inside Electronic Trading Systems", hours: "5 hrs" },
{ topic: "PayStack: Demystifying Payment Systems", hours: "4 hrs" },
{ topic: "Equity Trading Final Project Sprint", hours: "5 hrs" },
{ topic: "Payments Tech Final Project Sprint", hours: "5 hrs" },
{ topic: "Resume Building & Technical Interview Prep", hours: "3 hrs" },
{ topic: "Resume Building & Personal Behavior Prep", hours: "3 hrs" }
]
},

/* ----------------------------- */
/*          JIRATHON            */
/* ----------------------------- */
bugBasedScaleGradJirathon: {
title: 'Bug-Based ScaleGrad Jirathon',
description: 'Hands-on debugging challenges to strengthen real-world problem solving and code quality.',
tableHeader: [
{ label: 'Topic', value: 'topic' },
{ label: 'Allocated Hours', value: 'hours' }
],
tableBody: [
{ topic: "Broken Order Matching Engine", hours: "2 hrs" },
{ topic: "Queue, Price Match & Rounding Errors", hours: "2 hrs" },
{ topic: "UPI Stack Glitch", hours: "2 hrs" },
{ topic: "Token Mismatch & PSP Response Issues", hours: "2 hrs" },
{ topic: "Kafka Stream Breakpoint", hours: "3 hrs" },
{ topic: "Partitioning & Offset Lag Bugs", hours: "3 hrs" },
{ topic: "Docker Compose Confusion", hours: "2 hrs" },
{ topic: "Ports, Volumes & Env Conflicts", hours: "2 hrs" },
{ topic: "CI/CD Pipeline Jam", hours: "3 hrs" },
{ topic: "GitHub Actions YAML Errors", hours: "3 hrs" },
{ topic: "React Real-Time Glitch", hours: "2 hrs" },
{ topic: "State Delay & Re-render Bugs", hours: "2 hrs" },
{ topic: "AI Agent Failure Case", hours: "3 hrs" },
{ topic: "Prompting & Retrieval Errors", hours: "3 hrs" },
{ topic: "GitHub Pages Break", hours: "2 hrs" },
{ topic: "Pathing, Build & Deploy Issues", hours: "2 hrs" },
{ topic: "Cloud Cost Blowup", hours: "3 hrs" },
{ topic: "Autoscaling & Resource Issues", hours: "3 hrs" },
{ topic: "Final Project BugFest", hours: "4 hrs" },
{ topic: "Fullstack + DevOps Final Fixathon", hours: "4 hrs" }
]
},

/* ----------------------------- */
/*         MASTERCLASS          */
/* ----------------------------- */
scaleGradMasterclassPlan: {
title: 'ScaleGrad Masterclass Plan',
description: 'Expert-led deep-dive sessions focusing on advanced technical concepts and hands-on mastery.',
tableHeader: [
{ label: 'Topic', value: 'topic' },
{ label: 'Allocated Hours', value: 'hours' }
],
tableBody: [
{ topic: "Designing Agentic AI Systems in Python", hours: "1.5 hrs" },
{ topic: "LLMs in FinTech: Use Cases & Risks", hours: "1.5 hrs" },
{ topic: "ML Models in Capital Markets", hours: "1.5 hrs" },
{ topic: "Blockchain in FinTech", hours: "1.5 hrs" },
{ topic: "UPI: Inside India’s Payment Stack", hours: "1.5 hrs" },
{ topic: "SWIFT & ISO 20022 Explained", hours: "1.5 hrs" },
{ topic: "Trading System Architecture", hours: "1.5 hrs" },
{ topic: "Designing Secure FinTech APIs", hours: "1.5 hrs" },
{ topic: "Observability & Telemetry in Cloud Systems", hours: "1.5 hrs" },
{ topic: "FinTech Dashboards with React + Charts", hours: "1.5 hrs" },
{ topic: "Tokenization & Privacy in Digital Finance", hours: "1.5 hrs" },
{ topic: "DevSecOps in Action", hours: "1.5 hrs" },
{ topic: "Debugging at Production Scale", hours: "1.5 hrs" },
{ topic: "Resume & Tech Interview Ready", hours: "1.5 hrs" },
{ topic: "Capstone Demo Masterclass", hours: "1.5 hrs" },
{ topic: "Final Q&A + Industry Feedback", hours: "1.5 hrs" }
]
},

/* ----------------------------- */
/*           SEMINAR            */
/* ----------------------------- */
scaleGradIndustrySeminarPlan: {
title: 'ScaleGrad Industry Seminar Plan',
description: 'Interactive seminars featuring industry experts, future trends, and real-world insights.',
tableHeader: [
{ label: 'Topic', value: 'topic' },
{ label: 'Allocated Hours', value: 'hours' }
],
tableBody: [
{ topic: "System Design in Tech Giants", hours: "2 hrs" },
{ topic: "UPI & Bharat BillPay", hours: "2 hrs" },
{ topic: "SWIFT + CBDCs", hours: "2 hrs" },
{ topic: "AI in Finance", hours: "2 hrs" },
{ topic: "Tech Founders’ Roundtable", hours: "2 hrs" },
{ topic: "Cloud FinOps & Cost Visibility", hours: "2 hrs" },
{ topic: "Inclusive FinTech Design", hours: "1.5 hrs" },
{ topic: "Tokenization vs Traditional Security", hours: "1.5 hrs" },
{ topic: "Next-Gen Trading Infrastructure", hours: "2 hrs" },
{ topic: "LLMs + Human Feedback Systems", hours: "2 hrs" },
{ topic: "Building for India Stack", hours: "1.5 hrs" },
{ topic: "Women in Engineering Leadership", hours: "1.5 hrs" },
{ topic: "AI Policy & Data Privacy", hours: "2 hrs" },
{ topic: "Tech for Social Good", hours: "2 hrs" },
{ topic: "FinTech Regulations Crash Course", hours: "2 hrs" },
{ topic: "Industry Case Study Roundtable", hours: "2 hrs" }
]
}
}

                }
            }
        }
    },
    computed: {
        curriculumYear() {
            return this.$route.params.year;
        },
        data() {
            return this.module[this.curriculumYear] || {};
        }
    }
}
</script>
<style scoped>
    .header-bg {
        background: url('../../assets/SpaceImage.svg');
        background-size: cover 80%;
        background-position: top center;
        background-repeat: no-repeat;
    }
    .header-title {
        font-size: 3.6rem;
        font-weight: 600;
        line-height: 60px;
        color: #FFCA00;
    }
    .header-title-1 {
        font-size: 28px;
    }
    .header-sub-title {
        font-size: 2rem;
        color: #ffffff;
    }

    .header-content-box {
        background: linear-gradient(180deg, #2528CB 0%, #121465 100%);
        .label {
            font-size: 16px;
            color: #FFCA00;
            font-weight: 500;
        }
        .value {
            font-size: 20px;
            color: #fff;
            line-height: 20px;
            font-weight: 500;
        }
    }

    .exposer-title {
        font-size:  2.8rem;
        color: #141534;
        line-height: 3rem;
        font-weight: 600;
        padding-bottom: 20px;
        font-family: poppins, sans-serif;
    }   
    
    .custom-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
    }

    .exposer-description {
        font-size: 20px;
        font-weight: 600;
        color: #45464E
    }

    .structureMonthTitle {
        font-size: 34px;
        color: #E7B008;
        font-weight: 600;
    }
    .monthCardTitle {
        font-weight: 600;
        font-size: 32px;
        line-height: 36px;
    }
    .monthCardText {
        font-size: 24px;
        line-height: 30px;
    }
    .month-card-number {
        position: absolute;
        top: 0;
        right: 50px;
        font-size: 90px;
        font-weight: 900;
        color: #FFFFFF;
        opacity: 0.3;
    }

    .yearAtAGlance {
        .header {
            background: #2528CB;
            color: #ffffff;
            font-size: 1.2rem;
            font-weight: 700;
        }
        .body {
            color: #676767;
            font-size: 16px;
            font-weight: 500;
        }
    }

    .curriculumTabs {
        box-shadow: 0px 1px 14px 2px #0000000F;
        border-radius: 10px;
        font-size: 18px;
        line-height: 38px;
        padding: 20px 14px;
        font-weight: 600;
        color: #000000;
        text-align: start;
        margin-bottom: 10px;
    }

    .curriculumTabs.active {
        background: #2528CB;
    }

    .curriculumTabContent {
        box-shadow: 0px 0px 14px 2px #0000000F;
        border: none;
        width: 100%;
        .title { 
            font-size: 1.6rem;
            color: #000000;
            font-weight: 600;
            font-family: poppins, sans-serif;
        }
        .description {
            color: #45464E;
            font-size: 1rem;
            font-family: poppins, sans-serif;
        }
        .tableBox {
            max-height: 400px;
            overflow-x: hidden;
            overflow-y: scroll;
            
        }
        /* Style the entire scrollbar */
        .tableBox::-webkit-scrollbar {
            width: 8px;
        }
        /* Style the scrollbar track */
        .tableBox::-webkit-scrollbar-track {
            background: #E2E8F0;
            border-radius: 8px;
        }
        /* Style the scrollbar thumb */
        .tableBox::-webkit-scrollbar-thumb {
            background: #2528CB;
            border-radius: 10px;
        }
        /* Style the scrollbar thumb on hover */
        .tableBox::-webkit-scrollbar-thumb:hover {
            background: #2528CB;
        }
        .tableHeader th{
            color: #2528CB!important;
            font-size: 20px;
            font-weight: 600;
        }
        .tableBody {
            color: #676767;
            font-size: 16px;
        }
    }

    @media only screen and (max-width: 767px) {
        .header-bg {
            background: url('../../assets/SpaceImage.svg');
            background-size: cover;
            background-position: top center;
            background-repeat: no-repeat;
            border-radius: 12px;
        }
        .header-title {
            font-size: 2rem;
            font-weight: 600;
            line-height: 36px;
            color: #FFCA00;
        }
        .header-title-1 {
            font-size: 20px;
            line-height: 28px;
        }
        .header-sub-title {
            font-size: 16px;
            color: #ffffff;
        }

        .header-content-box {
            height: 100%;
            .label {
                text-align: left;
                font-size: 10px;
                color: #fff;
                font-weight: 500;
            }
            .value {
                text-align: left;
                font-size: 16px;
                color: #fff;
                line-height: 20px;
                font-weight: 500;
            }
        }

        .exposer-title {
            font-size: 24px;
            line-height: 32px;

        }
        .custom-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
        }
        .exposer-description {
            font-size: 14px;
            font-weight: 600;
            color: #45464E
        }

        .structureMonthTitle {
            font-size: 20px;
            color: #E7B008;
            font-weight: 600;
        }
        .monthCardTitle {
            font-size: 14px;
            line-height: 20px;
        }
        .monthCardText {
            font-size: 12px;
            line-height: 16px;
        }
        .month-card-number {
            position: absolute;
            top: 0;
            right: 10px;
            font-size: 60px;
            font-weight: 900;
            color: #FFFFFF;
            opacity: 0.3;
        }
        .curriculumTabContent {
            box-shadow: 0px 0px 14px 2px #0000000F;
            border: none;
            width: 100%;
            .tableBox::-webkit-scrollbar {
                width: 0px;
            }
            .title {
                font-size: 1rem;
                color: #000000;
                font-weight: 600;
                font-family: poppins, sans-serif;
            }
            .description {
                color: #45464E;
                font-size: 12px;
                font-family: poppins, sans-serif;
            }
            .tableBox {
                max-height: 400px;
                overflow-x: hidden;
                overflow-y: scroll;
            }
            .tableHeader th {
                color: #2528CB!important;
                font-size: 14px;
                font-weight: 600;
            }
            .tableBody {
                color: #676767;
                font-size: 12px;
            }
        }
    }
</style>