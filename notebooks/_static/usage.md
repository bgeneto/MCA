# Add to your notebook

```python
from IPython.display import HTML
from urllib.request import urlopen
html = urlopen("https://raw.githubusercontent.com/bgeneto/MCA/main/notebooks/_static/scripts.js")
HTML(html.read().decode('utf-8'))
```
