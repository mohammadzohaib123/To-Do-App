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
        
function add2() {
    var li_Element = document.createElement('li'); //creating the li element that will placed in ol element
    var span_Element = document.createElement('span'); //creating the span element that wil placed in li element
    var div_Element = document.createElement('div');
    var data = document.getElementById('text_Field').value; // todo task
    if (data == "") {
        alert("Please Enter some task to do Empty task is not allowed");
        console.log("empty task");
    }
    //console.log(data);
    else {
        span_Element.innerHTML = data; //<span>task</span>
        var add = document.getElementById('bottom'); //it gives ul element <ul id="bottom"></ul>
        var delete_Btn = document.createElement('input'); //create delete button
        var update_Btn = document.createElement('input'); //create update button
        var done_Btn = document.createElement('input'); //create done button
        var li_Add = add.appendChild(li_Element); //attach ol to li
        li_Add.appendChild(span_Element);
        span_Element.setAttribute("id","span");
        li_Add.appendChild(div_Element);
        
        div_Element.appendChild(delete_Btn);
        div_Element.appendChild(update_Btn);
        div_Element.appendChild(done_Btn);

        div_Element.setAttribute("id","wrap_Btn")
        done_Btn.setAttribute("id","btn")
        done_Btn.setAttribute("type", "submit");
        done_Btn.setAttribute("class", "btn btn-default");
        done_Btn.setAttribute("value", "Done");
        done_Btn.setAttribute("onClick", "Done()");

        delete_Btn.setAttribute("type", "submit");
        delete_Btn.setAttribute("id","btn")
        delete_Btn.setAttribute("class", "btn btn-default");
        delete_Btn.setAttribute("value", "Delete");
        delete_Btn.setAttribute("onClick", "Delete(this)");

        update_Btn.setAttribute("type", "submit");
        update_Btn.setAttribute("id","btn")
        update_Btn.setAttribute("class", "btn btn-default");
        update_Btn.setAttribute("value", "Update");
        update_Btn.setAttribute("onClick", "Update(this)");
        document.getElementById('text_Field').value = " ";
        firestore.collection("To-Do").add({
            task:data
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            postKey = docRef.id;
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        
    }
}
    function Delete(ele) {
       
        var ele_Parent=ele.parentNode.parentNode;
        console.log(ele_Parent);
        ele_Parent.parentNode.removeChild(ele_Parent);
    }

    function Update(element) {
        console.log(element.parentElement.children.item(0).innerHTML)
        var update = prompt("Enter your updated task:");
        element.parentElement.children.item(0).innerHTML = update;

    }
    function Done()
    {
        document.getElementById("span").style.textDecoration="line-through";
        document.getElementById("span").style.color="#0dab8a";
    }