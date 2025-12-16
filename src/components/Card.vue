<template>
  <div class="card rounded-4 border-0 h-100">
    <div class="card-body p-3 h-100">

      <!-- Image -->
      <img :src="item.image" class="image" />

      <!-- Title Box -->
      <div
  class="d-flex align-items-center box"
  style="justify-content: space-between; gap: 8px;"
>

        <span class="title">
          {{ item.title }}
         
        </span>
        <span class="badge border" style="color: #FFCA00;">{{ item.hours }}</span>
      </div>

      <!-- Description -->
      <div class="description">
        {{ item.description }}
      </div>

      <!-- Key Points -->
      <ul class="list-group">
        <li
          v-for="(key, index) in item.keys"
          :key="index"
          class="list-group-item" style="color: #4B5563;"
        >
          <img :src="s1000016517" />
          <span class="ms-2">{{ key }}</span>
        </li>
      </ul>

      <!-- Button -->
      <button
        v-if="item.enableRedirect"
        class="link rounded-pill mt-3"
        @click="goToPage"
      >
        View Curriculum
        <img :src="s1000016186" />
      </button>

    </div>
  </div>
</template>

<script>
import s1000016517 from "../assets/1000016517.svg";
import s1000016186 from "../assets/1000016186.svg";

export default {
  name: "CourseCard",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      s1000016517,
      s1000016186
    };
  },
  methods: {
    goToPage() {
      this.$router.push(this.item.link);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
/* Card Layout */
.card {
  background: #f3f5f4;
  display: flex;
  height: 100%;
}

.card-body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Image */
.image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 14px;
}

/* Blue Box */
.box {
  background: #2528cb;
  padding: 8px 10px;
  color: #fff;
  margin: 12px 0;
  border-radius: 10px;
}

/* Title */
.title {
  font-size: 1rem;
  font-weight: 600;
  /* line-height: 1.3; */

  /* display: -webkit-box; */
  /* -webkit-line-clamp: 2; */
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* min-height: 44px; */
  min-height: 26px;
}

/* Year */
/* .year {
  font-size: 0.75rem;
  margin-left: 6px;
}

.year .sup {
  font-size: 0.6em;
  vertical-align: super;
}

.badge {
  color: #ffca00;
  font-size: 0.8rem;
} */

/* Description */
.description {
  font-size: 0.95rem;
  color: #4b5563;
  line-height: 1.5;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  min-height: 70px;
}

/* List */
.list-group {
  flex-grow: 1;
}

.list-group-item {
  display: flex;
  align-items: center;
  gap: 8px;

  background: transparent;
  border: none;
  padding: 4px 0;

  font-size: 0.95rem;
  color: #45464e;
  min-height: 26px;
}

.list-group-item img {
  width: 14px;
}

/* Button */
.link {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  background: #14cec3;
  color: #fff;
  font-weight: 500;
  font-size: 1.3rem;

  padding: 6px 15px;
  border: none;
  text-decoration: none;

  margin-top: auto;
}

.link img {
  width: 30px;
  margin-left: 20px;
}

/* Mobile */
@media (max-width: 767px) {
  .image {
    height: 200px;
  }

  .description {
    font-size: 1rem;
    min-height: 80px;
  }

  .link img {
    width: 26px;
  }
}
</style>
