let tasks = [
    {
        name: "Wash Car",
        price: 10
        
    },
    
    {
        name: "Mow Lawn",
        price: 20
        
    },
     
    {
        name: "Pull Weeds",
        price: 10
        
    }
    
]


const taskList = document.getElementById("task-ul")
const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullBtn = document.getElementById("pull-btn")
const sendBtn = document.getElementById("send")
const notes = document.getElementById("notes")
const total = document.getElementById("total")



//initialize buttons 
washBtn.disabled = false
mowBtn.disabled  = false
pullBtn.disabled = false
//initialize button status
let washStats = true
let mowStats = true
let pullStats = true
//initialize sum
sum = 0

 if (washBtn.disabled){
     console.log("hello")
 }
   

washBtn.addEventListener("click", function(){
    
    if(washStats){
        washStats = false
        taskList.innerHTML += ` <li>${tasks[0].name}<p><span>&#36</span>${tasks[0].price}</p></li>`
        washBtn.style.cssText = 'background-color: dimgray'   
        calculateTotal(tasks[0].price)
        showSum()  
        
    }else{
        alert("you already logged this task button will now be disabled")
        washBtn.disabled = true
    }
       
})

mowBtn.addEventListener("click", function(){
    
    if(mowStats){
        mowStats = false
        taskList.innerHTML += ` <li>${tasks[1].name}<p><span>&#36</span>${tasks[1].price}</p></li>`
        mowBtn.style.cssText = 'background-color: dimgray'
        calculateTotal(tasks[1].price) 
        showSum()  
    }else{
        alert("you already logged this task button will now be disabled")
        mowBtn.disabled = true
    }
       
})

pullBtn.addEventListener("click", function(){
    
    if(pullStats){
        pullStats = false
        taskList.innerHTML += ` <li>${tasks[2].name}<p><span>&#36</span>${tasks[2].price}</p></li>`
        pullBtn.style.cssText = 'background-color: dimgray'   
        calculateTotal(tasks[2].price)
        showSum()  
    }else{
        alert("you already logged this task button will now be disabled")
        pullBtn.disabled = true
    }
       
})

sendBtn.addEventListener("click", function(){
    
    if (sum === 0){
        alert('There are no items on the cart!')
    }else{
        
     alert('Your order has been recieved!')
     reset()
    }
    
    
     
})

function showSum(){
       notes.textContent = "we accept Credit Card and Pay pal"
       total.innerHTML = "$" + sum
}

function reset(){
     sum = 0
     taskList.innerHTML = ""
     washBtn.disabled = false
     mowBtn.disabled = false
     pullBtn.disabled = false
     washStats = true
     mowStats = true
     pullStats = true
     washBtn.style.cssText = ""
     mowBtn.style.cssText = ""
     pullBtn.style.cssText = ""
     notes.textContent = ""
     total.innerHTML = ""
    
}

function calculateTotal(input){
    sum += input
    
}
