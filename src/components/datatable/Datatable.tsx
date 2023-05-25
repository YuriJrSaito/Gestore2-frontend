import styles from '@/styles/datatable.module.css'
import { DataGrid, DataGridProps, GridPagination, gridClasses } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import Link from 'next/link';
import { useState } from "react";
import { ActionColumn as ActionColumnProps } from '@/types/actionColumnType';
import { User as UserProps } from '@/types/userType';

import type {} from '@mui/x-data-grid/themeAugmentation';

export default function Datatable(){
    const [data, setData] = useState<UserProps[]>(userRows);

    const handleDelete = (id : number) => {
        setData(data.filter((item : UserProps) => item.id !== id));
    };

    const actionColumn : ActionColumnProps[] = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params : any) => {
                return (
                    <div className={styles.cellAction}>
                        <Link href="/single/Single" style={{ textDecoration: "none" }}>
                            <div className={styles.viewButton}>View</div>
                        </Link>
                        <div
                            className={styles.deleteButton}
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className={styles.datatable}>
            <div className={styles.datatableTitle}>
                Add New User
                <Link href="/Product/new" className={styles.link}>
                    Add New
                </Link>
            </div>
            <DataGrid
                className={styles.datagrid}
                rows={data}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                      paginationModel: {
                        pageSize: 9,
                      },
                    },
                }}
                checkboxSelection
            />
        </div>
    );
};