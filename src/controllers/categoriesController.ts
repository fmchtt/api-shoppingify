import { Request, Response } from 'express'

export default {
    getCategories(req: Request, res: Response) {
        res.status(200).json({
            message: "Ok"
        })
    }
}