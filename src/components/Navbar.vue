<template>
    <nav class="navbar navbar-expand-lg navbar-dark" :class="colored ?'custom-navbar-colored' : 'custom-navbar'">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
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
                    <li class="nav-item"><a class="nav-link" href="#home/about" @click.prevent="scrollToAbout">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#home/courses" @click.prevent="scrollToCourses">Course</a></li>

                   <!-- <li class="nav-item"><router-link class="nav-link" to="/hirefromus"> Hire from Us</router-link></li> -->
                </ul>
                <div class="gap-2">
                    <a  href="https://portal.scalegrad.com/#login" 
    target="_blank" class="btn nav-btn-primary rounded-pill ms-3 me-2">
                        Student Login
                        <img :src="studentLoginIcon" style="max-height: 30px" class="ms-3"/>
                    </a>
                    <!-- <a  href="#partner" 
    target="_blank" class="btn nav-btn-secondary rounded-pill">
                        Partner with Us
                        <img :src="partnerWithus" style="max-height: 30px" class="ms-3"/>
                    </a> -->
                  <!-- <a href="#partner" class="btn nav-btn-secondary rounded-pill">Partner with Us</a> -->

                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import LogoColored from "../assets/logo-colored.svg";
import studentLoginIcon from "../assets/buttonIcons/studentLoginIcon.svg"
import partnerWithus from "../assets/icons/partnerWithUsIcon.svg"
import WhiteLogo from "../assets/white-logo.svg";
export default {
    data() {
        return {
            logo: LogoColored,
            WhiteLogo: WhiteLogo,
            studentLoginIcon: studentLoginIcon,
            partnerWithus: partnerWithus
        }
    },
    props: ['colored'],
    methods: {
  scrollToCourses() {
    const el = document.getElementById("home/courses");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  },
  scrollToAbout()
  {
    const el = document.getElementById("home/about");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  },
  methods: {
  scrollToPartner() {
    const el = document.getElementById("partner");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
}

}

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
        /* text-decoration: underline; */
    }
    @media only screen and (max-width: 767px) { 

         .navbar-collapse .gap-2 {
    display: flex !important;
    flex-direction: column !important;
    gap: 12px !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 12px 0 !important;
    width: 100%;
    box-sizing: border-box;
  }

  /* Make each bootstrap btn behave like a full-width pill on mobile */
  .navbar-collapse .gap-2 .btn {
    display: block !important;       /* override inline-block */
    width: 86% !important;           /* or 100% if you want full width */
    max-width: 320px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    padding-left: 18px !important;   /* preserve icon padding */
    padding-right: 18px !important;
    box-sizing: border-box !important;
  }

  /* Remove the bootstrap utility margins that were added in template */
  .navbar-collapse .gap-2 .ms-3,
  .navbar-collapse .gap-2 .me-2 {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  /* If primary button has an img, make its spacing consistent */
  .navbar-collapse .gap-2 .nav-btn-primary img {
    max-height: 22px !important;
    margin-left: 8px !important;
    vertical-align: middle;
  }

  /* Fix text size so it fits better on smaller screens */
  .navbar-collapse .gap-2 .nav-btn-primary,
  .navbar-collapse .gap-2 .nav-btn-secondary {
    font-size: 14px !important;
  }
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