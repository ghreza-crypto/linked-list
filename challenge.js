class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  

  add(number) {
    let node=new Node(number);
 
    // to store current node
    let current;
 
    // if list is Empty add the
    // element and make it head
    if (this.value == null)
        this.value = node;
    else {
        current = this.value;
 
        // iterate to the end of the
        // list
        while (current.next_node) {
            current = current.next_node;
        }
 
        // add node
        current.next_node = node;
    }

  }

  get(index) {
    let current = head;
        let count = 0; 
        /*
         index of Node we are currently looking at
                         */
        while (current != null) {
            if (count == index)
                return current.value;
            count++;
            current = current.next_node;
        }
  
        /*
        if we get to this line, the caller was asking
        for a non-existent element so
         we assert fail
         */
        assert (false);
        return 0;
  }
}

const list = new LinkedList();

list.add(3);
list.add(5);
console.log(list.get(1));
// => 5

module.exports = LinkedList;
