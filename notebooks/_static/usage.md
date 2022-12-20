# Adding to your notebook

To add custom javascript (or css styles) to your IPython/Jupyter notebook just paste the following code in the first (or last) code cell:

```python
from IPython.display import HTML
from urllib.request import urlopen
script = urlopen("https://raw.githubusercontent.com/bgeneto/MCA/main/notebooks/_static/scripts.js")
html = script.read().decode('utf-8')
style = urlopen("https://raw.githubusercontent.com/bgeneto/MCA/main/notebooks/_static/styles.css")
html += style.read().decode('utf-8')
HTML(html)
```

# Using in your notebook

## To hide a cell 

```python
#@title
print("This cell will be hidden")
```

## To use color boxes (admonitions)

```html
<div class="admonition note">
    <div class="title">NOTE</div>
    <div class="content">This is a note admonition</div>
</div>

<div class="admonition warning">
    <div class="title">WARNING</div>
    <div class="content">This is a warning admonition</div>
</div>
```
