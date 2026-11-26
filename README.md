# HTML & CSS Mastery

Repository pembelajaran HTML, CSS, Responsive Design, Web Accessibility, UI Components, dan Full Web Projects dari dua course Udemy yang kini disusun rapi ke dalam **11 modul bertopik** + folder **`notes/`**.

![HTML & CSS Mastery Banner](https://github.com/nuhptr/html-css-javascript-learn-udemy/assets/50306963/fcb17650-bb6e-4185-80d3-4567054fc774)

## Courses Covered & Origin Legend

| Tag | Original Folder | Course Name | Status |
| :--- | :--- | :--- | :--- |
| **`[BR]`** | `build-responsive-real-html-css` | [Build Responsive Real-World Websites with HTML and CSS](https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/) | Done |
| **`[MH]`** | `modern-html-css-sass` | [Modern HTML & CSS From The Beginning (Including Sass)](https://www.udemy.com/course/modern-html-css-from-the-beginning/) | Done |
| **`[BR + MH]`** | Merged topics | Materi sejenis yang digabungkan dari kedua course | Done |

---

## Running Locally

Buka **Curriculum Hub** ([index.html](./index.html)) melalui static HTTP server agar semua demo, gambar, dan filter berjalan mulus:

```sh
python3 -m http.server 8000
# Buka http://localhost:8000/index.html
```

Atau menggunakan Node:

```sh
npx serve .
```

---

## Module Structure Overview

| Module | Directory | Origin | Focus |
| :--- | :--- | :--- | :--- |
| **01** | [`01-html-fundamentals/`](./01-html-fundamentals/) | `[BR + MH]` | Semantic HTML5, typography, links, tables, media, SVG, iframe, `<popover>`, `<details>` |
| **02** | [`02-html-forms/`](./02-html-forms/) | `[MH]` | Inputs, checkboxes/radios, `<datalist>`, validation, styled auth & contact forms |
| **03** | [`03-css-fundamentals/`](./03-css-fundamentals/) | `[BR + MH]` | Box model, cascade, colors, fonts, positioning, float/clearfix, shadows, menus |
| **04** | [`04-css-selectors-and-modern/`](./04-css-selectors-and-modern/) | `[MH]` | `:is()`, `:where()`, `:has()`, `:nth-child()`, custom properties, `calc()`, nesting, sticky nav |
| **05** | [`05-css-flexbox/`](./05-css-flexbox/) | `[BR + MH]` | Flex basics, ordering, blog layout, responsive challenge |
| **06** | [`06-css-grid/`](./06-css-grid/) | `[BR + MH]` | Grid tracks, named lines, `grid-template-areas`, `minmax()`, `auto-fit`, challenges |
| **07** | [`07-responsive-design/`](./07-responsive-design/) | `[MH]` | `em`/`rem`, dynamic viewport units (`dvh`), media queries, container queries & `cqi` |
| **08** | [`08-animations-and-transitions/`](./08-animations-and-transitions/) | `[MH]` | Transitions, 2D/3D transforms, rotating cube, keyframes, JS triggers, mobile drawer |
| **09** | [`09-web-accessibility/`](./09-web-accessibility/) | `[MH]` | ARIA attributes, `aria-expanded` disclosure, screen reader landmarks & skip links |
| **10** | [`10-ui-components/`](./10-ui-components/) | `[BR + MH]` | 9 komponen UI standalone (Accordion, Carousel, Data Table, Pagination, Hero, App Shell, Product Card, Shoe Cards, Pricing Cards) |
| **11** | [`11-projects/`](./11-projects/) | `[BR + MH]` | 6 project website lengkap (Chair Shop, Bono Sign Up, Lumina Creative, EdgeLedger Finance, Leno App, Tutor Courses) |
| **—** | [`notes/`](./notes/) | `[BR + MH]` | Konsolidasi PDF (`pdfs/`), diagram PNG (`diagrams/`), dan catatan belajar (`markdown/`) |

---

## Detailed Mapping by Original Course

### 1. Dari `build-responsive-real-html-css` (`[BR]`)

- **HTML & CSS Fundamentals**:
  - [`01-html-fundamentals/basic-structure/`](./01-html-fundamentals/basic-structure/index.html) *(digabung dengan `[MH]`)*
  - [`01-html-fundamentals/links-and-images/blog.html`](./01-html-fundamentals/links-and-images/blog.html)
  - [`01-html-fundamentals/semantic-html/article.html`](./01-html-fundamentals/semantic-html/article.html) *(The Code Magazine HTML)*
  - [`03-css-fundamentals/blog-article-styled/`](./03-css-fundamentals/blog-article-styled/index.html) *(The Code Magazine CSS)*
  - [`03-css-fundamentals/float-and-alignment/`](./03-css-fundamentals/float-and-alignment/index.html) *(digabung dengan `[MH]`)*
- **Layouts (Flexbox & CSS Grid)**:
  - [`05-css-flexbox/basics/`](./05-css-flexbox/basics/index.html) *(digabung dengan `[MH]`)*
  - [`05-css-flexbox/blog-layout/`](./05-css-flexbox/blog-layout/index.html) *(The Code Magazine Flexbox)*
  - [`06-css-grid/basics/`](./06-css-grid/basics/index.html)
  - [`06-css-grid/blog-layout/`](./06-css-grid/blog-layout/index.html) *(The Code Magazine CSS Grid)*
- **UI Components (`10-ui-components/`)**:
  - [`accordion/`](./10-ui-components/accordion/index.html)
  - [`carousel/`](./10-ui-components/carousel/index.html)
  - [`data-table/`](./10-ui-components/data-table/index.html)
  - [`pagination/`](./10-ui-components/pagination/index.html)
  - [`hero-section/`](./10-ui-components/hero-section/index.html) *(Omnifood Hero)*
  - [`app-layout/`](./10-ui-components/app-layout/index.html) *(Webmail App Layout)*
  - [`product-card/`](./10-ui-components/product-card/index.html) *(Converse Chuck Taylor Challenge)*
- **Full Project (`11-projects/`)**:
  - [`chair-shop/`](./11-projects/chair-shop/index.html) *(Lisbon Chair Shop)*
- **Study Notes & Diagrams**:
  - [`notes/pdfs/`](./notes/pdfs/) — `all-design-guidelines.pdf`, `theory-lectures-v2-compressed.pdf`, `types-category-design.pdf`
  - [`notes/diagrams/html-css-fundamentals/`](./notes/diagrams/html-css-fundamentals/) — `box-model.png`, `conflict-between-selectors.png`, `element-block-level.png`, `element-inline-level.png`, `final-element-width-and-height.png`
  - [`notes/markdown/html-article-draft.txt`](./notes/markdown/html-article-draft.txt)

### 2. Dari `modern-html-css-sass` (`[MH]`)

- **HTML, Forms & Accessibility**:
  - [`01-html-fundamentals/`](./01-html-fundamentals/) — seluruh 13 materi HTML & elemen modern lainnya + bagian `basic-structure`
  - [`02-html-forms/`](./02-html-forms/) — seluruh 9 materi form input, datalist, validation & styling
  - [`09-web-accessibility/`](./09-web-accessibility/) — seluruh 3 materi (`aria-attributes`, `aria-expanded`, `screen-reader-testing`)
- **CSS Fundamentals, Selectors, Responsive & Animations**:
  - [`03-css-fundamentals/`](./03-css-fundamentals/) — seluruh 10 materi CSS dasar lainnya + bagian `float-and-alignment`
  - [`04-css-selectors-and-modern/`](./04-css-selectors-and-modern/) — seluruh 10 materi modern CSS (`:is()`, `:where()`, `:has()`, nesting, variables, `calc()`, sticky navbar)
  - [`05-css-flexbox/`](./05-css-flexbox/) — `basics` *(merged)*, `flex-order`, `layout-challenge`
  - [`06-css-grid/`](./06-css-grid/) — `columns-and-rows`, `align-and-justify`, `spanning-and-named-lines`, `template-areas`, `repeat-minmax-autofit`, `responsive-grid`, `challenge-1`, `challenge-2`
  - [`07-responsive-design/`](./07-responsive-design/) — seluruh 5 materi (`em-rem-units`, `viewport-units`, `media-queries`, `container-queries`, `container-units`)
  - [`08-animations-and-transitions/`](./08-animations-and-transitions/) — seluruh 9 materi (`transitions`, `transforms-2d`, `absolute-centering`, `transforms-3d`, `rotating-cube-3d`, `keyframes-basics`, `keyframes-advanced`, `js-triggered-animation`, `hamburger-menu`)
- **UI Components (`10-ui-components/`)**:
  - [`shoe-collection-cards/`](./10-ui-components/shoe-collection-cards/index.html)
  - [`pricing-cards/`](./10-ui-components/pricing-cards/index.html)
- **Full Projects (`11-projects/`)**:
  - [`bono-signup/`](./11-projects/bono-signup/index.html)
  - [`lumina-creative/`](./11-projects/lumina-creative/index.html)
  - [`edgeledger-finance/`](./11-projects/edgeledger-finance/index.html)
  - [`leno-app/`](./11-projects/leno-app/index.html)
  - [`tutor-courses/`](./11-projects/tutor-courses/index.html)
- **Study Notes & Diagrams**:
  - [`notes/diagrams/html-css-fundamentals/`](./notes/diagrams/html-css-fundamentals/) — `different-semantic-with-non-semantic.png`, `filter-property-explain.png`, `vendor-prefixes-explain.png`
  - [`notes/diagrams/animations/`](./notes/diagrams/animations/) — `common-animatible-properties.png`, `transform-property.png`, `transition-vs-animations.png`
  - [`notes/diagrams/accessibility/`](./notes/diagrams/accessibility/) — sub-folder `aria-attributes/` (8 PNG) & `web-accessibility/` (5 PNG)
  - [`notes/markdown/`](./notes/markdown/) — seluruh 8 catatan `.md` (`beda-em-dan-rem.md`, `block-and-inline-notes.md`, `css-notes.md`, `html-forms-notes.md`, `list-semantic-element.md`, `position-description.md`, `size.md`, `vendor-prefixes.md`)

---

## Preserved Assets & Diagrams Layout

Tidak ada gambar/aset media dari repo lama yang dihapus — seluruh aset tetap dipertahankan dan ditempatkan sesuai konteksnya:

1. **Diagram & Slide Catatan** (`notes/diagrams/`) — dikelompokkan per topik agar mudah dicari:
   - `notes/diagrams/html-css-fundamentals/` (8 diagram box model, block/inline, selectors, filter, vendor prefixes)
   - `notes/diagrams/animations/` (3 diagram transform, transition, animatable properties)
   - `notes/diagrams/accessibility/aria-attributes/` & `notes/diagrams/accessibility/web-accessibility/` (13 diagram ARIA & accessibility)
2. **Aset Lokal Tiap Materi & Project** — gambar demo (`img/`, `images/`, atau file lokal di folder lesson/component/project seperti `10-ui-components/carousel/img_maria.jpg`, `10-ui-components/product-card/img_challenge.jpeg`, `11-projects/*/images/`) tetap menyatu di direktori masing-masing supaya setiap halaman bisa dibuka secara mandiri tanpa broken image.
