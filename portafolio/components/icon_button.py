import reflex as rx


def open_web(url: str):
    rx.redirect(url, external=True,)
