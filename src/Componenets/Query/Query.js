import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { api } from '../../api';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Query = () => {
    const [content, setContent] = useState();
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        function fetchData() {
            api.get("/").then((response) => {
                setContent(response?.data);
                setLoading(false)

            });
        }
        fetchData();
    }, [content])



    const FilterItems = content?.filter((cont) => {
        return cont?.movie?.toLowerCase().includes(search?.toLowerCase())
    });


    return (
        <>
            <div style={{ marginTop: "2em", marginBottom: "1em" }}>
                <TextField
                    fullWidth
                    label="Search"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Movies</TableCell>
                            <TableCell align="right">Ratings</TableCell>
                            <TableCell align="right">Duration&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {FilterItems && FilterItems?.map((row) => (

                            <TableRow
                                key={row?._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.movie}
                                </TableCell>
                                <TableCell align="right">{row?.rating}</TableCell>
                                <TableCell align="right">{row?.duration}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


        </>
    )
}

export default Query
