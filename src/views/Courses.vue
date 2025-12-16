<template>
  <div class="row courses gy-3">
    <div
      class="col-12 col-md-6 col-lg-3"
      v-for="year in filteredCourses"
      :key="year.year"
    >
      <Card :item="year" />
    </div>
  </div>
</template>

<script>
import Year1st from "../assets/1stYear.svg";
import Year2nd from "../assets/2ndYear.svg";
import Year3rd from "../assets/3rdYear.svg";
import Year4th from "../assets/finalYear.svg";
import ignite from "../assets/ignite.svg";
import turbo from "../assets/turbo.svg";
import specialist from "../assets/Specialist.svg";
import fusion from "../assets/fusion.svg";

import Card from "../components/Card.vue";

export default {
  props: {
    journey: {
      type: String,
      default: "engineering"
    }
  },

  components: {
    Card
  },

  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  },

  computed: {
    filteredCourses() {
      if (this.journey === "pg") {
        return this.courses.filter(c =>
          c.title === "Ignite" || c.title === "Turbo"
        );
      }

      if (this.journey === "crash") {
        return this.courses.filter(c =>
          c.title === "DeepTech & Fin Tech Engineering" || c.title === "Fusion"
        );
      }

      // Default: show all 4 main cards (engineering)
      return this.courses.filter(c =>
        c.title === "Core Engineering Foundation" || 
        c.title === "High Performance Systems Engineering" || 
        c.title === "Disruptive Technologies for Digital Economy" || 
        c.title === "FinTech Specialization"
      );
    }
  },

  data() {
    return {
      courses: [
        {
          image: Year1st,
          title: "Core Engineering Foundation",
          year: "",
          extension: "",
          hours: "90 Hours",
          description: "Advanced full-stack development with hands-on projects in front-end, back-end.",
          keys: ["GitHub Branching & Collaboration Strategy", "15-Factor App - Way to Build Modern Apps","MongoDB/Ignite Powering Modern Applications","Domain Driven Design (DDD)"],
          link: "/curriculum/1",
          enableRedirect: true
        },
        {
          image: Year2nd,
          title: "High Performance Systems Engineering",
          year: "",
          extension: "",
          hours: "90 Hours",
          description:
            "Professional-grade development with DevOps and cloud technologies",
          keys: ["Prompt Engineering for GenAl & Agentic Systems", "React Frontend -Navigating the Blotters","Fundamentals of Distributed Systems","Coding with Co-Pilot"],
          link: "/curriculum/2",
          enableRedirect: true
        },
        {
          image: Year3rd,
          title: "Disruptive Technologies for Digital Economy",
          year: "",
          extension: "",
          hours: "90 Hours",
          description:
            "Cloud-native applications and FinTech specialization",
          keys: ["Cloud Computing & Container Orchestration (Docker - K8s", "Blockchain & the Revolution of Smart Contracts","IoT for Smart & Real-Time Systems","Data Analytics for Distributed Systems"],
          link: "/curriculum/3",
          enableRedirect: true
        },
        {
          image: Year4th,
          title: "FinTech Specialization",
          year: "",
          extension: "",
          hours: "90 Hours",
          description: "Advanced systems mastery with leadership focus",
        
             keys: ["Equity Electronic Trading Technology OR Fixed Income Electronic TradingTechnology", "Forex (FX) Electronic Trading Technology","Wealth Management Technology OR Insurance Technology","Banking & Lending Technology"],


          link: "/curriculum/4",
          enableRedirect: true
        },
        {
          image: ignite,
          title: "Ignite",
          year: "1st",
          extension: "",
          hours: "90 Hours",
          description: "Foundation building with essential programming concepts",
        
             keys: ["Basic Concepts", "Beginner level"],


          link: "/curriculum/4",
          enableRedirect: true
        },
         {
          image: turbo,
          title: "Turbo",
          year: "2nd",
          extension: "",
          hours: "90 Hours",
          description: "Accelerated skill development with industry-celevant technologies",
        
             keys: ["Dete Structures","intermediate level"],


          link: "/curriculum/4",
          enableRedirect: true
        },
         {
          image: specialist,
          title: "DeepTech & Fin Tech Engineering",
          year: "1st",
          extension: "",
          hours: "90 Hours",
          description: "Advanced specialization in distributed systems and scaling",
        
             keys: ["Fundamentals of Distributed Systems","GitHub & GitHub Actions","Redis - The Data on Blink","GenAI & Agentic AI","Payments Technology"],


          link: "/curriculum/4",
          enableRedirect: true
        }
        
      ]
    };
  }
};
</script>
