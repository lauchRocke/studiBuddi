import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import logo from './studi.png'
import ImageResize from './ImageResize';
import group  from './group.jpg';
import indiv from './indiv.jpg'
import ImgMediaCard from './ImgMediaCard';
import MediaCard from './MediaCard'
import post from './posts'
import AltCard from './AltCard'
import Divider from '@mui/material/Divider';
const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
 
];

const mainFeaturedPost = {
  title: 'Studi Buddi',
  description:
    "Join us to a relax and focus on your studies enivornment. We multiple chat room to choose from and also questionnaires. Meet up with your pal, or meet some one new.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  // linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Meet one on one with friends or meet new people',
    date: ' ',
    description:
      'Come to a fun and relax environment where people connected with their locate peers to work projects.',
    image: group,
    imageLabel: 'Image Text',
  },
  {
    title: 'Group projects meet up location. ',

    description:
      'Come to a fun and relax environment where people connected with their locate peers to work projects.',
    image: indiv,
    imageLabel: 'Image Text',
  },

];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header  sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={10}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={10} sx={{ mt: 3 }}>
            <Main title="From the firehose" posts={posts} />

            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
            <Divider />
          </Grid>
          <h1>Please join one of our study group.</h1>
            <Divider style={{margin:"25px"}} variant="inset"  />
          <AltCard />
        </main>

      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
