const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Boom Bookstore</h1>
                <div>
                    <img src="/images/bookstore.webp" alt="Book Store" />
                    <div>
                    Photo by <a href="https://unsplash.com/@sidralmundet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sidral Mundet</a> on <a href="https://unsplash.com/photos/2SK3cOFuwQM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/books">
                    <button className="btn-primary">Books Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home