<template>
    <div class="main-container-1">
        <div class="header-bg rounded-4 mx-3">
            <div class="card-body text-center container py-3">
                <Navbar />

                <div class="bg-white d-inline-flex mt-5 py-2 px-3 rounded-pill header-box-content">
                    🎓 Industry-Ready Training &nbsp;• 🚀 AI-Powered Learning&nbsp; • 💼 Career Support
                </div>

                <div class="header-title mx-auto">
                    AI Powered Platform for Building <span style="color: #FFCA00; font-weight: 800;">Day-1-Onboarding Talent</span>  Accelerated on 
                    GCC Devlabs for Career Readiness Specialized DeepTech and FinTech.
                </div>

                <div class="d-flex justify-content-center">
                    <img
                        v-for="icon in headerIons"
                        :src="icon"
                        style="aspect-ratio: 1/1; max-width: 35px;"
                        class="mx-1"
                    />
                </div>
                <div class="d-flex justify-content-center py-5">
                    <a href="#" class="btn nav-btn-primary rounded-pill">Start Your Journey</a>
                    <router-link class="btn nav-btn-secondary rounded-pill ms-3 me-2" :to="'/demo'">
                        Watch Demo
                        <img :src="playIcon" class="ms-3"/>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="container desktop-image">
            <img :src="systemImage" class="w-100 px-3"/>
        </div>

        <div class="container py-md-5 mt-5">
            <div class="row">
                <div class="col-12 col-lg-6 d-none d-md-block">
                    <img :src="s1000016649" class="w-100"/>
                </div>
                <div class="col-12 col-lg-6 accelerated">
                    <div class="title">Accelerated Careers on GCC Dev Labs</div>
                    <p class="italic-text"><i>Powered by ScaleGrad</i></p>
                    <div class="sub-title">What is ScaleGrad?</div>
                    <p class="description pb-3">ScaleGrad bridges the gap between academic theory and industry readiness by transforming students into Day-1 deployable talent through AI-powered labs, DeepTech & FinTech programs, and real-world Global Capability Centers(GCC)-modeled labs-empowering campuses to become career launchpads.</p>
                    <div class="col-12 d-block d-md-none">
                        <img :src="s1000016649" class="w-100"/>
                    </div>
                    <div class="row border rounded-4 mx-2 mt-3 py-3">
                        <div class="col-5 text-center p-3 border-end">
                            <div class="card-number">40+</div>
                            <div class="card-label">DeepTech & FinTech Courses</div>
                        </div>
                        <div class="col text-center p-3 border-end">
                            <div class="card-number">2000+</div>
                            <div class="card-label">Students</div>
                        </div>
                        <div class="col text-center p-3">
                            <div class="card-number">10+</div>
                            <div class="card-label">Corporates</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container py-5">
            <div class="card scaleGuardMission rounded-4">   
                <div class="row">
                    <div class="col-12 col-lg-5  p-4 ps-lg-5 pt-lg-5">
                        <div class="title">FROM FIRST YEAR<br></br> TO FINAL PLACEMENT</div>
                        <div class="description">—ONE PLATFROM TO LEARN, BUILD, AND<br></br> GET HIRED ALL IN CAMPUS WALLS.</div>
                        <button class="btn rounded-pill button px-3 my-lg-5 my-4">ScaleGrad Mission</button>
                    </div>
                    <div class="col-12 col-lg-7 d-none d-lg-block">
                        <img :src="s1000016895" style="width: 100%"/>
                    </div>
                     <div class="col-12 col-lg-7 d-block d-lg-none">
                        <img :src="s1000016770" style="width: 100%"/>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="container Glimpse py-5">
            <div class="title">A Glimpse into a Student’s</div>
            <div class="sub-title">1-Month Journey at ScaleGrad</div>
            <div class="description">Each month at ScaleGrad blends Bootcamps, Seminars, GCC Labs, Jirathons, and AI-led discussions to deliver real-world, engaging learning. A gamified 
                point system rewards students with badges and outcomes, while the program adapts yearly to align with their academic growth and industry readiness.</div>
        </div>

        <!-- <keyActivities /> -->
        <div class="container-fluid d-none d-lg-block">
            <img :src="keyActivitiesLg" class="w-100"/>
        </div>
        <div class="container-fluid keyActivities d-block d-lg-none">
            <img :src="s1000016791" class="image"/>

            <div class="card" v-for="card in keyActivities">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <img :src="card.icon" class="icon"/>
                        <div class="title">&nbsp;&nbsp;{{ card.title }}</div>
                    </div>
                    <div class="description">{{ card.description }}</div>

                    <table class="table table-borderless mt-3">
                        <tbody>
                            <tr>
                                <th style="min-width: 50%"> <img :src="s1000016641"/>&nbsp;{{ card.keys[0] }}</th>
                                <th class="ps-2"> <img :src="s1000016641"/>&nbsp;{{ card.keys[1] }}</th>
                            </tr>
                            <tr>
                                <th> <img :src="s1000016641"/>&nbsp;{{ card.keys[2] }}</th>
                                <th class="ps-2"> <img :src="s1000016641"/>&nbsp;{{ card.keys[3] }}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="container py-lg-5 py-4">
            <div class="card ScaleGrad rounded-4 border-0 p-2">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <div class="title">ScaleGrad’s Prep</div>
                            <div class="sub-title">Industry readiness via DeepTech and FinTech at a Glance</div>
                            <div class="text">Your Yearly Prep includes:</div>
                            <div class="row">
                                <div class="col-6" v-for="item in [
                                    { value: '100+', label: 'Sessions' },
                                    { value: '50+', label: 'Level 1 & 2 Assignments with Instant AI Evaluation' },
                                    { value: '10+', label: 'AI Mock Interviews' },
                                    { value: '30+', label: 'Jirathons & Hackathons' }
                                ]">
                                    <div class="value">{{ item.value }}</div>
                                    <div class="label">{{ item.label }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-lg-8 d-none d-lg-block">
                            <div class="custom-grid">
                                <marquee direction="up" height="350px" behavior="alternate">
                                    <div class="row g-4">
                                        <div class="col-12 py-4"></div>
                                        <div class="col-12"><img class="w-100" :src="aws" /></div>
                                        <div class="col-12"><img class="w-100" :src="docker" /></div>
                                        <div class="col-12"><img class="w-100" :src="node" /></div>
                                    </div>
                                </marquee>
                                <marquee direction="up" height="350px" behavior="alternate">
                                    <div class="row g-4">
                                        <div class="col-12"><img class="w-100" :src="jankins" /></div>
                                        <div class="col-12"><img class="w-100" :src="node" /></div>
                                        <div class="col-12"><img class="w-100" :src="java" /></div>
                                    </div>
                                </marquee>
                                <marquee direction="up" height="350px" behavior="alternate">
                                    <div class="row g-4">
                                        <div class="col-12 py-4"></div>
                                        <div class="col-12"><img class="w-100" :src="react" /></div>
                                        <div class="col-12"><img class="w-100" :src="java" /></div>
                                        <div class="col-12"><img class="w-100" :src="jankins" /></div>
                                    </div>
                                </marquee>
                                <marquee direction="up" height="350px" behavior="alternate">
                                    <div class="row g-4">
                                        <div class="col-12"><img class="w-100" :src="jankins" /></div>
                                        <div class="col-12"><img class="w-100" :src="node" /></div>
                                        <div class="col-12"><img class="w-100" :src="aws" /></div>
                                    </div>
                                </marquee>
                                <marquee direction="up" height="350px" behavior="alternate">
                                    <div class="row g-4">
                                        <div class="col-12 py-4"></div>
                                        <div class="col-12"><img class="w-100" :src="java" /></div>
                                        <div class="col-12"><img class="w-100" :src="docker" /></div>
                                        <div class="col-12"><img class="w-100" :src="react" /></div>
                                    </div>
                                </marquee>
                            </div>
                        </div>
                        <div class="col-12 d-block d-lg-none pt-3">
                                <div class="w-100" style="overflow-x: hidden">
                                    <div class="marquee-track">
                                    <div class="row horizontal-row ">
                                        <div class="col-4" v-for="item in tools">
                                            <img class="w-100" :src="item" />
                                        </div>
                                    </div>
                                    <div class="row horizontal-row mt-3">
                                        <div class="col-4" v-for="item in tools">
                                            <img class="w-100" :src="item" />
                                        </div>
                                    </div>
                                </div>
                                </div>
                                
                        </div>
                    </div>
                </div>
            </div>

            <div class="card student-module rounded-4 border-0 p-3 my-5">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="title">Student Journey with</div>
                            <p class="sub-title">ScaleGrad Platform</p>
                            <div class="text">The ScaleGrad Platform offers a year-wise progression model that grows with the student—starting from foundational programming to industry specialization and placement readiness.</div>
                        </div>
                        <div class="col-12 col-lg-6 pt-4 pt-lg-0">
                            <div class="row align-items-end">
                                <div v-for="(item ,index) in studentData" class="col-4 text-center" :class="index == 0 ? 'active' : ''">
                                    <img class="image" :src="item.image"/>
                                    <div class="label">{{ item.label }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Courses />
        </div>

        <ScaleGuardBoostars />

        <StudentSuccessStories />

        <div class="container py-5">
            <img :src="s1000016811" style="width: 100%;"/>
        </div> 

        <div class="container-fluid py-5" style="background-color: #F3F5F4;">
            <div class="corporate-title text-center mb-5">
                 Corporate <i style="color: #2528CB">Placements</i>
            </div>
            <div class="custom-grid container">
                <div class="grid-item align-middle" v-for="icon in corporateIcons">
                    <img :src="icon"/>
                </div>
            </div>
        </div>

        <Footer />
    </div>
   
   
</template>
<script>
// components
import Navbar from "../components/Navbar.vue"
import keyActivities from "./keyActivities.vue"
import Courses from "./Courses.vue"
import ScaleGuardBoostars from "./ScaleGuardBoostars.vue"
import StudentSuccessStories from "./StudentSuccessStories.vue"
import Footer from "./Footer.vue"

// images 
import iconA from "../assets/icons/A.svg"
import iconB from "../assets/icons/B.svg"
import iconC from "../assets/icons/AWS.png"
import iconD from "../assets/icons/D.svg"
import iconE from "../assets/icons/E.svg"
import iconF from "../assets/icons/F.svg"
import iconG from "../assets/icons/G.svg"
import playIcon from "../assets/buttonIcons/playIcon.svg"
import headerBackground from "../assets/headerBackground.svg"
import systemImage from "../assets/systamImage.svg"
import keyActivitiesLg from "../assets/keyActivitiesLg.svg";

import s1000016649 from "../assets/1000016649.svg"
import s1000016895 from "../assets/1000016895.svg"
import s1000016770 from "../assets/1000016770.svg"
import s1000016791 from "../assets/1000016791.svg"



import week1 from "../assets/week1.svg"
import week2 from "../assets/week2.svg"
import week3 from "../assets/week3.svg"
import week4 from "../assets/week4.svg"
import s1000016641 from "../assets/1000016641.svg"

import group1 from "../assets/Group.svg"
import group2 from "../assets/Group-1.svg"
import group3 from "../assets/Group-2.svg"

import s1000016811 from "../assets/1000016811.svg";

import s11 from "../assets/corporates/11.svg"
import s12 from "../assets/corporates/12.svg"
import s13 from "../assets/corporates/13.svg"
import s14 from "../assets/corporates/14.svg"
import s15 from "../assets/corporates/15.svg"
import s16 from "../assets/corporates/16.svg"
import s17 from "../assets/corporates/17.svg"
import s18 from "../assets/corporates/18.svg"
import s19 from "../assets/corporates/19.svg"
import s20 from "../assets/corporates/20.svg"

import docker from "../assets/docker.svg"
import java from "../assets/java.svg"
import aws from "../assets/aws.svg"
import jankins from "../assets/jankins.svg"
import node from "../assets/node.svg"
import swift from "../assets/swift.svg"
import python from "../assets/python.svg"
import react from "../assets/react.svg"
export default {
    components: {
        Navbar,
        keyActivities,
        Courses,
        ScaleGuardBoostars,
        StudentSuccessStories,
        Footer
    },
    data() {
        return {
              s1000016895: s1000016895,
            s1000016770: s1000016770,
            keyActivitiesLg: keyActivitiesLg,
            playIcon: playIcon,
            systemImage: systemImage,
            headerBackground: headerBackground,
            docker: docker,
            java: java,
            aws: aws,
            jankins: jankins,
            node: node,
            swift: swift,
            python: python,
            react: react,
            tools: [
                docker,
                java,
                aws,
                jankins,
                node,
                swift,
                python,
                react
            ],
            headerIons: [
                iconA,
                iconB,
                iconC,
                iconD,
                iconE,
                iconF,
                iconG
            ],
            s1000016649: s1000016649,
            s1000016895: s1000016895,
            s1000016770: s1000016770,
            s1000016791: s1000016791,
            s1000016641: s1000016641,
            keyActivities: [
                {
                    icon: week1,
                    title: 'WEEK 01',
                    description: 'Students kick off with a Bootcamps to build solid  skills, apply them through Tech Practice, and boost confidence through Group Discussions.',
                    keys: [
                        'GCC Dev Lab Activities',
                        'Skill Test',
                        'Group Discussion',
                        'Bootcamp'
                    ]
                },
                {
                    icon: week2,
                    title: 'WEEK 02',
                    description: 'A packed week with Bootcamp, Group Discussion, and a Master Class, giving students hands-on training and collaborative experience. Skill Test ensures retention.',
                    keys: [
                        'Group Discussion',
                        'Master Class',
                        'GCC Dev Lab Activities',
                        'Skill Test'
                    ]
                },
                {
                    icon: week3,
                    title: 'WEEK 03',
                    description: 'Continues strong with another Bootcamp and Master Class for deep dives, alongside a Jirathon & Group Discussion to reinforce learning.',
                    keys: [
                        'Seminar',
                        'Skill Test',
                        'Master Class',
                        'Bootcamp'
                    ]
                },
                {
                    icon: week4,
                    title: 'WEEK 04',
                    description: 'Focus shifts to communication and reflection with a Group Discussion and Webinar, plus Tech Assignments to track improvement.',
                    keys: [
                        'GCC Dev Lab Activities',
                        'Seminar',
                        'Tech Assignments',
                        'Jirathon'
                    ]
                }
            ],
            studentData: [
                { image: group1, label: 'Engineering' },
                { image: group2, label: 'Post Graduation' },
                { image: group3, label: 'Crash Course' }
            ],
            // courses: [
            //     {
            //         image: Year1st,
            //         title: 'Core',
            //         year: '1st Year',
            //         hours: '120 Hours',
            //         description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
            //         keys: ['Full-stack Apps', 'Advanced level'],
            //         link: ''
            //     },
            //     {
            //         image: Year2nd,
            //         title: 'ProEdge',
            //         year: '2nd year',
            //         hours: '120 Hours',
            //         description:"Professional-grade development with DevOps and cloud technologies",
            //         keys: ['DevOps Projects', 'Professional level'],
            //         link: '',
            //     },
            //     {
            //         image: Year3rd,
            //         title: 'MasterTrack',
            //         year: '3rd Hours',
            //         hours: '140 Hours',
            //         description:"Cloud-native applications and FinTech specialization",
            //         keys: ['AI + FinTech', 'Master level'],
            //         link: ''
            //     },
            //     {
            //         image: Year4th,
            //         title: 'Summit',
            //         year: 'Final year',
            //         hours: '100 Hours',
            //         description: "Advanced systems mastery with leadership focus",
            //         keys: [ 'Capstone Builds', 'Leadership level'],
            //         link: ''
            //     },
            // ],
            s1000016811: s1000016811,
            corporateIcons: [
                s11,
                s12,
                s13,
                s14,
                s15,
                s16,
                s17,
                s18,
                s19,
                s20
            ],

        }
    }
}
</script>
<style scoped>
    .header-bg {
        background: url("../assets/headerBackground.svg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        /* border-radius: 50px; */
        /* overflow: hidden;  */
        border: none;
        padding-bottom: 100px;
        z-index: 1!important;
    }
    .desktop-image {
        margin-top: -100px;
        z-index: 2!important
    }
    .header-box-content {
        color: #2528CB;
        font-size: 16px;
        font-style: medium;
    }

    .header-title {
        padding: 20px 0px;
        /* max-width: 80%; */
        font-weight: 600;
        font-style: medium;
        font-size: 42px;
        line-height: 55px;
        letter-spacing: -3%;
        color: #FFFFFF;
        font-family: 'Roboto', sans-serif;
    }
    .nav-btn-primary {
        background-color: #00D7D7;
        color: #fff;
        font-weight: 600;
        padding: 6px 18px;
        font-size: 18px;
    }
    .nav-btn-secondary {
        background-color: #FFC107;
        color: #fff;
        font-weight: 600;
        padding: 6px 6px 4px 18px;
        /* border-radius: 20px; */
        font-size: 18px;
        img {
            max-height: 30px
        }
    }

    .accelerated {
        .title {
            font-weight: 600; 
            font-size:2rem;
            letter-spacing: -4%;
            color: #141534;
            font-family: poppins, sans-serif;
        }
        .italic-text {
            color:#0F268E;
            font-size: 1.6rem;
        }
        .sub-title {
            color: #14CEC3;
            font-size: 1.5rem;
            font-weight: 600;
        }
        .description {
            color: #45464E;
            font-family: poppins, sans-serif;
            padding-top: 2%;
            
        }

        .card-number {
            padding-top: 2%;
            color: #2528CB;
            font-size: 1.2rem !important;
            font-weight: 700;
            /* font-family: poppins, sans-serif; */
        }
        .card-label {
            font-size: 1rem;
            color: #14CEC3;
            font-weight: 600;
            /* font-family: poppins, sans-serif; */
        }
    }
    
    .scaleGuardMission {
        background: linear-gradient(270deg, #2528CB -23%, #0F268E 56.1%);
        color: #fff;
        .title{
            margin-top: 15%;
            font-size: 2.2rem;
            font-weight: 800; 
            font-family: poppins, sans-serif;
        }
        .description {
            color: #D9D9D9;
            font-size: 1rem;
             font-family: poppins, sans-serif;
        }
        .button {
            background: #00D7D7;
            color: #FFFFFF;
            font-weight: 800;
            font-size: 1.6rem;
            margin-left: -80px;
        }
    }

    .Glimpse {
        text-align: center;
        .title {
            font-family: poppins, sans-serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #141534;
        }
        .sub-title {
            color: #0F268E;
            font-size: 1.8rem;
            font-weight: 500;
            font-style: italic;
            font-family: poppins, sans-serif;
        }
        .description {
            padding-top: 12px;
            color: #45464E;
            font-size: 18px;
             font-family: poppins, sans-serif;
            
        }
    }

    .keyActivities {
        .image {
            margin-left: -40px;
            max-width: 50%;
        }
        .table, tr, th {
            background: transparent!important;
            color: #14CEC3;
            white-space: nowrap;
            font-size: 1em;
            font-weight: 600;
        }
        .card {
            background: #F3F5F4;
            border-width: 0px;
            border-radius: 16px;
            margin: 12px 0px;
            .icon {
                height: 40px;
                aspect-ratio: 1/1;
            }
            .title {
                color: #2528CB;
                font-size: 1.2rem;
                font-weight: 700;
               font-family: poppins, sans-serif;
            }
            .description {
                font-size: 1em;
                color: #45464E;
                 font-family: poppins, sans-serif;
            }
            
        }
    }

    .ScaleGrad {
        background: linear-gradient(270deg, #2528CB -36.06%, #121465 101.69%);
        .title {
            /* font-weight: 800; */
            font-size: 1.8rem;
            letter-spacing: -4%;
            color: #fff;
            font-family: poppins, sans-serif;
        }
        .sub-title {
            font-size: 1rem;
            color: #FFCA00;
            font-style: italic;
        }
        .text {
            font-size: 1rem;
            color: #fff;
        }
        .value {
            font-size: 2.5rem;
            color: #fff;
            font-weight: 800;
            line-height: 100%;
            padding-top: 20px;
            font-family: poppins, sans-serif;
        }
        .label {
            font-size: 0.8rem;
            color: #FFCA00;       
        }
    }

    .student-module {
        background: linear-gradient(270deg, #2528CB -36.06%, #121465 101.69%);
        .title {
            /* font-weight: 800; */
            font-size: 2rem;
            letter-spacing: -4%;
            color: #fff;
            font-family: poppins, sans-serif;
        }
        .sub-title {
            font-size: 1.2rem;
            color: #14CEC3;
            font-style: italic;
            font-family: poppins, sans-serif;
        }
        .text {
            font-size: 1rem;
            color: #EAEAEA;
        }
        .image {
            width: 50%;
            aspect-ratio: 1/1;
        }
        .label {
            font-size: 1rem;
            font-weight: 600;
            padding-top: 6px;
            color: #fff;    
        }
    }

/* Corporate Placements */
    .corporate-title {
        /* font-weight: 800; */
        font-size: 2.5rem;
        letter-spacing: -4%;
        color: #141534;
        font-family: poppins, sans-serif;
    }

    .custom-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
    }
    .grid-item {
        background: #FFFFFF;
        padding: 20px;
        border-radius: 12px;
        text-align: center;
        img {
            max-width: 90%;
            min-width: 40%;
            max-height: 50px;
        }
    }


    @media only screen and (max-width: 767px) {
         .header-bg { 
            padding-bottom: 20px; 
        }
        .desktop-image {
            margin-top: -50px;
            z-index: 2!important
        }
        .header-box-content { 
            font-size: 9px
        }
         .header-title {
            font-size: 24px!important;
            line-height: 28px!important;
            letter-spacing: -3%; 
         }

        .nav-btn-primary {
            background-color: #00D7D7;
            color: #fff;
            font-weight: 600;
            padding: 6px 12px;
            font-size: 14px;
        }
        .nav-btn-secondary {
            background-color: #FFC107;
            color: #fff;
            font-weight: 600;
            padding: 4px 4px 4px 12px;
            font-size: 14px;
            img {
                max-height: 24px
            }   
        }

        .accelerated {
            .title {
                font-size: 28px;
                 font-family: poppins, sans-serif;
            }
            .italic-text {
                font-size: 24px;
                 font-family: poppins, sans-serif;
            }
            .sub-title {
                font-size: 20px;
                font-weight: 600;
                 font-family: poppins, sans-serif;
            }
            .description {
                color: #45464E;
                font-size: 14px;
                 font-family: poppins, sans-serif;
                
            }

            .card-number {
                color: #2528CB;
                font-size: 1.2rem;
                font-weight: 700;
            }
            .card-label {
                font-size: 14px;
                color: #14CEC3;
                font-weight: 600;
            }
        }

        .scaleGuardMission {
            /* background: linear-gradient(270deg, #2528CB -23%, #0F268E 56.1%); */
            color: #fff;
            .title{
                font-size: 24px;
                font-weight: 900;
                font-family: poppins, sans-serif;
            }
            .description {
                color: #D9D9D9;
                font-size: 16px;
                 font-family: poppins, sans-serif;
            }
            .button {
                background: #00D7D7;
                color: #FFFFFF;
                font-weight: 800;
                font-size: 1rem;
                margin-left: 0px;
            }
        }

        .student-module {
            background: #121465;
            .title {
                font-weight: 800;
                font-size: 1.2rem;
                letter-spacing: -4%;
                color: #fff;
                font-family: poppins, sans-serif;
            }
            .sub-title {
                font-size: 1rem;
                color: #14CEC3;
                font-style: italic;
                 font-family: poppins, sans-serif;
            }
            .text {
                font-size: 14px;
                color: #EAEAEA;
                 font-family: poppins, sans-serif;
            }
            .image {
                width: 50%;
                aspect-ratio: 1/1;
            }
            .label {
                font-size: 12px;
                font-weight: 600;
                padding-top: 6px;
                color: #fff;
                white-space: nowrap
            }
        }

    /* Corporate Placements */
        .custom-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        .grid-item {
            background: #FFFFFF;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            img {
                max-width: 90%;
                min-width: 40%;
                max-height: 30px;
            }
        }

    }

    .horizontal-row {
        display: flex;
        flex-wrap: nowrap;
    }

    .marquee-track {
        animation: scroll 6s linear infinite;
    }
    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
</style>
