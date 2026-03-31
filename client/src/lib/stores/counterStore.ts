import {makeAutoObservable} from 'mobx';

export default class CounterStore {
    title = 'Counter store';
    count = 42;
    events: string[] = [
        `Initial count is ${this.count}`
    ]

    constructor(){
        makeAutoObservable(this)
    }

    increment() {
        this.count += 1
        this.events.push(`Incremented by 1 - count is now ${this.count}`)
    }

    decrement() {
        this.count -= 1
        this.events.push(`Decremented by 1 - count is now ${this.count}`)
    }

    get eventCount() {
        return this.events.length
    }
}