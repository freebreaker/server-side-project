
export default function investReducer(state={}, action) {
  switch(action.type) {
  case 'INVEST_SUCCESS': fetch('http://localhost:3000/user',{
    method:"post",
    headers:{
        "Content-type":"application:/x-www-form-urlencoded:charset=UTF-8"
    },
    body:action.payload
  })
  .then(function(data){
      alert(action.payload)
      console.log("请求成功，JSON解析后的响应数据为:",data);
  })
  .catch(function(err){
      console.log("Fetch错误:"+err);
  });
  default: return state;
  }
}