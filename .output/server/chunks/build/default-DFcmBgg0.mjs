import { mergeProps, ref, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { u as useHead } from './v3-Bv6VtE3f.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$2 = {
  __name: "TheNavigation",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    const navigationItems = [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed top-0 w-full z-50 glass border-b border-white/10" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-16"><div class="text-white font-bold text-xl"> Sinh Ern </div><div class="hidden md:flex space-x-8"><!--[-->`);
      ssrRenderList(navigationItems, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="text-white/80 hover:text-white transition-colors duration-300">${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></div><button class="md:hidden text-white focus:outline-none z-50" aria-label="Toggle navigation menu"><svg class="${ssrRenderClass([{ "rotate-45": isMobileMenuOpen.value }, "w-6 h-6 transition-transform duration-300"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
      if (!isMobileMenuOpen.value) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`);
      }
      _push(`</svg></button></div><div style="${ssrRenderStyle(isMobileMenuOpen.value ? null : { display: "none" })}" class="md:hidden pb-4"><div class="flex flex-col space-y-4"><!--[-->`);
      ssrRenderList(navigationItems, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="text-white/80 hover:text-white transition-colors duration-300 py-2">${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></div></div></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheNavigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TheFooter",
  __ssrInlineRender: true,
  props: {
    customName: {
      type: String,
      default: ""
    },
    customText: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const name = ref("Sinh Ern");
    const currentYear = computed(() => {
      return (/* @__PURE__ */ new Date()).getFullYear();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "glass border-t border-white/10 py-6 sm:py-8 mt-16 sm:mt-20" }, _attrs))}><div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div class="text-center text-white/60"><p class="text-sm sm:text-base"> \xA9 ${ssrInterpolate(currentYear.value)} ${ssrInterpolate(name.value)}. Built with <span class="text-blue-400">Nuxt 3</span> &amp; <span class="text-purple-400">Tailwind CSS</span>. </p></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Sinh Ern - Full-Stack Web Developer",
      meta: [
        {
          name: "description",
          content: "Sinh Ern - Full-Stack Web Developer crafting responsive, scalable, and user-focused web applications with modern frameworks and clean code."
        },
        {
          name: "keywords",
          content: "web developer, full-stack developer, Vue.js, Laravel, PHP, JavaScript, Nuxt.js, Tailwind CSS"
        },
        {
          property: "og:title",
          content: "Sinh Ern - Full-Stack Web Developer"
        },
        {
          property: "og:description",
          content: "Crafting responsive, scalable, and user-focused web applications with modern frameworks and clean code."
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen gradient-bg" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DFcmBgg0.mjs.map
