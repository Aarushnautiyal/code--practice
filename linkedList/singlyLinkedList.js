class Node{
    constructor(value){
       this.value = value
       this.next = null
    }
}
class linkedList {
    constructor(value){
      this.head = {
        value: value,
        next: null,
      };
      this.tail = this.head;
      this.length = 1;
    }

        append(value){
            const newNode = new Node(value)
            this.tail.next = newNode
            this.tail = newNode
            this.length++
            return this
        }

        prepend(value){
            const newNode = new Node(value);
            newNode.next = this.head
            this.head = newNode
            this.length++
            return this
        }
        print(){
            const array = []
            let current = this.head
            while(current!==null){
                array.push(current.value)
                current = current.next
            }
            // array.push(current.value)
            return array
        }
        insert(index,value){
            if(index>this.length){
                this.append(value)
                return this
            }
            const newNode = new Node(value)
            const leader = this.traversingthenode(index-1)
            const holdingData = leader
            leader.next = newNode
            newNode.next = holdingData
            return this
        }
        traversingthenode(index){
            let count = 0;
            let currentNode = this.head
            while (count !== index) {
              currentNode = currentNode.next;
              count++;
            }
            return currentNode
        }
        remove(index){
            if (index > this.length) {
            //   this.append(value);
              return this;
            }
            // const newNode = new Node(value);
            const leader = this.traversingthenode(index - 1);
            const leader2 = this.traversingthenode(index);
            const holdingData = leader;
            const holdingData2 = leader2;
            leader.next = leader2.next
            return this
            // leader.next = newNode;
            // newNode.next = holdingData;
        }
}

const myList = new linkedList(10)
myList.append(20)
myList.insert(2,2)
// console.log(myList.remove(2))
myList.remove(2)
console.log(myList);
console.log(myList.print());