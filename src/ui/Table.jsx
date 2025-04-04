import React from 'react'

function Table({ children }) {
    return (
        <table className='max-w-[calc(100%-2rem)] max-h-[calc(100vh-2rem)] overflow-x--auto'>
            {children}
        </table>
    )
}

export default Table

function TableHeader({ children }) {
    return (
        <thead>
            <tr className='title-row'>
                {children}
            </tr>
        </thead>
    )
}

function TableBody({ children }) {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

function TableRow({ children }) {
    return (
        <tr>
            {children}
        </tr>
    )
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;