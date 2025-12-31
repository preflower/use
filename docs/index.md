---
layout: page
editLink: false
lastUpdated: false
---

<div class="dashboard-container">

<section class="package-section">
<h2 class="section-title"><span class="icon">📦</span> Utilities <span>@preflower/utils</span></h2>

<div class="category-wrapper">
<div class="category-group">
<h3 class="category-title">🔢 Array</h3>
<div class="method-grid">
<a href="/use/packages/utils/array/get-array-first" class="method-card">
<div class="method-name">getArrayFirst</div>
<p class="method-desc">Safely retrieve the first element of any array-like variable.</p>
</a>
</div>
</div>

<div class="category-group">
<h3 class="category-title">📅 Date</h3>
<div class="method-grid">
<a href="/use/packages/utils/date/format" class="method-card">
<div class="method-name">format</div>
<p class="method-desc">Ultra-lightweight date formatter with flexible templates.</p>
</a>
</div>
</div>


<div class="category-group">
<h3 class="category-title">📱 Device</h3>
<div class="method-grid">
<a href="/use/packages/utils/device/is-ios" class="method-card">
<div class="method-name">isIOS</div>
<p class="method-desc">Reliable detection for Apple iOS environments and webviews.</p>
</a>
</div>
</div>

<div class="category-group">
<h3 class="category-title">⚙️ Function</h3>
<div class="method-grid">
<a href="/use/packages/utils/function/idempotent" class="method-card">
<div class="method-name">idempotent</div>
<p class="method-desc">Ensure critical functions are only executed once in the lifecycle.</p>
</a>
</div>
</div>

<div class="category-group">
<h3 class="category-title">📦 Object</h3>
<div class="method-grid">
<a href="/use/packages/utils/object/define-map" class="method-card">
<div class="method-name">defineMap</div>
<p class="method-desc">Transform dictionaries into typed records or flattened arrays.</p>
</a>
<a href="/use/packages/utils/object/to-raw-type" class="method-card">
<div class="method-name">toRawType</div>
<p class="method-desc">Get the underlying JS [[Class]] type as a readable string.</p>
</a>
<a href="/use/packages/utils/object/pick" class="method-card">
<div class="method-name">pick</div>
<p class="method-desc">Create a new object by picking specific keys from another.</p>
</a>
</div>
</div>

<div class="category-group">
<h3 class="category-title">🖥️ Screen</h3>
<div class="method-grid">
<a href="/use/packages/utils/screen/return-is-rotation-function" class="method-card">
<div class="method-name">returnIsRotationFunction</div>
<p class="method-desc">Stateful detector for identifying device orientation changes.</p>
</a>
</div>
</div>

<div class="category-group">
<h3 class="category-title">💾 Storage</h3>
<div class="method-grid">
<a href="/use/packages/utils/storage/" class="method-card">
<div class="method-name">storage</div>
<p class="method-desc">Type-safe JSON wrappers for localStorage and sessionStorage.</p>
</a>
</div>
</div>
</div>
</section>

<section class="package-section">
<h2 class="section-title"><span class="icon">⚓</span> Hooks <span>@preflower/vue-use</span></h2>

<div class="category-wrapper">
<div class="category-group">
<h3 class="category-title">⌨️ Keyboard</h3>
<div class="method-grid">
<a href="/use/packages/vue-use/use-keyboard-detector" class="method-card highlight-vue">
<div class="method-name">useKeyboardDetector</div>
<p class="method-desc">Complete toolkit for virtual keyboard height and visibility tracking.</p>
</a>
</div>
</div>

<div class="category-group">
<h3 class="category-title">📜 Scroll</h3>
<div class="method-grid">
<a href="/use/packages/vue-use/use-scroll-parent" class="method-card highlight-vue">
<div class="method-name">useScrollParent</div>
<p class="method-desc">Find the nearest scrollable element for any dynamic DOM node.</p>
</a>
</div>
</div>
</div>
</section>

</div>

<style>
/* Reset and Base Styles */
:deep(.vp-doc h1), :deep(.vp-doc h2), :deep(.vp-doc h3) {
  border: none;
  margin: 0;
  padding: 0;
}

.dashboard-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 16px 0;
}

.package-section {
  margin-bottom: 60px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 32px !important;
  color: var(--vp-c-text-1);
}

.section-title span {
  font-size: 1rem;
  font-weight: 400;
  color: var(--vp-c-text-3);
  margin-left: 12px;
}

.category-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
}

.category-group {
  margin-bottom: env(safe-area-inset-bottom);
}

.category-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text-2);
  margin-bottom: 16px !important;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 4px;
  border-left: 4px solid var(--vp-c-brand-soft);
}

.method-grid {
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  gap: 12px;
}

.method-card {
  display: block;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  padding: 20px;
  border-radius: 12px;
  text-decoration: none !important;
  transition: all 0.25s ease;
}

.method-card:hover {
  transform: translateX(4px);
  background: var(--vp-c-bg-mute);
  border-color: var(--vp-c-brand-1);
}

.method-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-bottom: 6px;
  font-family: var(--vp-font-family-mono);
}

.method-desc {
  font-size: 0.9rem;
  line-height: 1.4;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* Vue Highlight Variant */
.method-card.highlight-vue:hover {
  border-color: #42b883;
}

.method-card.highlight-vue .method-name {
  color: #42b883;
}

@media (max-width: 960px) {
  .category-wrapper { grid-template-columns: 1fr; gap: 32px; }
  .brand-title { font-size: 2.5rem; }
}
</style>
