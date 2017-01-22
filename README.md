# Responsive Table 
### This is a simple solution to make tables responsive

### The magic happens when we show the custom attribute content next to each td instead of the respoective th (we hid them on small screens). There is also included a script to replace the number with the actual content of the th if you don't feel like typing but this is optional, you can just add the custon property content and don't use the script.  

## The magic comes from this:
```sh
	td::before{
	    content: attr(data-head) ": ";
	}

```

### Example page provided as well, check out the file index.html!