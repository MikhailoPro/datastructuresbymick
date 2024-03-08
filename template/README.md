# PDF Generator

A simple yet powerful PDF generation tool written in TypeScript.

## Installation

```bash
npm install pdf-generator
```

## Usage

```javascript
const PDFGenerator = require("pdf-generator");

// Create a new PDFGenerator instance
const pdfGenerator = new PDFGenerator();

// Add content to the PDF
pdfGenerator
  .addText("Hello, this is a PDF generated using PDFGenerator!", {
    fontSize: 20,
    align: "center",
  })
  .addPage()
  .addText("This is page 2 of the PDF.", {
    y: 100,
    align: "center",
  });

// Save the PDF
pdfGenerator.save();
```

## API

### `PDFGenerator(options?: PDFGeneratorOptions)`

Creates a new instance of PDFGenerator with optional options.

- `options.filename`: Specify the filename for the generated PDF. Default is `'output.pdf'`.

### `addText(text: string, options?: TextOptions): PDFGenerator`

Adds text to the PDF document.

- `text`: The text content to add.
- `options`: Optional parameters for text formatting, such as fontSize, font, alignment, etc.

### `addPage(): PDFGenerator`

Adds a new page to the PDF document.

### `save(): void`

Saves the PDF document to the specified filename.

## Example

Check the `example` directory for an example usage of the PDFGenerator.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# DataStructures

DataStructures is a lightweight library for common data structures in JavaScript.

## Installation

You can install DataStructures via npm:

```bash
npm install data-structures
```

## Usage

```javascript
const { Stack, Queue } = require('data-structures');

// Create a new stack
const stack = new Stack();

// Push elements onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

// Pop elements from the stack
console.log(stack.pop()); // Output: 3

// Create a new queue
const queue = new Queue();

// Enqueue elements into the queue
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

// Dequeue elements from the queue
console.log(queue.dequeue()); // Output: 'a'
```

## Available Data Structures

### `Stack`

A stack is a collection of elements that follows the Last In, First Out (LIFO) principle.

- `push(element)`: Add an element to the top of the stack.
- `pop()`: Remove and return the top element from the stack.
- `peek()`: Return the top element of the stack without removing it.
- `isEmpty()`: Check if the stack is empty.
- `size()`: Return the number of elements in the stack.
- `clear()`: Remove all elements from the stack.

### `Queue`

A queue is a collection of elements that follows the First In, First Out (FIFO) principle.

- `enqueue(element)`: Add an element to the back of the queue.
- `dequeue()`: Remove and return the front element from the queue.
- `front()`: Return the front element of the queue without removing it.
- `isEmpty()`: Check if the queue is empty.
- `size()`: Return the number of elements in the queue.
- `clear()`: Remove all elements from the queue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
