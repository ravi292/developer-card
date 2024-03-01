const express = require('express')
const { z }  = require('zod');
const app= express()

const schema = z.array(z.number());
const mySchema = z.object({
    name : z.string(),
    email : z.string().email(),
    password: z.string().min(8),
    country : z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})

app.use(express.json())

app.post('/kidney-checkup', (req, res, next) => {
//    kidneys = [1, 2]
//    const kidneys = req.body.kidneys;
//    const response = schema.safeParse(kidneys);
    const newResponse = mySchema.safeParse(req.body);
    if(!newResponse){
        return res.json({
            msg: "Something went wrong"
        })
    }

//   if(!response.success){
//       return res.status(411).json({
//           msg: "input is invalid"
//       })
//   }
    res.send({
        newResponse
    })
});


app.listen(3000);
