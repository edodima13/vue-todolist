var app = new Vue({
    el: "#root",
    data: {
        newItems :"",
        todoItems : [
            {
                text : "fare la spesa",
                done : false
            },
            {
                text : "passeggiare il cane",
                done : true
            },
            {
                text : "comprare il giornale",
                done : false
            }
        ],
        
    } ,
    methods : {
    addItems : function(){
        const newItems = {
            text:this.newItems,
            done:false
        }
        console.log(newItems)
        this.todoItems.push(this.newItems)
    },
    removeToDo : function(index) {
        this.todoItems.splice(index, 1)
    }
    
    }
})



