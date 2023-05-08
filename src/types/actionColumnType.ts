export type ActionColumn = {
    field: string,
    headerName: string,
    width: number,
    renderCell: (params : any) => JSX.Element
}