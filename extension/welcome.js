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
      hotkeyErp.innerHTML = `<span class="hotkey-key">⌘</span><span class="hotkey-sep">+</span><span class="hotkey-key">Shift</span><span class="hotkey-sep">+</span><span class="hotkey-key">E</span>`;
    }
    if (hotkeyNotice) {
      hotkeyNotice.innerHTML = `<span class="hotkey-key">⌃</span><span class="hotkey-sep">+</span><span class="hotkey-key">Shift</span><span class="hotkey-sep">+</span><span class="hotkey-key">C</span>`;
    }
    if (hotkeyCdc) {
      hotkeyCdc.innerHTML = `<span class="hotkey-key">⌃</span><span class="hotkey-sep">+</span><span class="hotkey-key">Shift</span><span class="hotkey-sep">+</span><span class="hotkey-key">Z</span>`;
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

  // Dark mode toggle (Welcome page only, in-memory)
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
});
