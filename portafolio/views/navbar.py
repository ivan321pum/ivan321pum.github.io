import reflex as rx
from portafolio.styles.styles import Size
from portafolio.styles.colors import Color, TextColor


def navbar() -> rx.component:
    return rx.hstack(
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
        ),
        rx.spacer(),
        rx.hstack(
            rx.button_group(
                rx.button(
                    "Option 1",
                    color=TextColor.titles.value
                ),
                rx.button(
                    "Option 2",
                    color=TextColor.titles.value
                ),
                rx.button(
                    "Option 3",
                    color=TextColor.titles.value
                ),
            )
        ),
    position="sticky",
    bg=Color.primary.value,
    border_bottom=f"0.25em solid {Color.ACCENT.value}",
    padding_x=Size.BIG.value,
    padding_y=Size.BIG.value,
    z_index="999",
    top="0",
    width="100",
    )
