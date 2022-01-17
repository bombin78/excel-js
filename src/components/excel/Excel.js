import {$} from '@core/dom';

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        // Получаем instance класса Dom со свойством $el = node и методами
        const $root = $.create('div', 'excel');
        console.log('$root', $root);
        // Собираем массив объектов компонент, чтобы можно было получить доступ,
        // например, к их методам в методе текущего класса "render"
        this.components = this.components.map((Component) => {
            // Получаем еще один instance класса Dom с методами
            // и со свойством $el = уже другому node
            const $el = $.create('div', Component.className);
            // Получаем instance класса одной из компонент
            const component = new Component($el);
            // DEBUG
            // if (component.name) {
            //     window['c' + component.name] = component;
            // }
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
}
