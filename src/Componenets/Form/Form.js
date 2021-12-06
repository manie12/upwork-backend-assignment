import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { api } from '../../api';


const Form = ({ post, setPost }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(post)
        api.post("/", post).then((response) => {
            console.log(response)
            setPost({ movie: "", rating: "", duration: "" })
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Movies"
                            placeholder="Movies"
                            value={post.movie}
                            onChange={(e) => setPost({ ...post, movie: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Rating"
                            placeholder="Rating"
                            value={post?.rating}
                            onChange={(e) => setPost({ ...post, rating: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <TextField
                            fullWidth
                            label="Duration"
                            placeholder="Duration"
                            value={post?.duration}
                            onChange={(e) => setPost({ ...post, duration: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </Grid>
                </Grid>

            </form>
        </div>
    )
}

export default Form
