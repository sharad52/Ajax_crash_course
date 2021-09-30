print("Content-type:text/html\n\n")
import cgi
form = cgi.FieldStorage()
name = form.getvalue('nameValue')
fullName = f"My Name is: {name}"