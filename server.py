"""Server for JavaScript: Sharkwords."""

from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)


@app.route("/")
def homepage():
    """Redirects to the main Sharkwords game page."""
    return redirect(url_for("sharkwords"))


@app.route("/sharkwords")
def sharkwords():
    """Renders the Sharkwords game interface."""
    return render_template("sharkwords.html")


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
