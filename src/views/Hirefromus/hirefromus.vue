<template>
 <div class="container">
      <Navbar colored="true"/>
        <div class="hire-from-us">
 
    <!-- Hero Section -->
    <section class="hero">
      <h1>Hire From Us</h1>
      <p>Industry-ready  trained with real-world projects.</p>
      <button class="primary-btn">Request Talent</button>
    </section>

    <!-- Why Hire From Us -->
    <section class="why-hire">
      <h2>Why Hire From Us ?</h2>
      <div class="features">
        <div class="feature-card" v-for="(item, index) in whyHireData" :key="index">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Talent Categories -->
    <section class="talent">
      <h2>Available Talent</h2>
      <div class="talent-grid">
        <div class="talent-card" v-for="(talent, index) in talentData" :key="index">
          <h3>{{ talent.role }}</h3>
          <p>Experience: {{ talent.experience }}</p>
          <p>Skills: {{ talent.skills.join(", ") }}</p>
        </div>
      </div>
    </section>

    <!-- Hiring Process -->
    <section class="process">
      <h2>Our Hiring Process</h2>
      <div class="steps">
        <div class="step" v-for="(step, index) in processSteps" :key="index">
          <span>{{ index + 1 }}</span>
          <p>{{ step }}</p>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="contact">
      <h2>Hire Now</h2>
      <form @submit.prevent="submitForm">
        <input type="text" placeholder="Company Name" v-model="form.company" required />
        <input type="email" placeholder="Email" v-model="form.email" required />
        <input type="tel" placeholder="Mobile Number" v-model="form.mobile" required />
        <textarea placeholder="Hiring Requirement" v-model="form.requirement"></textarea>
        <button type="submit" class="primary-btn">Submit</button>
      </form>
    </section>

  </div>
 </div>
 
</template>

<script setup>
import { ref } from "vue";
import Navbar from '@/components/Navbar.vue';
/* Why Hire Us Data */
const whyHireData = ref([
  {
    title: "Industry-Trained Candidates",
    description: "Our students are trained with real-time projects and current technologies."
  },
  {
    title: "Quick Hiring",
    description: "Get pre-screened candidates within 48 hours."
  },
  {
    title: "Job-Ready Skills",
    description: "Candidates skilled in frontend, backend & full stack."
  }
]);

/* Talent Data */
const talentData = ref([
  {
    role: "Frontend Developer",
    experience: "0-2 Years",
    skills: ["HTML", "CSS", "JavaScript", "Vue"]
  },
  {
    role: "Backend Java Developer",
    experience: "1-3 Years",
    skills: ["Java", "Spring Boot", "REST API"]
  },
  {
    role: "Full Stack Developer",
    experience: "0-3 Years",
    skills: ["Vue", "Java", "MySQL", "Git"]
  }
]);

/* Hiring Process Steps */
const processSteps = ref([
  "Share your hiring requirement",
  "We shortlist matching candidates",
  "You conduct interviews",
  "Select & onboard"
]);

/* Contact Form */
const form = ref({
  company: "",
  email: "",
  mobile: "",
  requirement: ""
});

const submitForm = () => {
  console.log("Form Data:", form.value);
  alert("Your hiring request has been submitted!");
};
</script>

<style scoped>
.hire-from-us {
  font-family: Arial, sans-serif;
}

.hero {
  background: #1e293b;
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.primary-btn {
  padding: 12px 25px;
  background: #0d6efd;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  margin-top: 15px;
}

.why-hire,
.talent,
.process,
.contact {
  padding: 50px 20px;
  max-width: 1200px;
  margin: auto;
}

.features,
.talent-grid,
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.feature-card,
.talent-card,
.step {
  padding: 20px;
  background: #f4f4f4;
  border-radius: 10px;
  text-align: center;
}

.step span {
  font-size: 22px;
  font-weight: bold;
  color: #0d6efd;
}

form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input,
textarea {
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
</style>
