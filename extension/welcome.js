/**
 * KGP ERP Auto-Login - Welcome & Onboarding Controller
 */

document.addEventListener("DOMContentLoaded", () => {
  const isMac =
    navigator.platform.toUpperCase().indexOf("MAC") >= 0 ||
    navigator.userAgent.toUpperCase().indexOf("MAC") >= 0;

  const hotkeyErp = document.getElementById("hotkeyErp");
  const hotkeyNotice = document.getElementById("hotkeyNotice");
  const hotkeyCdc = document.getElementById("hotkeyCdc");
  const customizeShortcutsBtn = document.getElementById("customizeShortcutsBtn");
  const launchErpBtn = document.getElementById("launchErpBtn");

  // Format hotkeys for Mac if applicable
  if (isMac) {
    if (hotkeyErp) {
      hotkeyErp.innerHTML = `<span class="kbd">⌘</span><span class="kbd-sep">+</span><span class="kbd">Shift</span><span class="kbd-sep">+</span><span class="kbd">E</span>`;
    }
    if (hotkeyNotice) {
      hotkeyNotice.innerHTML = `<span class="kbd">⌃</span><span class="kbd-sep">+</span><span class="kbd">Shift</span><span class="kbd-sep">+</span><span class="kbd">C</span>`;
    }
    if (hotkeyCdc) {
      hotkeyCdc.innerHTML = `<span class="kbd">⌃</span><span class="kbd-sep">+</span><span class="kbd">Shift</span><span class="kbd-sep">+</span><span class="kbd">Z</span>`;
    }
  }

  // Open native browser shortcut customization page
  if (customizeShortcutsBtn) {
    customizeShortcutsBtn.addEventListener("click", () => {
      const isEdge = navigator.userAgent.indexOf("Edg") !== -1;
      const shortcutsUrl = isEdge ? "edge://extensions/shortcuts" : "chrome://extensions/shortcuts";
      chrome.tabs.create({ url: shortcutsUrl }, () => {
        if (chrome.runtime.lastError) {
          chrome.tabs.create({ url: "chrome://extensions/shortcuts" });
        }
      });
    });
  }

  // Launch ERP portal
  if (launchErpBtn) {
    launchErpBtn.addEventListener("click", () => {
      chrome.tabs.create({ url: "https://erp.iitkgp.ac.in/IIT_ERP3/" });
    });
  }
});
