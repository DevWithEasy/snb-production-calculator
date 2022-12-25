// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  switch (req.method){
    case 'GET':
      return res.status(200).json({})
      break;
    case 'POST':
      return res.status(200).json({})
      break;
    case 'DELETE':
      return res.status(200).json({})
      break;
    case 'PUT':
      return res.status(200).json({})
      break;
    defaults :
      res.setHeader("Allow",['GET','POST','PUT','DELETE'])
      res.status(405).end(`Method ${req.method} Not Allow`)
  }
}
