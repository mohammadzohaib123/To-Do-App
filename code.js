        // Initialize Firebase
        // TODO: Replace with your project's customized code snippet
        var config = {
            projectId: "to-do-app-74f51",
            apiKey: "AIzaSyDZ1InQhHb1eIHngiSVtj5vH1nQUbJxNJE",
            authDomain: "to-do-app.firebaseapp.com",
            databaseURL: "https://to-do-app.firebaseio.com",
            storageBucket: "to-do-app.appspot.com",
            messagingSenderId: "35130803427",
        };
        firebase.initializeApp(config);
        var firestore=firebase.firestore();
        const docRef=firestore.doc("To-Do/To-Do-Data");
function add() {
    var li_Element = document.createElement('li'); //creating the li element that will placed in ol element
    var span_Element = document.createElement('span'); //creating the span element that wil placed in li element
    var data = document.getElementById('text_Field').value; // todo task
    if (data === "") {
        alert("Please Enter some task to do Empty task is not allowed");
        console.log("empty task");
    }
    //console.log(data);
    else {
        span_Element.innerHTML = data; //<span>task</span>
        var add = document.getElementById('bottom'); //it gives ul element <ul id="bottom"></ul>
        var delete_Btn = document.createElement('input'); //create delete button
        var update_Btn = document.createElement('input'); //create update button
        var Done_Btn = document.createElement('input'); //create done button
        var li_Add = add.appendChild(li_Element); //attach ol to li

        li_Add.appendChild(span_Element);
        li_Add.appendChild(delete_Btn);
        li_Add.appendChild(update_Btn);
        li_Add.appendChild(Done_Btn);

        Done_Btn.setAttribute("type", "submit");
        Done_Btn.setAttribute("value", "Done");
        Done_Btn.setAttribute("onClick", "Done()");

        delete_Btn.setAttribute("type", "submit");
        delete_Btn.setAttribute("value", "Delete");
        delete_Btn.setAttribute("onClick", "Delete()");

        update_Btn.setAttribute("type", "submit");
        update_Btn.setAttribute("value", "Update");
        update_Btn.setAttribute("onClick", "Update(this)");
        document.getElementById('text_Field').value = " ";
        var setWithMerge = docRef.set({
            task:data
        })
        .then(function()
            {
            console.log("status saved...")
            }).catch(function(error)
            {
                console.log(error);
            });
        
    }
}
    function Delete() {
        var ul = document.getElementById('bottom');
        var li = ul.children;
        console.log(li);
        ul.removeChild(li[0]);
    }

    function Update(element) {
        console.log(element.parentElement.children.item(0).innerHTML)
        var update = prompt("Enter your updated task:");
        element.parentElement.children.item(0).innerHTML = update;

    }