class Graph<T> {
    list: Map<T, Array<T>>;
  
    constructor() {
      this.list = new Map<T, Array<T>>();
    }
  
    addVertice(value: T) {
      this.list.set(value, []);
    }
  
    addEdge(src: T, dest: T) {
      this.list.get(src).push(dest);
      this.list.get(dest).push(src);
    }
    dfs(node, callback) {
        let q = new Stack<T>();
    
        let visited = new Set<T>();
    
        q.push(node);
        visited.add(node);
    
        while (!q.isEmpty()) {
          let element = q.pop();
    
          callback(element);
    
          let items = this.list.get(element);
          for (let i in items) {
            let neighbor = items[i];
            if (!visited.has(neighbor)) {
              q.push(neighbor);
              visited.add(neighbor);
            }
          }
        }
      }
    }
      


    class Stack<T> {
        nodes: Array<T>;
      
        constructor() {
          this.nodes = [];
        }
      
        pop() {
          return this.nodes.pop();
        }
      
        isEmpty() {
          return this.nodes.length <= 0;
        }
      
        peek() {
          return this.nodes[this.nodes.length];
        }
      
        push(value: T) {
          return this.nodes.push(value);
        }
      }
      