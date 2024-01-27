import reflex as rx
from portafolio.styles.colors import TextColor
from portafolio.styles.styles import Size


def navbar_link_button(text: str, url: str, external: bool):
    return rx.link(
        rx.button(text, color=TextColor.titles.value),
        href=url,
        button=True,
        is_external=external,
    )


def icon_button(img: str, url: str, external: bool):
    return rx.link(
        rx.button(
            rx.image(
                src=img,
                width=Size.BIG.value,
                height=Size.BIG.value,
            )
        ),
        href=url,
        button=True,
        is_external=external,
    )
