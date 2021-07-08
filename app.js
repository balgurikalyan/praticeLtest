const content= document.querySelector('#content');

//create element and render questions
function renderTest(doc){
    let li=document.createElement('li');
    // question
    let question=document.createElement('p');
    question.className="text-primary";

    let options=document.createElement("div");
    options.className="list-group";
    let option1=document.createElement('button');
    option1.className="list-group-item list-group-item-action";
    option1.setAttribute("type","button");
    let option2=document.createElement('button');
    option2.className="list-group-item list-group-item-action";
    option2.setAttribute("type","button");
    let option3=document.createElement('button');
    option3.className="list-group-item list-group-item-action";
    option3.setAttribute("type","button");
    let option4=document.createElement('button');
    option4.className="list-group-item list-group-item-action";
    option4.setAttribute("type","button");

    // // option1
    // let radio1=document.createElement('div');
    // radio1.className="form-check";
    // let input1=document.createElement('input');
    // input1.className="form-check-input";
    // input1.setAttribute("type", "radio");
    // input1.setAttribute("id","opt1");
    // input1.setAttribute("value","option1");
    // let option1=document.createElement('label');
    // option1.setAttribute("for","opt1");
    // option1.className="form-check-label";


    // // option2
    // let radio2=document.createElement('div');
    // radio2.className="form-check";
    // let input2=document.createElement('input');
    // input2.className="form-check-input";
    // input2.setAttribute("type", "radio");
    // input2.setAttribute("id","opt2");
    // input2.setAttribute("value","option2");
    // let option2=document.createElement('label');
    // option2.setAttribute("for","opt2");
    // option2.className="form-check-label";

    // // option3
    // let radio3=document.createElement('div');
    // radio3.className="form-check";
    // let input3=document.createElement('input');
    // input3.className="form-check-input";
    // input3.setAttribute("type", "radio");
    // input3.setAttribute("id","opt3");
    // input3.setAttribute("value","option3");
    // let option3=document.createElement('label');
    // option3.setAttribute("for","opt3");
    // option3.className="form-check-label";

    // // option4
    // let radio4=document.createElement('div');
    // radio4.className="form-check";
    // let input4=document.createElement('input');
    // input4.className="form-check-input";
    // input4.setAttribute("type", "radio");
    // input4.setAttribute("id","opt4");
    // input4.setAttribute("value","option4");
    // let option4=document.createElement('label');
    // option4.setAttribute("for","opt4");
    // option4.className="form-check-label";
    
    // setdata   
    li.setAttribute('data-id',doc.id);
    question.textContent=doc.data().question;
    option1.textContent=doc.data().option1; 
    option2.textContent=doc.data().option2;
    option3.textContent=doc.data().option3;
    option4.textContent=doc.data().option4;
    
    li.appendChild(question);
    // radio1.appendChild(input1);
    // radio1.appendChild(option1);   
    // radio2.appendChild(input2);
    // radio2.appendChild(option2);
    // radio3.appendChild(input3);
    // radio3.appendChild(option3);
    // radio4.appendChild(input4);
    // radio4.appendChild(option4);
    // li.appendChild(radio1);
    // li.appendChild(radio2);
    // li.appendChild(radio3);
    // li.appendChild(radio4);
    options.appendChild(option1);
    options.appendChild(option2);
    options.appendChild(option3);
    options.appendChild(option4);
    li.appendChild(options);
    content.appendChild(li);
      
}


//getting data
db.collection("questions").get().then((querySnapshot) => {
    querySnapshot.docs.forEach((doc) => {
        renderTest(doc);
    });
});







