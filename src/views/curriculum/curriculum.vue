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
                            { label: 'Bootcamp Topics', value: 'bootcampTopics'},
                            { label: 'Bug-Based ScaleGrad Jirathon', value: 'bugBasedScaleGradJirathon' },
                            { label: 'ScaleGrad Masterclass Plan', value: 'scaleGradMasterclassPlan' },
                            { label: 'ScaleGrad Industry Seminar Plan', value: 'scaleGradIndustrySeminarPlan' }
                        ],
                        bootcampTopics: {
                            title: 'Bootcamp Topics',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
                            ]
                        },
                        bugBasedScaleGradJirathon: {
                            title: 'Bug-Based ScaleGrad Jirathon',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
                            ]
                        },
                        scaleGradMasterclassPlan: {
                            title: 'ScaleGrad Masterclass Plan',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
                            ]
                        },
                        scaleGradIndustrySeminarPlan: {
                            title: 'ScaleGrad Industry Seminar Plan',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
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
                            { label: 'Bootcamp Topics', value: 'bootcampTopics'},
                            { label: 'Bug-Based ScaleGrad Jirathon', value: 'bugBasedScaleGradJirathon' },
                            { label: 'ScaleGrad Masterclass Plan', value: 'scaleGradMasterclassPlan' },
                            { label: 'ScaleGrad Industry Seminar Plan', value: 'scaleGradIndustrySeminarPlan' }
                        ],
                        bootcampTopics: {
                            title: 'Bootcamp Topics',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
                            ]
                        },
                        bugBasedScaleGradJirathon: {
                            title: 'Bug-Based ScaleGrad Jirathon',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
                            ]
                        },
                        scaleGradMasterclassPlan: {
                            title: 'ScaleGrad Masterclass Plan',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
                            ]
                        },
                        scaleGradIndustrySeminarPlan: {
                            title: 'ScaleGrad Industry Seminar Plan',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
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
                            { label: 'Bootcamp Topics', value: 'bootcampTopics'},
                            { label: 'Bug-Based ScaleGrad Jirathon', value: 'bugBasedScaleGradJirathon' },
                            { label: 'ScaleGrad Masterclass Plan', value: 'scaleGradMasterclassPlan' },
                            { label: 'ScaleGrad Industry Seminar Plan', value: 'scaleGradIndustrySeminarPlan' }
                        ],
                        bootcampTopics: {
                            title: 'Bootcamp Topics',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
                            ]
                        },
                        bugBasedScaleGradJirathon: {
                            title: 'Bug-Based ScaleGrad Jirathon',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
                            ]
                        },
                        scaleGradMasterclassPlan: {
                            title: 'ScaleGrad Masterclass Plan',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
                            ]
                        },
                        scaleGradIndustrySeminarPlan: {
                            title: 'ScaleGrad Industry Seminar Plan',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
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
                            { label: 'Bootcamp Topics', value: 'bootcampTopics'},
                            { label: 'Bug-Based ScaleGrad Jirathon', value: 'bugBasedScaleGradJirathon' },
                            { label: 'ScaleGrad Masterclass Plan', value: 'scaleGradMasterclassPlan' },
                            { label: 'ScaleGrad Industry Seminar Plan', value: 'scaleGradIndustrySeminarPlan' }
                        ],
                        bootcampTopics: {
                            title: 'Bootcamp Topics',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
                            ]
                        },
                        bugBasedScaleGradJirathon: {
                            title: 'Bug-Based ScaleGrad Jirathon',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
                            ]
                        },
                        scaleGradMasterclassPlan: {
                            title: 'ScaleGrad Masterclass Plan',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
                            ]
                        },
                        scaleGradIndustrySeminarPlan: {
                            title: 'ScaleGrad Industry Seminar Plan',
                            description: 'Hands-on technical training sessions designed to build real-world coding and problem-solving skills.',
                            tableHeader: [
                                { label: 'Topic', value: 'topic' },
                                { label: 'Allocated Hours', value: 'hours' }
                            ],
                            tableBody: [
                                {topic : "Python Basics",hours :"4 hrs"},
                                {topic : "Git & GitHub Basics",hours :"3 hrs"},
                                {topic : "Java Basics",hours :"4 hrs"},
                                {topic : "GitHub Project Workflow",hours :"3 hrs"},
                                {topic : "Paython Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Working with VS Code",hours :"3 hrs"},
                                {topic : "Java Concepts (Deep Dive)",hours :"5 hrs"},
                                {topic : "Jupyter Notebook Bootcamp",hours :"3 hrs"},
                                {topic : "Logic Building & Problem Solving",hours :"3 hrs"},
                                {topic : "Debugging Techniques",hours :"3 hrs"},
                                {topic : "Data Structures (Intro)",hours :"4 hrs"},
                                {topic : "Excel for Engineers",hours :"3 hrs"},
                                {topic : "SQL Basics",hours :"3 hrs"},
                                {topic : "Mini Web Project (HTML + CSS + JS)",hours :"5 hrs"},
                                {topic : "SQL Concepts (Deep Dive)",hours :"4 hrs"},
                                {topic : "Final Project Sprint + Showcase",hours :"5 hrs"},
                                {topic : "HTML & CSS Basics",hours :"4 hrs"},
                                {topic : "HTML+CSS Project Bootcamp",hours :"4 hrs"},
                                {topic : "JavaScript Basics",hours :"4 hrs"},
                                {topic : "JavaScript Mini Project",hours :"4 hrs"},
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
        padding-bottom: 20px
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
        }
        .description {
            color: #45464E;
            font-size: 1rem;
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
            }
            .description {
                color: #45464E;
                font-size: 12px;
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