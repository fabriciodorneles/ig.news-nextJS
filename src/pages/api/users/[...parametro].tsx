import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query);

    const users = [
        {id:1, name: 'Fabricio'},
        {id:2, name: 'Faraco'},
        {id:1, name: 'Faralord'},
    ]

    return response.json(users)
}
