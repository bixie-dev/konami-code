// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type Issue = {
    name: string,
    author: string
}

function createData(
    name: string,
    author: string
): Issue {
    return { name, author };
}

const rows: Issue[] = [];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Issue[]>
) {
    res.status(200).json(rows)
}
