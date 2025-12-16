<template>
    <div class="container-fluid">
        <div class="container">
            <Navbar colored="true"/>

            <div class="py-lg-5 py-4">
                <iframe
                    style="aspect-ratio: 3/1.3;"
                    class="rounded-4"
                    width="100%"
                    src="https://www.youtube.com/embed/liVEpw66i7Y?si=IPllk3hZnkum_mUY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                />
            </div>

            <div class="row py-5 g-3">
                <div class="col-12 col-lg-7 itemStyle py-3"
                    style="max-height: 600px; overflow-y: auto;">
                    <div class="row mb-4" v-for="item in items" :key="item.title">
                        
                        <!-- YouTube Video -->
                        <div class="col-12 col-lg-4">
                            <iframe
                                class="w-100 rounded-3"
                                height="150"
                                :src="item.videoUrl"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </div>

                        <!-- Title & Description -->
                        <div class="col-12 col-lg-8 py-2">
                            <div class="title">{{ item.title }}</div>
                            <div class="description">{{ item.description }}</div>
                        </div>

                    </div>
                </div>

                <div class="col-12 col-lg-5">
                    <div class="card form-style border-none rounded-4">
                        <div class="card-body py-4">
                            <div class="title pb-4">Book a Live Class, For Free!</div>

                            <!-- YEAR -->
                            <div class="position-relative mb-2">
                                <select
                                    class="form-select p-2"
                                    v-model="form.year"
                                    :class="{ 'is-invalid': submitted && !form.year }"
                                >
                                    <option disabled value="">Select Year</option>
                                    <option>1st Year</option>
                                    <option>2nd Year</option>
                                    <option>3rd Year</option>
                                    <option>Final Year</option>
                                </select>
                                <span class="text-danger position-absolute top-50 end-0 translate-middle-y me-3">*</span>
                            </div>

                            <!-- NAME -->
                            <div class="position-relative mb-2">
                                <input
                                    class="form-control py-2"
                                    v-model="form.name"
                                    placeholder="Enter Name"
                                    type="text"
                                    :class="{ 'is-invalid': submitted && !form.name }"
                                />
                                <span class="text-danger position-absolute top-50 end-0 translate-middle-y me-3">*</span>
                            </div>

                            <!-- EMAIL -->
                            <div class="position-relative mb-2">
                                <input
                                    class="form-control py-2"
                                    v-model="form.email"
                                    placeholder="Enter Email"
                                    type="email"
                                    :class="{ 'is-invalid': submitted && !form.email }"
                                />
                                <span class="text-danger position-absolute top-50 end-0 translate-middle-y me-3">*</span>
                            </div>

                            <!-- PHONE -->
                            <div class="position-relative mb-2">
                                <div class="d-flex">
                                    <select
                                        class="form-select py-2 me-2"
                                        style="width: 80px"
                                        v-model="form.countryCode"
                                    >
                                        <option value="+91">+91</option>
                                    </select>

                                    <input
                                        class="form-control py-2"
                                        v-model="form.phone"
                                        placeholder="Enter Phone"
                                        type="number"
                                        :class="{ 'is-invalid': submitted && !form.phone }"
                                    />
                                </div>
                                <span class="text-danger position-absolute top-50 end-0 translate-middle-y me-2">*</span>
                            </div>

                            <!-- QUERY -->
                            <input
                                class="form-control py-2 mb-3"
                                v-model="form.query"
                                placeholder="Your query..?"
                                type="text"
                            />

                            <!-- SUBMIT -->
                            <button
                                class="btn w-100 text-white py-2 mt-2"
                                style="background: #2528CB; font-weight: 400"
                                @click="submitForm"
                            >
                                Submit
                            </button>

                            <div class="row border rounded-4 mx-2 mt-3 py-3">
                                <div class="col-5 text-center p-3 border-end">
                                    <div class="card-number">40+</div>
                                    <div class="card-label">DeepTech & FinTech</div>
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

            </div>
        </div>
    </div>
      <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Card from "@/components/Card.vue";
import courseImage from "../../assets/2ndYear.svg";
import year1stYear from "../../assets/1stYear.svg";
import year3rd from "../../assets/3rdYear.svg";
import finalYear from "../../assets/finalYear.svg";
import axios from "axios";
import Footer from "@/views/Footer.vue"

export default {
  components: {
    Card,
    Navbar,
    Footer
  },

  data() {
    return {
      form: {
        year: "",
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        query: ""
      },
items: [
  {
    title: "Boot Camps",
    description: "Intensive, hands-on training sessions designed to build practical skills quickly.",
    videoUrl: "https://www.youtube.com/embed/0QHWWlh6bfA"
  },
  {
    title: "Seminars",
    description: "Expert-led sessions that deliver insights, updates, and real-world industry knowledge.",
    videoUrl: "https://www.youtube.com/embed/E4Nlzeg4WVc"
  },
  {
    title: "Group Discussions",
    description: "Collaborative discussions to improve communication, critical thinking, and confidence.",
    videoUrl: "https://www.youtube.com/embed/m4dvnII1kFY"
  },
  {
    title: "Skill Test",
    description: "Short assessments to evaluate your grasp of concepts and track your progress.",
    videoUrl: "https://www.youtube.com/embed/4E7jNsSqis8"
  },
  {
    title: "Lab Usage",
    description: "Access to dedicated lab environments to practice, experiment, and build projects.",
    videoUrl: "https://www.youtube.com/embed/gC89WOEdsPQ"
  },
  {
    title: "Jirathon",
    description: "A guided sprint where students work on real Jira-based tasks to learn project workflows.",
    videoUrl: "https://www.youtube.com/embed/1etpT9SPajs"
  },
  {
    title: "Assignments",
    description: "Work on structured tasks to apply your skills through hands-on practice.",
    videoUrl: "https://www.youtube.com/embed/JFOAUg8X-sQ"
  },
  {
    title: "Master Class",
    description: "Advanced learning sessions conducted by industry specialists on niche topics.",
    videoUrl: "https://www.youtube.com/embed/W-qfKv2Ny_Q"
  }
],

    };
  },

  methods: {
    async submitForm() {
      this.submitted = true;

      if (!this.form.year || !this.form.name || !this.form.email || !this.form.phone) {
        alert("Please fill all required fields ❗");
        return;
      }

      if (this.form.phone.length < 10) {
        alert("Enter a valid 10-digit phone number ❗");
        return;
      }

      const payload = {
        year: this.form.year,
        name: this.form.name,
        email: this.form.email,
        phone: this.form.countryCode + this.form.phone,
        query: this.form.query
      };

      try {
        await axios.post("https://fnbackendprod.finvedic.in/api/book-class", payload);
        alert("Form submitted successfully ✅");

        this.form = { year: "", name: "", email: "", countryCode: "+91", phone: "", query: "" };
        this.submitted = false;

      } catch (error) {
        console.error("API Error:", error);
        alert("Something went wrong ❌");
      }
    }
  }
};
</script>

<style scoped>

.container-fluid, 
.container, 
.row {
  overflow-x: hidden !important; /* REMOVE HORIZONTAL SCROLL */
}

/* Scrollbar Design */
.itemStyle {
  scrollbar-width: thin;
  scrollbar-color: #2528CB #f1f1f1;
}

.itemStyle::-webkit-scrollbar {
  width: 8px;
}

.itemStyle::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.itemStyle::-webkit-scrollbar-thumb {
  background-color: #2528CB;
  border-radius: 10px;
}

.exposer-title {
    font-size:  2.8rem;
    color: #141534;
    line-height: 3rem;
    font-weight: 600;
    padding-bottom: 20px;
}
.custom-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}
.itemStyle {
    img {
        width: 100%;
    }
    .title {
        padding-top: 16px;
        font-size: 24px;
        font-weight: 600;
        color: #2528CB;
    }
    .description {
        font-size: 18px;
        font-weight: 500;
        color:#4B5563;
    }
}

.form-style {
    box-shadow: 0px 0px 14px 2px #0000000F;
    border: 0px;
    .title {
        font-size: 24px;
        font-weight: 600;
        color: #333333;
    }
    .form-control, .form-select {
        background: #FAFAFA;
        margin: 16px 0px;
        font-size: 14px;
    }
}

.card-number {
    color: #2528CB;
    font-size: 1.2rem;
    font-weight: 700;
}
.card-label {
    font-size: 1rem;
    color: #14CEC3;
    font-weight: 600;
}

@media only screen and (max-width: 767px) {
    .exposer-title {
        font-size: 24px;
        line-height: 32px;
    }
    .custom-grid {
        grid-template-columns: 1fr;
    }

    .itemStyle {
        .title {
            font-size: 24px;
            font-weight: 400;
            color: #2528CB;
        }
        .description {
            font-size: 13px;
            font-weight: 400;
            color:#4B5563;
        }
    }

    .card-number {
        font-size: 1.2rem;
        font-weight: 700;
    }
    .card-label {
        font-size: 14px;
        font-weight: 600;
    }
}

</style>
<style>
/* GLOBAL FIX — works everywhere */
html, body {
  overflow-x: hidden !important;
}

/* Prevent Bootstrap rows from causing horizontal scroll */
.row {
  margin-right: 0 !important;
  margin-left: 0 !important;
}
</style>

