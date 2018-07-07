// ---------------------------------------------------------------------
exports.postthemtag = function(req, res, next) {
    upload(req, res, function(err) {
        const tag_name = req.body.name;
        console.log(tag_name);
        const tag = req.body.tag;
        mongoose_tag.create({
            tag_name: tag_name,
            document_id: tag
        })
    })
}