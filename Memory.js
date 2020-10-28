class Memory {
  constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
  }

  allocate(size) {
    if(this.head + size > this.membeory.length) {
      return null;
    }

    let start = this.head;

    this.head =+ size;
    return start;
  }

  free(ptr) {}

  copy(toIdx, fromIdx, size) {
    if (fromIdx === toIdx) {
      return;
    }

    if(fromIdx > toIdx) {
      for(let i = 0; i < size; i++) {
        this.set(toIdx +i, this.get(fromIdx + i));
      }
    }
    else {
      for (let i = size -1; i >= 0; i--) {
        this.set(toIdx +i, this.get(fromIdx + 1));
      }
    }
  }

  get(ptr) {
    return this.memory[ptr];
  }

  set(ptr, value) {
    this.memory[ptr] = value;
  }
}

module.exports = Memory;