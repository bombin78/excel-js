export class TableSelection {
    static className = 'selected';

    constructor() {
        this.group = [];
        this.current = null;
    }

    clear() {
        this.group.forEach(($c) => $c.removeClass(TableSelection.className));
        this.group = [];
    }

    // $el instanceof DOM === true
    select($el) {
        this.clear();
        $el.focus().addClass(TableSelection.className);
        this.current = $el;
        this.group.push($el);
    }

    selectGroup($group = []) {
        this.clear();
        this.group = $group;
        this.group.forEach(($el) => $el.addClass(TableSelection.className));
    }
}
