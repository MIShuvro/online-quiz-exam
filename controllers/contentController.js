const Content = require('../models/Content')

module.exports.createContent = async (req, res) => {
    const {
        title,
        slug,
        heading,
        picture,
        text,
        subText
    } = req.body


    // Title Can not empty
    // Title must be atleast 4 character

    if (title.length === 0)
        req.check('title', 'Title can not empty').custom(e => false)
    else
        req.check('title', 'Title atleast 4 Character').isLength({
            min: 4
        })

    // Slug Can not empty

    if (slug.length === 0)
        req.check('title', 'Title can not empty').custom(e => false)


    // heading Can not empty
    // heading must be atleast 4 character

    if (heading.length === 0)
        req.check('heading', 'Heading can not empty').custom(e => false)
    else
        req.check('heading', 'Heading atleast 4 Character').isLength({
            min: 4
        })

    // Picture Can not empty

    if (picture.length === 0)
        req.check('picture', 'Picture can not empty').custom(e => false)

    // Text Can not empty
    // Text must be atleast 4 character

    if (text.length === 0)
        req.check('text', 'Text can not empty').custom(e => false)
    else
        req.check('text', 'Text atleast 4 Character').isLength({
            min: 4
        })

    // subText Can not empty
    // subText must be atleast 4 character

    if (subText.length === 0)
        req.check('subText', 'Text can not empty').custom(e => false)
    else
        req.check('subText', 'Text atleast 4 Character').isLength({
            min: 4
        })

    /**
     * Here Everything is correct, now store to DB
     */
    if (!req.validationErrors()) {
        const contentInstance = new Content({
            title,
            slug,
            heading,
            picture,
            text,
            subText
        })
        try {
            const content = await contentInstance.save()
            res.status(201).json({
                meassage: "Successfully Create Content",
                content
            })

        } catch (error) {
            res.send(error)
        }

    } else {
        res.send(req.validationErrors())
    }


}

/**
 *  Get Content
 */

module.exports.getContent = async (req, res) => {
    const {
        slug
    } = req.params
    const content = await Content.find({
        slug
    })
    res.status(200).json({
        content
    })
}

/**
 * Get Single Content
 */
module.exports.getSingleContent = async (req, res) => {
    const {
        _id
    } = req.params
    const content = await Content.findById(_id)
    res.status(200).json({
        content
    })
}