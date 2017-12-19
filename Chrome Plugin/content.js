// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "copy_task" ) {

            var uncheck = function(element){
                element = document.getElementById(element);
                element.classList.remove('checkboxWidget--checked');
                element.classList.add("checkboxWidget--unchecked");
            };

            var check = function(element){
                element = document.getElementById(element);
                element.classList.add('checkboxWidget--checked');
                element.classList.remove("checkboxWidget--unchecked");
            };


            // Open Copy Task screen
            $(".SingleTaskPaneExtraActionsButton")[0].click();
            $(".SingleTaskPaneExtraActionsButton-makeACopy")[0].click();

            // Wait until popup is opened
            setTimeout(function(){ 
                // Uncheck
                uncheck("duplicate_object_option_task_description");
                uncheck("duplicate_object_option_assignee");
                uncheck("duplicate_object_option_subtasks");
                uncheck("duplicate_object_option_attachments");
                uncheck("duplicate_object_option_due_date");
                uncheck("duplicate_object_option_dependencies");

                // Check
                check("duplicate_object_option_tags");
                check("duplicate_object_option_followers");
                check("duplicate_object_option_projects");
                check("duplicate_object_option_parent_task");

            }, 1500);

    }
  }
);