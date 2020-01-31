module.exports = class Home {
    print(request, response) {
        request.session.destroy(function (err) {
            // cannot access session here
        })
        response.redirect('/')
    }
}