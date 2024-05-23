import tkinter as tk
from tkinter import filedialog

root = tk.Tk()
root.title("XML Inline Editor")

text = tk.Text(root, wrap="word", undo=True)
text.pack(expand="yes", fill="both")