"use client";

import Container from "@/components/container";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import NextLink from "next/link";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


function refactorDate(date) {
    const array = date.split("T");
    const array2 = array[1].split('.');
    return array[0] + " at " + array2[0]
}

export default function History() {

    const [data, setData] = useState([])
    const session = useSession()


    const fetchData = () => {
        if (session.status === "authenticated") {
            fetch(`/api/auth/publish/${session.data.user.email}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json())
                .then((data) => {setData(data)})
        }
        else {
            return <div>Unauthorized</div>
        }
    }

    useEffect(() => {
        fetchData()
    },[session])

    return (
        <Container>
            {session.status === "authenticated" ?
                (<TableContainer sx={{padding: "10rem"}}>
                    <Table sx={{ minWidth: 650, background: "#d3d3d3", borderRadius:"1rem"}} aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{background:"5a5a5a"}}>
                                <TableCell>Date</TableCell>
                                <TableCell align="left">Bmi</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {refactorDate(row.updatedAt)}
                                    </TableCell>
                                    <TableCell align="left">{row.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>) :
                <div className={"flex flex-col items-center py-8"}>
                    <p className={"font-bold text-white text-xl"}>Unauthorized access to this page!</p>
                    <NextLink className="text-gray-900 dark:text-gray-100 underline"
                              href={"login"}
                    >
                        Click here to sign in.
                    </NextLink>
                </div>}
        </Container>
    )
}

