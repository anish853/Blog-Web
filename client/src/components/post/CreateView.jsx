import { Box, FormControl, InputBase, makeStyles, Button, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { createPost,uploadFile } from '../../service/api';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const useStyle = makeStyles(theme => ({
    container: {
        margin: '50px 100px',
        [theme.breakpoints.down('md')]: {
            margin: 0
        },
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    form: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row'
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
    },
    textarea: {
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}));
const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'ANISH BHARDWAJ',
    categories: 'ALL',
    createdDate: new Date()
}
const CreateView = ({ match }) => {
    const [post, setPost] = useState(initialValues);
    const classes = useStyle();
    const history = useHistory();
    const [file, setFile] = useState('');
    const [image,setImage]=useState('');

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
    
    useEffect(() => {
        const getImage = async () => {
            console.log(file);
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                
                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(image.data);
            }
        }
        getImage();
        
    }, [file])
    
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    const savePost = async () => {
        await createPost(post);
        history.push("/");
    }
    return (
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt='banner' />
            <FormControl className={classes.form}>
                <label htmlFor="fileInput">
                    <AddCircle className={classes.addIcon} fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <InputBase onChange={(e) => handleChange(e)} placeholder='Title' className={classes.textfield} name='title' />
                <Button onClick={() => savePost()} variant='contained' color='primary'>Publish</Button>
            </FormControl>
            <TextareaAutosize
                rowsMin={5}
                placeholder='Tell ur story....'
                className={classes.textarea}
                onChange={(e) => handleChange(e)}
                name='description'
            />

        </Box>
    )
}
export default CreateView;