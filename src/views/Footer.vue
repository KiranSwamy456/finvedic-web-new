<template>
    <div class="container py-5">
        <div class="card card-style rounded-4">
            <div class="card-body row p-lg-5">
                <div class="col-12 col-lg-7">
                    <p class="title">
                        Ready to Transform Your<br>
                        <span style="color: #FFCA00">Student's Future?</span>
                    </p>
                    <div class="description">
                        Partner with ScaleGrad and empower your students with industry-ready skills. From first year to final placement-one platform to learn, build, and get hired.
                    </div>
                    <div class="d-flex justify-content-start pt-3 py-lg-5">
                        <a href="#" class="btn nav-btn-primary rounded-pill">Partner With Us</a>
                        <a href="#" class="btn nav-btn-secondary rounded-pill ms-3">Schedule Demo</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-lg-4 pt-4">
                <p><img :src="s1000015826" style="max-width: 50%"/></p>
                <ul class="list-group">
                    <li class="list-group-item">
                        AI-powered platform for building accelerating career readiness.
                    </li>
                    <li class="list-group-item">
                        <div class="d-flex align-items-start">
                            <img style="height: 20px; padding-right: 10px; margin-top: 5px" :src="location"/>
                            <div  class="footer-text">
                                Plot No 1/C, Sy No 83/1, Raidurgam, Knowledge City Rd, panmaktha, Hyderabad, Serilingampalle (M), Telangana 500032
                            </div>
                        </div>
                    </li>
                </ul>
            
            </div>
            <div class="col-12 col-lg-4 pt-4">
                <p class="footer-header">PROGRAMS</p>
                <ul class="list-group">
                    <li class="list-group-item">1 Year Foundations for Future Engineers</li>
                    <li class="list-group-item">2 Year Strengthening Core Engineering Skills</li>
                    <li class="list-group-item">3 Year Applied DeepTech & Industry Practices</li>
                    <li class="list-group-item">4 Year Industry Specialization & Career Launch</li>
                </ul>
            </div>
            <div class="col-12 col-lg-2 pt-4">
                <p class="footer-header">TECHNOLOGIES</p>
                <ul class="list-group">
                    <li class="list-group-item">DeepTech Labs</li>
                    <li class="list-group-item">FinTech Programs</li>
                    <li class="list-group-item">AI/ML Courses</li>
                    <li class="list-group-item">Cloud Computing</li>
                </ul>
            </div>
            <div class="col-12 col-lg-2 pt-4">
                <p class="footer-header">SUPPORT</p>
                <ul class="list-group">
                    <li class="list-group-item">Student Portal</li>
                    <li class="list-group-item">College Partnership</li>
                    <li class="list-group-item">Career Services</li>
                    <li class="list-group-item">Contact Us</li>
                </ul>
            </div>
        </div>
    </div>

    <div class="container-fluid" style="background: #2528CB; padding: 8px 0px;">
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <div style="font-size: 0.8em; color: #fff; font-weight: bolder;">© 2025 FinVedic. All rights reserved.</div>
                <div class="d-flex">
                    <a href="#" class="text-decoration-none mx-1"><img style="width: 1.4em; aspect-ratio: 1/1;" :src="be" /></a>
                    <a href="#" class="text-decoration-none mx-1"><img style="width: 1.4em; aspect-ratio: 1/1;" :src="twitter"/></a>
                    <a href="#" class="text-decoration-none mx-1"><img style="width: 1.4em; aspect-ratio: 1/1;" :src="linkedIn"/></a>
                    <a href="#" class="text-decoration-none mx-1"><img style="width: 1.4em; aspect-ratio: 1/1;" :src="instagram"/></a>
                    <a href="#" class="text-decoration-none mx-1"><img style="width: 1.4em; aspect-ratio: 1/1;" :src="facebook"/></a>
                    <a href="#" class="text-decoration-none mx-1"><img style="width: 1.4em; aspect-ratio: 1/1;" :src="youtube"/></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import s1000015826 from "../assets/1000015826.svg"
import location from "../assets/icons/location.svg"

import be from '../assets/icons/be.svg'
import twitter from '../assets/icons/X.svg'
import youtube from '../assets/icons/youtube.svg'
import instagram from '../assets/icons/insta.svg'
import facebook from '../assets/icons/faceBook.svg'
import linkedIn from '../assets/icons/In.svg'
export default {
    data () {
        return {
            s1000015826: s1000015826,
            location: location,
            be: be,
            twitter: twitter,
            youtube: youtube,
            instagram: instagram,
            facebook: facebook,
            linkedIn: linkedIn
        }
    }
}
</script>
<style scoped>
    .card-style {
        background: url("../assets/BG.svg");
        background-size: contain 100%;
        background-position: left;
        background-repeat: no-repeat;
        border: none;
    }

    .title {
        font-weight: 600;
        font-size: 2rem;
        letter-spacing: -4%;
        color: #FFFFFF;
        font-family: poppins, sans-serif;
    }
    .description {
        font-size:1rem;
        color: #E0E0E0;
        font-weight: 500;
        font-family: poppins, sans-serif;
    }
     .nav-btn-primary {
        background-color: #00D7D7;
        color: #fff;
        font-weight: 600;
        padding: 6px 18px;
        font-size: 1rem;
        font-family: poppins, sans-serif;
    }
    .nav-btn-secondary {
        background-color: #FFC107;
        color: #fff;
        font-weight: 600;
        padding: 6px 18px;
        font-size: 1rem;
        font-family: poppins, sans-serif;
    }
    .footer-header {
        color: #2563EB;
        font-size: 1.1rem;
        font-weight: 800;
        letter-spacing: 1px;
        text-transform: capitalize;
        font-family: poppins, sans-serif;
    }
    .list-group-item, .footer-text {
        padding-left: 0px;
        border: 0;
        color: #52525B;
        font-size: 0.9em;
        font-weight: 600;
        font-family: poppins, sans-serif;
    }

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 768px) {
        .card-style {
            background: url("../assets/BG.svg");
            background-size: cover;
            background-position: top;
            background-repeat: no-repeat;
            border: none;
        }
        .title {
            font-weight: 600;
            font-size: 12px;
            letter-spacing: -4%;
            color: #FFFFFF;
            font-family: poppins, sans-serif;
        }
        .description {
            font-size: 8px;
            color: #E0E0E0;
            font-weight: 500;
            font-family: poppins, sans-serif;
        }
        .nav-btn-primary {
            background-color: #00D7D7;
            color: #fff;
            font-weight: 800;
            padding: 2px 4px;
            font-size: 8px;
            font-family: poppins, sans-serif;
        }
        .nav-btn-secondary {
            background-color: #FFC107;
            color: #fff;
            font-weight: 800;
            padding: 2px 4px;
            font-size: 8px;
            font-family: poppins, sans-serif;
        }
    }
</style>