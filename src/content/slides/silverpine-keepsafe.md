---
title: "KeepSafe.ai"
description: "Overview of KeepSafe.ai internal Silverpine project"
published: "2025-09-19"
author: "Rylan Schubkegel"
tags: ["silverpine", "keepsafe", "vue", "nuxt", "web"]
---

![KeepSafe.ai logo](https://keepsafe.ai/images/keepsafe-footer.svg)

---

KeepSafe.ai is a platform that uses AI to extract important alerts from news, social media, and emergency feeds.

---

![KeepSafe.ai dashboard](/images/slides/keepsafe/desktop-dashboard.png)

---

Users define assets that they want to monitor, such as a specific neighborhood or a specific business.

---

![KeepSafe.ai asset](/images/slides/keepsafe/desktop-asset.png)

---

When an alert is detected, users can respond by notifying a list of contacts.

---

![KeepSafe.ai notification](/images/slides/keepsafe/desktop-notification.png)

---

The alerts are fed by a variety of sources, including news, social media, and emergency feeds.

---

![KeepSafe.ai admin statistics](/images/slides/keepsafe/desktop-statistics.png)

---

Sources that require interpretation are fed to LangChain for processing.

<!-- This uses lang-chain -->

---

![KeepSafe.ai agent processing graph](/images/slides/keepsafe/desktop-agent-config.png)

---

To maximize the accuracy of event reporting, specially-tailored agents will process the source in sequence, refining event information as they go.

---

![KeepSafe.ai agent processing graph](/images/slides/keepsafe/desktop-agent-graph.png)

---

The platform is comprised of various projects:

- Web app
- Event server
- Mobile app

---

Check it out for yourself at [KeepSafe.ai](https://keepsafe.ai/)

---

# 🙏