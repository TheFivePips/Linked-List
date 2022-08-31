class Node {
    constructor(val){
        this.val = val,
        this.next = null
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
        
    }
    // add an item to the end of the list
    append(value){
        const node = new Node(value)
        // if there is nothing in the list, set the head and tail to the new node
        if(!this.head){
            this.head = node
            this.tail = this.head
        }
        // if there is something in the list already, set the current tails' next-pointer to the new node,
        //  and then make the new node the new tail
        else{
            this.tail.next = node
            this.tail = node

        }
        this.length ++
        return this
    }

    // add an item to the begining of the list
    prepend(value){
        let node = new Node(value)
        if(!this.head){
            this.head = node
            this.tail = this.head
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }

    // remove the first item from the list
    shift(){
        if(!this.head) return undefined
        // set the head to the seoncd item in the list using the next property
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return currentHead
    }
   
    // return the current size of the list
    size(){
        return this.length
    }

    // return the head of the list
    getHead(){
        return this.head
    } 

    // return the tail of the list
    getTail(){
        return this.tail
    }
    
    // retreive a node by its index 
    // (not a built-in index like in an array, but rather one we are manually counting)
    at(index){
        if(index < 0 || index >= this.length) return undefined
        let current = this.head
        let counter = 0
        while(counter !== index){
            current = current.next
            counter ++
        }
        return current
    }

    // remove an item from the end of the list
    pop(){
        // if there is nothing in the list
        if(!this.head) return undefined
    
        let current = this.head
        // newTail will be the second to last item in the list
        let newTail = current
        // loop to the end of the list,(while the next property actually points to something)
        // set the newtail to the second to last item
        // and set the current to the last item
        while(current.next){
            newTail = current
            current = current.next
        }
        // sever the connection by making the tail the newTail(the second to last item in the original list)
        // and having its next-pointer point to null
        this.tail = newTail
        this.tail.next = null
        // reflect the change in the length
        this.length--
        // if there are now no items in the list, set it back to defualt state
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    // returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        let current = this.head
        while(current){
            if(current.val === value) return true
            current = current.next
        }
        return false
    }

    // returns the index of the node containing value, or null if not found.
    find(value) {
        let current = this.head
        let counter = 0
        while(current){
            if(current.val === value){
                return counter
            }
            current = current.next
            counter ++
        }
        return null
    }

    // represents your LinkedList objects as strings
    toString() {
        let current = this.head
        let str = ''
        while(current){
            str = str.concat(`(${current.val}) -> `)
            current = current.next
        }
        str = str.concat('Null')
        // console.log(str);
        return str
    }

    // ********************Extra Credit stuff ***********************************************************************************************

   
    // insert a node into a specific position
    insertAt(value, index){
            if(index < 0 || index > this.length) return false
            // if inserting at the begining or end, use our already defined methods
            // added in the double bang to convert to boolean and have these values return true or false
            // just to be consisitant
            if(index === this.length) return !!this.append(value)
            if(index === 0) return !!this.prepend(value)
    
            let node = new Node(value)
            // create variables for the nodes we are inserting inbetween
            let leadNode = this.at(index - 1)
            let followingNode = leadNode.next
            // point the new node to the following node and the lead node to the new node
            node.next = followingNode
            leadNode.next = node
    
            this.length++
            return true
            
    }
    
    // remove a node at a specific position
    removeAt(index){
            if(index < 0 || index >= this.length) return false
            if(index === 0) return !!this.shift()
            if(index === this.length -1) return !!this.pop()
            // creat variables for the nodes before and after the node we are removing
            let leadNode = this.at(index - 1)
            let deletedNode = leadNode.next
            // set the lead node to point past the node we want to remove and instead to the following node
            // effectivly removing it
            leadNode.next = deletedNode.next
            this.length --
            return deletedNode
    }

    // *************************Extra Extra stuff ***************************************************************************************************


    // set the value of a node at a given index
    set(value, index) {
        let editNode = this.at(index)
        if(editNode) {
            editNode.value = value
            return true
        }
        return false
    }

    // print an array of the values, just to see them more easily
    print(){
        let arr = []
        let current = this.head
        while(current){
            arr.push(current.val)
            
            current = current.next
        }
        console.log(arr);
    }
    
    // reverse this linked list in place
    reverse(){
        // swap the head and the tail
        let node = this.head
        this.head = this.tail
        this.tail = node
        // make some variables to help with swapping
        // next will hold the value for the upcoming node 
        let next
        // prev starts at null because the new tail needs to point to null
        // it holds the value of the node we were just considering during the swap
        let prev = null
        for(let i = 0; i < this.length; i++){
            next = node.next
            // point the node in the opposite direction
            // (the first time through it will point to null)
            node.next = prev
            // make prev the current node we are considering and the next node the new current node
            // for the next time through the loop
            prev = node
            node = next
          
        }
        return this
    }
}

const list = new SinglyLinkedList()

list.append("hi")
list.append("there")
list.append("!")




console.log(list);


// test a method here


console.log(list);
