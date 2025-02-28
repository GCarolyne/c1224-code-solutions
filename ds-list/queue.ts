export type Node<T> = {
  data: T;
  priority: number;
};

export class PriorityQueue<T = unknown> {
  nodes: Node<T>[] = [];

  /**
   * Adds a value to the queue with given priority.
   * Higher priority values are dequeued first.
   * If priority already exists, first one in is dequeued first.
   */
  enqueue(item: T, priority: number): void {
    const newNode = { data: item, priority };
    const found = this.nodes.findIndex((next) => priority > next.priority);
    if (found < 0) {
      this.nodes.push(newNode);
    } else {
      this.nodes.splice(found, 0, newNode);
    }
  }

  /**
   * Removes and returns highest priority value in the queue.
   * Returns `undefined` if queue is empty.
   */
  dequeue(): T | undefined {
    const shiftedNode = this.nodes.shift();
    return shiftedNode ? shiftedNode.data : undefined;
  }

  /**
   * Returns highest priority value in the queue without removing it.
   * Returns `undefined` if queue is empty.
   */
  peek(): T | undefined {
    return this.nodes[0]?.data;
  }
}
