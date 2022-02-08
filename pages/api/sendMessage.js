import nextConnect from 'next-connect';
const handler = nextConnect();

handler.post(async (req, res, next) => {

   console.log(req.body)



  

});

export default handler;