/**
 * Reusable Functions
 */

/**
 * Adds the "circle-notch" Font Awesome Spinner to the provided element.
 */
function addSpinner(elementClassList) {
  elementClassList.add("fas");
  elementClassList.add("fa-circle-notch");
  elementClassList.add("fa-spin");
}

/**
 * Removes the "circle-notch" Font Awesome Spinner from the provided element.
 */
function removeSpinner(elementClassList) {
  elementClassList.remove("fas");
  elementClassList.remove("fa-circle-notch");
  elementClassList.remove("fa-spin");
}

/**
 * Removes the 'Sync' icon & adds the spinner to the provided button.
 * 
 * @param {*} button 
 */
function startRetrievalSpinner(button) {
  // Remove the Sync Icon
  removeSyncIcon(document.getElementById(button).classList);

  // Add the spinner
  addSpinner(document.getElementById(button).classList);
}

/**
 * Adds the 'Sync' icon & removes the spinner to the provided button.
 * 
 * @param {*} button 
 */
function endRetrievalSpinner(button) {
  // Remove the spinner
  removeSpinner(document.getElementById(button).classList);

  // Add back the Sync Icon
  addSyncIcon(document.getElementById(button).classList);
}

/**
 * Adds the "Sync" Font Awesome Icon to the provided element.
 */
function addSyncIcon(elementClassList) {
  elementClassList.add("fas");
  elementClassList.add("fa-sync");
}

/**
 * Removes the "Sync" Font Awesome Icon from the provided element.
 */
function removeSyncIcon(elementClassList) {
  elementClassList.remove("fas");
  elementClassList.remove("fa-sync");
}

/**
 * Removes the children of the given node.
 *
 * @param {*} node
 */
function removeChildren(node) {
  if (typeof node === "undefined" || node === null) {
    return;
  }

  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

/**
 * Checks whether the given number is even (0 is considered even).
 *
 * @param {*} num
 */
function isEven(num) {
  if (num === 0) {
    return true;
  }

  return num % 2 == 0;
}

/**
 * Checks whether the given number is a multiple of 4 (0 is considered a multiple of 4).
 *
 * @param {*} num
 */
function isMultipleOfFour(num) {
  if (num === 0) {
    return true;
  }

  return num % 4 == 0;
}

/**
 * Returns whether an element is hidden in the DOM.
 *
 * @param {*} element
 */
function isHidden(element) {
  return element.offsetParent === null;
}

/**
 * Populates the Crucible Server List for the provided Div.
 *
 * @param {String} crucibleServerRadioDiv
 */
function populateCrucibleServerRadioDiv(crucibleServerRadioDiv) {
  console.log(new Date().toJSON(), appConstants.LOG_INFO, "Populating Server Table.");

  // Remove existing
  var crucibleServerRadioDivNode = document.getElementById(crucibleServerRadioDiv);
  removeChildren(crucibleServerRadioDivNode);

  if (typeof crucibleServerList === "undefined" || crucibleServerList == null || crucibleServerList.length == 0) {
    // TODO - Handle this
    console.log(new Date().toJSON(), appConstants.LOG_WARN, "crucibleServerList undefined!");
  } else {
    var serverTable = createReviewServerTable();

    var serverTableRow;
    var serverIdx;
    for (serverIdx = 0; serverIdx < crucibleServerList.length; serverIdx++) {
      // If even,
      if (isEven(serverIdx)) {
        // Create row
        serverTableRow = document.createElement("tr");
      }

      var tableData = createServerTableData();
      var outerDiv = createServerTableOuterDiv();
      var middleDiv = createServerTableMiddleDiv();
      var innerDiv = createServerTableInnerDiv();
      var inputRadio = createServerInputRadio(serverIdx);
      var disabledText = createServerDisabledText(crucibleServerList[serverIdx].instance);

      innerDiv.appendChild(inputRadio);
      middleDiv.appendChild(innerDiv);
      outerDiv.appendChild(middleDiv);
      outerDiv.appendChild(disabledText);
      tableData.appendChild(outerDiv);
      serverTableRow.appendChild(tableData);
      serverTable.appendChild(serverTableRow);
    }

    crucibleServerRadioDivNode.appendChild(serverTable);
  }
}
