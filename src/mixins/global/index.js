import Vue from 'vue'

import ScreenMixin from './screen.js';
import RouterMixin from './router.js';

Vue.mixin({
	mixins: [ ScreenMixin, RouterMixin ],
});