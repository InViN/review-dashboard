/**
 * JS for operations on the Settings Modal
 */

/**
 * Launch the 'Settings' modal.
 */
function launchSettingsModal() {
  // Blackout before opening the Modal
  blackout();
  
  // jQuery
  $("#settingsModal").modal({backdrop: false, keyboard: false, show: true});
}

/**
 * Dismiss the 'Settings' modal.
 */
function dismissSettingsModal() {
  // jQuery
  $("#settingsModal").modal('hide');

  // Display App Wrapper
  removeBlackout();
}

/**
 * Save the settings
 */
function saveSettings() {
  // Save to server (app.js) needs implementation.

  // Dismiss the modal
  dismissSettingsModal();
}