function switchTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => tab.classList.remove("active"));
  contents.forEach((content) => content.classList.remove("active"));

  document.querySelector(`.tab[onclick*="${tabId}"]`).classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

function calculateForward() {
  const dpPrice = parseFloat(document.getElementById("dpPrice").value);
  if (isNaN(dpPrice)) {
      document.getElementById("homeShopee").textContent = "-";
      document.getElementById("ltCustomer").textContent = "-";
      document.getElementById("msp").textContent = "-";
    // document.getElementById("purchasePrice").textContent = "-";
    return;
  }

function mround(value, multiple) {
  return Math.round(value / multiple) * multiple;
}
  function roundUpToNearest5(value) {
  return Math.ceil(value / 5) * 5;
}

  // const base = dpPrice * 0.75;
  // const purchasePrice = Math.round(dpPrice / 1.5);
  // const msp = mround(purchasePrice * 1.15, 5);
  // const homeShopee = roundUpToNearest5(msp * 1.10, 5);
  // const ltCustomer = roundUpToNearest5(homeShopee * 1.10, 5);

  const base = dpPrice - 100;
  const purchasePrice = Math.round(base / 1.5);
  const msp = mround(base * 0.73, 5);
  const homeShopee = roundUpToNearest5(base * 0.81, 5);
  const ltCustomer = roundUpToNearest5(base * 0.9, 5);
  

  document.getElementById("homeShopee").textContent = homeShopee;
  document.getElementById("ltCustomer").textContent = ltCustomer;
  // document.getElementById("purchasePrice").textContent = purchasePrice;
  document.getElementById("msp").textContent = msp;
}

function calculateReverse() {
  const onlinePrice = parseFloat(document.getElementById("onlineInput").value);
  if (isNaN(onlinePrice)) {
    document.getElementById("revMsptenPrice").textContent = "-";
    document.getElementById("retailPrice").textContent = "-";
    document.getElementById("dpp").textContent = "-";
    return;
  }


  const retailPrice = Math.round(onlinePrice - (onlinePrice * 0.5));
  const approxMspTenPrice = retailPrice + 60;
  const dpp = (onlinePrice / 2 ) / 0.75;

  document.getElementById("revMsptenPrice").textContent = approxMspTenPrice;
  document.getElementById("retailPrice").textContent = retailPrice;
  document.getElementById("dpp").textContent = dpp;
}

function generateMessage() {
   const store =
    document.getElementById("storeInput").value || "Majalgaon";
  const product = document.getElementById("productInput").value || "Saree";
  const dp = parseFloat(document.getElementById("dpInput").value) || 0;
  const contact = document.getElementById("contactInput").value || "7775034111";

  const retail = dp + 100;
  const base = dp - 100;
  const ltCustomer = roundUpToNearest5(base * 0.9, 5);

  const distributorMsg = `💃💃MW💃💃💃\n${store} Women's Wear\n\nName - ${product}\n\nMRP Price - ₹${retail}/-\n\nOnline Price - ₹${dp}/-\nOffline Price - ₹${ltCustomer}/-\n\nFree Shipping in Maharashtra\nCOD Available 5% extra charges for post\n\nBooking Only What's app\n${contact}📲`;
  
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const timeStr = today.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Get user input values
  // const sareeSale =
  //   parseInt(document.getElementById("sareeSaleInput").value) || 0;
  // const otherSale =
  //   parseInt(document.getElementById("otherSaleInput").value) || 0;
  // const expenses =
  //   parseInt(document.getElementById("expensesInput").value) || 0;

  // const totalSale = sareeSale + otherSale;

  // // Get user input values
  // const onlineSale =
  //   parseInt(document.getElementById("onlineSaleInput").value) || 0;
  // const offlineSale =
  //   parseInt(document.getElementById("offlineSaleInput").value) || 0;
  // const storeSale =
  //   parseInt(document.getElementById("storeSaleInput").value) || 0;

  // const totalSale2 = onlineSale + offlineSale + storeSale;

  // Get user input values
  const store3 = document.getElementById("store3Input").value || "Majalgaon";
  const sareeSale3 =
    parseInt(document.getElementById("sareeSale3Input").value) || 0;
  const otherSale3 =
    parseInt(document.getElementById("otherSale3Input").value) || 0;

  const totalSale3 = sareeSale3 + otherSale3;

  // const store = document.getElementById("storeInput").value || 0;

  // const reportMsg = `*${store.toUpperCase()}🏪*\n\n${dateStr} ⏰\n\n1. Saree Sale - ${sareeSale}/-\n2. Jwellery,Purse Sale - ${otherSale}/-\n\n*Total Sale = ${totalSale}/-*\n\n*THANK YOU SO MUCH🥰🙏*`;
  // const customerMsg = `*${store.toUpperCase()}🏪*\n\n${dateStr} ⏰\n\n1. Online Sale - ${onlineSale}/-\n2. Offline Sale - ${offlineSale}/-\n3. Store Sale - ${storeSale}/-\n\n*Total Sale = ${totalSale2}/-*\n\n*THANK YOU SO MUCH🥰🙏*`;
  const majalgaonSale = `💃💃MW💃💃💃\n*${store3} Women's Wear*\n\n${dateStr} ⏰\n\n1. Saree Sale - ${sareeSale3}/-\n2. Jwellery,Purse Sale - ${otherSale3}/-\n\n*Total Sale = ${totalSale3}/-*`;

  document.getElementById("messageOutput1").value = distributorMsg;
  // document.getElementById("messageOutput2").value = customerMsg;
  // document.getElementById("messageOutput3").value = reportMsg;
  document.getElementById("messageOutput4").value = majalgaonSale;
}

function copyMessage(id) {
  const textarea = document.getElementById(id);
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Message copied to clipboard!");
}

// function toggleSection(sectionId) {
//   const section = document.getElementById(sectionId);
//   section.style.display = section.style.display === "none" ? "block" : "none";
// }
