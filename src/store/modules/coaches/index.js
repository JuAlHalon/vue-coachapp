import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            lastFetch: null,
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Erno',
                    lastName: 'Mattila',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                        "Moi! Mä olen Erno. Mä voin opettaa sulle full-stack kehitystä ja antaa uraneuvontaa.",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Jarmo',
                    lastName: 'Penttinen',
                    areas: ['frontend', 'career'],
                    description:
                        'Tervehdys. Minä olen Jarmo. Minulla on 30 vuoden kokemus alalta. Opetan frontend kehitystä ja annan uraneuvontaa.',
                    hourlyRate: 30
                }
            ]
        };
    },
    mutations,
    actions,
    getters
}