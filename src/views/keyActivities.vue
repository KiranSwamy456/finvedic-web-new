<template>
<div class="container timeline-section">

    <h2 class="fw-bold text-primary mb-4 animate__animated animate__fadeInDown">Key Activities</h2>
    <div class="timeline-line"></div>

    <!-- WEEK 01 -->
    <div class="row align-items-center mb-5">
        <div class="col-md-6 animate__animated animate__fadeInLeft">
            <span class="week-box">WEEK 01</span>
            <div class="activity-card mt-3">
                <p><span class="check-icon">✔</span> GCC Dev Lab Activities</p>
                <p><span class="check-icon">✔</span> Group Discussion</p>
                <p><span class="check-icon">✔</span> Skill Test</p>
                <p><span class="check-icon">✔</span> Bootcamp</p>
                <p class="mt-3 text-muted">Students kick off with Bootcamps to build solid skills and boost confidence through Group Discussions.</p>
            </div>
        </div>
    </div>


    <!-- WEEK 02 -->
    <div class="row justify-content-end mb-5">
        <div class="col-md-6 animate__animated animate__fadeInRight">
            <span class="week-box">WEEK 02</span>
            <div class="activity-card mt-3">
                <p><span class="check-icon">✔</span> Group Discussion</p>
                <p><span class="check-icon">✔</span> GCC Dev Lab Activities</p>
                <p><span class="check-icon">✔</span> Master Class</p>
                <p><span class="check-icon">✔</span> Skill Test</p>
                <p class="mt-3 text-muted">Hands‑on training with collaboration and a skill test to reinforce learning.</p>
            </div>
        </div>
    </div>


    <!-- WEEK 03 -->
    <div class="row align-items-center mb-5">
        <div class="col-md-6 animate__animated animate__fadeInLeft">
            <span class="week-box">WEEK 03</span>
            <div class="activity-card mt-3">
                <p><span class="check-icon">✔</span> Seminar</p>
                <p><span class="check-icon">✔</span> Master Class</p>
                <p><span class="check-icon">✔</span> Skill Test</p>
                <p><span class="check-icon">✔</span> Bootcamp</p>
                <p class="mt-3 text-muted">Deep dives with seminars & discussions for reinforced understanding.</p>
            </div>
        </div>
    </div>


    <!-- WEEK 04 -->
    <div class="row justify-content-end mb-5">
        <div class="col-md-6 animate__animated animate__fadeInRight">
            <span class="week-box">WEEK 04</span>
            <div class="activity-card mt-3">
                <p><span class="check-icon">✔</span> GCC Dev Lab Activities</p>
                <p><span class="check-icon">✔</span> Tech Assignments</p>
                <p><span class="check-icon">✔</span> Seminar</p>
                <p><span class="check-icon">✔</span> Jirathon</p>
                <p class="mt-3 text-muted">Focus on communication, reflection & tracking improvement.</p>
            </div>
        </div>
    </div>


    <div class="text-center mt-4">
        <img :src="Image" class="rocket" />
    </div>
</div>
</template>
<script>
import Image from "../assets/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour 1.svg";
export default {
    data () {
        return {
            Image: Image
        }
    }
}
</script>
<style scoped>
.timeline-section {
    position: relative;
    padding: 40px 0;
}
.timeline-line {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #0047ff, #8a2be2);
    z-index: 1;
}
.week-box {
    position: relative;
    z-index: 2;
    background: #0047ff;
    color: #fff;
    font-weight: bold;
    padding: 8px 20px;
    border-radius: 20px;
    display: inline-block;
    margin-bottom: 10px;
}


.activity-card {
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
}


.activity-card:hover {
    transform: translateY(-6px);
}


.check-icon {
    color: #00c853;
    font-weight: bold;
    margin-right: 6px;
}


.rocket {
    width: 110px;
    animation: fly 4s infinite ease-in-out;
}


@keyframes fly {
    0% { transform: translateX(0) translateY(0); }
    50% { transform: translateX(20px) translateY(-15px); }
    100% { transform: translateX(0) translateY(0); }
}
</style>