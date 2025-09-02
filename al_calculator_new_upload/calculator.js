function calculate() {
  const currency = "GBP";
  const monthly = 100; // placeholder monthly value
  const quarterly = monthly * 3;
  const annual = monthly * 12;
  const discount = 10;
  const current = 200;
  const difference = annual - current;

  document.getElementById("monthlyTotal").textContent    = currency + " " + monthly.toFixed(2);
  document.getElementById("quarterlyTotal").textContent  = currency + " " + quarterly.toFixed(2);
  document.getElementById("annualTotal").textContent     = currency + " " + annual.toFixed(2);
  document.getElementById("totalDiscount").textContent   = currency + " " + discount.toFixed(2);
  document.getElementById("priceDifference").textContent = currency + " " + difference.toFixed(2);
}

window.onload = () => {
  document.getElementById("calcBtn").onclick = calculate;
};