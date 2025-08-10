import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { ref, mergeProps, computed, useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './v3-Bv6VtE3f.mjs';
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

const _sfc_main$6 = {
  __name: "TheHero",
  __ssrInlineRender: true,
  props: {
    customName: {
      type: String,
      default: ""
    },
    customTitle: {
      type: String,
      default: ""
    },
    customTagline: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const name = ref("Sinh Ern");
    const title = ref("Full-Stack Web Developer");
    const tagline = ref("Crafting responsive, scalable, and user-focused web applications with modern frameworks and clean code.");
    const buttons = ref({
      viewWork: "View My Work",
      downloadCV: "Download CV",
      cvLink: "/cv.pdf"
    });
    const floatingIcons = ref([1, 2, 3]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "home",
        class: "min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
      }, _attrs))}><div class="max-w-4xl mx-auto text-center"><div class="glass-card p-6 sm:p-8 lg:p-12 mb-8 animate-float"><div class="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1"><div class="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-2xl sm:text-4xl font-bold text-white"> SE </div></div><h1 class="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 text-shadow"><span class="gradient-text">${ssrInterpolate(name.value)}</span></h1><h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 mb-4 sm:mb-6">${ssrInterpolate(title.value)}</h2><p class="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">${ssrInterpolate(tagline.value)}</p><div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="#projects" class="glass-button text-white font-medium hover:scale-105 transform transition-all duration-300 text-center">${ssrInterpolate(buttons.value.viewWork)}</a><a${ssrRenderAttr("href", buttons.value.cvLink)} download class="glass-button text-white font-medium hover:scale-105 transform transition-all duration-300 text-center">${ssrInterpolate(buttons.value.downloadCV)}</a></div></div><div class="flex justify-center space-x-4 sm:space-x-6 text-white/60"><!--[-->`);
      ssrRenderList(floatingIcons.value, (icon, index) => {
        _push(`<div class="animate-float w-6 h-6 sm:w-8 sm:h-8" style="${ssrRenderStyle({ animationDelay: index + "s" })}"><svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM8.5 17.5L12 14l3.5 3.5L12 21l-3.5-3.5z"></path></svg></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "TheAbout",
  __ssrInlineRender: true,
  props: {
    customTitle: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const sectionTitle = ref("About Me");
    const whoIAm = ref({
      title: "Who I Am",
      content: [
        "I'm a web development student and aspiring full-stack developer with a strong background in both frontend and backend technologies. Over the past months, I've built and deployed multiple real-world projects, applying principles of MVC architecture, RESTful APIs, and responsive design.",
        "My focus is on delivering clean, maintainable code and intuitive user experiences that solve real-world problems."
      ]
    });
    const highlights = ref({
      title: "Highlights",
      items: [
        {
          text: "2+ years of hands-on development in PHP, JavaScript, MySQL, and modern frameworks like Vue.js & Laravel",
          color: "bg-blue-400"
        },
        {
          text: "Experience in POS systems, school management tools, canteen management, and student performance tracking",
          color: "bg-purple-400"
        },
        {
          text: "Strong understanding of API integration, OOP concepts, and database optimization",
          color: "bg-pink-400"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "about",
        class: "py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      }, _attrs))}><div class="max-w-6xl mx-auto"><div class="text-center mb-12 sm:mb-16"><h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">${ssrInterpolate(sectionTitle.value)}</h2><div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div></div><div class="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center"><div class="glass-card p-6 sm:p-8"><h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">${ssrInterpolate(whoIAm.value.title)}</h3><div class="space-y-4 sm:space-y-6"><!--[-->`);
      ssrRenderList(whoIAm.value.content, (paragraph, index) => {
        _push(`<p class="text-white/80 leading-relaxed text-sm sm:text-base">${ssrInterpolate(paragraph)}</p>`);
      });
      _push(`<!--]--></div></div><div class="glass-card p-6 sm:p-8"><h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">${ssrInterpolate(highlights.value.title)}</h3><ul class="space-y-3 sm:space-y-4 text-white/80"><!--[-->`);
      ssrRenderList(highlights.value.items, (highlight, index) => {
        _push(`<li class="flex items-start"><span class="${ssrRenderClass([highlight.color, "inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"])}"></span><span class="text-sm sm:text-base leading-relaxed">${ssrInterpolate(highlight.text)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheAbout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "TheSkills",
  __ssrInlineRender: true,
  props: {
    customSkills: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const sectionTitle = ref("Skills");
    const skillCategories = ref({
      frontend: {
        title: "Frontend",
        skills: [
          { name: "HTML5/CSS3", level: 95 },
          { name: "JavaScript", level: 90 },
          { name: "Vue.js", level: 85 },
          { name: "Nuxt.js", level: 80 },
          { name: "Tailwind CSS", level: 90 }
        ]
      },
      backend: {
        title: "Backend",
        skills: [
          { name: "PHP", level: 90 },
          { name: "Laravel", level: 85 },
          { name: "Node.js", level: 75 },
          { name: "REST APIs", level: 85 }
        ]
      },
      database: {
        title: "Database",
        skills: [
          { name: "MySQL", level: 90 },
          { name: "Database Design", level: 85 },
          { name: "Migrations", level: 80 }
        ]
      },
      tools: {
        title: "Tools",
        skills: [
          { name: "Git/GitHub", level: 85 },
          { name: "VS Code", level: 95 },
          { name: "Postman", level: 80 },
          { name: "Hosting", level: 75 }
        ]
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "skills",
        class: "py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      }, _attrs))}><div class="max-w-6xl mx-auto"><div class="text-center mb-12 sm:mb-16"><h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">${ssrInterpolate(sectionTitle.value)}</h2><div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div></div><div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"><div class="glass-card p-4 sm:p-6"><h3 class="text-lg sm:text-xl font-bold text-white mb-4 text-center">${ssrInterpolate(skillCategories.value.frontend.title)}</h3><div class="space-y-3"><!--[-->`);
      ssrRenderList(skillCategories.value.frontend.skills, (skill) => {
        _push(`<div class="skill-item"><div class="flex justify-between text-white/80 text-xs sm:text-sm mb-1"><span>${ssrInterpolate(skill.name)}</span><span>${ssrInterpolate(skill.level)}%</span></div><div class="w-full bg-white/20 rounded-full h-2"><div class="bg-gradient-to-r from-blue-400 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out" style="${ssrRenderStyle({ width: skill.level + "%" })}"></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="glass-card p-4 sm:p-6"><h3 class="text-lg sm:text-xl font-bold text-white mb-4 text-center">${ssrInterpolate(skillCategories.value.backend.title)}</h3><div class="space-y-3"><!--[-->`);
      ssrRenderList(skillCategories.value.backend.skills, (skill) => {
        _push(`<div class="skill-item"><div class="flex justify-between text-white/80 text-xs sm:text-sm mb-1"><span>${ssrInterpolate(skill.name)}</span><span>${ssrInterpolate(skill.level)}%</span></div><div class="w-full bg-white/20 rounded-full h-2"><div class="bg-gradient-to-r from-purple-400 to-pink-600 h-2 rounded-full transition-all duration-1000 ease-out" style="${ssrRenderStyle({ width: skill.level + "%" })}"></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="glass-card p-4 sm:p-6"><h3 class="text-lg sm:text-xl font-bold text-white mb-4 text-center">${ssrInterpolate(skillCategories.value.database.title)}</h3><div class="space-y-3"><!--[-->`);
      ssrRenderList(skillCategories.value.database.skills, (skill) => {
        _push(`<div class="skill-item"><div class="flex justify-between text-white/80 text-xs sm:text-sm mb-1"><span>${ssrInterpolate(skill.name)}</span><span>${ssrInterpolate(skill.level)}%</span></div><div class="w-full bg-white/20 rounded-full h-2"><div class="bg-gradient-to-r from-pink-400 to-red-600 h-2 rounded-full transition-all duration-1000 ease-out" style="${ssrRenderStyle({ width: skill.level + "%" })}"></div></div></div>`);
      });
      _push(`<!--]--></div></div><div class="glass-card p-4 sm:p-6"><h3 class="text-lg sm:text-xl font-bold text-white mb-4 text-center">${ssrInterpolate(skillCategories.value.tools.title)}</h3><div class="space-y-3"><!--[-->`);
      ssrRenderList(skillCategories.value.tools.skills, (skill) => {
        _push(`<div class="skill-item"><div class="flex justify-between text-white/80 text-xs sm:text-sm mb-1"><span>${ssrInterpolate(skill.name)}</span><span>${ssrInterpolate(skill.level)}%</span></div><div class="w-full bg-white/20 rounded-full h-2"><div class="bg-gradient-to-r from-green-400 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style="${ssrRenderStyle({ width: skill.level + "%" })}"></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheSkills.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "TheProjects",
  __ssrInlineRender: true,
  props: {
    customProjects: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const sectionTitle = ref("Projects");
    const projectFilters = ref(["All", "Full Stack", "Frontend", "Backend"]);
    const activeFilter = ref("All");
    const projects = ref([
      {
        id: 1,
        title: "Student Performance & Analytics Tracker",
        stack: "Laravel + Vue.js + MySQL",
        category: "Full Stack",
        description: "Role-based access for admins, teachers, and students. Performance analytics with charts, attendance calendar, predictive analytics, CSV/Google Sheets import/export.",
        github: "https://github.com/sinh-dev",
        demo: "https://demo.example.com"
      },
      {
        id: 2,
        title: "PNC Canteen Management System",
        stack: "TypeScript OOP",
        category: "Backend",
        description: "Classes for Canteen, User, Student, Staff, Customer, MenuItem, Order, Payment. Efficient order processing and reporting.",
        github: "https://github.com/sinh-dev"
      },
      {
        id: 3,
        title: "School Leave Management System",
        stack: "PHP MVC + MySQL + Bootstrap 5",
        category: "Full Stack",
        description: "Roles: Students, Teachers, Education Team. Leave request workflows, approval system, email notifications.",
        github: "https://github.com/sinh-dev"
      },
      {
        id: 4,
        title: "Library Management System",
        stack: "TypeScript OOP",
        category: "Backend",
        description: "Book lending, return tracking, overdue management. Structured with UML-based class architecture.",
        github: "https://github.com/sinh-dev"
      },
      {
        id: 5,
        title: "Blog App with Category & Post Management",
        stack: "Vue.js + Vue Router + REST API",
        category: "Frontend",
        description: "CRUD for categories & posts, props, emits, slots. Fully tested with Postman.",
        github: "https://github.com/sinh-dev",
        demo: "https://demo.example.com"
      },
      {
        id: 6,
        title: "E-Commerce & POS System",
        stack: "Laravel + Vue.js",
        category: "Full Stack",
        description: "Inventory management, sales tracking, real-time order updates. Admin dashboard with analytics.",
        github: "https://github.com/sinh-dev"
      }
    ]);
    const filteredProjects = computed(() => {
      if (activeFilter.value === "All") {
        return projects.value;
      }
      return projects.value.filter((project) => project.category === activeFilter.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projects",
        class: "py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      }, _attrs))} data-v-cdc6a7f0><div class="max-w-7xl mx-auto" data-v-cdc6a7f0><div class="text-center mb-12 sm:mb-16" data-v-cdc6a7f0><h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4" data-v-cdc6a7f0>${ssrInterpolate(sectionTitle.value)}</h2><div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6 sm:mb-8" data-v-cdc6a7f0></div><div class="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12" data-v-cdc6a7f0><!--[-->`);
      ssrRenderList(projectFilters.value, (filter) => {
        _push(`<button class="${ssrRenderClass([
          "glass-button text-xs sm:text-sm px-3 sm:px-4 py-2",
          activeFilter.value === filter ? "bg-white/30" : "bg-white/10"
        ])}" data-v-cdc6a7f0>${ssrInterpolate(filter)}</button>`);
      });
      _push(`<!--]--></div></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-v-cdc6a7f0><!--[-->`);
      ssrRenderList(filteredProjects.value, (project) => {
        _push(`<div class="glass-card p-4 sm:p-6 group hover:scale-105 transform transition-all duration-300" data-v-cdc6a7f0><div class="aspect-video bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center" data-v-cdc6a7f0><svg class="w-8 h-8 sm:w-12 sm:h-12 text-white/60" fill="currentColor" viewBox="0 0 24 24" data-v-cdc6a7f0><path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 10 5.16-.05 9-4.45 9-10V7l-10-5z" data-v-cdc6a7f0></path></svg></div><h3 class="text-lg sm:text-xl font-bold text-white mb-2" data-v-cdc6a7f0>${ssrInterpolate(project.title)}</h3><p class="text-white/60 text-xs sm:text-sm mb-3" data-v-cdc6a7f0>${ssrInterpolate(project.stack)}</p><p class="text-white/80 text-sm mb-4 line-clamp-3 leading-relaxed" data-v-cdc6a7f0>${ssrInterpolate(project.description)}</p><div class="flex gap-2 sm:gap-3" data-v-cdc6a7f0><a${ssrRenderAttr("href", project.github)} class="flex-1 glass-button text-center text-xs sm:text-sm py-2 hover:bg-white/20 transition-all duration-300" target="_blank" rel="noopener noreferrer" data-v-cdc6a7f0> GitHub </a>`);
        if (project.demo) {
          _push(`<a${ssrRenderAttr("href", project.demo)} class="flex-1 glass-button text-center text-xs sm:text-sm py-2 hover:bg-white/20 transition-all duration-300" target="_blank" rel="noopener noreferrer" data-v-cdc6a7f0> Live Demo </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheProjects.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const TheProjects = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-cdc6a7f0"]]);
const _sfc_main$2 = {
  __name: "TheExperience",
  __ssrInlineRender: true,
  props: {
    customExperience: {
      type: Object,
      default: () => ({})
    },
    customEducation: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const sectionTitle = ref("Experience & Education");
    const education = ref({
      title: "Web Development Diploma",
      institution: "PNC",
      description: "Specialized courses in Laravel, Vue.js, Node.js, APIs, MySQL",
      skills: ["Laravel", "Vue.js", "Node.js", "MySQL", "APIs"]
    });
    const experience = ref({
      title: "Academic Projects & Development",
      period: "2022 - Present",
      achievements: [
        "Built and deployed multiple real-world academic projects applying full-stack development principles",
        "Collaborated in 5-member teams using Git for version control",
        "Designed ERDs and implemented database-driven applications",
        "Focused on performance, scalability, and usability"
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "experience",
        class: "py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      }, _attrs))}><div class="max-w-4xl mx-auto"><div class="text-center mb-12 sm:mb-16"><h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">${ssrInterpolate(sectionTitle.value)}</h2><div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div></div><div class="relative"><div class="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div><div class="space-y-8 sm:space-y-12"><div class="relative pl-16 sm:pl-20"><div class="absolute left-4 sm:left-6 w-4 h-4 bg-blue-400 rounded-full -translate-x-1/2"></div><div class="glass-card p-4 sm:p-6"><div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3"><h3 class="text-lg sm:text-xl font-bold text-white">${ssrInterpolate(education.value.title)}</h3><span class="text-white/60 text-sm mt-1 lg:mt-0">${ssrInterpolate(education.value.institution)}</span></div><p class="text-white/80 mb-3 text-sm sm:text-base">${ssrInterpolate(education.value.description)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(education.value.skills, (skill) => {
        _push(`<span class="px-2 sm:px-3 py-1 bg-white/20 rounded-full text-white/80 text-xs">${ssrInterpolate(skill)}</span>`);
      });
      _push(`<!--]--></div></div></div><div class="relative pl-16 sm:pl-20"><div class="absolute left-4 sm:left-6 w-4 h-4 bg-purple-400 rounded-full -translate-x-1/2"></div><div class="glass-card p-4 sm:p-6"><div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3"><h3 class="text-lg sm:text-xl font-bold text-white">${ssrInterpolate(experience.value.title)}</h3><span class="text-white/60 text-sm mt-1 lg:mt-0">${ssrInterpolate(experience.value.period)}</span></div><ul class="text-white/80 space-y-2 text-sm sm:text-base"><!--[-->`);
      ssrRenderList(experience.value.achievements, (achievement, index) => {
        _push(`<li class="flex items-start"><span class="text-blue-400 mr-2 flex-shrink-0 mt-1">\u2022</span><span>${ssrInterpolate(achievement)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheExperience.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TheContact",
  __ssrInlineRender: true,
  props: {
    customContactInfo: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const sectionTitle = ref("Get In Touch");
    const contactInfo = ref([
      {
        type: "email",
        text: "sinh.ern.pfdev@gmail.com",
        link: "mailto:sinh.ern.pfdev@gmail.com",
        external: false,
        icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      },
      {
        type: "linkedin",
        text: "LinkedIn Profile",
        link: "https://www.linkedin.com/in/sinh-ern-8b22b0345",
        external: true,
        icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      },
      {
        type: "github",
        text: "GitHub Profile",
        link: "https://github.com/sinh-dev",
        external: true,
        icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      },
      {
        type: "location",
        text: "Cambodia",
        link: null,
        external: false,
        icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      }
    ]);
    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    const isSubmitting = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
      }, _attrs))}><div class="max-w-4xl mx-auto"><div class="text-center mb-12 sm:mb-16"><h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4">${ssrInterpolate(sectionTitle.value)}</h2><div class="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto"></div></div><div class="grid lg:grid-cols-2 gap-8 sm:gap-12"><div class="space-y-6 sm:space-y-8"><div class="glass-card p-4 sm:p-6"><h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Let&#39;s Connect</h3><div class="space-y-4"><!--[-->`);
      ssrRenderList(contactInfo.value, (contact) => {
        _push(`<div class="flex items-center"><svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-3 sm:mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path${ssrRenderAttr("d", contact.icon)}></path></svg>`);
        if (contact.link) {
          _push(`<a${ssrRenderAttr("href", contact.link)} class="text-white/80 hover:text-white transition-colors text-sm sm:text-base break-all"${ssrRenderAttr("target", contact.external ? "_blank" : void 0)}${ssrRenderAttr("rel", contact.external ? "noopener noreferrer" : void 0)}>${ssrInterpolate(contact.text)}</a>`);
        } else {
          _push(`<span class="text-white/80 text-sm sm:text-base">${ssrInterpolate(contact.text)}</span>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div><div class="glass-card p-4 sm:p-6"><h3 class="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Message</h3><form class="space-y-4 sm:space-y-6"><div><input${ssrRenderAttr("value", form.value.name)} type="text" placeholder="Your Name" class="glass-input w-full text-sm sm:text-base" required></div><div><input${ssrRenderAttr("value", form.value.email)} type="email" placeholder="Your Email" class="glass-input w-full text-sm sm:text-base" required></div><div><input${ssrRenderAttr("value", form.value.subject)} type="text" placeholder="Subject" class="glass-input w-full text-sm sm:text-base" required></div><div><textarea placeholder="Your Message" rows="5" class="glass-input w-full resize-none text-sm sm:text-base" required>${ssrInterpolate(form.value.message)}</textarea></div><button type="submit" class="w-full glass-button font-medium py-2 sm:py-3 hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""}>${ssrInterpolate(isSubmitting.value ? "Sending..." : "Send Message")}</button></form></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheContact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Sinh Ern - Full-Stack Web Developer Portfolio",
      meta: [
        {
          name: "description",
          content: "Welcome to Sinh Ern's portfolio showcasing full-stack web development projects using Vue.js, Laravel, PHP, and modern frameworks."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(TheProjects, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DEOiPZKM.mjs.map
