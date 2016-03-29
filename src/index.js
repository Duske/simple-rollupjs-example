import { sayHello } from './dependency';

function sayGoodbye() {
  console.log('Goodbye!');
}

sayHello();
sayGoodbye();
