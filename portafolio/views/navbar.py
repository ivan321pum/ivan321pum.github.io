import reflex as rx
from portafolio.styles.styles import Size
from portafolio.styles.colors import Color, TextColor


def navbar() -> rx.component:
    return rx.hstack(
        rx.hstack(
            rx.vstack(
                rx.text(
                    "Iván Sevilla Gómez",
                    as_="b",
                    font_size=Size.VERY_BIG.value,
                    color=TextColor.titles.value
                ),
                rx.text("Software Developer Student",
                        as_="b",
                        font_size=Size.BIG.value,
                        color=TextColor.titles.value
                        ),
                width="100%"
            ),
            rx.spacer()
        ),
        position="sticky",
        bg=Color.primary.value
    )
