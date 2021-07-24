const content= document.querySelector('#content');

//create element and render questions
function renderTest(doc){
    let li=document.createElement('li');
    
    // question
    let question=document.createElement('p');
    question.className="text-primary";

    let answer=document.createElement('button');
    answer.setAttribute("type","button");
    let options=document.createElement("div");
    options.className="list-group";
    let option1=document.createElement('button');
    option1.className="list-group-item list-group-item-action";
    option1.setAttribute("type","button");
    option1.addEventListener("click",checkAns);
    let option2=document.createElement('button');
    option2.className="list-group-item list-group-item-action";
    option2.setAttribute("type","button");
    option2.addEventListener("click",checkAns);
    let option3=document.createElement('button');
    option3.className="list-group-item list-group-item-action";
    option3.setAttribute("type","button");
    option3.addEventListener("click",checkAns);
    let option4=document.createElement('button');
    option4.className="list-group-item list-group-item-action";
    option4.setAttribute("type","button");
    option4.addEventListener("click",checkAns);

    
    
    // setdata   
    li.setAttribute('data-id',doc.id);
    question.textContent=doc.data().question;
    option1.textContent=doc.data().option1; 
    option2.textContent=doc.data().option2;
    option3.textContent=doc.data().option3;
    option4.textContent=doc.data().option4;

    answer.textContent=doc.data().answer;
   
    li.appendChild(question);
    options.appendChild(option1);
    options.appendChild(option2);
    options.appendChild(option3);
    options.appendChild(option4);
    li.appendChild(options);
    content.appendChild(li);
    
}
// checking the answer
function checkAns(){
    if(a1==answer){
        option1.style.color="green";
    }
}
//getting data
db.collection("questions").get().then((querySnapshot) => {
    querySnapshot.docs.forEach((doc) => {
        renderTest(doc);
    });
});







