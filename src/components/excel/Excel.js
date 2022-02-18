import {$} from '@core/dom';
import {Emitter} from '@core/Emitter';

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
        this.emitter = new Emitter();
    }

    getRoot() {
        // Получаем instance класса Dom со свойством $el = node и методами
        const $root = $.create('div', 'excel');
        const componentOptions = {
            emitter: this.emitter,
        };
        // Собираем массив объектов компонент, чтобы можно было получить доступ,
        // например, к их методам в методе текущего класса "render"
        this.components = this.components.map((Component) => {
            // Получаем еще один instance класса Dom с методами
            // и со свойством $el = уже другому node
            const $el = $.create('div', Component.className);
            // Получаем instance класса одной из компонент
            const component = new Component($el, componentOptions);
            $el.html(component.toHTML());
            // Добавляем html instance класса одной из компонент
            // в свойство $el instance класса Dom
            $root.append($el);
            // Возвращаем instance класса одной из компонент
            return component;
        });

        return $root;
    }

    render() {
        this.$el.append(this.getRoot());
        console.log('this.components', this.components);
        this.components.forEach((component) => component.init());
    }

    destroy() {
        this.components.forEach((component) => component.destroy());
    }
}
