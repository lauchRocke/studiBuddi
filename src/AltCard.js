import React from 'react'

import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


export default function AltCard() {
    // const classes = useStyles()
    const data = [
        { quarter: "History", earnings: 13, img: 'https://source.unsplash.com/random/1', author: "Jose"},
        { quarter: "Data Structures", earnings: 16, img: 'https://source.unsplash.com/random/2', author: "Mark"},
        { quarter: "Computer Theory", earnings: 4, img: 'https://source.unsplash.com/random/5', author: "Alex" },
        { quarter: "English", earnings: 20, img: 'https://source.unsplash.com/random/6', author: "Shannon" },
        { quarter: "Biology", earnings: 14, img: 'https://source.unsplash.com/random/7', author: "Brittney" },
        { quarter: "Chinese", earnings: 12, img: 'https://source.unsplash.com/random/8', author: "Sui" },
        { quarter: "French", earnings: 10, img: 'https://source.unsplash.com/random/9', author: "Will" },
        { quarter: "Discrete Math", earnings: 42, img: 'https://source.unsplash.com/random/15', author: "Felix" },
        { quarter: "Calculus", earnings: 25, img: 'https://source.unsplash.com/random/10', author: "Carl" },
        { quarter: "Speech", earnings: 19, img: 'https://source.unsplash.com/random/16', author: "Harry" }
    ]
    return (
        <div  style={{cursor:"pointer"}}>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {data.map(elem => (
                    <Grid item xs={12} sm={6} md={4} key={data.indexOf(elem)}>
                        <Card>
                        <ListItemAvatar>
          <Avatar src={`${elem.img}`} />
        </ListItemAvatar>
        
                            <CardHeader
                                title={` ${elem.quarter}`}
                                subheader={`updated : ${elem.earnings} mins ago`}
                            />
        <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                spacing={2}
                style={{margin:"10px"}}
              >
                    By {`${elem.author}`}
        </Typography>
                            <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
          This Card's children are wrapped in a CardContent component, which
          adds 16px of padding around the edges. The last CardContent in a group
          of children will get 24px of padding on the bottom.
        </Typography>
                            </CardContent>
                        </Card>
                     </Grid>
                ))}
            </Grid>
        </div>
    )
}