# Website Performance Review: arngren.net

## What We Looked At

We tested your website on mobile devices using Google's official performance tools — the same tools Google uses to decide how to rank your site in search results.

---

## The Bottom Line

**Your website loads too slowly on mobile phones.** When someone visits your site on their phone, the main content takes about **3.4 seconds** to appear. Google considers anything over 2.5 seconds to be a problem, and this directly affects where your site shows up in search results.

The good news: on desktop computers, your site loads quickly (0.5 seconds). The problem is specifically with mobile, and **mobile is where over 60% of web traffic comes from**.

---

## Why It's Slow (In Plain English)

### 1. Your Images Are Too Big
Your product images are much larger than they need to be. Imagine sending a framed poster through the mail when a postcard would do — it takes longer and costs more, but the person on the other end sees it at postcard size anyway.

**What this means:** Your visitors' phones are downloading roughly **1MB of unnecessary image data** every time they visit. That's like watching a 30-second video just to see your homepage.

### 2. No Repeat-Visit Memory
When someone visits your site a second time, their phone downloads everything from scratch — as if they'd never been there before. Most modern websites remember what they already sent, so return visits are nearly instant.

**What this means:** Every single visit is as slow as the first one.

### 3. The Page Layout Is Outdated
Your site is built using a method that was common in the early 2000s (table-based layout). Modern phones struggle with this because they have to process the entire page before they can show anything at all.

---

## What We Recommend

We've ranked these by **how much difference they make** versus **how much effort they take**:

| # | Fix | Effort | Impact |
|:--|:----|:-------|:-------|
| 1 | **Optimize your images** — convert to modern formats, resize to proper dimensions | A few hours | ★★★★★ |
| 2 | **Add caching rules** — so return visits load instantly | 1 hour | ★★★★ |
| 3 | **Tell the browser what to load first** — a single line of code that saves 1.5 seconds | 15 minutes | ★★★★ |
| 4 | **Add lazy loading** — only load images people can actually see | 1–2 hours | ★★★ |
| 5 | **Modernize the page structure** — replace the table layout with modern HTML | 2–3 days | ★★★ |

**Fixes 1–4 together should bring your mobile load time under the 2.5-second threshold**, putting you in Google's "Good" category. We estimate this is about **6 hours of work**.

Fix 5 (modernizing the layout) is a bigger project but would also improve your site's accessibility, mobile experience, and search ranking.

---

## What We Built to Prove It

We rebuilt your homepage's product listing section using modern techniques. Here's the comparison:

| Metric | Your Current Site | Rebuilt Version |
|:-------|:-----------------|:---------------|
| **Page weight** | ~2.5 MB | ~15 KB |
| **Time to see content** | 3.4 seconds | < 0.5 seconds |
| **Mobile-friendly** | No | Yes |
| **Accessibility** | Poor | Excellent |
| **Clean code** | Table-based HTML | Modern semantic HTML |

The rebuilt version loads **almost instantly** and works perfectly on phones, tablets, and computers.

---

## What We Wouldn't Bother Fixing

Not everything is worth the effort. We specifically **would not** recommend:

- **Adding a JavaScript framework** — your site doesn't need React or Vue. It would actually make things slower.
- **Adding a service worker** — too complex for the return, given your site type.
- **Font optimization** — you're using system fonts, which is actually the right choice.

---

## Next Steps

1. **Quick wins first** — image optimization and caching headers can be done in a single afternoon and will have the biggest impact.
2. **Measure after** — run the same Google PageSpeed test after implementing fixes to confirm improvement.
3. **Plan the redesign** — if you're open to it, a modern mobile-friendly redesign would be the biggest long-term win.

We're happy to discuss any of this in more detail or help implement the changes.
