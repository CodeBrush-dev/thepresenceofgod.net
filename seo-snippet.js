// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.thepresenceofgod.net",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.thepresenceofgod.net/","title_tag":"Presence of God Devotions & Poetry | thepresenceofgod","meta_description":"Christian devotions and inspirational poetry to deepen your faith in God, hope in God, and love of God. Read Paula Averitt’s latest writings at thepresenceofgod.net."},{"page_url":"https://www.thepresenceofgod.net/welcome","title_tag":"Faith in God & Hope in God | thepresenceofgod Welcome","meta_description":"Discover faith in God, hope in God, and the love of God. Journey through Scripture-based devotions that invite you into the peaceful presence of God in Christ."},{"page_url":"https://www.thepresenceofgod.net/about","title_tag":"Presence of God & Ohio Christian Writing | About Paula","meta_description":"Learn about Christian writer Paula Averitt, her faith in God, love of God, and ministry at Jersey Baptist Church in New Albany, Ohio, through devotions and books."},{"page_url":"https://www.thepresenceofgod.net/short-reads","title_tag":"Christian Devotions & Faith in God | Short Reads","meta_description":"Explore Christian devotions focused on faith in God, hope in God, and the love of God. Short, Scripture-based reads to encourage your daily walk with Christ."},{"page_url":"https://www.thepresenceofgod.net/poems-1","title_tag":"Inspirational Poetry & Love of God | Christian Poems","meta_description":"Read inspirational poetry about the presence of God and the love of God. Christian poems by Paula Averitt to encourage your heart and strengthen your faith."},{"page_url":"https://www.thepresenceofgod.net/how-to-know","title_tag":"How to Know God & Faith in God | thepresenceofgod","meta_description":"Learn how to know God personally, experience the presence of God, and receive eternal life through faith in God and the saving work of Jesus Christ."},{"page_url":"https://www.thepresenceofgod.net/about-1","title_tag":"Paula Averitt Books & Ohio Christian Writing","meta_description":"Discover Paula Averitt books including On the Edge of Life. Ohio Christian writing that shares the hope in God and love of God through inspiring true stories."},{"page_url":"https://www.thepresenceofgod.net/copy-of-about","title_tag":"Contact Paula Averitt | Presence of God Devotions","meta_description":"Contact Christian writer Paula Averitt at thepresenceofgod to share prayer requests, questions, or feedback about her Presence of God devotions and books."},{"page_url":"https://www.thepresenceofgod.net/blog/categories/shorts-inspiration","title_tag":"Christian Devotions & Hope in God | Short Inspirations","meta_description":"Browse short Christian devotions about faith in God, hope in God, and the presence of God. Be encouraged in your walk with Christ through brief, powerful reads."}],"keywords":["presence of god","faith in god","love of god","christian devotions","hope in god","inspirational poetry","new albany ohio","ohio christian writing","paula averitt books","jersey baptist church"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.thepresenceofgod.net/#blog",
  "url": "https://www.thepresenceofgod.net/",
  "name": "thepresenceofgod",
  "description": "Faith-based Christian devotions, short reads, and poems focused on faith in God, hope in God, and love of God.",
  "publisher": {
    "@type": "Person",
    "name": "Paula Averitt",
    "@id": "https://www.thepresenceofgod.net/#person"
  },
  "inLanguage": "en",
  "image": [
    "https://static.wixstatic.com/media/1359d0df7c934f6e94a34a29ff4f599d.jpg/v1/fill/w_96,h_64,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/1359d0df7c934f6e94a34a29ff4f599d.jpg"
  ],
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.thepresenceofgod.net/"
  },
  "blogPost": [
    {
      "@type": "BlogPosting",
      "@id": "https://www.thepresenceofgod.net/blog/categories/shorts-inspiration#christs-return",
      "headline": "Christ's Return",
      "author": {
        "@type": "Person",
        "name": "Paula Averitt",
        "@id": "https://www.thepresenceofgod.net/#person"
      },
      "description": "A Christian devotion reflecting on waiting for Christ to return and focusing on praise and worship while trusting God's timing.",
      "articleSection": "Short Reads",
      "inLanguage": "en",
      "image": [
        "https://static.wixstatic.com/media/c4833b_d53580fdfd374d4a9c55552d7a143c9d~mv2.jpeg/v1/fill/w_239,h_238,fp_0.50_0.50,q_90,enc_avif,quality_auto/c4833b_d53580fdfd374d4a9c55552d7a143c9d~mv2.webp"
      ],
      "timeRequired": "PT2M"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.thepresenceofgod.net/blog/categories/shorts-inspiration#you-hear-my-voice",
      "headline": "You Hear My Voice",
      "author": {
        "@type": "Person",
        "name": "Paula Averitt",
        "@id": "https://www.thepresenceofgod.net/#person"
      },
      "description": "A Christian poem or devotion titled \"You Hear My Voice\" reflecting on God's attentive presence.",
      "articleSection": "Poems",
      "inLanguage": "en",
      "image": [
        "https://static.wixstatic.com/media/11062b_9048b8c95aea4baf8bf259865e7eb2ed~mv2.jpg/v1/fill/w_239,h_238,fp_0.50_0.50,q_90,enc_avif,quality_auto/11062b_9048b8c95aea4baf8bf259865e7eb2ed~mv2.webp"
      ],
      "timeRequired": "PT1M"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.thepresenceofgod.net/blog/categories/shorts-inspiration#the-kindness-of-god",
      "headline": "The Kindness of God",
      "author": {
        "@type": "Person",
        "name": "Paula Averitt",
        "@id": "https://www.thepresenceofgod.net/#person"
      },
      "description": "A devotion exploring the depth of God's kindness and how it is revealed in our lives.",
      "articleSection": "Short Reads",
      "inLanguage": "en",
      "image": [
        "https://static.wixstatic.com/media/c4833b_2383532fb10241bcb90571cdb7561ab4~mv2.jpeg/v1/fill/w_238,h_238,fp_0.50_0.50,q_90,enc_avif,quality_auto/c4833b_2383532fb10241bcb90571cdb7561ab4~mv2.webp"
      ],
      "timeRequired": "PT2M"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.thepresenceofgod.net/blog/categories/shorts-inspiration#the-power-of-the-cross",
      "headline": "The Power of the Cross",
      "author": {
        "@type": "Person",
        "name": "Paula Averitt",
        "@id": "https://www.thepresenceofgod.net/#person"
      },
      "description": "A devotion on how Jesus, through the cross, conquered sin, Satan, death, and the grave, and what this means for believers.",
      "articleSection": "Short Reads",
      "inLanguage": "en",
      "image": [
        "https://static.wixstatic.com/media/c4833b_d740962748a0454cb4dc22e5e2598ac7~mv2.jpeg/v1/fill/w_239,h_238,fp_0.50_0.50,q_90,enc_avif,quality_auto/c4833b_d740962748a0454cb4dc22e5e2598ac7~mv2.webp"
      ],
      "timeRequired": "PT2M"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.thepresenceofgod.net/blog/categories/shorts-inspiration#redeemed",
      "headline": "Redeemed",
      "author": {
        "@type": "Person",
        "name": "Paula Averitt",
        "@id": "https://www.thepresenceofgod.net/#person"
      },
      "description": "A reflection on the believer's identity in Christ, focusing on being redeemed and purchased back to God by His blood.",
      "articleSection": "Short Reads",
      "inLanguage": "en",
      "image": [
        "https://static.wixstatic.com/media/c4833b_81af156056c34029b1fd44ea307f1a31~mv2.jpeg/v1/fill/w_239,h_238,fp_0.50_0.50,q_90,enc_avif,quality_auto/c4833b_81af156056c34029b1fd44ea307f1a31~mv2.webp"
      ],
      "timeRequired": "PT2M"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.thepresenceofgod.net/blog/categories/shorts-inspiration#living-in-the-sanctuary",
      "headline": "Living in the Sanctuary",
      "author": {
        "@type": "Person",
        "name": "Paula Averitt",
        "@id": "https://www.thepresenceofgod.net/#person"
      },
      "description": "A Christian devotion about living in God's sanctuary and experiencing His presence.",
      "articleSection": "Short Reads",
      "inLanguage": "en",
      "image": [
        "https://static.wixstatic.com/media/c4833b_977c971efc144998821423696aac339e~mv2.jpeg/v1/fill/w_238,h_238,fp_0.50_0.50,q_90,enc_avif,quality_auto/c4833b_977c971efc144998821423696aac339e~mv2.webp"
      ],
      "timeRequired": "PT1M"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.thepresenceofgod.net/blog/categories/shorts-inspiration#lessons-in-faith",
      "headline": "Lessons in Faith",
      "author": {
        "@type": "Person",
        "name": "Paula Averitt",
        "@id": "https://www.thepresenceofgod.net/#person"
      },
      "description": "A devotion sharing lessons in faith and trusting God more deeply.",
      "articleSection": "Short Reads",
      "inLanguage": "en",
      "image": [
        "https://static.wixstatic.com/media/c4833b_52901e50c19244f1bbd0a44878d47122~mv2.jpeg/v1/fill/w_239,h_238,fp_0.50_0.50,q_90,enc_avif,quality_auto/c4833b_52901e50c19244f1bbd0a44878d47122~mv2.webp"
      ],
      "timeRequired": "PT2M"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.thepresenceofgod.net/blog/categories/shorts-inspiration#trials",
      "headline": "TRIALS",
      "author": {
        "@type": "Person",
        "name": "Paula Averitt",
        "@id": "https://www.thepresenceofgod.net/#person"
      },
      "description": "A Christian devotion on facing and enduring trials with faith in God.",
      "articleSection": "Short Reads",
      "inLanguage": "en",
      "image": [
        "https://static.wixstatic.com/media/c4833b_494f40ebcebe4147b329d36684e4212b~mv2.jpeg/v1/fill/w_239,h_238,fp_0.50_0.50,q_90,enc_avif,quality_auto/c4833b_494f40ebcebe4147b329d36684e4212b~mv2.webp"
      ],
      "timeRequired": "PT3M"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://www.thepresenceofgod.net/blog/categories/shorts-inspiration#overcoming-fear-without-doubt",
      "headline": "Overcoming Fear without Doubt",
      "author": {
        "@type": "Person",
        "name": "Paula Averitt",
        "@id": "https://www.thepresenceofgod.net/#person"
      },
      "description": "A devotion on overcoming fear without doubting God, encouraging trust and confidence in Him.",
      "articleSection": "Short Reads",
      "inLanguage": "en",
      "image": [
        "https://static.wixstatic.com/media/c4833b_04cc6194767d41af8e6a9cfa637920fb~mv2.jpeg/v1/fill/w_238,h_238,fp_0.50_0.50,q_90,enc_avif,quality_auto/c4833b_04cc6194767d41af8e6a9cfa637920fb~mv2.webp"
      ],
      "timeRequired": "PT2M"
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
