const Question = require('../models/Question')

module.exports.createQuestion = async (req, res) => {
    const {
        questionLevel,
        slug,
        question,
        options,
        answer
    } = req.body

    // Question Level Can not empty
    // Question Level must be atleast 4 character

    if (questionLevel.length === 0)
        req.check('questionLevel', 'Question Level can not empty').custom(e => false)
    else
        req.check('questionLevel', 'Question Level atleast 4 Character').isLength({
            min: 3
        })

    // Slug Level Can not empty
    // Slug Level must be atleast 4 character

    if (slug.length === 0)
        req.check('slug', 'Slug Level can not empty').custom(e => false)
    else
        req.check('slug', 'Slug Level atleast 4 Character').isLength({
            min: 3
        })

    // Question Can not empty

    if (question.length === 0)
        req.check('question', 'Question can not empty').custom(e => false)

    // Options Can not empty

    if (options.length === 0)
        req.check('options', 'Options can not empty').custom(e => false)

    // Answer Can not empty
    // Answer must be atleast 1 character

    if (answer.length === 0)
        req.check('answer', 'Answer  can not empty').custom(e => false)
    else
        req.check('answer', 'Answer atleast 1 Character').isLength({
            min: 1
        })

    /**
     * Here Everything is correct, store to DB
     */
    if (!req.validationErrors()) {
        const questionInstance = new Question({
            questionLevel,
            slug,
            question,
            options,
            answer
        })
        try {
            const question = await questionInstance.save()
            res.status(201).json({
                meassage: "Successfully Create Question",
                question
            })


        } catch (error) {
            res.send(error)
        }

    } else {

        res.send(req.validationErrors())
    }
}

/**
 * Get Question
 */

module.exports.getQuestion = async (req, res) => {
    const question = await Question.find()
    res.status(200).json({
        question
    })
}