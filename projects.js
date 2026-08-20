const PROJECTS = [
  {
    num: "01", domain: "Sales", tool: "Excel", title: "Superstore Sales & Profitability",
    desc: "10,195 orders analyzed — found that revenue above a 20% discount consistently erased profit, across customers, categories, and regions.",
    status: "done",
    links: [
      { label: "View on GitHub", href: "https://github.com/saheed-okegbemi/project1-superstore-sales-dashboard", primary: true },
      { label: "Read article", href: "https://medium.com/@yemtech96/i-analyzed-10-000-retail-orders-in-excel-and-found-the-exact-point-where-discounts-start-losing-25f3563b0018?sharedUserId=yemtech96" }
    ]
  },
  {
    num: "02", domain: "Retail", tool: "Python+SQL+Power BI", title: "Customer Shopping Behavior Analysis",
    desc: "3,900 customer transactions cleaned in Python, queried in SQL across 10 business questions, and visualized in Power BI — revealing that subscribers don't yet outspend non-subscribers and that revenue is spread almost evenly across age groups.",
    status: "done",
    links: [
      { label: "View on GitHub", href: "https://github.com/saheed-okegbemi/customer-trends-data-analysis-SQL-Python-PowerBI", primary: true },
      { label: "Read article", href: "https://medium.com/@yemtech96/customer-shopping-behavior-analysis-95d3b2ce0a00" },
      { label: "Open dashboard", href: "https://app.powerbi.com/view?r=eyJrIjoiYzc3OTllYzItY2Q0Yy00NjYwLThhMjEtMTc2NzlhYjIzNjk2IiwidCI6ImZjY2Y0MmRmLTE2ZDktNGU4Ny1hNmUwLWU0OTYyMjAxN2Y3NCJ9" }
    ]
  },
  {
    num: "03", domain: "E-commerce", tool: "Power BI", title: "NaijaCart E-Commerce Performance Analysis",
    desc: "15,500 orders modeled across an 11-table relational structure in Power BI, powering a three-page dashboard on sales, customers, and delivery. Found that combined cancellations and returns made up nearly a third of all orders, and that full-price sales consistently outperformed discounted ones.",
    status: "done",
    links: [
      { label: "View on GitHub", href: "https://github.com/saheed-okegbemi/NaijaCart-E-Commerce_Business_Analysis", primary: true },
      { label: "Read article", href: "https://medium.com/@yemtech96/building-naijacart-a-power-bi-analysis-of-a-nigerian-e-commerce-business-020e2b88e1dc" },
      { label: "Open dashboard", href: "https://app.powerbi.com/reportEmbed?reportId=264febf2-75fc-4f2f-8ebe-4e56fce690f0&autoAuth=true&ctid=fccf42df-16d9-4e87-a6e0-e49622017f74" }
    ]
  },
];

function renderProjectCard(p) {
  const card = document.createElement("div");
  card.className = "card" + (p.status === "done" ? " featured" : "");
  const links = (p.links || []).map(l =>
    `<a href="${l.href}" target="_blank" class="${l.primary ? "link-primary" : "link-secondary"}">${l.label}</a>`
  ).join("");
  card.innerHTML = `
    <div class="card-top">
      <span class="card-num">Project ${p.num}</span>
      <span class="status ${p.status}">${p.status === "done" ? "Live" : "In progress"}</span>
    </div>
    <h3>${p.title}</h3>
    <p class="desc">${p.desc}</p>
    <div class="tag-row">
      <span class="tag domain">${p.domain}</span>
      <span class="tag">${p.tool}</span>
    </div>
    ${links ? `<div class="card-links">${links}</div>` : ""}
  `;
  return card;
}

function renderProjectGrid(elementId, filterFn) {
  const grid = document.getElementById(elementId);
  if (!grid) return;
  const list = filterFn ? PROJECTS.filter(filterFn) : PROJECTS;
  list.forEach(p => grid.appendChild(renderProjectCard(p)));
}
