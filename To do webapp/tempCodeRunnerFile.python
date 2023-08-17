from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = "your_secret_key"

# In-memory user storage (for demo purposes)
users = {
    "user1": "password1",
    "user2": "password2"
}

@app.route("/")
def home():
    if "username" in session:
        return f"Welcome, {session['username']}!"
    return "Home Page"

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]

        if username in users and users[username] == password:
            session["username"] = username
            return redirect(url_for("home"))
        else:
            return "Invalid credentials. Please try again."

    return render_template("login.html")

@app.route("/logout")
def logout():
    session.pop("username", None)
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run(debug=True)
