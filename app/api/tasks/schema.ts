import { z } from 'zod';

const taskSchema = z.object({
    name: z.string().min(3),
    price: z.number()
})

export default taskSchema;