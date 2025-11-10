import './bootstrap';
import { createApp } from 'vue';

import ExampleComponent from './components/ExampleComponent.vue';

const app = createApp({});

// Register your Vue component globally
app.component('example-component', ExampleComponent);

// Mount Vue to a div
app.mount('#app');