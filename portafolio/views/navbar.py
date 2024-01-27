import reflex as rx

import constants
from portafolio.styles.styles import Size
from portafolio.styles.colors import Color, TextColor
from portafolio.components.link_button import navbar_link_button, icon_button

def navbar() -> rx.component:
    return rx.hstack(
        rx.vstack(
            rx.text(
                "Iván Sevilla Gómez",
                as_="b",
                font_size=Size.VERY_BIG.value,
                color=TextColor.title.value
            ),
            rx.text("Software Developer Student",
                    as_="b",
                    font_size=Size.BIG.value,
                    color=TextColor.titles.value
                    ),
        ),
        rx.spacer(),
        rx.hstack(
            rx.vstack(
                rx.button_group(
                    navbar_link_button("About Me", "", False),
                    navbar_link_button("My Skills", "", False),
                    navbar_link_button("Projects", "", False),
                    navbar_link_button("Contact me", "", False),
                ),
                rx.button_group(  # Social links
                    icon_button("/github.svg", constants.GITHUB_WEBSITE, True),
                    navbar_link_button("Fiverr", constants.FIVERR_WEBSITE, True),
                )
            ),
        ),
    position="sticky",
    bg=Color.primary.value,
    border_bottom=f"0.5em solid {Color.black.value}",
    padding_x=Size.BIG.value,
    padding_y=Size.BIG.value,
    z_index="999",
    top="0",
    width="100",
    )
