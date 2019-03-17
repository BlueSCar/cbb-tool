import Vue from 'vue';

import {
    library
} from '@fortawesome/fontawesome-svg-core';

import {
    fas
} from '@fortawesome/free-solid-svg-icons';

import {
    faGoodreads,
    faGoogle,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';

import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome';

library.add(fas, faGoodreads, faGoogle, faFacebook);

Vue.component('font-awesome-icon', FontAwesomeIcon);
