import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography,} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


export default function Table(){

    const [noOfPages, setPageSize] = useState(5)

    const columns = [
        { field: 'id', headerName: 'ID', width: 100, align: 'center', headerAlign: 'center' },
        {
          field: 'title',
          headerName: 'Title',
          width: 450,
          editable: true,
          align: 'center', headerAlign: 'center'
        },
        {
          field: 'author',
          headerName: 'Author',
          width: 200,
          editable: true,
          align: 'center', headerAlign: 'center'
        },
        {
          field: 'subject',
          headerName: 'Subject',
          type: 'number',
          width: 180,
          editable: true,
          align: 'center', headerAlign: 'center'
        },
        {
          field: 'date',
          headerName: 'Publish Date',
          width: 180,
          align: 'center', headerAlign: 'center'
        },
      ];
      
      const rows = [
        { id: 1, title: 'Alice in Wonderland', author: 'Lewis Carrol', subject: 'Fantasy', date: 'November, 1865' },
        { id: 2, title: 'Adventures of Tom Sawyer', author: 'Mark Twain', subject: 'Comic', date: 'March 15, 1876' },
        { id: 3, title: 'Around the World in eighty days', author: 'Jules Verne', subject: 'Adventure', date: 'April 10, 1925' },
        { id: 4, title: 'The Vicar of Wakefield', author: 'Oliver Goldsmith', subject: 'Fiction', date: 'April 10, 1925' },
        { id: 5, title: 'Arthashastra', author: 'D.P. Moynihan', subject: 'Treatise', date:'October 20, 2000' },
        { id: 6, title: 'Time Machine', author: 'H.G. Wells', subject: 'Sci-Fi', date: 'April 10, 1925' },
        { id: 7, title: 'The Moon and Sixpence', author: 'Somerset Maughan', subject: 'Biographical novel', date: 'April 10, 1925' },
        { id: 8, title: 'Ben Hur', author: 'F. Scott Fitzgerald', subject: 'Historical', date: 'November 12, 1880' },
        { id: 9, title: 'Arms and the Man', author: 'G.B.Shaw', subject: 'Comedy', date: 'May 10, 1894' },
        { id: 10, title: 'A Dangerous place', author: 'D.P. Moynihan', subject: 'Crime', date: 'March 17, 2015' },
        { id: 11, title: 'Mein Kampf', author: 'Adolf Hitler', subject: 'Tragedy', date: 'July 18, 1926' },
        { id: 12, title: 'Gulliver’s Travels', author: 'Jonathan Swift', subject: 'Satire', date: 'October 28, 1726' },
        { id: 13, title: 'The Vicar of Wakefield', author: 'F. Scott Fitzgerald', subject: 'Comedy', date: 'January 11, 1766' },
        { id: 14, title: 'A passage to India', author: 'E.M.Forster', subject: 'Fiction', date: 'June 4, 1923' },
        { id: 15, title: 'Divine Comedy', author: 'F. Scott Fitzgerald', subject: 'Epic poetry', date: 'June 10, 1555' },
        { id: 16, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', subject: 'Tragedy', date: 'April 10, 1925' },
        
      ];
    return (
        <>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DevRev
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: window.innerHeight*0.9-64, width: '90%' }} style={{paddingTop: '10vh', paddingLeft: '5vw', paddingRight: '5vw', backgroundColor: '#f2f2f2' ,textAlign: 'center'}}>
        <Typography variant='h4' component="p" style={{align: 'center',color:'darkblue',textShadow: '2px 2px blue',fontWeight:'bold'}}>Book List</Typography>
      <Box sx={{ height: 400, width: '100%',
    '& .even':{
      backgroundColor: '#fcfcfc'
    }
    }} style={{backgroundColor: '#fff', }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={noOfPages}
        rowsPerPageOptions={[5, 10, 50]}
        getRowClassName={(params) => params.row.index%2===0? 'even': 'odd'}
        onPageSizeChange={(newPage) => {console.log(newPage.pageSize);setPageSize(newPage.pageSize)}}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onLoad
      />
    </Box>
      </Box>
        
    </>
    )
}