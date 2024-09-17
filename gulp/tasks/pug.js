import gpug from "gulp-pug";
import versionNumber from "gulp-version-number";

export const pug = () => {
    return app.gulp.src(app.path.src.pug)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "PUG",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(gpug({
            pretty: true
        }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(versionNumber({
            'value': '%DT%',
            'append': {
                'key': '_v',
                'cover': 0,
                'to': [
                    'css',
                    'js',
                ]
            },
            'output': {
                'file': 'gulp/version.json'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}