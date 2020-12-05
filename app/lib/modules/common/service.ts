import {Response} from "express";
import {responseStatusCode} from "./model";

export function successResponse(message: string, data: any, res: Response) {
    res.status(responseStatusCode.success).json({data})
}

export function failureResponse(message: string, data: any, res: Response) {
    res.status(responseStatusCode.success).json({status: 'failure', message})
}

export function insufficientParams(res: Response) {
    res.status(responseStatusCode.badRequest).json({
        status: 'failure',
        message: 'insufficient params',
        data: {},
    })
}
