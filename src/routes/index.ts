import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    res.render('home');
});

router.get('/noticias/:slug', (req: Request, res: Response)=>{
    let slug: string = req.params.slug;
    res.send(`Notícia: ${slug}`);
});

export default router;

