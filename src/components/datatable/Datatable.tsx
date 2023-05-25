import styles from '@/styles/datatable.module.css'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { ActionColumn as ActionColumnProps } from '@/types/actionColumnType';
import { User as UserProps } from '@/types/userType';
import Pagination from "@mui/material/Pagination";
import {
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector
} from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#000000'
        }
    },
})

export default function Datatable() {
    const [data, setData] = useState<UserProps[]>(userRows);
    const [color, setColor] = useState<string>("");

    useEffect(() => {
        if (localStorage.getItem("theme") == "light") {
            setColor("#000000");
        }
        else {
            setColor("#ffffff");
        }
    }, []);

    const handleDelete = (id: number) => {
        setData(data.filter((item: UserProps) => item.id !== id));
    };

    const actionColumn: ActionColumnProps[] = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params: any) => {
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

    const CustomPagination = () => {

        const apiRef = useGridApiContext();
        const page = useGridSelector(apiRef, gridPageSelector);
        const pageCount = useGridSelector(apiRef, gridPageCountSelector);

        return (
            <>
                {
                    localStorage.getItem("theme") == "dark" &&
                    <ThemeProvider theme={theme}>
                        <Pagination
                            color="primary"
                            count={pageCount}
                            page={page + 1}
                            onChange={(event, value) => apiRef.current.setPage(value - 1)}
                        />
                    </ThemeProvider>
                }
                {
                    localStorage.getItem("theme") == "light" &&
                    <ThemeProvider theme={theme}>
                        <Pagination
                            color="secondary"
                            count={pageCount}
                            page={page + 1}
                            onChange={(event, value) => apiRef.current.setPage(value - 1)}
                        />
                    </ThemeProvider>
                }
            </>
        );
    }

    return (
        <div className={styles.datatable}>
            <div className={styles.datatableTitle}>
                Add New User
                <Link href="/Product/new" className={styles.link}>
                    Add New
                </Link>
            </div>
            <DataGrid
                sx={{ button: { color: `${color}` }, '& .MuiCheckbox-root svg':{ color: `${color}` } }}
                className={styles.datagrid}
                rows={data}
                columns={userColumns.concat(actionColumn)}
                checkboxSelection

                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 9,
                        },
                    },
                }}
                
                localeText={{
                    footerRowSelected: CustomPagination
                }}
                components={{
                    Pagination: CustomPagination,
                }}
            />
        </div>
    );
};