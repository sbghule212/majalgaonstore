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
    //   document.getElementById("retailPrice").textContent = "-";
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

  const base = dpPrice * 0.75;
  const purchasePrice = Math.round(dpPrice / 1.5);
  const msp = mround(purchasePrice * 1.15, 5);
  const homeShopee = roundUpToNearest5(msp * 1.10, 5);
  const ltCustomer = roundUpToNearest5(homeShopee * 1.10, 5);

  document.getElementById("homeShopee").textContent = homeShopee;
  document.getElementById("ltCustomer").textContent = ltCustomer;
  // document.getElementById("purchasePrice").textContent = purchasePrice;
  document.getElementById("msp").textContent = msp;
}

function calculateReverse() {
  const onlinePrice = parseFloat(document.getElementById("onlineInput").value);
  if (isNaN(onlinePrice)) {
    document.getElementById("revDpPrice").textContent = "-";
    document.getElementById("revMspPrice").textContent = "-";
    document.getElementById("revMsptenPrice").textContent = "-";
    document.getElementById("revPurchasePrice").textContent = "-";
    document.getElementById("revPurchaseTenPrice").textContent = "-";
    return;
  }

  //  const base = approxDpPrice * 0.75;
  const oofflinePrice = onlinePrice - 60;
  const approxDpPrice = Math.round(onlinePrice / 0.9);
  const approxMspPrice = Math.ceil((1.1 * (onlinePrice - 100)) / 1.3);
  const approxMspTenPrice = Math.ceil((1.1 * (onlinePrice - 10)) / 1.3);
  const purchasePrice = Math.round((onlinePrice - 200) / 1.15);

  document.getElementById("revDpPrice").textContent = approxDpPrice;
  document.getElementById("revMspPrice").textContent = approxMspPrice;
  document.getElementById("revMsptenPrice").textContent = approxMspTenPrice;
  document.getElementById("revPurchasePrice").textContent = purchasePrice;
  document.getElementById("revPurchaseTenPrice").textContent = purchaseTenPrice;
}

function generateMessage() {
  const store =
    document.getElementById("storeInput").value || "Majalgaon Mega Store";
  const product = document.getElementById("productInput").value || "Jewellery";
  const dp = parseFloat(document.getElementById("dpInput").value) || 0;
  const contact = document.getElementById("contactInput").value || "7775034111";

  const base = dp * 0.75;
  const offline = Math.round(base + base * 0.1);
  const online = Math.round(dp * 0.9);
  const retail = offline + 100;

  const distributorMsg = `PRATYUSH RETAILS PVT LTD.\n${store}🏪\n\nName - ${product}\n\nPrice - ₹${dp}/-\n\n🔥 FREE SHIPPING🔥\nPremium Quality 100%\n▶ No Cash On Delivery\n▶ No Cancellation Process\n▶ Payment Process \nPhone Pay / Google Pay / Paytm\n▶ When parcel received opening video is Compulsory\n\nBooking Only What's app\n${contact}📲`;

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
  const sareeSale =
    parseInt(document.getElementById("sareeSaleInput").value) || 0;
  const otherSale =
    parseInt(document.getElementById("otherSaleInput").value) || 0;
  const expenses =
    parseInt(document.getElementById("expensesInput").value) || 0;

  const totalSale = sareeSale + otherSale;
  const profit = Math.floor(totalSale * 0.1);

  // Get user input values
  const onlineSale =
    parseInt(document.getElementById("onlineSaleInput").value) || 0;
  const offlineSale =
    parseInt(document.getElementById("offlineSaleInput").value) || 0;
  const storeSale =
    parseInt(document.getElementById("storeSaleInput").value) || 0;

  const totalSale2 = onlineSale + offlineSale + storeSale;

  // Get user input values
  const sareeSale3 =
    parseInt(document.getElementById("sareeSale3Input").value) || 0;
  const otherSale3 =
    parseInt(document.getElementById("otherSale3Input").value) || 0;
  const expenses3 =
    parseInt(document.getElementById("expenses3Input").value) || 0;

  const totalSale3 = sareeSale3 + otherSale3;

  // const store = document.getElementById("storeInput").value || 0;

  const reportMsg = `*${store.toUpperCase()}🏪*\n\n${dateStr} ⏰\n\n1. Saree Sale - ${sareeSale}/-\n2. Jwellery,Purse Sale - ${otherSale}/-\n\n*Total Sale = ${totalSale}/-*\n\n*THANK YOU SO MUCH🥰🙏*`;
  const customerMsg = `*${store.toUpperCase()}🏪*\n\n${dateStr} ⏰\n\n1. Online Sale - ${onlineSale}/-\n2. Offline Sale - ${offlineSale}/-\n3. Store Sale - ${storeSale}/-\n\n*Total Sale = ${totalSale2}/-*\n\n*THANK YOU SO MUCH🥰🙏*`;
  const majalgaonSale = `*Majalgaon Womens Wear🏪*\n\n${dateStr} ⏰\n\n*Total Sale = ${totalSale3}/-*\n\n*THANK YOU SO MUCH🥰🙏*`;

  document.getElementById("messageOutput1").value = distributorMsg;
  document.getElementById("messageOutput2").value = customerMsg;
  document.getElementById("messageOutput3").value = reportMsg;
  document.getElementById("messageOutput4").value = majalgaonSale;
}

function copyMessage(id) {
  const textarea = document.getElementById(id);
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Message copied to clipboard!");
}

function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.style.display = section.style.display === "none" ? "block" : "none";
}
