/** Copy task - pure JS **/
var uncheck = function(element){
    document.getElementById(element).classList.remove("checkboxWidget--checked");
    document.getElementById(element).classList.add("checkboxWidget--unchecked");
};

var check = function(element){
    document.getElementById(element).classList.add("checkboxWidget--checked");
    document.getElementById(element).classList.remove("checkboxWidget--unchecked");
};

var simulateClick = function (elem) {
    var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    var canceled = !elem.dispatchEvent(evt);
};

// Open Copy Task screen
simulateClick(document.getElementsByClassName("SingleTaskPaneExtraActionsButton"));
simulateClick(document.getElementsByClassName("SingleTaskPaneExtraActionsButton-makeACopy"));

// Uncheck
uncheck("#duplicate_object_option_task_description");
uncheck("#duplicate_object_option_assignee");
uncheck("#duplicate_object_option_subtasks");
uncheck("#duplicate_object_option_attachments");
uncheck("#duplicate_object_option_due_date");
uncheck("#duplicate_object_option_dependencies");

// Check
check("#duplicate_object_option_tags");
check("#duplicate_object_option_followers");
check("#duplicate_object_option_projects");
check("#duplicate_object_option_parent_task");

simulateClick(document.getElementById("duplicate_object_dialog_submit"));
