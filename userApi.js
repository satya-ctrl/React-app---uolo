const API = { axios.create({baseURL: "https://dummyjson.com/users?skip=10&limit=10",
    Headers: { "Authorization": 'Bearer $
        {process.env.REACT_APP_API_KEY}'
    } }
         });
    
};
    