// this is for the custom error handling ..like ala anta okkavala niku user exist kaladhu anuko appudu nuvu adhi okka error la client ki pampali okka message tho patu andhuka adhi

const errorHandler =(statusCode,messasge)=>
{
    const error=new Error();
    error.statusCode=statusCode;
    error.message=message;
    return error
};
module.exports=errorHandler;
