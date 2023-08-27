import hljs from 'highlight.js/lib/core';
import { onMounted } from 'vue';

const funHljs = () => {
  onMounted(() => {
    const codes = document.querySelectorAll('.json');
    codes.forEach((code) => {
      hljs.highlightElement(code, { lenguage: 'json' });
    });
  });
};
export default funHljs;
