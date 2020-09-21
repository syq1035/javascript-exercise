import Person from './person';

export default class Worker extends Person {
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["introduce"] }] */
  introduce() {
    return `I am a Worker. I have a job.`;
  }
}
