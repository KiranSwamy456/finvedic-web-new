<template>
    <div class="container-fluid text-center py-5" style="background: #F3F5F4;">
        <div class="row justify-content-center">
            <div class="col-12">
                <p class="title">Student Success <i style="color: #FFCA00">Stories</i></p>
            </div>
            <div class="col-12 col-lg-6">
                <p class="description"> Hear from our graduates who have successfully transitioned into industry roles with ScaleGrad's comprehensive training program.</p>
            </div>
        </div>

    

        <swiper
            :slidesPerView="'auto'"
            :centeredSlides="false"
            :spaceBetween="30"
            :grabCursor="true"
            class="h-100"
            :loop="true"
        >
            <swiper-slide
                v-for="(item, i) in testimonials"
                :key="i"
                class="testimonial-card card border-0"
            >
                <div class="card-body h-100">
                        <star-rating :rating="item.rating" read-only starSize="16" :show-rating="false" active-color="#FFCA00"/>
                    <p class="review-text two-line-ellipsis text-start">{{ item.text }}</p>
                    <div class="d-flex align-items-center gap-3 mt-3">
                        <img :src="item.photo" class="profile-img" />
                        <div>
                            <h6 class="m-0 fw-bold">{{ item.name }}</h6>
                            <p class="m-0 small text-muted">{{ item.course }}</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
         <!-- <swiper
            :slidesPerView="'auto'"
            :centeredSlides="false"
            :spaceBetween="30"
            :grabCursor="true"
            class="h-100"
            :loop="true"
        >
            <swiper-slide
                v-for="(item, i) in testimonials"
                :key="i"
                class="testimonial-card card border-0 mt-3"
            >
                <div class="card-body h-100">
                        <star-rating :rating="item.rating" read-only starSize="16" :show-rating="false" active-color="#FFCA00"/>
                    <p class="review-text two-line-ellipsis text-start">{{ item.text }}</p>
                    <div class="d-flex align-items-center gap-3 mt-3">
                        <img :src="item.photo" class="profile-img" />
                        <div>
                            <h6 class="m-0 fw-bold">{{ item.name }}</h6>
                            <p class="m-0 small text-muted">{{ item.course }}</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper> -->


    </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import StarRating from "vue-star-rating";

// ✅ Import images INSIDE script
import glance2 from "../assets/glance2.svg";
import glance3 from "../assets/glance3.svg";
import glance4 from "../assets/glance4.svg";
import glance5 from "../assets/glance5.svg";


export default {
  components: {
    Swiper,
    SwiperSlide,
    StarRating,
  },

  data() {
    return {
      testimonials: [
        {
          text: "Case studies, AI assignments, and group work were engaging. The mock interviews helped clarify my career path.",
          rating: 5,
          name: "Harsha M",
          course: "B. Tech CSE",
          photo: glance3,
        },
        {
          text: "Real-world projects and group discussions improved my confidence.",
          rating: 4,
          name: "Yash",
          course: "B. Tech CSE",
          photo: glance2,
        },
        {
          text: "Expert lectures, hands-on projects, and interactive sessions made learning enjoyable.",
          rating: 4,
          name: "Durga Prasad",
          course: "B. Tech CSE",
          photo: glance4,
        },
        {
          text: "Networking opportunities and 24/7 AI assistance were very helpful.",
          rating: 5,
          name: "Sandeep",
          course: "B. Tech CSE",
          photo: glance5,
        },
        {
          text: "Loved the structured mentorship and career-oriented training.",
          rating: 4,
          name: "Harsha",
          course: "M. Tech CSE",
          photo: glance3,
        },
      ],
    };
  },
};
</script>

<style scoped>
    .title {
        font-weight:700;
        font-size: 1.8rem;
        letter-spacing: -4%;
        color: #141534;
        font-family: poppins, sans-serif;

    }
    .description {
        font-weight: 600;
        font-size: 1em;
        color: #45464E;
    }

    .testimonial-section {
        padding: 40px 0;
    }

    .testimonial-swiper {
        width: 100%;
    }

    .testimonial-card {
        width: 360px;
        padding: 0px!important;
        height: 100%;
    }

    .review-text {
        font-size: 0.9em;
        color: #45464E;
        font-style: italic;

    }

    .profile-img {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #eee;
    }

    .stars span {
        color: #ffc107;
        font-size: 18px;
    }

    @media (max-width: 768px) {
        .testimonial-card {
            width: 280px;
        }
    }

    .two-line-ellipsis {
        display: -webkit-box;
        -webkit-line-clamp: 2;      /* limit to 2 lines */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

</style>