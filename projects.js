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
  { num:"04", domain:"Sales", tool:"SQL", title:"Sales Trend & Customer Analysis", desc:"Querying sales trends, top customers, and category performance using joins, CTEs, and window functions.", status:"pending" },
  { num:"05", domain:"Sales", tool:"Power BI", title:"Interactive Sales Dashboard", desc:"A drill-down dashboard with regional filters, YoY growth, and DAX-driven KPIs.", status:"pending" },
  { num:"06", domain:"Inventory", tool:"Excel", title:"Stock Level & Reorder Tracker", desc:"A formula-driven tracker flagging low stock and calculating reorder points automatically.", status:"pending" },
  { num:"07", domain:"Inventory", tool:"SQL", title:"Stockout & Movement Analysis", desc:"Identifying stockout frequency, slow-moving items, and inventory turnover ratios.", status:"pending" },
  { num:"08", domain:"Inventory", tool:"Power BI", title:"Inventory Health Dashboard", desc:"Visualizing turnover, days-on-hand, and dead stock by category.", status:"pending" },
  { num:"09", domain:"Supply Chain", tool:"Excel", title:"Supplier Performance Scorecard", desc:"Weighted scoring of suppliers on delivery time, defect rate, and cost variance.", status:"pending" },
  { num:"10", domain:"Supply Chain", tool:"SQL", title:"Lead Time & Fulfillment Analysis", desc:"Analyzing average lead time by supplier and region, flagging delayed orders.", status:"pending" },
  { num:"11", domain:"Supply Chain", tool:"Power BI", title:"End-to-End Supply Chain Dashboard", desc:"Order-to-delivery visibility with delay hotspots mapped geographically.", status:"pending" },
  { num:"12", domain:"Retail", tool:"Excel+SQL+Power BI", title:"Full Retail Performance Report", desc:"Capstone project combining all three tools into one end-to-end retail analysis.", status:"pending" },
  { num:"13", domain:"Retail", tool:"Power BI", title:"Store & Regional Comparison", desc:"Benchmarking store and regional performance on revenue and inventory efficiency.", status:"pending" },
  { num:"14", domain:"Retail", tool:"SQL+Excel", title:"Customer Segmentation (RFM)", desc:"Segmenting customers by Recency, Frequency, and Monetary value to identify buying behavior.", status:"pending" },
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
