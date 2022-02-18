const CODES = {
    A: 65,
    Z: 90,
};

function toColumn(col, idx) {
    return `
        <div class="column" data-type="resizable" data-col=${idx}>
            ${col}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `;
}

function toCell(row) {
    return function(_, col) {
        return `
            <div 
                class="cell" 
                data-col="${col}"
                data-id="${row}:${col}"
                data-type="cell"
                contenteditable="true">
            </div>
        `;
    };
}

function createRow(rowNum, content) {
    const resizer = rowNum
        ? '<div class="row-resize" data-resize="row"></div>'
        : '';

    return `
        <div class="row" data-type="resizable">
            <div class="row-info">
                ${rowNum ? rowNum : ''}
                ${resizer}
            </div>
            <div class="row-data">${content}</div>
        </div>
    `;
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = [];

    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('');

    rows.push(createRow(null, cols));

    for (let row = 0; row < rowsCount; row++) {
        const rowNum = row + 1;
        const cells = new Array(colsCount)
            .fill('')
            .map(toCell(row))
            .join('');

        rows.push(createRow(rowNum, cells));
    }

    return rows.join('');
}
