import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleancss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';
import groupcssmediaqueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            }))
        )
        .pipe(app.plugins.replace(/@img\//g, './img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupcssmediaqueries())
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleancss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}