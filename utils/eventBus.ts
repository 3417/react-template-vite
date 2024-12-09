/**
 * src/eventBus.ts
 * 
 *  使用 EventBus 实现自定义事件总线 
 *  eg: eventBus.emit('eventName', ...args);
 * 
 * */
class EventBus {
    private events: { [key: string]: Function[] } = {};
  
    on(eventName: string, listener: Function) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(listener);
    }
  
    off(eventName: string, listener: Function) {
      if (this.events[eventName]) {
        this.events[eventName] = this.events[eventName].filter(l => l !== listener);
      }
    }
  
    emit(eventName: string, ...args: any[]) {
      if (this.events[eventName]) {
        this.events[eventName].forEach(listener => listener(...args));
      }
    }
  }
  
  const eventBus = new EventBus();
  
  export default eventBus;
  