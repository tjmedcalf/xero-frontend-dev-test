# CSS_HTML Test

## CSS GRID
I wouldn't normally use css-grid due to relatively poor browser support however given I will working in a team which builds products for Xero users, it stands to reason that _most_ people will be using the most current versions.

## Inline SVG
I used an inline svg for the search icon because I didn't think loading an icon font necessary for this test. It's also better than a linked svg as it saves a request to the server. I've applied basic ARIA for screen readers to the button/icon.

## Media Queries
I used the sass-mq package which makes writing media queries easy as.

## Tooling
For tooling I've used basic npm scripts with node-sass for compliation of sass and post-css to do auto prefixing. It also has the added benefit of browserSync to manage serving with auto reload.

Simply run `npm start` and the app should kick into action!

## Placeholder
I added a placeholder to the searchbox, even though it doesn't appear in the comp..