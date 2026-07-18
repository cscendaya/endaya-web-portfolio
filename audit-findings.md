Fetched all five pages plus the CV PDF. Here's the audit.

---

## Executive Summary

The site is **strong on writing and weak on academic evidence**. The prose, positioning, and engineering framing are better than most professional portfolios — but the submission is being graded against a checklist, and three checklist items are outright absent from the live site: **GUI screenshots, certificates, and seminars**. A fourth — **year attribution for First→Fourth Year software** — exists in the CV PDF but nowhere on the website, so an evaluator cannot verify coverage without opening the resume.

This is not a design problem. Every gap is a content problem, and all of them are fixable in a few hours.

---

## Critical Issues (Must Fix Before Submission)

### 1. No GUI screenshots anywhere on the site
**Problem:** Zero screenshots for any of the six projects, including the capstone.
**Why it matters:** "GUI Screenshots" is an explicit, per-project requirement. It is the single most literal item on the rubric and currently scores ❌ six times.
**Evidence:** `/projects` renders each project as title → description → Engineering contribution → Technologies. No image elements, no gallery, no figure captions. Same on `/` featured card.
**Recommendation:** Add at least 2–3 screenshots per project (capstone: web dashboard, findings view, and a photo of the Pi probe). Even unstyled inline images beat none. If time collapses, prioritize capstone → R-EaseCite → Doorbell.
**Effort:** More than 30 minutes (this is the big one — budget 60–90 min including capture).

### 2. Certificates are missing from the website entirely
**Problem:** Required section does not exist. Certifications appear **only inside the CV PDF**.
**Why it matters:** Explicit required item. An evaluator ticking boxes on the live site finds nothing.
**Evidence:** No "Certificates" in header nav, footer nav, `/about`, or `/skills`. The PDF lists Google Cloud Computing Foundations (2026), CompTIA Tech Plus (2025), Cisco Ethical Hacker (2025), CCNA ITN (2025), CCNA SRWE (2025), TOEIC 920 (2025) — none surfaced on-site.
**Recommendation:** Add a **Certificates** section to `/about` (or a `/certificates` page linked in nav) listing issuer, credential name, year, and credential/verification link where available. Certificate images are ideal but a clean list is acceptable.
**Effort:** 30 minutes.

### 3. Seminars section is missing entirely
**Problem:** Required item with no content anywhere — not on the site, not in the CV.
**Why it matters:** Explicit required item; currently unanswerable.
**Evidence:** No mention of seminars, webinars, workshops, or conferences on any of the five pages. `/about` lists only Cybersecurity Society of the Philippines affiliation in the PDF, not on-site.
**Recommendation:** Add a **Seminars / Training Attended** section with title, organizer, and date. If you genuinely have none, still create the section and state the affiliation + any org-hosted talks — an empty labeled section reads better than a silent omission.
**Effort:** 30 minutes (assuming you need to gather the list).

### 4. No dates on any project — Year 1 → Year 4 coverage cannot be verified
**Problem:** Projects page explicitly orders "by engineering weight rather than recency" and shows no years.
**Why it matters:** The requirement is "Software Developed (from First Year to Fourth Year)." Without dates, an evaluator cannot confirm the span. Your CV proves you *have* the span — the site hides it.
**Evidence:** `/projects` labels read "Capstone project / Featured", "Backend service / Completed", "IoT integration / Completed" — no dates. The CV has them: Bagsik ng Malayan (Jan 2022), Careby (Mar 2024), CCIS (Jul 2024), R-EaseCite (Jul 2025), Doorbell (Nov 2025), capstone (2026).
**Recommendation:** Add a year (or "Year 1 / Year 2 / Year 3 / Year 4" tag) to each project card. Keep your weight-based ordering — just make the year visible on each entry. Note the CV shows a gap around AY 2023; if you have a Year 2 project, add it.
**Effort:** 15 minutes.

### 5. Feature discussion is architectural, not feature-level
**Problem:** Project descriptions explain *what the system is* and *what you engineered*, but never enumerate **major features**.
**Why it matters:** "Discussion of Features" is a per-project requirement. Your writing is excellent at system boundaries and integration reasoning — and that is not the same thing as a feature discussion. A faculty evaluator looking for "what can a user do in this software" will not find a clear answer.
**Evidence:** Careby's entire description is one sentence: "A web application for scheduling and conducting online mental health therapy sessions." Bagsik ng Malayan is one sentence. Why-Pii describes the pipeline but never states what an assessor can actually *do* in the interface (scan history? findings by network? severity classification? export?).
**Recommendation:** Add a short **Features** list (3–5 bullets) per project, phrased from the user's side. Do not replace your engineering contribution text — add alongside it. Weakest and most urgent: Careby, Bagsik ng Malayan, CCIS.
**Effort:** 30 minutes.

### 6. Capstone hardware is not stated as hardware
**Problem:** The capstone requires "Hardware Used" as a distinct item; the site folds hardware into a mixed "Technologies" list.
**Why it matters:** Rubric separates Software Used and Hardware Used for the capstone specifically. A strict evaluator marks this 🟡 or ❌.
**Evidence:** Why-Pii Technologies reads: Raspberry Pi, Python, REST API design, MySQL, Kali Linux, Kismet, Tailscale — one undifferentiated list. Pi model, wireless adapter, antenna, and power source are unstated. Doorbell has the same issue: the CV names PIR Sensor and Sound Sensor; the site's Technologies list omits both.
**Recommendation:** Split the capstone card into **Software Used** and **Hardware Used**, with the Pi model number and adapter/antenna specified. Add PIR + sound sensor back to the Doorbell entry.
**Effort:** 15 minutes.

---

## High Priority (Fix If Time Allows)

### 7. Profile image alt text still reads "Profile image placeholder"
**Problem:** You replaced the image but the alt attribute was not updated.
**Why it matters:** Screen readers announce "Profile image placeholder." It also still surfaces in the rendered text layer — which is how I'm seeing it. On a portfolio whose thesis is "I care about the parts users don't see," this is an unfortunate tell.
**Evidence:** Homepage text content between the CTA buttons and "How I think" still returns `Profile image placeholder` as of this fetch.
**Recommendation:** Change to `alt="Carlie Shaye C. Endaya"`.
**Effort:** 5 minutes.

### 8. Open Graph URL points to the wrong domain
**Problem:** `og:url` is `https://endaya-webport.vercel.app` — the live site is `endaya-web-portfolio.vercel.app`.
**Why it matters:** Any link preview (LinkedIn, Messenger, Discord, a faculty group chat) may resolve to a stale or dead deployment. If someone shares your submission link, it can break.
**Evidence:** Present in the head of every page fetched.
**Recommendation:** Update the metadata base URL to the canonical domain.
**Effort:** 5 minutes.

### 9. No "Curriculum Vitae" on the page — only a PDF download
**Problem:** The rubric lists **Downloadable CV** *and* **Curriculum Vitae** as two separate items, implying an on-page CV in addition to the file.
**Why it matters:** Reasonable evaluators may read these as one item; strict ones will not. `/about` currently covers profile, experience, and education but omits certifications, affiliations, and contact details that a CV needs.
**Evidence:** Nav "Resume" links directly to the PDF — it is not a page. `/about` has no certifications or affiliations section.
**Recommendation:** Cheapest compliant fix: add Certificates + Seminars + Affiliations to `/about` so that page functions as the on-site CV, and rename the nav item to "Resume (PDF)" so the download is unambiguous.
**Effort:** 15 minutes (folds into fixes #2 and #3).

### 10. No repository or demo links on any project
**Problem:** GitHub is presented as a channel on `/contact` ("For code, GitHub is the better starting point") but no project links to a repo.
**Why it matters:** Recruiter impression. You tell them the code is on GitHub, then make them go find it.
**Evidence:** `/projects` — six entries, zero outbound links. Footer links to `github.com/cscendaya` generically.
**Recommendation:** Add a repo link per project where repos are public. Where private (capstone likely), state "Private repository — available on request."
**Effort:** 15 minutes.

---

## Medium Priority

- **Homepage features only one project.** Your strongest work leads, which is correct — but a visitor who doesn't click "View all projects" leaves thinking you have one project. Surfacing 2–3 cards would better signal the four-year span the rubric cares about. *(15 min)*
- **Contact page CTA is a dead-end loop.** "Let's talk" → "View ways to reach me" → `#contact-methods`, which jumps up the same page the reader is already on. Could not verify the anchor target resolves. Consider making it a `mailto:` instead. *(5 min)*
- **Footer nav omits Resume** while the header includes it — minor inconsistency. The footer's social row does carry "Download CV," so this is cosmetic. *(5 min)*
- **Skills page density.** The Enterprise Information Security group runs 14 items deep with sub-descriptions, dwarfing Databases (3 items). It's credible and internship-backed, but it visually overwhelms the backend identity you lead with. Not a submission blocker. *(Post-submission)*
- **Mobile responsiveness, dark mode consistency, and spacing:** Could not be verified from fetched HTML.

---

## Academic Requirements Checklist

| Requirement | Status | Evidence | Recommendation |
|---|---|---|---|
| Downloadable CV | ✅ | `/documents/Carlie_Endaya_Resume.pdf` loads; linked in header + footer on every page | None |
| Curriculum Vitae (on-site) | 🟡 | `/about` covers profile, experience, education — no certifications, seminars, or affiliations | Fold #2/#3 into `/about` |
| Programming Skills | ✅ | `/skills` — 7 competency groups + a portfolio-derived technology index | None |
| Certificates | ❌ | Absent from all 5 pages; 6 certs exist in the CV PDF only | Add Certificates section |
| Seminars | ❌ | No mention anywhere, including the CV | Add Seminars section |
| Software Developed (Y1–Y4) | 🟡 | 6 projects present but **no dates on site**; CV dates span Jan 2022 → 2026 with an apparent AY2023 gap | Add year to each card |
| — Discussion of Features | 🟡 | Architectural framing, no feature enumeration; Careby and Bagsik are one sentence each | Add 3–5 feature bullets per project |
| — GUI Screenshots | ❌ | Zero images across all six projects | Add 2–3 per project |
| — Software Used | ✅ | Technologies list on every project | None |
| Capstone — Discussion of Features | 🟡 | Pipeline and boundaries explained; user-facing capability never stated | State what an assessor can do |
| Capstone — GUI Screenshots | ❌ | None | Highest-priority screenshots |
| Capstone — Software Used | ✅ | Python, MySQL, Kali Linux, Kismet, Tailscale, REST API design | None |
| Capstone — Hardware Used | 🟡 | "Raspberry Pi" appears in a mixed Technologies list; no model, adapter, or antenna | Split into a Hardware Used block |

---

## Readability Review

**Clarity: strong.** The prose is unusually disciplined for a student portfolio. "I treat structure as the deliverable" and "a system is finished when its boundaries are clear... not when the feature happens to work" are the kind of lines that make an evaluator read the next paragraph.

**Content density: the About page is the risk.** "Professional experience → Information Security Intern" is a single ~200-word paragraph covering SIEM review, TIP, endpoint monitoring, SentinelOne diagnostics, firewall assist, GRC documentation, ISO/PCI/SOC evidence prep, infographics, *and* leading ISMS presentations. It's a genuine wall of text and it buries your best material — "regularly led ISMS presentations in the supervisor's absence" is a standout detail sitting at the end of sentence nine. Break it into 4–5 bullets by function. *(15 min)*

**Repetition:** The Skills competency groups are duplicated verbatim between `/` and `/skills`. Defensible as a homepage summary, but the homepage copy is the *full* list, not a summary — so the Skills page adds only three groups of genuinely new content. Consider trimming the homepage to group headers + 3–4 representative items each.

**Scanability: the weakest dimension.** Everything is prose. There are no dates, no images, no feature bullets, no visual anchors on the project cards. A reader scanning at speed gets titles and technology chips — nothing in between. Fixes #1, #4, and #5 all resolve this simultaneously.

**Vague explanations:** Careby ("A web application for scheduling and conducting online mental health therapy sessions") and CCIS both stop at one descriptive sentence, then jump straight to "Developer and group lead. I integrated application components with backend functionality..." — which is nearly identical text across both entries. Two projects, effectively the same paragraph.

---

## Navigation Review

**Menu structure: clean and correct.** Home / About / Projects / Skills / Resume / Contact — six items, no nesting, no ambiguity, consistent across every page. Skip-to-main-content link present. This is well built.

**Discoverability: fails for the missing content.** There is no path to Certificates or Seminars because they do not exist. An evaluator hunting for them will check nav, then About, then Skills, then give up — and the fact that certs live inside the PDF means they'll likely conclude they're absent.

**"Resume" in nav is a silent download.** It's a nav item that looks like a page and behaves like a file. Label it "Resume (PDF)".

**Flow: logical.** Home → capstone → skills → contact CTA. Each page ends with a forward CTA. About → "See the work" → Projects is a good handoff.

**Verdict:** A first-time visitor can navigate what exists efficiently. The navigation is not the problem — the missing destinations are.

---

## Professional Impression

**University evaluator:** Would understand *who you are* immediately and would be impressed by the writing. But they are holding a checklist, and the checklist will produce three ❌ marks and four 🟡 marks in under two minutes. The cruel irony: your content quality is well above the grading bar, and your compliance is below it. Evaluators grade what they can tick.

**Internship recruiter:** Would be impressed and would probably read past the 8-second mark, which almost no student portfolio earns. Three things cost you: no screenshots (recruiters are visual and skim-driven), no repo links despite being told the code is on GitHub, and no dates — a recruiter cannot tell if your internship is current, finished, or upcoming, or whether you graduate this year. `/about` says "2022 — 2026 (expected)," but the Datamatics entry just says "2026," which reads ambiguously in July 2026.

---

## Review Questions — Direct Answers

**Within 10 seconds:**
- Who this belongs to? **Yes** — name is H1, nav brand, and title tag.
- What kind of developer? **Yes** — "IT Student specializing in Cybersecurity" + a specific, non-generic positioning line.
- Strongest project? **Yes** — Why-Pii is labeled "Capstone project / Featured" and is the only featured item.

**Within 30 seconds:** Projects, Skills, CV, Contact — **all yes.** Nav handles this well.

**Within 2 minutes:**
- Technical skills? **Yes.**
- Software projects? **Partially** — you learn *that* they exist and what they're built with, not what they do feature-wise or when they were built.
- Capstone? **Partially** — architecture yes, interface and hardware specifics no.
- Technologies used? **Yes.**
- Experience? **Yes**, though dense and date-thin.
- How to contact? **Yes** — the contact page is genuinely good.

---

## Final Submission Readiness

**Submission Readiness Score: 6 / 10**

Design, navigation, writing quality, and professionalism: 9/10. Academic compliance: 4/10. The average is dragged down entirely by missing evidence, not by anything you built badly.

**Would I submit this today? CONDITIONAL.**

Not because the site is bad — because three required sections are verifiably absent and a fourth (screenshots) is absent six times over. If you submit as-is, you will lose marks on items that take a combined ~3 hours to fix, on a portfolio that is otherwise well above its cohort. Do not spend those hours on polish. Spend them on screenshots, certificates, seminars, and dates.

---

## Prioritized Fix Checklist

| # | Fix | Effort |
|---|---|---|
| 1 | Add GUI screenshots to all six projects — capstone first | 60–90 min |
| 2 | Add **Certificates** section (6 certs already exist in your CV) | 30 min |
| 3 | Add **Seminars / Training** section | 30 min |
| 4 | Add year / academic-year tag to every project card | 15 min |
| 5 | Add 3–5 **Features** bullets per project (Careby, Bagsik, CCIS most urgent) | 30 min |
| 6 | Split capstone into **Software Used** / **Hardware Used**; restore PIR + sound sensor on Doorbell | 15 min |
| 7 | Fix profile image alt text → `"Carlie Shaye C. Endaya"` | 5 min |
| 8 | Fix `og:url` → `endaya-web-portfolio.vercel.app` | 5 min |
| 9 | Break the Datamatics internship paragraph into 4–5 bullets | 15 min |
| 10 | Add repo links (or "Private — available on request") per project | 15 min |

---

## On the prompt itself

You asked me to check it — it's a well-built prompt, and two things in particular made this audit sharper: the **Evidence Rule** (forced me to cite live content rather than pattern-match to "typical student portfolio" complaints) and **"Never criticize the design simply because it is simple"** (correctly pre-empts the default LLM reflex to suggest animations and gradients).

Three notes:

1. **The five-role stack is mostly decorative.** In practice this audit collapses to two lenses — checklist compliance and skim impression — because your rubric is so specific that the Senior UX Reviewer and Technical Content Reviewer converge on the same findings. Not harmful, but it doesn't buy you much.

2. **"Do not rewrite the content" conflicts with your deadline.** You're submitting in hours and your biggest gap is missing prose (features, certs, seminars). Telling me to only describe what's missing means you now have to write six feature lists yourself under time pressure. If the goal is shipping, lift that constraint on the next pass and ask for drafts.

3. **The output format is long for a few-hours deadline.** Executive Summary + 4 issue tiers + checklist + 4 review sections + score + 10-item list means you read a lot before you act. A "top 5 fixes, ordered, with effort" would have gotten you moving 10 minutes sooner. Worth keeping the long format for the record, but consider asking for the action list first next time.