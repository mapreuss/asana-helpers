// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "copy_task" ) {

            var uncheck = function(element){
                $(element).removeClass("checkboxWidget--checked");
                $(element).addClass("checkboxWidget--unchecked");
            };

            var check = function(element){
                $(element).addClass("checkboxWidget--checked");
                $(element).removeClass("checkboxWidget--unchecked");
            };

            // Open Copy Task screen
            $(".SingleTaskPaneExtraActionsButton")[0].click();
            $(".SingleTaskPaneExtraActionsButton-makeACopy")[0].click(function(){
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
            });


            // $("#duplicate_object_dialog_submit").click();

            console.log("triggered");

    }
  }
);