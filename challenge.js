class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  add(number) {
    let node=new Node(number);
    let current;
    if (this.value == null)
        this.value = node;
    else {
        current = this.value;
        while (current.next_node) {
            current = current.next_node;
        }
        current.next_node = node;
    }
  }

  get(index) {
    let current = this.value;
        let count = 0; 
        while (current != null) {
            if (count == index)
                return current.value;
            count++;
            current = current.next_node;
        }
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
