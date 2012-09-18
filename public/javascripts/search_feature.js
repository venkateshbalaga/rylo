// target_index is the targetted index of the sort_by_line 
// if mode is true, order by mode is descending, ascending otherwise
function toggleSortByOrderMode(target_index) {
  descendingIcon = new Image()
  ascendingIcon = new Image()
  descendingIcon.src = '/images/icons/shape_align_top.png'
  descendingIcon.alt = 'Shape_align_top'
  ascendingIcon.src = '/images/icons/shape_align_bottom.png'
  ascendingIcon.alt = 'Shape_align_bottom'
  if ($('sort_by_order_mode' + target_index).value == "ASC") {
    $('sort_by_order_mode' + target_index).value = "DESC"
    $('order_mode_sort_by_icon' + target_index).src = descendingIcon.src  
    $('order_mode_sort_by_icon' + target_index).alt = descendingIcon.alt  
  }
  else {
    $('sort_by_order_mode' + target_index).value = "ASC" 
    $('order_mode_sort_by_icon' + target_index).src = ascendingIcon.src  
    $('order_mode_sort_by_icon' + target_index).alt = ascendingIcon.alt  
  }
}

// add a new search line to the advanced search box
function addSearchLine() {
  var bool = canAddNewLine();
  if ( bool ) {
    addNewSearchLine();
  }
}

// add a new sort by line to the advanced search box
function addSortByLine() {
  var bool = canAddNewLine();
  if ( bool ) {
    addNewSortByLine();
  }
}

// clears the advanced search form
function clearAdvancedSearchForm() {
  $("num_of_search_line").value = 0;
  $("num_of_sort_by_line").value = 0;
  Element.update("search_line_fieldsets", "");
  Element.update("sort_by_line_fieldsets", "");
	addSearchLine();
	addSortByLine();
}

function canAddNewLine() {
  var limit = 12;
  num_of_search_line = parseInt($("num_of_search_line").value);
  num_of_sort_line = parseInt($("num_of_sort_by_line").value);
  if ( (num_of_search_line + num_of_sort_line) >= limit ) {
    return false;
  }
  return true;
}

function addNewSearchLine() {
  var num = parseInt($("num_of_search_line").value) + 1;
  excludeIcon = new Image()
  excludeIcon.src = '/images/icons/exclude.png'
  excludeIcon.alt = 'exclude'
  $("num_of_search_line").value = num+'';  
  //Element.update("search_result_container", "This is generated by add search line<br/>Num of search line = " + num);
  new Insertion.Bottom("search_line_fieldsets", 
    "      <fieldset class=\"searchSubPanelForm\">\n" + 
    "        <input autocomplete=\"off\" class=\"advancedSearch_text\" id=\"search_line_subject_name"+num+"\" name=\"search_line["+num+"][subject_name]\" type=\"text\" value=\"\" />\n" + 
    // attn to auto complete class for layout
    "        <div class=\"auto_complete\" style=\"display:none\" id=\"search_line"+num+"_auto_complete\"></div>\n" +
    "        <script type=\"text/javascript\">\n" + 
    "//<![CDATA[\n" +
    "new Autocompleter.Local(\"search_line_subject_name"+num+"\", \"search_line"+num+"_auto_complete\", ['About type', 'Active on', 'Address', 'Allow mail in', 'Amount', 'Animate', 'Apply federal tax on labor', 'Apply federal tax on products', 'Apply provincial tax on labor', 'Apply provincial tax on products', 'Approved', 'Approved at', 'Archived at', 'Availability', 'Available on', 'Barcode', 'Base length', 'Base price', 'Behavior', 'Biography', 'Birthdate', 'Body', 'Building style', 'Bushes', 'Bushes qty', 'Bushes size', 'Call time', 'City', 'Climbing experience', 'Comment', 'Company name', 'Completed at', 'Confirmation token', 'Confirmation token expires at', 'Contact method', 'Content type', 'Country', 'Created at', 'Data', 'Date', 'Date format', 'Default light color', 'Deposit amount', 'Description', 'Destroyed', 'Destroyed at', 'Display name', 'Dropship email', 'Duration in minutes', 'Eaves', 'Eaves length', 'Email', 'Email address', 'Encoding', 'Equipment fee', 'Ever failed', 'Extension', 'Extras', 'Fences and gates', 'Fences and gates length', 'Filename', 'First name', 'Flat pct', 'Forum alias', 'Fst active', 'Fst name', 'Fst rate', 'Garage doors', 'Garage doors avg height', 'Garage doors avg width', 'Garage doors qty', 'Garlands', 'Garlands length', 'Generate password', 'Generated body', 'Generated subject', 'Geometry', 'Guid', 'Hard coded', 'Height', 'Hits', 'Honorific', 'Inactive on', 'Inflatables', 'Inflatables qty', 'Inline attachments', 'Instock', 'Last logged in at', 'Last name', 'Last ordered on', 'Length', 'Line1', 'Line2', 'Line3', 'Locked', 'Login', 'Lot style', 'Main identifier', 'Measurement option', 'Middle name', 'Mime type', 'Moderate pct', 'Name', 'No', 'No labor', 'No supplies', 'Notes', 'Number', 'Number of floors', 'Number of peaks', 'Number of sides', 'Occured at', 'On tour', 'Order type', 'Outdoor gear', 'Paid in full', 'Password hash', 'Password salt', 'Paths', 'Paths length', 'Payable type', 'Phone', 'Phone location', 'Phone number', 'Position', 'Product no', 'Pst active', 'Pst name', 'Pst rate', 'Public', 'Published at', 'Quantity', 'Read at', 'Reason', 'Received at', 'Recipient builder type', 'Reciprocal', 'Reciprocal address', 'Referal', 'Rejected at', 'Released at', 'Rendered body', 'Replied at', 'Replied by', 'Roof lines', 'Roof lines length', 'Roof material', 'Roof slope', 'Roof top', 'Roof top length', 'Roof walking allowed', 'Rope work safety gear experience', 'Ropelight sculptures', 'Ropelight sculptures qty', 'Routable type', 'Sale ends on', 'Sale price', 'Sale starts on', 'Scheduled at', 'Scheduled date', 'Scheduled time', 'Send email on order', 'Sent at', 'Shipping fee', 'Shipping method', 'Short description', 'Signature', 'Size', 'Sku', 'Slug', 'Staff agreement date', 'Staff agreement version', 'Stage', 'State', 'Static', 'Status', 'Steep pct', 'Sticky', 'Style', 'Subject', 'Superuser', 'System', 'Tag', 'Tag name', 'Tag syntax', 'Team manager', 'Testified on', 'Thumbnail', 'Time format', 'Time to call', 'Timezone', 'Title', 'Token', 'Token expires at', 'Transport fee', 'Trees', 'Trees qty', 'Trees size', 'Trees wrap style', 'Type', 'Unique id listing', 'Unit price', 'Updated at', 'Url', 'Uuid', 'Vehicle roof rack', 'Vehicle type', 'Voided at', 'Web', 'Website url', 'Wholesale price', 'Width', 'Windows', 'Windows avg height', 'Windows avg width', 'Windows qty', 'Wrap style', 'Wreaths', 'Wreaths qty', 'Zip'], {})\n" + 
    "//]]>\n" +
    "</script>\n" +
    "        <select class=\"searchOptions_select\" id=\"search_line["+num+"][subject_option]\" name=\"search_line["+num+"][subject_option]\"><option value=\"Starts with\" selected=\"selected\">Starts with</option>\n<option value=\"Ends with\">Ends with</option>\n<option value=\"Contains\">Contains</option>\n<option value=\"Equals\">Equals</option></select>\n" +
    "        <input autocomplete=\"off\" class=\"advancedSearch_text\" id=\"search_line["+num+"][subject_value]\" name=\"search_line["+num+"][subject_value]\" type=\"text\" value=\"\" />\n" + 
    "        <span class=\"exclude\">\n" + 
    "        <img class=\"exclude_label\" alt=\""+excludeIcon.alt+"\" src=\""+excludeIcon.src+"\" />" + 
    "        <input class=\"box\" id=\"search_line["+num+"][subject_exclude]\" name=\"search_line["+num+"][subject_exclude]\" type=\"checkbox\" value=\"1\" />\n" + 
    "        </span>\n" +
    "      </fieldset>\n");
}

function addNewSortByLine() {
  var num = parseInt($("num_of_sort_by_line").value) + 1;
  $("num_of_sort_by_line").value = num+'';  
  ascendingIcon = new Image()
  ascendingIcon.src = '/images/icons/shape_align_bottom.png'
  ascendingIcon.alt = 'Shape_align_bottom'
  //Element.update("search_result_container", "This is generated by add sort by line<br/>Num of sort by line = " + num);
  new Insertion.Bottom("sort_by_line_fieldsets", 
    "      <fieldset class=\"searchSubPanelForm\">\n" +
    "        <span>"+num+":&nbsp;</span>\n" +
    "        <input autocomplete=\"off\" class=\"advancedSearch_order\" id=\"sort_by_order_name"+num+"\" name=\"sort_by["+num+"][order_name]\" type=\"text\" value=\"\" />\n" +
    // attn to auto complete class for layout
    "        <div class=\"auto_complete\" style=\"display:none\" id=\"sort_by_order_name"+num+"_auto_complete\"></div>\n" +
    "        <script type=\"text/javascript\">\n" + 
    "//<![CDATA[\n" + 
    "new Autocompleter.Local(\"sort_by_order_name"+num+"\", \"sort_by_order_name"+num+"_auto_complete\", ['About type', 'Active on', 'Address', 'Allow mail in', 'Amount', 'Animate', 'Apply federal tax on labor', 'Apply federal tax on products', 'Apply provincial tax on labor', 'Apply provincial tax on products', 'Approved', 'Approved at', 'Archived at', 'Availability', 'Available on', 'Barcode', 'Base length', 'Base price', 'Behavior', 'Biography', 'Birthdate', 'Body', 'Building style', 'Bushes', 'Bushes qty', 'Bushes size', 'Call time', 'City', 'Climbing experience', 'Comment', 'Company name', 'Completed at', 'Confirmation token', 'Confirmation token expires at', 'Contact method', 'Content type', 'Country', 'Created at', 'Data', 'Date', 'Date format', 'Default light color', 'Deposit amount', 'Description', 'Destroyed', 'Destroyed at', 'Display name', 'Dropship email', 'Duration in minutes', 'Eaves', 'Eaves length', 'Email', 'Email address', 'Encoding', 'Equipment fee', 'Ever failed', 'Extension', 'Extras', 'Fences and gates', 'Fences and gates length', 'Filename', 'First name', 'Flat pct', 'Forum alias', 'Fst active', 'Fst name', 'Fst rate', 'Garage doors', 'Garage doors avg height', 'Garage doors avg width', 'Garage doors qty', 'Garlands', 'Garlands length', 'Generate password', 'Generated body', 'Generated subject', 'Geometry', 'Guid', 'Hard coded', 'Height', 'Hits', 'Honorific', 'Inactive on', 'Inflatables', 'Inflatables qty', 'Inline attachments', 'Instock', 'Last logged in at', 'Last name', 'Last ordered on', 'Length', 'Line1', 'Line2', 'Line3', 'Locked', 'Login', 'Lot style', 'Main identifier', 'Measurement option', 'Middle name', 'Mime type', 'Moderate pct', 'Name', 'No', 'No labor', 'No supplies', 'Notes', 'Number', 'Number of floors', 'Number of peaks', 'Number of sides', 'Occured at', 'On tour', 'Order type', 'Outdoor gear', 'Paid in full', 'Password hash', 'Password salt', 'Paths', 'Paths length', 'Payable type', 'Phone', 'Phone location', 'Phone number', 'Position', 'Product no', 'Pst active', 'Pst name', 'Pst rate', 'Public', 'Published at', 'Quantity', 'Read at', 'Reason', 'Received at', 'Recipient builder type', 'Reciprocal', 'Reciprocal address', 'Referal', 'Rejected at', 'Released at', 'Rendered body', 'Replied at', 'Replied by', 'Roof lines', 'Roof lines length', 'Roof material', 'Roof slope', 'Roof top', 'Roof top length', 'Roof walking allowed', 'Rope work safety gear experience', 'Ropelight sculptures', 'Ropelight sculptures qty', 'Routable type', 'Sale ends on', 'Sale price', 'Sale starts on', 'Scheduled at', 'Scheduled date', 'Scheduled time', 'Send email on order', 'Sent at', 'Shipping fee', 'Shipping method', 'Short description', 'Signature', 'Size', 'Sku', 'Slug', 'Staff agreement date', 'Staff agreement version', 'Stage', 'State', 'Static', 'Status', 'Steep pct', 'Sticky', 'Style', 'Subject', 'Superuser', 'System', 'Tag', 'Tag name', 'Tag syntax', 'Team manager', 'Testified on', 'Thumbnail', 'Time format', 'Time to call', 'Timezone', 'Title', 'Token', 'Token expires at', 'Transport fee', 'Trees', 'Trees qty', 'Trees size', 'Trees wrap style', 'Type', 'Unique id listing', 'Unit price', 'Updated at', 'Url', 'Uuid', 'Vehicle roof rack', 'Vehicle type', 'Voided at', 'Web', 'Website url', 'Wholesale price', 'Width', 'Windows', 'Windows avg height', 'Windows avg width', 'Windows qty', 'Wrap style', 'Wreaths', 'Wreaths qty', 'Zip'], {})\n" + 
    "//]]>\n" + 
    "</script>\n" +
    "        <span class=\"sort\">Sort order:</span>\n" +
    "        <input autocomplete=\"off\" id=\"sort_by_order_mode"+num+"\" name=\"sort_by["+num+"][order_mode]\" type=\"hidden\" value=\"ASC\" />\n" +
    "        <a href=\"#\" onclick=\"toggleSortByOrderMode("+num+"); return false;\"><img class=\"sortOrder\" alt=\""+ascendingIcon.alt+"\" id=\"order_mode_sort_by_icon"+num+"\" src=\""+ascendingIcon.src+"\" /></a>\n" +
    "      </fieldset>\n");
}
