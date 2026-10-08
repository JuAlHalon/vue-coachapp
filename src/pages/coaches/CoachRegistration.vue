<template>
    <div>
        <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>
        <section>
            <base-card>
                <h2>Register as a coach now!</h2>
                <coach-form @save-data="saveData"></coach-form>
                <div v-if="isLoading">
                    <base-spinner></base-spinner>
                </div>
            </base-card>       
        </section>
    </div>  
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    data() {
        return {
            isLoading: false,
            error: null
        };
    },
    components: {
        CoachForm
    },
    methods: {
        async saveData(data) {
            try {
                this.isLoading = true;
                await this.$store.dispatch('coaches/registerCoach', data);
                this.isLoading = false;
                this.$router.replace('/coaches');
            } catch (error) {
                this.isLoading = false;
                this.error = error.message || 'Something went wrong!';
            }                  
        },
        handleError() {
            this.error = null;
        }
    }
}
</script>