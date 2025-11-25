<template>
    <nav class="navbar navbar-expand-lg navbar-dark" :class="colored ?'custom-navbar-colored' : 'custom-navbar'">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img :src="logo" alt="ScaleGrad Logo" height="40" class="logoColored">
                <img :src="WhiteLogo" alt="ScaleGrad Logo" height="40" class="whiteLogo">

            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 240px;">
                    <li class="nav-item">
                        <form class="d-flex">
                            <input class="form-control rounded-pill me-2" type="search" placeholder="Search" aria-label="Search">
                        </form>
                    </li>
                    <li class="nav-item"><router-link class="nav-link active" :to="'/'">Home</router-link></li>
                    <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Course</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Hire from Us</a></li>
                </ul>
                <div class="gap-2">
                    <a href="#" class="btn nav-btn-primary rounded-pill ms-3 me-2">
                        Student Login
                        <img :src="studentLoginIcon" style="max-height: 30px" class="ms-3"/>
                    </a>
                    <a href="#" class="btn nav-btn-secondary rounded-pill">Partner with Us</a>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import LogoColored from "../assets/logo-colored.svg";
import studentLoginIcon from "../assets/buttonIcons/studentLoginIcon.svg"
import WhiteLogo from "../assets/white-logo.svg";
export default {
    data() {
        return {
            logo: LogoColored,
            WhiteLogo: WhiteLogo,
            studentLoginIcon: studentLoginIcon
        }
    },
    props: ['colored'],
}
</script>
<style scoped>
    .whiteLogo {
        display: none;
    }
    .logoColored {
        display: block;
    }
    .custom-navbar {
        border-radius: 50px;
        background: #fff;
    }
    .nav-btn-primary {
        background-color: #00D7D7;
        color: #fff;
        font-weight: 600;
        padding: 4px 4px 4px 18px ;
        font-size: 18px;
    }
    .nav-btn-secondary {
        background-color: #FFC107;
        color: #676767;
        font-weight: 600;
        /* border-radius: 20px; */
        padding: 6px 18px;
        font-size: 18px;
    }
    .search-box input {
        max-width: 300px;
        border-radius: 20px;
        padding-left: 15px;
    }
    .navbar-nav .nav-link {
        color: #000;
        font-weight: 500;
        margin-right: 12px;
        font-size: 18px;
    }
    .navbar-nav .nav-link.active {
        color: #14CEC3;
        text-decoration: underline;
    }
    @media only screen and (max-width: 767px) { 
        .whiteLogo {
            display: block;
        }
        .logoColored {
            display: none;
        }
        .custom-navbar {
            border-radius: 0px;
            background: transparent;
        }
        .nav-btn-primary {
            font-size: 14px;
        }
        .nav-btn-secondary {
            font-size: 14px;
        }
        .navbar-nav .nav-link {
            color: #fff;
            font-weight: 500;
            margin-right: 12px;
            font-size: 18px;
            text-align: center;
        }
        .custom-navbar-colored {
            border-radius: 0px;
            background: #2528CB;
            border-radius: 12px
        }

    }
</style>