<template>
    <div class="row courses gy-3">
        <div class="col-12 col-md-6 col-lg-3" v-for="year in courses">
            <Card :item="year" />
        </div>
    </div> 
</template>

<script>
    import Year1st from "../assets/1stYear.svg";
    import Year2nd from "../assets/2ndYear.svg";
    import Year3rd from "../assets/3rdYear.svg";
    import Year4th from "../assets/finalYear.svg";

    import Card from "../components/Card.vue"
    export default {
        components: {
            Card
        },
        data() {
            return {
                courses: [
                    {
                        image: Year1st,
                        title: 'Core',
                        year: '1',
                        extension: 'st',
                        hours: '120 Hours',
                        description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                        keys: ['Full-stack Apps', 'Advanced level'],
                        link: '/curriculum/1',
                        enableRedirect: true
                    },
                    {
                        image: Year2nd,
                        title: 'ProEdge',
                        year: '2',
                        extension: 'nd',
                        hours: '120 Hours',
                        description:"Professional-grade development with DevOps and cloud technologies",
                        keys: ['DevOps Projects', 'Professional level'],
                        link: '/curriculum/2',
                        enableRedirect: true
                    },
                    {
                        image: Year3rd,
                        title: 'MasterTrack',
                        year: '3',
                        extension: 'rd',
                        hours: '140 Hours',
                        description:"Cloud-native applications and FinTech specialization",
                        keys: ['AI + FinTech', 'Master level'],
                        link: '/curriculum/3',
                        enableRedirect: true
                    },
                    {
                        image: Year4th,
                        title: 'Summit',
                        year: 'Final',
                        extension: '',
                        hours: '100 Hours',
                        description: "Advanced systems mastery with leadership focus",
                        keys: [ 'Capstone Builds', 'Leadership level'],
                        link: '/curriculum/4',
                        enableRedirect: true
                    },
                ],
            }
        }
    }
</script>
<style>
</style>