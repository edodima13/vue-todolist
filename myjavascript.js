var app = new Vue({
    el: "#root",
    data: {
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
    addToDo : function() {
    }
    }
})