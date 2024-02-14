import { FETCH_POSTS, GET_POST, ERROR_POST, POST_LOADING, POST_LOADED } from './types';
import axios from 'axios';
var y,x=0;

export const fetchPosts=()=>dispatch=>{
  if(x === 0){
    dispatch({type:POST_LOADING})
  }
    axios.get('/api/showdetails')
    // .then(res => res.json())
      .then(details =>{
        if (x===0){
              console.log(x)
              axios.get('/api/showpost')
                .then(posts => {
                  dispatch({type:POST_LOADED})
                  dispatch({
                    type: FETCH_POSTS,
                    payload: posts.data
                  })
                  console.log(posts.data)
                })
              x=1;
              y=details.data.length;
              console.log('first')
              console.log(y)
        }
        else if (y!==details.data.length){
                  console.log(y)
                  axios.get('/api/showpost')
                    .then(posts => {
                      // dispatch({type:POST_LOADED})
                      dispatch({
                        type: FETCH_POSTS,
                        payload: posts.data
                      })
                  })
                  y=details.data.length;
                  console.log('secound')
        }

      })
      
      
  };



// export const findPost = (id) => {

// console.log(id)
//   axios({
//     method: 'get',
//     url: '/api/paymentdetails'+id
//     }).then( (data) => {
//       console.log('request sended'+data)
//     }

//       );
// };

export const findPost=(id)=>(dispatch,getState) => {

      //get token from local storage
      const token = getState().auth.token;

      //headers
      const config = {
          headers:{
              "Content-type":"application/json"
          }
      }
      console.log('token   '+token)
      if(token){
          config.headers['x-auth-token'] = token;
      }
      console.log('config  '+config.headers)

  console.log(id.id+' action')
  // axios({
  //   method: 'post',
  //   url: '/api/findpost',
  //   data:id,
  //   headers:config
  // })
  axios.post('/api/findpost',id,config)
  .then(post =>{
      console.log('myposts'+JSON.stringify(post.data))
            dispatch({
              payload: post.data,
              type: GET_POST
            })
          })
            .catch(error =>{
              dispatch({
                type: ERROR_POST,
                payload: error.response.data
              })
            })
            // console.log(post.data)
          
};

// export const sendPostId = async (id) => {
//   let res = await axios.get("/api/paymentdetails"+id);
//   let { data } = res.data;
//   console.log(data)
// };